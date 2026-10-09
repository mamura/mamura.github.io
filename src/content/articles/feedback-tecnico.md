---
title: "Como dar feedback técnico sem transformar code review em disputa de ego"
description: "Code review vai além de encontrar erros no código. Entenda como dar feedback técnico, evitar disputas de ego e transformar revisões em oportunidades de aprendizado, colaboração e desenvolvimento do time."
publishedAt: 2026-10-09
category: "Carreira & Mercado"
series: "Tech Leadership"
seriesOrder: 6
tags:
  - Tech Leadership
  - Liderança Técnica
  - Delegação
  - Autonomia
  - Management 3.0
  - Desenvolvimento de Times
cover: "/images/articles/techlead-06.png"
draft: false
featured: true
---

Poucas coisas conseguem transformar uma discussão aparentemente simples em um debate filosófico tão rapidamente quanto um pull request. Alguém abre uma alteração, outra pessoa começa a revisar e, de repente, estamos discutindo se aquela classe deveria existir, se o método está no lugar certo, se determinada abstração é realmente necessária ou se alguém acabou de cometer um crime contra os princípios SOLID.

Em algum momento aparece um comentário como "eu não faria assim". Pronto. Agora temos um problema. E não é necessariamente porque o código esteja errado, mas porque a discussão deixou de ser sobre a solução e começou a se aproximar perigosamente de uma disputa sobre quem sabe mais.

Para quem exerce liderança técnica, esse é um cenário particularmente interessante. Afinal, revisar código faz parte do trabalho, mas a maneira como conduzimos essas revisões também influencia a confiança, a autonomia e o desenvolvimento das pessoas do time. E talvez a primeira coisa que precisamos entender seja que **um code review não deveria ser uma competição para descobrir quem é o melhor programador da equipe**.

## O código precisa ser revisado, não o ego de quem escreveu

Existe uma diferença importante entre questionar uma decisão técnica e questionar a capacidade de quem tomou aquela decisão. Imagine que alguém tenha implementado uma consulta ao banco de dados dentro de um loop. Dependendo do contexto, isso pode provocar múltiplas consultas desnecessárias e comprometer o desempenho da aplicação.

O problema merece ser apontado. Mas existe uma diferença enorme entre comentar "isso está errado, você deveria saber que não se faz consulta dentro de loop" e explicar que aquela implementação pode gerar um problema de N+1 queries, demonstrar o impacto e discutir uma alternativa.

Nos dois casos, o revisor identificou o mesmo problema técnico. Só que, no segundo, a conversa oferece informações que ajudam a pessoa a compreender a decisão e aplicar aquele aprendizado em situações futuras.

O objetivo não deveria ser apenas fazer alguém alterar algumas linhas até que o pull request seja aprovado. Deveria ser garantir que a solução atenda aos requisitos de qualidade e, sempre que possível, ampliar o entendimento compartilhado sobre o sistema.

Isso não significa que todo comentário precisa virar uma aula ou que problemas graves devem ser tratados com delicadeza excessiva. Significa que podemos ser bastante objetivos e exigentes tecnicamente sem transformar a revisão em julgamento pessoal. Código ruim precisa ser corrigido. Uma decisão inadequada precisa ser questionada. Mas nenhuma dessas situações exige humilhar quem escreveu a implementação.

## Preferência pessoal não é necessariamente um problema técnico

Uma das coisas mais difíceis em revisões de código é separar aquilo que realmente representa um problema daquilo que simplesmente não corresponde à maneira como nós escreveríamos. 

Todo desenvolvedor acumula preferências ao longo da carreira e gostamos de determinadas estruturas, padrões, bibliotecas, formas de organizar arquivos e maneiras de resolver problemas. Com o tempo, algumas dessas preferências ficam tão naturais que começamos a tratá-las como se fossem regras universais. O problema aparece quando o code review vira uma tentativa de fazer todo mundo escrever exatamente como o revisor escreveria.

Imagine duas implementações diferentes que atendem aos requisitos, possuem testes adequados, são compreensíveis e respeitam as convenções do projeto. Talvez uma delas seja mais próxima da sua preferência pessoal, mas isso não significa automaticamente que a outra precise ser rejeitada.

É importante conseguir responder uma pergunta antes de solicitar uma alteração: **qual problema concreto essa mudança resolve?** Estamos evitando um bug? Melhorando a legibilidade? Reduzindo complexidade? Atendendo a uma convenção estabelecida? Evitando um problema de segurança ou desempenho? Ou simplesmente preferimos outra abordagem?

Preferências podem ser discutidas, naturalmente. O problema é apresentá-las como se fossem defeitos objetivos da implementação. Quando um time não consegue distinguir essas coisas, cada pull request corre o risco de se transformar em uma negociação interminável sobre estilo pessoal.

E o pior é que esse tipo de discussão costuma consumir energia que poderia ser direcionada para problemas realmente importantes.

