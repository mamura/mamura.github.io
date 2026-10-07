---
title: "Como estou usando IA para programar sem terceirizar meu raciocínio"
description: "Um relato prático sobre como usar inteligência artificial no desenvolvimento de software sem abrir mão de contexto, planejamento, revisão, testes e responsabilidade técnica."
publishedAt: 2026-09-02
category: "Inteligência Artificial"
tags:
  - IA
  - Desenvolvimento de Software
  - Engenharia de Software
  - Code Review
  - Testes
  - Sterilflow
cover: "/images/articles/ia-sem-terceirizar.jpg"
draft: false
featured: true
---

Nos últimos meses, a IA passou a fazer parte de praticamente todo o meu processo de desenvolvimento. Uso para analisar código, discutir arquitetura, investigar problemas, revisar implementações e até explorar tecnologias com as quais ainda não tenho tanta experiência. Só que eu percebi uma coisa importante nesse processo: existe uma diferença muito grande entre usar IA para programar melhor e simplesmente pedir para ela programar por você.

Quando comecei a incorporar essas ferramentas com mais frequência no dia a dia, era tentador descrever uma funcionalidade, receber dezenas de linhas de código e seguir em frente. É rápido e dá uma sensação enorme de produtividade.

O problema aparece quando precisamos responder perguntas simples sobre aquilo que acabou de ser criado, principalmente quando estamos trabalhando em um time em que outros desenvolvedores dependem do entendimento do que está sendo entregue. A situação fica ainda mais delicada quando você é sênior ou líder e precisa guiar o caminho de quem está alguns passos atrás de você.

Por que essa classe existe? Por que essa responsabilidade ficou aqui? Quais alternativas foram consideradas? O que acontece se esse requisito mudar? Se eu não consigo responder a essas perguntas, talvez eu tenha produzido código, mas não necessariamente desenvolvido uma solução.

Foi por isso que comecei a estruturar melhor a forma como trabalho com IA. Hoje, meu processo se parece mais ou menos com isso:

problema → contexto → planejamento → implementação → revisão → testes.

Primeiro vem o problema, não o código
Antes de perguntar como implementar alguma coisa, tento entender exatamente o que estou tentando resolver. Isso parece óbvio, mas é justamente uma das etapas mais fáceis de pular quando temos uma ferramenta capaz de gerar uma solução em segundos.

Recentemente comecei a desenvolver o SterilFlow, um projeto em Java e Spring Boot que estou usando também como forma de aprofundar meus conhecimentos no ecossistema Java. Uma das regras que defini para esse projeto foi simples: não começar pelo Spring Boot.

Antes de criar controllers, entities ou repositories, comecei documentando o problema, entendendo o processo que o sistema pretende representar, levantando requisitos e identificando dúvidas. Inclusive, uma coisa que tenho feito bastante é documentar detalhadamente o produto antes mesmo de começar a escrever código. É um assunto que pretendo abordar melhor em outro artigo.

A IA participa bastante dessa etapa, mas muito mais me ajudando a fazer perguntas, explorar possibilidades e encontrar inconsistências do que produzindo código.

Depois, contexto
Uma IA sem contexto pode produzir código tecnicamente correto e, ainda assim, completamente inadequado para o projeto. Por isso tenho dado cada vez mais importância ao contexto que forneço.

Quais decisões já foram tomadas? Quais tecnologias estamos utilizando? Quais são as regras do domínio? O que já existe no projeto? Quais restrições precisam ser respeitadas?

Isso muda bastante a conversa. Em vez de perguntar “Como implemento uma reserva em Spring Boot?”, a discussão passa a ser algo como “Dado esse domínio, essas regras e as decisões que já tomamos, quais seriam as alternativas para representar uma reserva?”.

A diferença parece pequena, mas muda completamente o papel da ferramenta. A primeira pergunta pede uma implementação. A segunda pede raciocínio.

Planejamento antes da implementação
Outra mudança foi parar de usar a IA apenas como geradora de código e começar a utilizá-la como uma ferramenta com a qual posso discutir uma solução. Antes de implementar, tento entender quais alternativas existem, quais são os trade-offs, qual delas faz mais sentido naquele contexto e quais consequências aquela decisão pode trazer depois.

