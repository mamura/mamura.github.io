---
title: "Laravel e Spring Boot são muito diferentes — até você parar de olhar para a sintaxe"
description: "Uma comparação entre Laravel e Spring Boot mostrando como controllers, services, repositories, injeção de dependência, DTOs, persistência e validação resolvem problemas semelhantes de formas diferentes."
publishedAt: 2026-09-18
category: "Engenharia de Software"
tags:
  - Laravel
  - Spring Boot
  - PHP
  - Java
  - Backend
  - Arquitetura de Software
cover: "/images/articles/laravel-springboot.png"
draft: false
featured: true
---

Para quem trabalha com PHP e Laravel, abrir um projeto Spring Boot pela primeira vez pode dar a sensação de estar entrando em outro universo. Temos annotations por todos os lados, interfaces, generics, records, repositories, injeção de dependência, JPA, Hibernate e uma quantidade considerável de conceitos que parecem muito mais explícitos do que estamos acostumados a encontrar em uma aplicação Laravel.

Essa impressão, porém, começa a mudar quando paramos de comparar a sintaxe e passamos a observar as responsabilidades de cada parte da aplicação. No fim das contas, os dois frameworks precisam resolver muitos dos mesmos problemas: receber uma requisição HTTP, validar os dados, executar regras de negócio, acessar o banco, transformar informações e devolver uma resposta. A forma como cada ecossistema organiza essas tarefas é diferente, mas boa parte dos conceitos por trás delas já é conhecida por quem trabalha com aplicações web.

## Controller continua sendo Controller

No Laravel, podemos ter um controller mais ou menos assim:

```php
class UserController extends Controller
{
    public function store(
        StoreUserRequest $request,
        CreateUserService $service
    ) {
        $user = $service->execute($request->validated());

        return response()->json($user, 201);
    }
}
```

Enquanto no Spring Boot poderíamos encontrar algo como:

```java
@RestController
@RequestMapping("/users")
public class UserController {

    private final CreateUserService service;

    public UserController(CreateUserService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<UserResponse> create(
        @Valid @RequestBody CreateUserRequest request
    ) {
        return ResponseEntity
            .status(HttpStatus.CREATED)
            .body(service.execute(request));
    }
}
```

Olhando apenas para a sintaxe, são códigos bastante diferentes. Quando observamos a responsabilidade de cada classe, porém, a distância diminui bastante: nos dois casos temos uma camada responsável por receber uma requisição HTTP, obter os dados necessários, delegar a execução para outra parte da aplicação e construir uma resposta.

Claro que existem diferenças importantes na maneira como Laravel e Spring tratam rotas, serialização, ciclo da requisição e configuração dos controllers. O ponto aqui não é dizer que as duas implementações são equivalentes, mas perceber que o problema arquitetural que estamos tentando resolver é conhecido. Depois disso, aprender `@RestController`, `@RequestMapping` ou `@PostMapping` passa a ser muito mais uma questão de aprender como o Spring expressa esse conceito.

## A camada de Service também é bastante familiar

Laravel não obriga uma aplicação a possuir uma camada de services. Dependendo do projeto, podemos encontrar Services, Actions, Use Cases ou simplesmente classes comuns responsáveis por determinadas regras de negócio. O importante é que, quando decidimos retirar essa responsabilidade do controller, normalmente acabamos criando algum objeto que coordena aquela operação.

No Spring essa separação costuma aparecer de maneira mais explícita. Classes anotadas com `@Service` são extremamente comuns e são gerenciadas pelo container do framework. Ainda existem várias decisões arquiteturais possíveis dentro de uma aplicação Spring, mas a ideia central continua familiar: o controller não deveria concentrar toda a regra de negócio da aplicação.

Por isso, quando encontramos um `UserService` em Spring, o mais importante não é decorar o que a annotation `@Service` faz. Primeiro precisamos entender qual responsabilidade aquela classe possui e como ela participa do fluxo da aplicação. A annotation é uma característica do framework; a separação de responsabilidades é um conceito de engenharia de software.

## Repository é onde a comparação começa a ficar mais interessante

Repository é um bom exemplo de por que não devemos tentar criar uma tabela de tradução perfeita entre Laravel e Spring. Laravel utiliza Eloquent, que segue principalmente o padrão Active Record, então é bastante natural consultar informações diretamente através dos models:

