---
layout: post
title:  "Multitenancy no Laravel com Spatie e Sanctum (Database por Tenant)"
author: mamura
categories: [artigos]
tags: [recipe, laravel, multitenancy, sanctum, spatie]
image: 'assets/images/laravel-multitenancy.png'
description: 'Multitenancy no Laravel com Spatie e Sanctum (Database por Tenant)'
featured: false
hidden: false
date:   2026-04-20 13:06:31
rating: 5
---

# Visão Geral
Implementar **multitenancy por banco de dados** é a forma mais segura de isolar dados em aplicações SaaS. Neste guia, você verá uma abordagem prática usando Laravel, Spatie Multitenancy e Sanctum, com foco em **clareza, organização e boas práticas de produção**.

# O que é multitenancy?
Multitenancy é uma arquitetura onde uma única aplicação atende múltiplos clientes (**tenants**), mantendo isolamento entre seus dados.

### Principais abordagens:
- **Row-based** - todos os dados na mesma tabela (coluna `tenant_id`)
- **Schema-based** - schemas separados no mesmo banco
- **Database-based (recomendado)** - **um banco por tenant**
    
\*Este artigo utiliza **database por tenant**, garantindo isolamento total.

# Arquitetura geral
- **Landlord (banco principal)**  
    Armazena tenants, domínios e metadados  
- **Tenant (bancos isolados)**  
    Cada cliente possui seu próprio banco
- **TenantFinder**  
    Resolve o tenant via domínio/subdomínio
- **Tasks**  
    Trocam dinamicamente a conexão ativa
- **Autenticação (Sanctum)**  
    Gerencia autenticação por tenant

## Passo 1 - Instalação e configuração
Instale o pacote:
```bash
composer require spatie/laravel-multitenancy
```

Configure duas conexões no `config/database.php`:
```php
'connections' => [
    'landlord' => [
        // conexão principal
    ],
    'tenant' => [
        // conexão dinâmica
    ],
]
```

## Passo 2 - Separação de migrations
Organize suas migrations:
```
database/migrations/landlord
database/migrations/tenant
```
- **Landlord** → tabela de tenants  
- **Tenant** → tabelas da aplicação
    
Isso evita mistura de contexto e facilita manutenção.

## Passo 3 - Model Tenant

```php
class Tenant extends Model
{
    protected $connection = 'landlord';

    protected $fillable = [
        'id',
        'database',
        'domain',
    ];
}
```

## Passo 4 - Resolver o tenant (TenantFinder)
```php
class DomainTenantFinder extends TenantFinder
{
    public function findForRequest(Request $request): ?Tenant
    {
        return Tenant::where('domain', $request->getHost())->first();
    }
}
```

## Passo 5 - Troca dinâmica de conexão
```php
SwitchTenantDatabaseTask::class
```

Essa task altera automaticamente a conexão `tenant` para o banco correto.

## Passo 6 - Autenticação com Sanctum
- Tokens devem ser isolados por tenant  
- Evite compartilhar sessão entre tenants

```php
use Laravel\Sanctum\PersonalAccessToken as SanctumToken;

class PersonalAccessToken extends SanctumToken
{
    protected $connection = 'tenant';
}
```

## Passo 7 - Criação de tenants
```bash
php artisan tenant:create
```

Fluxo típico:
1. Criar registro no landlord
2. Criar banco do tenant
3. Executar migrations do tenant
    
Isolamento de dados

Com database por tenant:

- Não há compartilhamento de dados
    
- Reduz risco de vazamento
    
- Ideal para aplicações SaaS multiempresa
    

---

## Erros comuns
### Misturar landlord e tenant
- Queries no banco errado
- Models sem `connection` definida
    
### Cache sem isolamento
- Use prefixo por tenant
    
### Jobs sem contexto
- Executam no banco errado
    
---

## Boas práticas
### ✔ Cache por tenant
```php
PrefixCacheTask::class
```

### Jobs tenant-aware
- Sempre propagar o contexto do tenant
    
### Seed por tenant
- Cada banco deve ter seus próprios dados iniciais
    

### Logs com identificação
- Inclua `tenant_id` nos logs
    
---

## Resumo da arquitetura
- Tenant → banco isolado
- Resolver → identifica o tenant
- Tasks → trocam conexão
- Autenticação → isolada por tenant

---

## Conclusão
Multitenancy bem implementado garante:
- Segurança
- Escalabilidade
- Organização arquitetural

Essa abordagem é ideal para sistemas SaaS que exigem isolamento forte de dados.