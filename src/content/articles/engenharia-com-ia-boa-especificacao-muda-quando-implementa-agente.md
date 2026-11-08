---
title: "Uma boa especificação muda quando quem implementa é um agente?"
description: "Veja como explicitar regras de negócio e escrever critérios de aceite verificáveis antes de delegar a implementação a um agente de IA."
publishedAt: 2026-09-16
category: "Engenharia de Software"
series: "Engenharia de Software com IA"
seriesOrder: 4
tags:
  - Inteligência Artificial
  - Agentes de IA
  - Engenharia de Software
  - Revisão de Código
  - Testes Automatizados
cover: "/images/articles/engenharia-software-ia-04.png"
draft: false
featured: true
---

Quando escrevo uma tarefa para um colega, posso contar com uma conversa para esclarecer o que ficou implícito. Ao delegar a implementação a um agente, prefiro antecipar as perguntas cujas respostas mudam o comportamento do sistema. Se uma dúvida afeta o que o usuário vai ver, o que o sistema vai salvar ou o que os testes precisam verificar, eu já registro a resposta na descrição da tarefa.

Pense numa issue que diz “Permitir duplicar um checklist”. Se o checklist original já foi concluído, os itens da cópia aparecem marcados? E os comentários feitos durante a execução vão junto? Para quem pediu a funcionalidade, a resposta pode parecer óbvia. Se a ideia é reaproveitar a estrutura para começar um novo trabalho, eu já registraria na issue o que a cópia deve levar e em que estado os itens começam.

> Na tela de detalhes de um checklist, adicionar a ação “Duplicar”. A ação cria um novo checklist com o mesmo título e copia o texto e a ordem dos itens. Todos os itens da cópia começam desmarcados. Comentários e histórico de execução ficam no checklist original. Depois de criar a cópia, abrir a tela de detalhes do novo checklist.

Para conferir se a tarefa foi concluída, eu usaria um checklist com dois itens em uma ordem conhecida, um deles já marcado e com um comentário. Ao duplicar, verificaria se a cópia tem os dois itens na mesma ordem, ambos desmarcados e sem o comentário. Depois, abriria o original para conferir se ele continua com o item marcado e o comentário. Com um exemplo assim, a pessoa que pediu a funcionalidade consegue dizer se é isso mesmo que ela espera, e quem revisa o PR tem como conferir o resultado.

Repare que a issue deixa espaço para o agente escolher como implementar. Ela explica quais informações vão para a cópia, mas ainda dá para aproveitar o fluxo de criação que o projeto já usa. É aqui que entra o contexto do artigo anterior. O repositório ajuda a encontrar as convenções e os pontos de extensão. A especificação diz qual comportamento esses recursos precisam produzir naquela tarefa.

Ainda pode aparecer uma pergunta que a equipe deixou em aberto. Imagine que o sistema tenha um limite de checklists por projeto e que a equipe ainda esteja decidindo se duplicar deve contar para esse limite. Eu deixaria a pendência explícita e pediria ao agente que investigasse onde a regra é aplicada hoje. Assim a equipe pode decidir o que fazer quando o limite for atingido antes de receber código e testes que já assumem uma resposta.

Antes de passar uma issue para o agente, eu leio a descrição e tento pensar em duas implementações diferentes que atendam ao que está escrito. Se ambas produzem o mesmo comportamento para o usuário, em geral dá para deixar a escolha técnica em aberto. Se uma delas copia os comentários e a outra deixa os comentários no original, falta uma decisão na tarefa. Esse exercício costuma mostrar onde um exemplo curto vale mais do que outro parágrafo de instruções.

Com o comportamento definido, vem a próxima decisão. Se a mudança envolve tela, API e testes, o que vale implementar junto e o que compensa separar para revisar com calma? Esse é o assunto do próximo artigo. **Como planejar mudanças que você consegue revisar?**