```php
$user = User::query()
    ->where('email', $email)
    ->first();
```

Podemos criar uma camada de repositories em Laravel e existem projetos em que isso faz sentido, mas ela não é uma exigência do framework. Dependendo da aplicação, adicionar `UserRepository` apenas para encapsular chamadas simples ao Eloquent pode inclusive criar uma abstração que não está resolvendo nenhum problema real.

No ecossistema Spring com JPA, a organização costuma ser diferente. Utilizando Spring Data JPA, é comum termos uma interface dedicada ao acesso aos dados:

```java
public interface UserRepository
    extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);
}
```

Nos dois casos estamos lidando com persistência, mas o modelo utilizado para chegar até ela não é o mesmo. Essa diferença é importante porque mostra uma mudança que acontece quando começamos a aprender uma segunda stack com mais profundidade: em vez de procurar “qual é o equivalente do Eloquent no Spring?”, começamos a perguntar “como esse ecossistema modela e resolve o problema de persistência?”. A segunda pergunta normalmente leva a um entendimento muito melhor da tecnologia.

## Dependency Injection talvez seja menos novidade do que parece

A infraestrutura de IoC do Spring pode parecer bastante específica do mundo Java quando temos o primeiro contato com ela, mas quem desenvolve aplicações Laravel já utiliza um container de dependências constantemente. Quando uma classe declara uma dependência no construtor e deixamos o framework resolver qual objeto deve ser fornecido, já estamos trabalhando com inversão de controle e injeção de dependências.

No Laravel, o Service Container é responsável por boa parte desse processo e podemos registrar bindings através dos Service Providers quando precisamos controlar como uma interface ou classe deve ser resolvida. No Spring, encontramos o IoC Container, component scanning, beans e annotations como `@Component`, `@Service` e `@Repository`. Existem diferenças significativas na infraestrutura dos dois frameworks, mas o raciocínio fundamental continua parecido: nossas classes declaram aquilo de que dependem e o container assume a responsabilidade de construir e fornecer essas dependências.

Isso também explica por que constructor injection parece tão natural nos dois ambientes. A implementação muda, a configuração muda e o ciclo de vida dos objetos pode mudar, mas o princípio de evitar que uma classe conheça diretamente a construção de suas dependências continua sendo o mesmo.

## DTO não é um conceito exclusivo do Java

Outro elemento muito presente em aplicações Spring são os DTOs. É comum encontrar classes ou `record`s específicos para representar os dados que entram e saem da aplicação:

```java
public record CreateUserRequest(
    String name,
    String email
) {}
```

No PHP temos uma flexibilidade muito maior para trabalhar diretamente com arrays, e o próprio Laravel torna isso bastante conveniente. Por esse motivo, é perfeitamente possível passar muito tempo trabalhando com Laravel sem criar DTOs explicitamente. Isso não significa, porém, que o problema resolvido por eles não exista no PHP.

Form Requests, API Resources e classes específicas de DTO podem assumir partes desse papel dependendo da arquitetura escolhida. O objetivo é evitar que qualquer estrutura de dados circule indiscriminadamente pela aplicação e, principalmente, impedir que a representação utilizada pela API precise ser exatamente a mesma utilizada pela camada de persistência.

Spring, especialmente por trabalhar dentro de um ecossistema fortemente tipado, torna esses contratos muito mais visíveis. Para quem vem do PHP, isso pode parecer burocrático no começo, mas também ajuda a perceber com mais clareza onde começam e terminam determinadas responsabilidades.

## Eloquent e Hibernate não são simplesmente a mesma coisa com nomes diferentes

Quando chegamos à persistência, a comparação exige ainda mais cuidado. Laravel oferece Eloquent com uma API bastante expressiva baseada principalmente em Active Record, enquanto aplicações Spring frequentemente utilizam JPA com Hibernate como implementação. Ambos ajudam a mapear o mundo orientado a objetos para bancos relacionais, mas fazem isso a partir de modelos e abstrações diferentes.

