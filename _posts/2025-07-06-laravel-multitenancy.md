---
layout: post
title:  "Criando um projeto Laravel 11 com suporte a Multitenancy"
author: mamura
categories: [cookbooks]
tags: [recipe, laravel, multitenancy, sanctum, spatie]
image: 'assets/images/nginx-https.jpg'
description: 'Montando um Homeserver'
featured: true
hidden: true
date:   2025-07-06 00:06:31
rating: 5
---

# Visão Geral
Nesse tutorial, vamos construir um sistema multitenancy baseado em subdomínios usando Laravel 12. A ideia é que cada tenant (cliente) tenha seu próprio espaço de dados, identificados por subdomínios como `empresa1.seudominio.test`, `empresa2.seudominio.test`, etc.

Existe algumas abordagens de Multitenancy quando nos referimos a salvar os dados de cada tenant:
- **Database por tenant**: Cada tenant tem seu próprio banco de dados. Isolamento forte.
- **Schema por tenant**: Compartilha o banco, mas cada tenant tem seu próprio schema.
- **Row-based**: Uma única tabela para todos os tenants, usando `tenant_id` como chave.

No nosso caso, escolhi utilizar a abordagem de **Database por tenant**. Isso nos traz mais robustez no isolamento de dados e 

# Requisitos
- PHP 8.2+
- Laravel 11.x
- Mysql/PostgreSQL
- Ambiente com suporte a subdomínios locais (ex.: Traefik, Laravel Valet, ou edite seu arquivo `/etc/hosts`)

## Passo 1 Criar o projeto Laravel
Estou usando o Laravel 11 (na data deste tutorial já estávamos na versão 12) para compatibilidade com os outros pacotes.
```bash
composer create-project laravel/laravel:^11.0 multi
```

## Passo 2: Instalando os pacotes adicionais
Pacotes para multitenancy e autenticação
```bash
composer require spatie/laravel-multitenancy
composer require laravel/sanctum
```

## Passo 3: Configurando o multitenancy
Primeiro, vamos publicar o pacote da Spatie que fornece os recursos para implementarmos o multitenancy:
```bash
php artisan vendor:publish --provider="Spatie\Multitenancy\MultitenancyServiceProvider"
```

Depois, vamos criar um Model para armazenar em uma tabela os dados de cada Tenant. Esse model serve para gerenciarmos quais tenants exitem. Por hora, vamos usá-lo para salvar dados básicos do tenant e controlar o ciclo de vida de cada tenant.
```bash
php artisan make:model Models/Tenant
```

Esse comando criar um Model e uma Migrations atrelada a ele. No model `Tenant`, vamos estender a classe do pacote Spatie:
```php
<?php

namespace App\Models;

use Spatie\Multitenancy\Models\Tenant as BaseTenant;

class Tenant extends BaseTenant
{
    protected $fillable = ['name', 'slug', 'database'];
}
```

Na migration, que é gerada pelo pacote Spatie em `database/migrations/landlord/`:
```php
Schema::create('tenants', function (Blueprint $table) {
	$table->id();
	$table->string('name');
	$table->string('slug')->unique();
	$table->string('database')->unique();
	$table->timestamps();
});
```

## Passo 4: Configurar o identificador do Tenant (TenantFinder)
O `TenantFinder` é a classe responsável por detectar automaticamente o tenant atual com base na requisição (Request).  É ele quem diz ao Laraval (via Spatie) qual banco deve ser usado nesse request.

Vamos criar o arquivo TenantFinder dentro da pasta `app`:
```php
<?php

namespace App;

use App\Models\Tenant;
use Illuminate\Http\Request;
use Spatie\Multitenancy\Models\Tenant as BaseTenant;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;

class TenantFinder
{
    public function findForRequest(Request $request): ?BaseTenant
    {
        if ($slug = $request->query('tenant')) {
            return $this->resolveTenant($slug);
        }

        $host = preg_replace('/^www\./', '', $request->getHost());
        if (!str_contains($host, '.')) {
            return null;
        }

        $subdomain = explode('.', $host)[0];
        return $this->resolveTenant($subdomain);
    }

    protected function resolveTenant(string $slug): ?BaseTenant
    {
        $tenant = Tenant::where('slug', $slug)->first();
        if (!$tenant) {
            throw new NotFoundHttpException("Tenant '{$slug}' não encontrado.");
        }

        $tenant->makeCurrent();

        return $tenant;
    }
}
```

