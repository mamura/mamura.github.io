---
title: "Quando dois bons desenvolvedores discordam, o Tech Lead não precisa escolher um vencedor"
description: "Entenda como um Tech Lead pode mediar conflitos, avaliar diferentes soluções e transformar divergências em decisões melhores, sem criar disputas de ego ou comprometer a colaboração."
publishedAt: 2026-10-26
category: "Carreira & Mercado"
series: "Tech Leadership"
seriesOrder: 7
tags:
  - Tech Leadership
  - Liderança Técnica
  - Delegação
  - Autonomia
  - Management 3.0
  - Desenvolvimento de Times
cover: "/images/articles/techlead-05.png"
draft: false
featured: true
---

Imagine que, durante uma reunião de planejamento, dois desenvolvedores experientes comecem a discutir sobre a arquitetura de uma nova funcionalidade. Um deles acredita que o ideal seria criar um microsserviço, já que aquela parte do sistema possui regras de negócio específicas e poderia evoluir de maneira independente. O outro defende que a funcionalidade continue no monólito, argumentando que a equipe ainda não tem uma necessidade real de escalabilidade independente e que adicionar outro serviço aumentaria a complexidade de manutenção e infraestrutura.

Os dois conhecem bem o sistema, apresentam argumentos consistentes e estão preocupados com a qualidade da solução. Depois de alguns minutos, a discussão começa a se repetir, ninguém parece disposto a mudar de opinião e alguém finalmente pergunta ao Tech Lead: "E aí, qual dos dois está certo?"

Essa é uma situação bastante comum em times de engenharia e também uma das armadilhas mais interessantes da liderança técnica. Afinal, quando você ocupa uma posição de referência, existe uma expectativa natural de que consiga avaliar as alternativas e indicar o melhor caminho. Muitas vezes, inclusive, você realmente tem experiência suficiente para tomar aquela decisão. O problema é quando passamos a acreditar que toda divergência precisa ser encerrada com a nossa opinião e que liderar significa necessariamente escolher quem está certo.

Na prática, **nem toda discordância precisa de um vencedor. Muitas vezes, o trabalho mais importante do Tech Lead é ajudar o time a construir uma decisão que faça sentido para o problema, independentemente de quem apresentou a proposta.**

## Discordar faz parte do trabalho de engenharia

Existe uma tendência de associar conflitos a problemas de relacionamento, mas discordâncias técnicas são parte natural do desenvolvimento de software. Trabalhamos com sistemas complexos, requisitos que mudam, restrições de prazo, limitações de infraestrutura e decisões que quase sempre envolvem algum tipo de compromisso. Uma solução pode ser mais simples de implementar, mas menos flexível para evoluir. Outra pode oferecer melhor isolamento de responsabilidades, mas exigir uma estrutura operacional que a equipe ainda não possui.

Isso significa que duas pessoas podem analisar o mesmo problema, chegar a conclusões diferentes e ainda assim apresentar argumentos tecnicamente válidos. No exemplo do monólito e do microsserviço, talvez um desenvolvedor esteja preocupado com a evolução futura da arquitetura, enquanto o outro está considerando os custos e riscos que a equipe enfrentará imediatamente. Nenhum dos dois está necessariamente errado. Eles podem simplesmente estar atribuindo pesos diferentes aos mesmos fatores.

O problema começa quando essas diferenças deixam de ser discutidas como decisões técnicas e passam a ser tratadas como questões pessoais. Uma coisa é dizer que determinada abordagem pode aumentar o acoplamento entre módulos. Outra, bastante diferente, é afirmar que alguém com experiência em arquitetura jamais escolheria aquela solução. No primeiro caso, temos um argumento que pode ser analisado. No segundo, estamos questionando a competência de quem apresentou a ideia.

Quando uma discussão chega nesse ponto, as pessoas deixam de defender apenas suas propostas e começam a defender a própria reputação. O resultado costuma ser uma conversa cada vez menos produtiva, na qual mudar de opinião passa a parecer uma derrota. É justamente esse tipo de situação que a liderança precisa aprender a reconhecer e administrar.

## Antes de escolher uma solução, precisamos entender o problema

Uma das maneiras mais eficientes de conduzir divergências técnicas é trazer a discussão de volta para aquilo que estamos tentando resolver. Parece óbvio, mas é surpreendente como conseguimos passar horas debatendo alternativas de implementação sem estabelecer claramente quais critérios deveriam orientar a decisão.

Voltando ao nosso exemplo, o desenvolvedor que defende o microsserviço pode apresentar argumentos sobre independência de deploy, isolamento de responsabilidades e escalabilidade. O outro pode responder falando sobre observabilidade, comunicação entre serviços, consistência de dados e aumento da complexidade operacional. A discussão pode continuar indefinidamente porque ambos estão falando de aspectos relevantes, mas talvez nenhum deles tenha demonstrado que esses fatores representam necessidades concretas naquele momento.

