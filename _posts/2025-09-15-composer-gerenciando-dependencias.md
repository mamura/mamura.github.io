---
layout: post
title:  "Composer - Gerenciando dependências"
author: mamura
categories: [artigos]
tags: [artigo, php, cookbook, composer]
image: 'assets/images/composer.png'
description: 'Composer - Gerenciando dependências'
date:   2025-09-16 06:08:31
featured: true
hidden: true
rating: 5
---
Como escolher versões, instalar, atualizar, remover pacotes e manter seu projeto saudável com comandos, fluxos e dicas de troubleshooting.

> **Para quem é?** Devs **PHP** que já usam Composer no dia a dia e querem dominar versionamento, atualização segura e diagnóstico de conflitos (com exemplos “mão na massa”).

# Por que isso importa
Um `composer.json` bem definido e um `composer.lock` versionado são a base de ambiente reprodutíveis. Saber gerenciar dependências evita que um simples `update` quebre a aplicação ou que você fique preso a versões antigas. Além disso, entender faixas de versão (SemVer) e o solver do Composer ajuda a prever impactos com confiança.

# Anatomia rápida
- **`composer.json`**: declara dependências, autoload, scripts, configs.
- **`composer.lock`** : trava versões exatas instaladas.
- **`vendor/`**: onde os pacotes vivem (não versionar; adicione ao `.gitignore`).
```json
{
	"require": {
		"laravel/framework": "^11.0",
		"guzzlehttp/guzzle": "^7.8"
	},
	"require-dev": {
		"pestphp/pest": "^3.0"
	},
	"config": {
		"sort-packages": true
	}
}
```
> **Dica:** `"config.sort-packages": true` mantém o `composer.json` organizado automaticamente.

# Adicionando pacotes
- **Produção:**
```bash
composer require vendor/pacote:^1.2
```

- **Apenas para desenvolvimento (testes, tooling):**
```bash
composer require --dev pestphp/pest:^3.0
```

> **Boas Práticas**
> 	- Sempre especifique *faixas de versão* (ex.: ^1.2) em vez de uma versão fixa.
> 	- Commits atômicos: "require X", depois "ajuste código para X".

## Entendendo faixas de versão (SemVer)

{:.table .table-striped}| **Sintaxe** | **Permite...** | **Exemplo de intervalo** |
| ----------- | --------------------------------- | ------------------------ |
| `^1.2` | minor/patch (mantém major) | `>=1.2.0 <2.0.0` |
| `~1.2` | patch dentro do minor | `>=1.2.0 <1.3.0` |
| `>=1.2` | qualquer versão a partir de `1.2` | `>=1.2.0` |
| `1.2.*` | qualquer patch da `1.2` | `>=1.2.0 <1.3.0` |
| `1.2.3` | versão exata (evite em libs) | `==1.2.3` |

## Estabilidade
- Sufixos: `@RC`, `@beta`, `@alpha`, `@dev` (quanto mais à direita, menos estável).
- Projeto inteiro:
```json
{
	"minimum-stability": "stable",
	"prefer-stable": true
}
```
- Para um pacote específico, dá para flexibilizar:
- `"acme/lib-experimental": "^1.0@beta`

## Instalando vs. atualizando
- `composer install` usa o **lock** e instala exatamente as versões travadas. É o que você deve usar em produção e em CI.
- `composer update` recalcula versões dentro das faixas do `composer.json` e escreve no **lock**.
	- Atualiza tudo: `composer update`
	- Atualiza um pacote: `compsoer update vendor/pacote`
	- Permitir atualizar dependências transientes: `composer update vendor/pacote --with-all-dependencies`

Atalhos úteis:
```bash
# Atualiza tudo (cautela!)
composer update

# Atualiza só um pacote (mais seguro)
composer update vendor/pacote

# Permite atualizar dependências transientes relacionadas
composer update vendor/pacote --with-all-dependencies # (-W)
```
> **Estratégia segura:** atualize um pacote por vez, rode testes e valide changelog.


