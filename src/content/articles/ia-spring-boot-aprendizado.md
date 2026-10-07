---
title: "Por que pedi para a IA escrever menos código enquanto me aprofundo em Spring Boot"
description: "Como estou usando IA para aprofundar meu conhecimento em Spring Boot sem transformar aprendizado em simples aprovação de código gerado."
publishedAt: 2026-09-16
category: "Inteligência Artificial"
tags:
  - IA
  - Spring Boot
  - Java
  - Aprendizado
  - Desenvolvimento Assistido por IA
  - Sterilflow
cover: "/images/articles/ia-springboot.jpg"
draft: false
featured: true
---

Tenho trabalhado com desenvolvimento backend há bastante tempo e, naturalmente, existem tecnologias em que muitas decisões já fazem parte do meu repertório. Com PHP e Laravel, por exemplo, consigo olhar para um problema e rapidamente imaginar algumas formas de resolvê-lo, reconhecer soluções que provavelmente vão criar problemas depois e saber onde procurar quando alguma coisa não funciona como deveria.

Com Java e Spring Boot, quero chegar nesse mesmo nível de intimidade. Conheço Java, conheço boa parte dos conceitos de engenharia envolvidos e muita coisa obviamente é transferível entre stacks. Uma API continua sendo uma API, uma transação continua sendo uma transação e acoplamento não deixa de ser acoplamento só porque agora tem uma annotation em cima da classe. O que estou buscando é justamente a parte que não se transfere automaticamente: entender melhor o ecossistema, suas convenções, as decisões idiomáticas e, principalmente, o porquê delas.

Foi com esse objetivo que comecei o **SterilFlow**, um projeto que estou desenvolvendo em Spring Boot a partir de um problema real relacionado ao processo de esterilização de materiais em uma clínica-escola de odontologia. E aí apareceu uma situação meio contraditória: estou fazendo um projeto para aprofundar meu conhecimento em uma stack enquanto tenho ao meu lado uma IA perfeitamente capaz de escrever boa parte dele por mim.

Convenhamos que é uma maneira bastante eficiente de terminar um projeto e uma maneira meio duvidosa de aprender alguma coisa.

Antes mesmo de começar a implementação, decidi que o SterilFlow não seria apenas mais um CRUD criado para testar framework. Nada contra `Produto`, `Cliente` e `Pedido`, eles já ensinaram programação para gerações inteiras e merecem nosso respeito, mas eu queria lidar com decisões um pouco mais próximas das que encontramos em aplicações reais.

Por isso o projeto começou antes do código. Primeiro fui entender como o processo funciona, levantar requisitos, registrar dúvidas, documentar algumas suposições e identificar os conceitos do domínio. Profissional, Material, Reserva, Equipamento, Agenda, Slot e Processo de Esterilização começaram a surgir antes de qualquer `@Entity`.

Essa ordem é importante porque uma coisa que a experiência já me ensinou é que framework nenhum salva um problema que você não entendeu. Dá para construir uma arquitetura maravilhosa, aplicar meia dúzia de patterns, separar tudo em vinte pacotes e ainda assim implementar com enorme competência exatamente a coisa errada.

Quando finalmente comecei a entrar na implementação, percebi que precisava tomar alguns cuidados com a IA. Eu poderia simplesmente entregar toda a documentação e pedir: “implemente isso usando Spring Boot, PostgreSQL, JPA e DDD”. Alguns minutos depois provavelmente teria entidades, repositories, services, controllers, DTOs, testes e, se demonstrasse um pouco de fraqueza, talvez até um Kubernetes que ninguém pediu.

O problema é que eu conseguiria ler boa parte desse código e pensar: “sim, faz sentido”. Só que reconhecer uma solução pronta não é a mesma coisa que conhecer as decisões que levaram até ela. E é justamente essa distância que estou tentando diminuir.

Então fiz uma coisa um pouco contraditória para quem está usando uma ferramenta criada para acelerar desenvolvimento: **pedi para a IA escrever menos código.**

Criei algumas regras para nossas interações durante o projeto. Quando aparece um conceito que ainda estou aprofundando, primeiro quero entender o problema que ele resolve, quais alternativas existem e por que determinada abordagem combina melhor com aquele contexto. Depois seguimos em etapas pequenas. Em vários momentos eu mesmo escrevo a implementação e só então peço uma revisão. Se existe um problema, quero saber o que está errado e por quê, não simplesmente receber outro arquivo para colocar no lugar.

Isso vale especialmente para erros. Hoje é muito fácil jogar uma stack trace inteira no chat, escrever “corrige” e receber uma solução segundos depois. Só que, nesse projeto, tenho tentado trocar o “corrige” por **“me ajude a investigar”**. O que essa exception está dizendo? Quais hipóteses fazem sentido? O que eu deveria verificar primeiro? Como consigo confirmar ou descartar cada possibilidade?