Agora, precisamos adicionar esse arquivo na configuração do multitenancy, para avisar ao Spatie que essa classe vai determinar qual tenant está sendo requisitado.

Dentro do arquivo `app\config\multitenancy.php` altere a configuração do 'tenant_finder':
```php
'tenant_finder' => App\TenantFinder::class,
```

Outras configurações que devemos adicionar nesse arquivo são:
-  Descomentar a classe SwitchTenantDatabaseTask:
```php
'switch_tenant_tasks' => [
        // \Spatie\Multitenancy\Tasks\PrefixCacheTask::class,
         \Spatie\Multitenancy\Tasks\SwitchTenantDatabaseTask::class,
        // \Spatie\Multitenancy\Tasks\SwitchRouteCacheTask::class,
    ],
```
Essa linha altera a conexão de banco de dados ativa (`DB::connection()`), trocando dinamicamente o `database` da conexão `tenant` com base no tenant atual. Sem ela todas as queries continuarão usando o banco do landlord, mesmo que um tenant esteja ativo.

Você pode descomentar também a linha de cima `PrefixCacheTask::class`. Ela adiciona um prefixo específico do tenant nas chaves do cache (`Cache::put`, `Cache::get` etc.). Idel se você compartilha Redis ou outro sistema de cache entre tenants.

- Adicionar as conexões de tenants e landlords. Procure essas chaves e altere para esse valores:
```php
'tenant_database_connection_name' => 'tenant',
'landlord_database_connection_name' => env('DB_CONNECTION', 'landlord'),
```
## Passo 5: Criar conexão com o banco dos tenants
No `config\database.php` adicione:
```php
'tenant' => [
	'driver'    => 'mysql',
	'host'      => env('DB_HOST', 'mysql'),
	'port'      => env('DB_PORT', '3306'),
	'database'  => '', // será preenchido automaticamente
	'username'  => env('DB_USERNAME', 'root'),
	'password'  => env('DB_PASSWORD', ''),
	'charset'   => 'utf8mb4',
	'collation' => 'utf8mb4_unicode_ci',
	'prefix'    => '',
	'strict'    => true,
	'engine'    => null,
],
```

E no model que desejar isolar por tenant (como `User`), use:
```php
protected $connection = 'tenant';
```

## Passo 6: Criar comando para registar um novo tenant
Use esse comando para criar um novo `Console\Command`:
```bash
php artisan make:command CreateTenant
```

E nesse arquivo:
```php
<?php
namespace App\Console\Commands;

use App\Models\Tenant;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CreateTenant extends Command
{
    protected $signature    = 'tenant:create {name} {--slug=}';
    protected $description  = 'Cria um novo tenant com o banco de dados e roda as migrations';

    public function handle()
    {
        $name = $this->argument('name');
        $slug = $this->option('slug') ?? Str::slug($name);
        $database = 'tenant_' . $slug;

        // Cria o banco de dados (precisa de permissões via root)
        DB::statement("CREATE DATABASE `$database`");

        // Cria o registro do tenant
        $tenant = Tenant::create([
            'name'     => $name,
            'slug'     => $slug,
            'database' => $database,
        ]);

        // Define dinamicamente o banco na conexão tenant
        config()->set('database.connections.tenant.database', $database);

        // Marca esse tenant como atual
        $tenant->makeCurrent();

        // Roda as migrations no banco do tenant
        Artisan::call('migrate', [
            '--database'    => 'tenant',
            '--force'       => true
        ]);

        $this->info("Tenant '{$tenant->slug}' criado com sucesso com banco '$database'.");
    }
}
```

Se tiver tudo certo, ao criar um tenant com:
```bash
php artisan tenant:create
```
…a aplicação criará o banco, associará o slug e rodará as migrations nesse banco específico.

## Passo 7: Instalando e configurando Sanctum
No inicio desse tutorial nós já instalamos o pacote do Sanctum, agora o que precisamos fazer é publicar o Service Provider dele:
```bash
php artisan vendor:publish --provider="Laravel\Sanctum\SanctumServiceProvider"
```

Isso criará o arquivo de configuração `config/sanctum.php` e a migration para a tabela `personal_access_tokens`. Depois, devemos rodar a migration criada por ele:
```bash
php artisan tenants:artisan migrate
```

