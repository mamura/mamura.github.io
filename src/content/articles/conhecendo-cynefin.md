---
title: "Nem todo problema técnico deve ser resolvido da mesma maneira: conhecendo o Cynefin"
description: "Conheça o framework Cynefin e entenda como identificar quando analisar, experimentar, aplicar práticas conhecidas ou agir rapidamente para tomar melhores decisões técnicas."
publishedAt: 2026-11-02
category: "Carreira & Mercado"
series: "Tech Leadership"
seriesOrder: 8
tags:
  - Tech Leadership
  - Liderança Técnica
  - Delegação
  - Autonomia
  - Management 3.0
  - Desenvolvimento de Times
cover: "/images/articles/techlead-08.png"
draft: false
featured: true
---

Um bug em uma validação, uma consulta SQL lenta, uma mudança de arquitetura e uma indisponibilidade em produção são problemas técnicos, mas exigem abordagens bastante diferentes. No primeiro caso, talvez a solução já seja conhecida. No segundo, precisamos investigar a causa. Uma mudança arquitetural pode envolver incertezas que exigem experimentação, enquanto um incidente crítico pode demandar ações imediatas para restaurar o serviço.

Parece óbvio quando colocamos os exemplos lado a lado, mas é comum encontrar equipes que tentam resolver todos os problemas da mesma maneira. Algumas investem tempo demais analisando situações simples, outras começam a implementar soluções antes de compreender as causas e há aquelas que transformam qualquer decisão em uma discussão arquitetural interminável.

O **Cynefin** é um framework criado por Dave Snowden que ajuda a reconhecer diferentes contextos de decisão e escolher abordagens adequadas para cada um deles. Em vez de oferecer uma metodologia única para resolver problemas, ele propõe compreender a natureza da situação antes de decidir como agir.

O modelo trabalha com quatro domínios principais: claro, complicado, complexo e caótico. Também considera a desordem, quando ainda não conseguimos identificar em qual contexto estamos trabalhando.

## Os quatro domínios do Cynefin

### 1. Claro: quando a solução já é conhecida

São situações em que a relação entre causa e efeito é evidente e existem procedimentos ou práticas estabelecidas para resolver o problema.

Imagine que uma aplicação esteja permitindo o envio de um formulário sem um campo obrigatório. A regra de negócio é conhecida, o comportamento esperado está definido e a equipe já possui um padrão para implementar validações.

Nesse cenário, não precisamos discutir alternativas arquiteturais. Basta identificar onde a regra deixou de ser aplicada, corrigir a implementação e verificar o resultado.

A abordagem recomendada é **perceber, categorizar e responder**. Reconhecemos o problema, identificamos a prática adequada e executamos a correção.

**Na prática:** utilize padrões existentes, automatize verificações recorrentes e evite gastar tempo rediscutindo soluções consolidadas. O cuidado é confirmar que o problema realmente corresponde a uma situação conhecida antes de aplicar a solução.

### 2. Complicado: quando precisamos investigar

Problemas complicados possuem relações de causa e efeito que podem ser identificadas por meio de análise, conhecimento técnico e investigação.

Considere uma consulta SQL que começou a apresentar problemas de desempenho. Sabemos que existem técnicas para investigar esse comportamento, mas ainda não conhecemos sua causa. O problema pode estar relacionado a índices, volume de dados, plano de execução ou contenção no banco.

Nesse caso, aplicar uma otimização sem investigar pode não resolver nada ou até piorar a situação. Precisamos analisar métricas, examinar o plano de execução, levantar hipóteses e testar as possíveis correções.

A abordagem é **perceber, analisar e responder**. Primeiro coletamos informações, depois investigamos as causas e finalmente implementamos uma solução fundamentada.

**Na prática:** organize a investigação, envolva especialistas quando necessário e utilize evidências para orientar a decisão. Experiência técnica ajuda a formular hipóteses, mas não substitui a análise do comportamento real do sistema.

### 3. Complexo: quando precisamos experimentar

Em situações complexas, não conseguimos determinar antecipadamente todas as relações entre causa e efeito. Parte do entendimento surge conforme experimentamos e observamos os resultados.

Imagine que uma equipe esteja desenvolvendo uma funcionalidade baseada em inteligência artificial para auxiliar usuários na interpretação de informações. A integração técnica pode ser relativamente conhecida, mas existem incertezas sobre a qualidade das respostas, o comportamento dos usuários, os custos e a eficácia da solução.

Mesmo com planejamento e conhecimento técnico, algumas dessas questões só poderão ser compreendidas por meio de experimentos.

A abordagem recomendada é **experimentar, perceber e responder**. Criamos experimentos controlados, observamos os resultados e ajustamos a solução conforme aprendemos.

