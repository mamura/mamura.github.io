---
title: "Quem decide a arquitetura quando a IA propõe a solução?"
description: " Quem decide é a equipe que vai manter o sistema, e parte dessa decisão é conferir se o problema que justificaria a mudança existe mesmo. Um agente pode sugerir uma boa solução para um cenário que ele presumiu ao ler a tarefa."
publishedAt: 2026-09-30
category: "Engenharia de Software"
series: "Engenharia de Software com IA"
seriesOrder: 6
tags:
  - Inteligência Artificial
  - Agentes de IA
  - Engenharia de Software
  - Revisão de Código
  - Testes Automatizados
cover: "/images/articles/engenharia-software-ia-06.png"
draft: false
featured: true
---

Quando um agente propõe uma mudança de arquitetura, eu gosto de saber em que ele se baseou antes de discutir a solução. Quem decide é a equipe que vai manter o sistema, e parte dessa decisão é conferir se o problema que justificaria a mudança existe mesmo. Um agente pode sugerir uma boa solução para um cenário que ele presumiu ao ler a tarefa. Se a equipe só olha o código pronto, fica fácil discutir a implementação e esquecer de perguntar por que ela foi escolhida.

Imagine que precisamos gerar um PDF com o resumo de um projeto. O agente sugere colocar a geração em uma fila e avisar na tela quando o arquivo estiver pronto. A proposta faz sentido se o PDF levar tempo demais para ser gerado durante a requisição. Mas, antes de aprovar a fila, eu perguntaria de onde veio essa premissa. O agente encontrou um relatório parecido que já causa lentidão? Encontrou um limite de tempo no projeto? Ou está supondo que o arquivo vai demorar porque outros relatórios costumam ser grandes? Cada resposta pede uma verificação diferente.

Nesse caso, eu pediria para ele localizar a geração de PDFs que já existe e mostrar se dá para reaproveitá-la. Se o tamanho dos projetos variar bastante, vale medir o tempo de geração com exemplos representativos, incluindo um dos maiores projetos que a equipe espera atender. Uma medição local ajuda a investigar, mas a comparação que interessa é com o tempo aceitável para quem espera o arquivo e com os limites do ambiente em que a funcionalidade vai rodar. É dessa comparação que sai a decisão sobre a fila.

Se os arquivos forem pequenos e a geração couber com folga no tempo esperado, eu começaria entregando o PDF na própria requisição. A pessoa clica e recebe o arquivo. Se a geração demorar a ponto de prender a tela ou estourar o tempo da requisição, a fila passa a resolver um problema concreto. Nesse caso, também entram no trabalho o acompanhamento do processamento, a forma de avisar que houve uma falha e o lugar de onde a pessoa vai baixar o arquivo depois. Esses detalhes fazem parte do custo da opção, mesmo que o agente consiga escrever o código do worker rapidamente.

Uma vez tomada a decisão, eu registraria o motivo na issue ou, se a escolha for servir de referência para outros relatórios, num registro de decisão arquitetural, o ADR. Se a equipe optar pela geração na requisição, por exemplo, o registro pode guardar quais tamanhos de projeto foram avaliados, qual tempo foi considerado aceitável e em que situação faria sentido reconsiderar a fila. Assim, quando aparecer um relatório maior, quem pegar a tarefa consegue comparar as condições novas com as que levaram à decisão original.

A IA pode ajudar a encontrar código parecido, levantar opções e até preparar um teste para medir o tempo de geração. Antes de implementar, a equipe precisa conferir as premissas e aceitar o custo da escolha. Depois, ainda há outra pergunta. Como verificar se o código gerado respeita a decisão que foi tomada? É disso que trata o próximo artigo. **Como testar código que a IA ajudou a escrever?**