Antes de escolher uma abordagem, o Tech Lead pode ajudar o time a responder algumas perguntas: qual problema de negócio estamos resolvendo? Existe alguma limitação na arquitetura atual? A funcionalidade realmente precisa ser implantada ou escalada de maneira independente? A equipe possui estrutura para operar outro serviço? Quais riscos são mais importantes nesse contexto?

Essas perguntas não servem para conduzir as pessoas até uma resposta que o líder já escolheu. Servem para estabelecer critérios compartilhados. Quando conseguimos definir o que realmente importa, fica mais fácil avaliar as alternativas sem transformar a discussão em uma competição de argumentos.

Também precisamos reconhecer que nem todas as decisões possuem uma resposta objetivamente superior. Às vezes, duas abordagens são tecnicamente aceitáveis e a escolha depende de fatores como experiência da equipe, custo de manutenção, prazo disponível ou capacidade operacional. Nesses casos, buscar uma solução perfeita pode consumir mais tempo do que o problema justifica.

**Uma boa decisão técnica não é necessariamente aquela que utiliza a arquitetura mais sofisticada, mas aquela que atende às necessidades reais do sistema dentro das condições em que a equipe trabalha.**

## O papel do Tech Lead é facilitar, mas também saber decidir

Quem construiu uma carreira como desenvolvedor provavelmente passou muitos anos sendo reconhecido pela capacidade de resolver problemas. Quando alguém encontrava uma dificuldade, você ajudava. Quando surgia uma decisão complexa, sua experiência era utilizada como referência. É natural carregar esse comportamento para uma posição de liderança e continuar tentando resolver pessoalmente tudo aquilo que chega até você.

Só que existe uma consequência quando o Tech Lead assume constantemente o papel de árbitro das discussões técnicas. Aos poucos, o time aprende que a maneira mais rápida de resolver uma divergência é esperar pela decisão do líder. As pessoas passam a depender da sua presença, mesmo em situações nas quais teriam condições de avaliar as alternativas e chegar a uma conclusão por conta própria.

Isso não significa que o Tech Lead deva se omitir ou transformar qualquer discussão em uma busca interminável por consenso. Existem decisões que exigem intervenção direta, principalmente quando envolvem riscos relevantes, restrições de prazo ou responsabilidades que não podem ser delegadas. A diferença está em reconhecer quando precisamos decidir e quando podemos ajudar o time a desenvolver essa capacidade.

Em uma discussão sobre a adoção de uma nova biblioteca, por exemplo, talvez não seja necessário escolher imediatamente entre as preferências dos desenvolvedores. Podemos comparar os custos de migração, a manutenção do projeto, a experiência da equipe, o impacto no desempenho e os benefícios que a mudança realmente oferece. Se ainda existirem dúvidas importantes, uma pequena prova de conceito pode ajudar a esclarecer questões que dificilmente seriam resolvidas apenas conversando.

Essa abordagem também muda a relação das pessoas com suas próprias propostas. Quando uma decisão é construída a partir de critérios e evidências, fica mais fácil reconhecer que outra alternativa pode ser mais adequada. A discussão deixa de ser sobre convencer alguém de que sua ideia é melhor e passa a ser sobre descobrir qual solução atende melhor ao problema.

Mas é importante estabelecer um limite. Nem toda divergência precisa de uma pesquisa extensa, uma matriz de decisão ou uma prova de conceito. Se o custo de investigar for maior do que o risco da escolha, talvez seja mais sensato tomar uma decisão suficientemente boa e seguir em frente. A liderança também precisa proteger o tempo e a capacidade de entrega da equipe.

## Quando a divergência deixa de ser técnica

Até aqui estamos falando de pessoas que discordam sobre soluções, mas continuam respeitando umas às outras. Nem sempre é isso que acontece. Em algumas equipes, divergências técnicas acabam acumulando frustrações, principalmente quando os mesmos profissionais entram repetidamente em discussões que nunca parecem ser resolvidas de maneira satisfatória.

Imagine que um desenvolvedor comece a interpretar qualquer comentário de determinado colega como uma tentativa de desqualificar seu trabalho. O outro, por sua vez, passa a acreditar que suas opiniões são ignoradas e começa a evitar qualquer colaboração direta. Mesmo que a discussão atual seja sobre uma decisão arquitetural legítima, existe um histórico de relacionamento influenciando a maneira como os dois se comunicam.