**Na prática:** comece com protótipos ou implementações limitadas, defina hipóteses e critérios de avaliação, estabeleça limites de risco e utilize os resultados para orientar os próximos passos. O objetivo não é experimentar aleatoriamente, mas aprender com segurança antes de ampliar a solução.

### 4. Caótico: quando precisamos agir imediatamente

Situações caóticas exigem ações rápidas porque ainda não existe estabilidade suficiente para compreender o problema de maneira estruturada.

Imagine que um sistema crítico esteja indisponível em produção. As requisições estão falhando, os usuários não conseguem acessar funcionalidades essenciais e a equipe ainda não identificou a causa.

Nesse momento, talvez seja mais importante restaurar o serviço do que realizar uma investigação completa. Reverter um deploy, ativar uma contingência ou isolar um componente podem ser medidas necessárias para reduzir o impacto.

A abordagem é **agir, perceber e responder**. Primeiro buscamos estabilizar a situação, depois observamos os resultados e ajustamos as ações.

**Na prática:** priorize contenção e recuperação, utilize procedimentos de emergência conhecidos e preserve informações para a investigação posterior. Depois que o ambiente estiver estável, realize a análise da causa raiz e defina medidas preventivas.

## E quando não sabemos em qual domínio estamos?

O Cynefin também considera a **desordem**, situação em que ainda não está claro qual tipo de problema estamos enfrentando.

Imagine que uma equipe esteja acumulando atrasos nas entregas. Algumas pessoas atribuem o problema à complexidade técnica, outras apontam dificuldades no refinamento e há quem considere que o principal obstáculo seja a comunicação com o negócio.

Antes de propor uma solução, precisamos separar essas questões e compreender suas causas. Parte dos atrasos pode estar relacionada a processos conhecidos, outra pode exigir investigação técnica e algumas dificuldades podem envolver fatores organizacionais complexos.

Nesse contexto, a primeira ação é **decompor o problema e identificar a abordagem adequada para cada parte**, em vez de tentar resolver tudo com uma única iniciativa.

## Como aplicar o Cynefin no dia a dia de um Tech Lead

O framework não precisa se transformar em mais uma cerimônia ou documento obrigatório. Sua principal utilidade está em orientar algumas perguntas antes de decidir como o time deve trabalhar.

|Pergunta|Domínio provável|Abordagem|
|---|---|---|
|Já conhecemos uma solução confiável?|Claro|Aplicar a prática estabelecida|
|Precisamos investigar para descobrir a causa?|Complicado|Analisar evidências e consultar especialistas|
|Só conseguiremos entender os resultados experimentando?|Complexo|Executar experimentos controlados|
|Precisamos agir imediatamente para conter o impacto?|Caótico|Estabilizar antes de investigar|
|Ainda não entendemos a natureza do problema?|Desordem|Separar as questões e compreender o contexto|

Essa avaliação pode ser feita durante um refinamento, uma investigação técnica, uma discussão arquitetural ou a resposta a um incidente. O objetivo é evitar que o time utilize uma abordagem inadequada simplesmente porque está acostumado a trabalhar daquela maneira.

Também é importante compreender que os domínios não representam níveis de dificuldade. Um problema tecnicamente difícil pode ser complicado, desde que seja possível investigá-lo e encontrar uma solução por meio de análise. Já uma mudança aparentemente simples pode produzir resultados complexos quando envolve comportamento humano, dependências organizacionais ou interações imprevisíveis.

Além disso, uma situação pode mudar de domínio. Um incidente inicialmente caótico pode se tornar um problema complicado depois que o serviço é estabilizado. Uma funcionalidade experimental pode passar a utilizar práticas conhecidas depois que seu comportamento estiver suficientemente compreendido.

Por isso, a classificação não deve ser tratada como definitiva. Ela representa o contexto em determinado momento e precisa ser reavaliada quando as condições mudam.

## A responsabilidade da liderança está em escolher a abordagem adequada

Um Tech Lead não precisa ter uma resposta imediata para todos os problemas, mas precisa ajudar a equipe a reconhecer qual caminho faz sentido seguir.

Isso significa evitar análises desnecessárias quando existe uma solução conhecida, organizar investigações quando faltam informações, permitir experimentos quando existe incerteza e coordenar ações rápidas quando a situação exige contenção.

O Cynefin não substitui experiência, conhecimento técnico ou julgamento profissional. Ele oferece uma maneira de utilizar essas competências de forma mais consciente, evitando que o time tente resolver problemas diferentes com uma única estratégia.

**A qualidade de uma decisão técnica não depende apenas da solução escolhida, mas também de reconhecer quando devemos analisar, experimentar, aplicar uma prática conhecida ou agir imediatamente.**