Esse comando roda as migrations em todos os bancos de tenants criados anteriormente.

Outro ajuste a ser feito é adicionar a trait `HasApiTokens` no model `Users` e adicionar a conexão para tenant, para mudarmos o banco automaticamente, dependendo do tenant requisitado:
```php
use Laravel\Sanctum\HasApiTokens;

protected $connection = 'tenant';

class User extends Authenticatable
{
    use HasApiTokens, ...;
}
```

E no `config\auth.php` adicionar o guard `api` configurando para usar o driver sanctum:
```php
'guards' => [
    'web' => [
        'driver' => 'session',
        'provider' => 'users',
    ],

    'api' => [
        'driver' => 'sanctum',
        'provider' => 'users',
    ],
],
```

## Passo 8: arquivo AuthController.php
Adicione o arquivo `app\Http\Controllers\AuthController` com esse conteúdo:
```php
<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'name'      => 'required|string|max:255',
            'email'     => 'required|email|unique:tenant.users,email',
            'password'  => 'required|string|min:8|confirmed',
        ]);

        $user = User::create([
            'name'      => $request->name,
            'email'     => $request->email,
            'password'  => Hash::make($request->password),
        ]);

        $token = $user->createToken('api-token')->plainTextToken;

        return response()->json([
            'user'  => $user,
            'token' => $token,
        ]);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email'     => 'required|email',
            'password'  => 'required|string'
        ]);

        $user = User::where('email', $request->email)->first();
  
        if ( !$user || !Hash::check($request->password, $user->password) ) {
            return response()->json(['message' => 'Credenciais inválidas'], 401);
        }

        $token  = $user->createToken('api-token')->plainTextToken;

        return response()->json([
            'user'  => $user,
            'token' => $token,
        ]);
    }


    public function user(Request $request)
    {
        $token      = $request->bearerToken();
        $user       = auth('sanctum')->user();
        $database   = DB::connection()->getDatabaseName();

		return response()->json([
            'user'      => $user,
            'database'  => $database,
        ]);

        return response()->json($request->user());
    }

    public function logout(Request $request)
    {
        $user = $request->user();
        $user->tokens()->delete();

        return response()->json(['message' => "Logout efetuado com sucesso"]);
    }
}
```

## Passo 9: Personal Access Token customizada
Mesmo o `User` apontando para a conexão `tenant`, o Sanctum por padrão busca os tokens com a conexão padrão. A correção é sobrescrever a model `PersonalAccessToken` para força-la a usar a conexão do tenant.

Cria uma model customizada em `app\Models\Sanctum\PersonalAccessToken.php`:
```php
<?php

namespace App\Models\Sanctum;

use Laravel\Sanctum\PersonalAccessToken as SanctumPersonalAccessToken;

class PersonalAccessToken extends SanctumPersonalAccessToken
{
    protected $connection = 'tenant';
}
```

E registre ele no boot do service provider. Adicione isso no arquivo `app\Providers\AppServiceProvider.php`:
```php
public function boot(): void
{
    Sanctum::usePersonalAccessTokenModel(PersonalAccessToken::class);
}
```

## Passo 10: Rotas
Crie o arquivo `routes\api.php` com esse conteúdo:
```php
<?php

use Illuminate\Support\Facades\Route;
use Spatie\Multitenancy\Http\Middleware\NeedsTenant;

Route::prefix('auth')
    ->group(function() {
        Route::middleware(['api', NeedsTenant::class])->group(function() {
            Route::post('/register', [AuthController::class, 'register']);
            Route::post('/login', [AuthController::class, 'login']);
        });

        Route::middleware(['api', NeedsTenant::class, 'auth:sanctum'])->group(function () {
            Route::get('/user', [AuthController::class, 'user']);
            Route::post('/logout', [AuthController::class, 'logout']);
        });
    });
```

E no arquivo `bootstrap\app.php` adicione esse arquivo na configuração de rotas:
```php
return Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        api: __DIR__.'/../routes/api.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withMiddleware(function (Middleware $middleware) {
        //
    })
    ->withExceptions(function (Exceptions $exceptions) {
        //
    })->create();
```

Com isso temos um Laravel com multitenancy e Sanctum configurados e integrados com as rotas de login, logout, create e list de usuários.