## Checando o que pode atualizar
```bash
composer outdated           # vê pacotes desatualizados
composer outdated --direct  # apenas dependências diretas
composer show -l            # morstra versão atual e última disponível
```

## Testando limites (integração)
```bash
composer update --prefer-lowest --prefer-stable
```
> Excelente em CI para capturar dependências implícitas e faixas permissivas demais.

## Removendo pacotes
```bash
composer remove vendor/pacote
```
> O Composer limpa `require`/`require-dev`, atualiza o `lock` e remove da `vendor/`.

## Investigando conflitos
```bash
composer why vendor/pacote           # quem exige
composer why-not vendor/pacote ^3.0  # por que não dá pra ir para ^3
```
**Dicas de resolução:**
- Simplifique faixas do seu `composer.json` (evite *pins* desnecessários)
- Atualize o pacote e relacionados com `--with-all-dependecies`.
- Verifique requisitos de extensões/PHP:
```bash
composer check-platform-reqs
```
- Rode diagnósticos:
```bash
composer validate
composer diagnose
```

## Auditoria de segurança
```bash
composer audit
```
- Verifica vulnerabilidades conhecidas; combine com `composer outdated` para montar um plano de atualização.
- Em apps sensíveis, considere políticas de atualização (SLA interno): ex.: "corrigir *high/critical* em até 48h".

## Repositórios privados e autenticação
```bash
# Registrando token global (ex.: evitar rate limit)
composer config -g github-oauth.github.com <SEU_TOKEN>

#exemplo de repo privado
{
	"repositories": [
		{"type": "vcs", "url": "https://github.com/sua-org/sua-lib-privada"}
	],
	"require": {
		"sua-org/sua-lib-privada": "^1.0"
	}
}
```
> **Segurança:** tokens vivem em `auth.json` (usuário/CI), não no `composer.json`. Em CI, prefira variáveis de ambiente e `--no-interaction`.

### Autoload e performance
**PSR-4**
```json
"autoload": {
	"psr-4": { "App\\": "src/" }
},
"autoload-dev": {
	"psr-4": { "Tests\\": "tests/" }
}
```

Após alterar autoload:
```bash
composer dump-autoload
```

Otimizações para produção:
```bash
composer install --no-dev --prefer-dist --optimize-autoloader
# Extras:
# --classmap-authoritative (quando sua árvore é estável)
# --apcu-autoloader (se APCu estiver habilitado)
```

### `config` útil no `composer.json`
```json
"config": {
	"sort-packages": true,
	"preferred-install": "dist",
	"platform": { "php": "8.3.0" }, // trava a "plataforma" alvo do solver
	"allow-plugins": {
		"dealerdirect/phpcodesniffer-composer-installer": true,
		"php-http/discovery": true
	}
}
```
> é excelente para CI, garantindo que o solver não selecione pacotes incompatíveis com a versão de produção.

### Campos avançados
- `conflict`: impede combinações perigosas
```json
"conflict": { "foo/bar": "<2.0" }
```
- `provide`: declara que seu pacote fornece uma interface virtual (útil em libs).
- `replace`: diz que seu pacote substitui outro (monorepos, *forks* internos).
Use com parcimônia e testes.
## Fluxos recomendados
#### Desenvolvimento
```bash
composer install
composer require vendor/pacote
composer update vendor/pacote --with-all-dependencies
```

#### CI/Produção
```bash
composer install --no-dev --prefer-dist --optimize-autoloader
```

#### Quando abrir PR de atualização
- Rode testes, `composer audit`, `composer outdated`.
- Liste majors/minors com link do changelog.
- Explique riscos e plano de rollback

### Troubleshooting rápido
- **Memória:** `COMPOSER_MEMORY_LIMIT=-1 composer update`
- **Proxy:** exporte `HTTP_PROXY`/`HTTPS_PROXY`
- **Platform:** ajuste `config.platform.php`
- **Solver:** use `why/why-not`, reduza versões rígidas, atualize transientes