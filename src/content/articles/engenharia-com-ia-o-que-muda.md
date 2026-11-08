---
title: "O que muda na engenharia de software quando a IA entra no processo?"
description: "Um filtro de vendas feito em minutos mostra o que muda na especificação, nos testes e na revisão de código quando a equipe trabalha com agentes de IA."
publishedAt: 2026-08-26
category: "Engenharia de Software"
series: "Engenharia de Software com IA"
seriesOrder: 1
tags:
  - Inteligência Artificial
  - Agentes de IA
  - Engenharia de Software
  - Revisão de Código
  - Testes Automatizados
cover: "/images/articles/engenharia-software-ia-01.png"
draft: false
featured: true
---

Imagine o seguinte cenário. Uma nova tarefa foi criada para adicionar um filtro por período a um relatório de vendas. Isso dá para resolver em minutos com um agente de IA. Basta passar o prompt com a descrição da tarefa e o agente executa. Altera a consulta, inclui os campos de data na tela e escreve os testes. Porém, na hora da revisão, alguém pergunta se uma venda feita às 23h50 entraria no relatório quando o usuário selecionasse apenas o dia daquela venda.

Depende de qual horário o relatório usa. Para uma loja no fuso UTC−3, uma venda feita às 23h50 do dia 7 aparece no banco às 02h50 do dia 8, em UTC. Se a consulta usa a data gravada no banco, essa venda fica de fora quando o usuário seleciona o dia 7. Se o relatório segue o horário da loja, ela precisa aparecer. No nosso exemplo, a tarefa dizia apenas “adicionar um filtro por período”, então o agente seguiu a primeira opção e escreveu os testes com base nela.

Um desenvolvedor poderia fazer a mesma coisa. A diferença é que, ao olhar a consulta, ele talvez percebesse a questão do fuso e perguntasse antes de seguir. Com o agente, a equipe pode receber o PR inteiro antes mesmo de ter essa conversa. E aí fica mais difícil perceber que existe uma decisão pendente. A consulta funciona, os campos aparecem na tela e os testes passam. Para quem revisa, parece que só falta aprovar.

A pergunta sobre a venda das 23h50 muda a revisão. Antes de pedir que o agente ajuste a consulta, eu confirmaria com quem usa o relatório a qual dia aquela venda pertence. Se a resposta for “dia 7”, já dá para voltar à tarefa e escrever a regra de um jeito simples. Ao selecionar o dia 7, a venda das 23h50 deve aparecer e uma venda feita às 00h10 do dia seguinte deve ficar de fora. Quem pediu o filtro consegue confirmar esses exemplos, e quem implementa consegue usá-los para testar o resultado.

Com isso resolvido, ainda falta descobrir de onde vem o fuso da loja. Talvez outro relatório já use uma configuração por unidade. Se for o caso, eu indicaria esse trecho na tarefa. É o tipo de informação que alguém da equipe pode conhecer de cabeça, mas que o agente teria de procurar. E, se esse for o padrão dos relatórios, vale registrá-lo no projeto. Na próxima vez que alguém precisar filtrar vendas por data, já vai saber onde procurar a regra e como ela foi aplicada.

Quando o PR voltar, eu começaria a revisão pelos dois exemplos. Dá para cadastrar as vendas, gerar o relatório do dia 7 e conferir o arquivo. Isso também ajuda a avaliar os testes que o agente escreveu. Se eles montam o resultado esperado com a mesma função que calcula o intervalo da consulta, um erro nessa função pode passar despercebido. Com horários definidos na tarefa, o resultado esperado já está combinado antes de alguém rodar o teste.

É aí que eu mudaria a forma de trabalhar com a IA. Se a tarefa fosse só trocar o texto de um botão, eu pediria a alteração e conferiria na tela. Para um relatório usado no fechamento mensal, pediria primeiro que o agente mostrasse como as datas são tratadas hoje. Se ele encontrasse duas formas diferentes de fazer isso no projeto, a equipe poderia escolher qual delas se aplica antes de gerar o código. São alguns minutos de investigação que podem poupar uma rodada inteira de implementação e revisão.

O primeiro PR ficou pronto em minutos, mas a entrega só ficou pronta depois que a equipe confirmou a regra, corrigiu a consulta e conferiu o relatório. É esse tempo que eu levaria em conta para avaliar o ganho. Na próxima tarefa parecida, com a regra documentada e um exemplo de teste no projeto, talvez já dê para pedir a implementação direto. No próximo artigo, quero falar sobre como fazer essa escolha. Quando vale pedir à IA que investigue, quando dá para delegar a implementação e quando é melhor fazer a mudança por conta própria?