## Nem todo comentário precisa ter o mesmo peso

Outro problema comum acontece quando todos os comentários de uma revisão parecem ter a mesma importância. Uma vulnerabilidade de segurança, uma regra de negócio implementada incorretamente, uma oportunidade de melhorar a legibilidade e uma preferência por determinado nome de variável não deveriam ser tratados como questões equivalentes. Podemos organizar os comentários por intenção e criticidade.

**Bloqueante:** quando existe um problema que precisa ser corrigido antes da aprovação, como uma falha funcional, uma vulnerabilidade ou uma violação relevante de requisitos e padrões acordados.

**Sugestão:** quando existe uma alternativa que pode melhorar a implementação, mas que não necessariamente impede a aprovação.

**Pergunta:** quando o revisor precisa entender o raciocínio por trás de determinada decisão antes de avaliá-la.

**Observação:** quando queremos compartilhar conhecimento ou registrar algo que pode ser útil futuramente, sem exigir uma alteração naquele momento.

Essas categorias não precisam virar um processo burocrático. O importante é deixar claro o que estamos pedindo e por quê. Se eu comento "talvez fosse interessante extrair esse trecho para uma função", a pessoa precisa saber se estou apontando um problema de manutenção que realmente precisa ser corrigido ou apenas oferecendo uma possibilidade de melhoria. Essa clareza reduz discussões desnecessárias e evita que o autor do código precise adivinhar o que o revisor considera obrigatório.

## Fazer perguntas pode ser melhor do que entregar a solução pronta

Existe uma tentação muito grande de abrir um pull request e começar a reescrever mentalmente toda a implementação. Você conhece o projeto, já enfrentou problemas parecidos e provavelmente conseguiria propor outra solução em poucos minutos. Então começa a deixar comentários dizendo exatamente o que precisa ser alterado.

Às vezes isso é necessário, principalmente quando existe um risco importante ou alguma restrição que a pessoa desconhece. Mas nem sempre é a melhor abordagem.

Imagine que alguém tenha criado uma abstração para resolver um problema relativamente simples. Em vez de comentar imediatamente "remova essa interface, ela é desnecessária", podemos perguntar qual necessidade motivou aquela decisão.

Talvez exista um requisito futuro que não conhecemos. Talvez a pessoa esteja tentando resolver um problema real de acoplamento. Ou talvez tenha aplicado um padrão de projeto sem avaliar se a complexidade adicional fazia sentido. A resposta ajuda a entender o raciocínio e abre espaço para uma discussão mais produtiva.

Perguntas como "qual cenário essa abstração pretende atender?" ou "o que perderíamos se mantivéssemos essa implementação mais simples?" podem ajudar alguém a avaliar melhor suas próprias escolhas. 

Isso conversa diretamente com os artigos anteriores da série. Se queremos desenvolver pessoas e aumentar sua autonomia, não podemos transformar toda revisão em uma sequência de instruções que precisam ser obedecidas sem discussão. O aprendizado acontece também quando a pessoa precisa explicar, defender, reconsiderar e eventualmente modificar uma decisão.

## O Tech Lead também pode estar errado

Talvez esse seja um dos pontos mais importantes quando falamos de ego em revisões técnicas. Ter mais experiência, conhecer melhor a arquitetura ou ocupar uma posição de liderança não significa que todas as suas opiniões estejam corretas.

Um Tech Lead pode desconhecer um requisito, não perceber uma restrição, interpretar incorretamente uma implementação ou simplesmente estar defendendo uma solução menos adequada. **E tudo bem.**

O problema começa quando a posição de liderança transforma uma opinião em uma decisão que ninguém se sente confortável para questionar. Se alguém apresenta argumentos consistentes para defender uma abordagem diferente, o papel do líder também é estar disposto a reconsiderar sua posição. Isso não diminui a autoridade técnica. Pelo contrário, demonstra que as decisões são orientadas por critérios e evidências, não apenas pela senioridade de quem está falando.

Um ambiente saudável de engenharia precisa permitir que um desenvolvedor menos experiente faça uma observação relevante sobre o código de alguém mais experiente. A qualidade da revisão não deveria depender de quem escreveu a implementação ou de quem deixou o comentário. E existe uma diferença enorme entre liderar tecnicamente uma discussão e precisar vencê-la.

## Quando a discussão começa a crescer, talvez seja hora de conversar

Existe um fenômeno bastante conhecido por quem trabalha com desenvolvimento remoto: uma discussão que poderia ser resolvida em dez minutos de conversa acaba produzindo quarenta comentários em um pull request.

Alguém sugere uma alteração. O autor responde explicando sua decisão. O revisor apresenta outra justificativa. O autor tenta esclarecer o contexto. O revisor acrescenta mais um comentário. Em algum momento, ninguém lembra exatamente qual era o problema inicial. E o pull request continua parado.