No Eloquent, estamos acostumados a escrever coisas como `User::find()`, `User::query()` ou `$user->save()`. O próprio model participa ativamente das operações de persistência. Com JPA/Hibernate, encontramos entidades gerenciadas por um contexto de persistência e normalmente acessadas através de repositories, além de conceitos como estados das entidades, persistence context, lazy loading e dirty checking que precisam ser entendidos dentro da maneira como JPA funciona.

Por isso, resumir essa comparação como “Eloquent no PHP é Hibernate no Java” ajuda pouco. Uma comparação mais útil seria dizer que os dois fazem parte da solução para persistência relacional dentro de seus respectivos ecossistemas e, a partir daí, estudar como cada um aborda o problema.

## Validation muda bastante na sintaxe, mas pouco na intenção

Laravel possui uma experiência muito direta para validação, principalmente através de Form Requests:

```php
public function rules(): array
{
    return [
        'name' => ['required', 'string'],
        'email' => ['required', 'email'],
    ];
}
```

Em uma aplicação Spring Boot utilizando Jakarta Bean Validation, podemos encontrar algo parecido conceitualmente, mas bastante diferente visualmente:

```java
public record CreateUserRequest(

    @NotBlank
    String name,

    @NotBlank
    @Email
    String email

) {}
```

Em um caso temos regras declaradas através de arrays; no outro, annotations aplicadas aos campos de um objeto. Ainda assim, estamos tentando garantir que determinados dados satisfaçam um conjunto de restrições antes de avançarem pelo fluxo da aplicação.

É claro que os mecanismos de validação possuem diferenças e recursos próprios, mas esse é justamente o padrão que começa a surgir quando comparamos as duas stacks: a implementação muda muito mais do que o problema que precisamos resolver.

## Quando mudamos o mapa mental, a distância diminui

Se colocarmos as principais responsabilidades lado a lado, fica mais fácil perceber essa relação:

|Responsabilidade|Laravel|Spring Boot|
|---|---|---|
|Entrada HTTP|Routes + Controllers|`@RestController`|
|Regra de negócio|Services / Actions|`@Service`|
|Persistência|Eloquent / Repository opcional|Spring Data Repository|
|Injeção de dependência|Service Container|IoC Container|
|Transferência de dados|DTOs / Form Requests / Resources|Classes / Records / DTOs|
|ORM|Eloquent|JPA + Hibernate|
|Validação|Validator / Form Request|Jakarta Bean Validation|

Essa tabela não deve ser interpretada como uma lista de equivalências. Laravel e Spring Boot possuem filosofias diferentes, foram construídos sobre linguagens diferentes e fazem escolhas diferentes sobre o quanto o framework deve abstrair ou tornar explícito para o desenvolvedor. Ela serve apenas como um mapa inicial para reconhecer responsabilidades que já conhecemos enquanto aprendemos como outro ecossistema as implementa.

Essa mudança de perspectiva faz bastante diferença ao estudar uma nova stack. Se nosso conhecimento estiver concentrado em lembrar que uma consulta é feita com `User::query()` ou que uma rota é declarada com `Route::post()`, trocar de tecnologia realmente parece começar tudo novamente. Quando pensamos em controllers, casos de uso, contratos, dependências, persistência, validação e separação de responsabilidades, percebemos que boa parte do conhecimento continua conosco.

Isso também não significa que devemos escrever Java como escreveríamos PHP ou tentar reproduzir uma arquitetura Laravel dentro do Spring Boot. Pelo contrário: depois de reconhecer os conceitos familiares, o próximo passo é entender as convenções e decisões próprias daquele ecossistema. O conhecimento anterior serve como ponto de partida, não como uma arquitetura que precisa ser reproduzida.

No fim, acho que essa é uma das partes mais interessantes de aprender uma segunda stack com profundidade. Aos poucos, deixamos de aprender frameworks como conjuntos de comandos e começamos a enxergá-los como diferentes maneiras de resolver problemas de engenharia de software que já encontramos antes.

Quando isso acontece, trocar de tecnologia deixa de parecer começar do zero. O problema continua familiar; o que precisamos aprender é um novo vocabulário para resolvê-lo.

Para quem já fez esse caminho entre PHP/Laravel e Java/Spring Boot, qual foi o conceito que mais demorou para deixar de parecer completamente diferente?