Claro que existe um limite. Se depois de um tempo eu continuar olhando para o erro como quem olha para o painel de uma máquina de lavar industrial, tudo bem pedir a resposta. A ideia é aprender Java, não desenvolver algum tipo estranho de sofrimento artesanal.

Também estabeleci uma regra que acabou sendo mais útil do que imaginava: a IA não deve avançar para a próxima etapa sem eu pedir. Essas ferramentas têm uma espécie de síndrome do estagiário empolgado. Você pergunta onde uma classe deveria ficar e, quando percebe, ela já definiu a arquitetura, criou seis arquivos, adicionou autenticação e está sugerindo como podemos escalar horizontalmente uma aplicação que ainda nem iniciou.

Outra regra importante é não permitir que decisões de produto sejam tomadas silenciosamente durante a implementação. Se encontramos uma situação que não está definida no domínio, isso vira uma dúvida ou uma suposição explícita. A IA pode sugerir alternativas e questionar o que já decidimos, mas não quero descobrir três semanas depois que uma regra de negócio nasceu porque o modelo achou que “normalmente sistemas desse tipo funcionam assim”.

Depois de algum tempo trabalhando dessa forma, percebi que a questão não era exatamente limitar a IA. O que eu estava fazendo era **regular o nível de delegação de acordo com meu domínio sobre aquele assunto**.

Quando estou trabalhando com algo que conheço bem e a tarefa é essencialmente mecânica, delego bastante. Não tenho nenhuma necessidade de provar para mim mesmo que ainda consigo escrever boilerplate. A IA pode gerar estruturas repetitivas, ajudar com documentação, sugerir testes, fazer transformações e acelerar uma série de tarefas. Minha experiência naquele contexto me permite revisar o resultado, identificar decisões estranhas e assumir a responsabilidade pelo que será incorporado.

Quando estou aprofundando um conceito do Spring, faço o contrário. Reduzo a delegação porque naquele momento o caminho importa tanto quanto o resultado. Se encontro uma annotation que ainda não conheço bem, não quero apenas saber qual colocar ali. Quero entender quem interpreta aquilo, em qual momento ela entra no ciclo da aplicação, se pertence ao Spring, ao JPA ou ao próprio Java, qual comportamento está escondendo e o que aconteceria sem ela.

Isso leva mais tempo, obviamente. É até engraçado pensar que temos ferramentas cada vez mais poderosas para produzir software em menos tempo e eu estou aqui dizendo para uma delas: “calma, não faça ainda, deixa eu tentar”.

Mas existe um motivo. Quando trabalho com Laravel, muitas decisões parecem naturais hoje porque foram construídas durante anos escrevendo código, errando, investigando problemas, lendo documentação, revisando soluções e entendendo as convenções daquele ecossistema. Se quero desenvolver a mesma profundidade em Spring Boot, não posso simplesmente pular essa parte e esperar que a quantidade de código no GitHub faça o trabalho por mim.

E talvez seja justamente aí que a IA fique mais interessante como ferramenta de aprendizado para quem já tem experiência. Eu não preciso que ela me explique novamente o que é uma API REST ou o que significa separar responsabilidades. Posso usá-la para comparar como conceitos que já conheço aparecem em outro ecossistema, questionar minhas decisões, identificar quando estou tentando escrever “Laravel em Java” e explorar alternativas que talvez eu não conhecesse.

Isso também muda um pouco aquela discussão de “usar ou não usar IA para aprender programação”. Para mim, a pergunta está ficando muito mais específica: **quanto eu quero delegar neste momento e o que deixo de aprender quando faço essa delegação?**

Se meu objetivo é entregar algo que já sei fazer, quero aproveitar toda a velocidade que a ferramenta puder oferecer. Se meu objetivo é desenvolver profundidade em uma tecnologia, às vezes acelerar demais significa justamente passar correndo pela parte que eu precisava conhecer.

No SterilFlow, pelo menos, essa é a experiência que estou fazendo. Quero terminar com uma aplicação funcionando, mas quero principalmente conseguir abrir qualquer parte importante dela e explicar por que escolhi aquela solução, quais alternativas considerei e o que mudaria se o contexto fosse diferente. Se no final eu tiver um projeto impecável em Spring Boot, cheio de código que uma IA escreveu enquanto eu fiquei aprovando tudo com “parece certo”, provavelmente fracassei no principal objetivo do projeto.

Então tenho seguido uma regra que resume bem essa relação:

**Quando já conheço o caminho, uso IA para chegar mais rápido. Quando estou aprofundando o caminho, uso IA para entender melhor por que estou indo naquela direção.**

A IA pode ajudar bastante no volante. Só não quero chegar ao destino e descobrir que passei a viagem inteira no banco do passageiro.    