A comunicação assíncrona é extremamente útil porque permite registrar decisões, revisar alterações com atenção e colaborar sem exigir que todas as pessoas estejam disponíveis ao mesmo tempo. Mas ela também possui limitações.

Quando uma discussão exige muitas explicações, envolve diferentes interpretações ou começa a apresentar sinais de desgaste, talvez seja mais eficiente chamar as pessoas para uma conversa rápida. Isso não significa abandonar o registro. Depois da discussão, podemos documentar no próprio pull request qual decisão foi tomada e quais critérios foram considerados. Assim preservamos o contexto sem transformar a ferramenta de revisão em um campo de batalha.

O objetivo é encontrar uma boa solução, não descobrir quem consegue escrever o comentário mais convincente.

## Code review também é uma ferramenta de desenvolvimento

No artigo anterior, discutimos como desenvolver alguém exige mais do que recomendar cursos. Precisamos criar oportunidades para aplicar conhecimento, receber orientação e refletir sobre as próprias decisões. O code review pode cumprir parte desse papel.

Quando uma pessoa recebe um comentário que explica o impacto de determinada escolha, ela tem a oportunidade de aprender algo sobre arquitetura, desempenho, segurança, legibilidade ou funcionamento do sistema. Quando precisa justificar uma decisão, desenvolve a capacidade de argumentação técnica.

Quando revisa código de outras pessoas, passa a conhecer diferentes abordagens e partes do sistema com as quais talvez não tivesse contato. E quando participa de discussões respeitosas sobre alternativas, aprende que engenharia de software raramente consiste apenas em encontrar uma resposta universalmente correta.

Mas isso exige intencionalidade. Se os reviews são sempre realizados pela mesma pessoa, se todos os comentários apresentam soluções prontas e se ninguém pode discordar de uma decisão do Tech Lead, estamos criando um processo de aprovação centralizado, não necessariamente um ambiente de aprendizado.

Uma liderança técnica pode incentivar revisões entre diferentes integrantes do time, compartilhar critérios de qualidade, promover discussões e ajudar as pessoas a desenvolver a capacidade de avaliar soluções.

O objetivo não é fazer com que todo código passe pelo líder. É construir um time cada vez mais capaz de produzir e avaliar código de qualidade sem depender exclusivamente dele.

## Ferramentas ajudam, mas não substituem uma cultura de colaboração

Muitos conflitos de code review poderiam ser evitados antes mesmo de alguém abrir um pull request. Se o time não possui convenções claras, cada revisão pode virar uma discussão sobre formatação, nomenclatura, organização de arquivos e preferências individuais. Linters, formatadores, testes automatizados, análise estática e padrões documentados ajudam a reduzir esse tipo de atrito. 

Se existe uma regra objetiva que pode ser verificada automaticamente, provavelmente não precisamos gastar energia humana discutindo aquilo repetidamente. Isso libera tempo para o que realmente exige análise técnica: regras de negócio, decisões arquiteturais, segurança, desempenho, manutenibilidade e trade-offs.

Também é importante reconhecer que nem todo problema deve ser descoberto durante a revisão. Uma mudança arquitetural significativa, por exemplo, talvez precise ser discutida antes de alguém investir vários dias implementando uma solução.

Quanto mais cedo compartilhamos contexto e alinhamos decisões importantes, menor a chance de transformar o pull request no primeiro momento em que o time descobre que existem opiniões completamente diferentes sobre o caminho escolhido.

O code review é uma etapa importante da colaboração, mas não deveria carregar sozinho toda a responsabilidade pela qualidade técnica.

## O objetivo não é aprovar código. É melhorar a capacidade do time de produzi-lo.

Existe uma maneira bastante simples de avaliar como estamos conduzindo nossas revisões. 
- Depois de receber feedback, a pessoa entende melhor o problema ou apenas sabe quais linhas precisa alterar?
- Depois de uma discussão, o time possui critérios mais claros para decisões semelhantes ou apenas descobriu qual abordagem o Tech Lead prefere?
- As revisões ajudam a distribuir conhecimento ou reforçam a dependência de uma única pessoa?

Essas perguntas dizem bastante sobre a cultura técnica de uma equipe. Um bom code review precisa proteger a qualidade do software. Isso continua sendo fundamental. Mas ele também pode contribuir para desenvolver raciocínio, compartilhar contexto, fortalecer colaboração e aumentar autonomia. E talvez o maior desafio para quem lidera tecnicamente seja equilibrar essas responsabilidades.

Nem todo comentário precisa virar uma aula. Nem toda decisão precisa ser negociada. Nem toda implementação alternativa precisa ser aceita. Mas toda revisão pode ser conduzida com critérios claros, respeito e disposição para discutir boas soluções.

No fim das contas, o melhor code review não é aquele em que o Tech Lead consegue demonstrar quantos problemas encontrou ou quantas soluções melhores conhece. **É aquele em que o código melhora, as pessoas aprendem e o time termina a discussão mais preparado para tomar boas decisões na próxima vez.**