Nesse cenário, estabelecer critérios técnicos pode não ser suficiente. O Tech Lead precisa perceber que existe um problema de colaboração e procurar entender o que está acontecendo. Conversas individuais podem ajudar a identificar situações que não aparecem durante as reuniões, mas é importante ouvir as pessoas sem assumir antecipadamente quem está certo ou tentar forçar uma reconciliação superficial.

Também precisamos diferenciar conflitos naturais de comportamentos inadequados. Discordar de uma proposta faz parte do trabalho. Desqualificar colegas, intimidar pessoas ou utilizar a própria senioridade para impedir questionamentos não deveria ser tratado como apenas mais uma diferença de opinião. Dependendo da situação, pode ser necessário envolver a gestão de pessoas e outras instâncias da organização.

Um ambiente saudável não é aquele em que todos concordam o tempo inteiro, mas aquele em que as pessoas conseguem apresentar opiniões diferentes sem receio de serem humilhadas ou sofrer consequências pessoais por isso. Essa possibilidade está diretamente relacionada à segurança psicológica, e a maneira como o Tech Lead reage às discordâncias contribui bastante para construí-la.

Se toda vez que alguém questiona uma decisão do líder recebe uma resposta defensiva ou autoritária, dificilmente continuará fazendo perguntas. Por outro lado, quando o líder demonstra disposição para ouvir argumentos, reconhecer equívocos e reconsiderar suas próprias posições, ajuda a estabelecer um padrão de comportamento que pode se espalhar pelo time.

Isso não elimina a necessidade de decisões firmes ou feedbacks difíceis. Podemos rejeitar uma proposta, apontar riscos importantes e exigir correções sem transformar essas situações em ataques pessoais. O respeito não está em concordar com tudo, mas na maneira como lidamos com aquilo de que discordamos.

## A decisão precisa sobreviver à discussão

Depois de avaliar as alternativas, chega o momento de escolher um caminho. Talvez o time decida manter a funcionalidade no monólito, talvez opte por criar um serviço independente ou encontre uma terceira abordagem que não havia sido considerada inicialmente. O importante é que as pessoas compreendam os motivos da decisão, mesmo quando ela não corresponde à alternativa que defendiam.

Em decisões arquiteturais relevantes, registrar brevemente o contexto e os critérios utilizados pode evitar problemas futuros. Um Architecture Decision Record, conhecido como ADR, é uma maneira de documentar o problema, as alternativas consideradas e as razões que levaram à escolha. Não precisamos transformar cada decisão de implementação em um documento formal, mas algumas escolhas merecem ser registradas para que o time não perca o raciocínio que as sustentou.

Esse cuidado é especialmente útil porque decisões técnicas são tomadas dentro de um contexto que pode mudar. Talvez criar um microsserviço não faça sentido hoje, mas passe a ser necessário quando a aplicação atingir outra escala ou quando diferentes equipes precisarem evoluir componentes de maneira independente. Isso não significa que a decisão anterior estava errada. Significa que as condições mudaram e que precisamos reavaliar nossas escolhas.

Tratar decisões como respostas a problemas concretos, e não como demonstrações permanentes de competência, ajuda a reduzir a resistência das pessoas em reconsiderar suas próprias opiniões. Afinal, reconhecer que uma solução deixou de ser adequada não deveria ser interpretado como admitir uma derrota.

## O melhor resultado não é descobrir quem estava certo

Quando dois bons desenvolvedores discordam, é tentador enxergar a situação como um problema que precisa ser encerrado rapidamente. Mas, dependendo de como conduzimos essa discussão, ela pode se transformar em uma oportunidade importante para o time.

As pessoas podem aprender a avaliar alternativas com mais profundidade, compreender restrições que desconheciam, desenvolver a capacidade de argumentação e perceber que decisões de engenharia raramente dependem apenas de preferências individuais. Também podem descobrir que alguém com uma perspectiva diferente não está necessariamente tentando contrariá-las, mas considerando aspectos do problema que elas próprias não haviam observado.

Nada disso significa que toda discussão precisa ser longa ou que o Tech Lead deve evitar tomar decisões. Liderar também envolve reconhecer impasses, assumir responsabilidades e definir caminhos quando necessário. O que precisamos evitar é criar uma dinâmica em que a qualidade das decisões dependa exclusivamente da opinião de uma pessoa ou da capacidade de alguém vencer um debate.

No fim das contas, o objetivo de uma discussão técnica não deveria ser fazer um desenvolvedor sair da reunião satisfeito porque sua proposta foi escolhida, enquanto outro sai frustrado por ter perdido. O resultado que realmente importa é encontrar uma solução adequada, compreender os motivos da escolha e preservar a capacidade das pessoas de continuar colaborando.

**Um time de engenharia não precisa de um Tech Lead que vença todas as discussões. Precisa de uma liderança capaz de transformar opiniões diferentes em decisões melhores, sem fazer da discordância um problema pessoal.**