Isso é particularmente interessante quando estou estudando alguma tecnologia. Se estou aprendendo Java, por exemplo, não quero que a IA simplesmente escreva uma aplicação inteira em Spring Boot. Quero entender por que determinada abstração existe, quais problemas ela resolve, quais alternativas eu teria e quando não deveria utilizá-la.

Às vezes isso significa levar mais tempo para escrever uma funcionalidade. E tudo bem. O objetivo deixa de ser apenas produzir código rapidamente e passa a ser conseguir explicar o código que estou produzindo.

Implementação: a IA não precisa escrever tudo
Depois que a solução está razoavelmente clara, chega a implementação. Aqui também tenho tentado trabalhar em etapas menores. Em alguns casos escrevo o código e peço uma revisão. Em outros, peço apenas um exemplo mínimo de determinado conceito e faço a adaptação para o projeto.

Também existem tarefas mecânicas nas quais não vejo problema algum em deixar a IA trabalhar mais: boilerplate, pequenas transformações, documentação, testes repetitivos ou refatorações bem definidas. A diferença está em saber o que estou delegando.

Quanto mais importante for uma decisão para a arquitetura ou para o domínio da aplicação, menos confortável fico em simplesmente aceitar uma implementação pronta. Se aquela decisão pode afetar a evolução do sistema, quero pelo menos entender por que estamos seguindo por aquele caminho.

Depois do código vem uma das partes mais importantes: revisão
Código gerado por IA não deveria ganhar passe livre no code review. Depois de implementar, tento voltar para a solução e questioná-la da mesma forma que faria com qualquer outro código: essa responsabilidade está no lugar certo? Existe acoplamento desnecessário? Estou criando abstrações antes de precisar delas? A implementação realmente representa a regra de negócio que definimos? Existe uma solução mais simples?

Curiosamente, uma das coisas que mais gosto de fazer é pedir para a própria IA criticar uma implementação que discutimos anteriormente. Muitas vezes também questiono uma sugestão que ela mesma fez: por que essa solução e não outra? Quais problemas ela pode trazer? Em que situação você faria diferente?

O objetivo não é descobrir uma “resposta certa”, mas encontrar pontos que talvez eu não tenha considerado e, principalmente, não tratar a primeira resposta recebida como definitiva.

E finalmente, testes
A última etapa fecha o ciclo. Não basta o código compilar ou a aplicação subir. Precisamos verificar se aquilo que construímos realmente resolve o problema inicial.

Aqui a IA também pode ajudar bastante: levantar cenários que não considerei, sugerir casos de borda, revisar testes existentes ou questionar comportamentos inesperados. Ela é particularmente útil para ampliar o número de situações que estou considerando, porque muitas vezes sugere cenários que não estavam no meu caminho inicial de raciocínio.

Mas, novamente, existe uma diferença importante: a IA pode ajudar a encontrar os cenários. Eu ainda preciso entender por que eles importam.

No fim, talvez a habilidade mais importante seja saber o que não delegar
Quanto mais essas ferramentas evoluem, mais código elas conseguem produzir. Por isso acredito que saber gerar código rapidamente com IA vai deixar de ser um diferencial por si só.

O diferencial tende a estar em outra camada: entender problemas, fornecer contexto, avaliar alternativas, tomar decisões técnicas, revisar soluções e reconhecer quando uma resposta aparentemente boa não faz sentido para aquele sistema.

Tenho tentado usar IA justamente dessa forma. Não como alguém para quem entrego uma tarefa e espero o código pronto, mas como uma ferramenta que participa de várias etapas do meu raciocínio. Ela acelera pesquisas, aumenta minha capacidade de explorar alternativas e muitas vezes encontra coisas que eu deixaria passar.

Mas existe uma regra que tenho tentado preservar durante todo esse processo:

posso delegar trabalho para a IA. O que não posso delegar é a responsabilidade de entender aquilo que estou construindo.