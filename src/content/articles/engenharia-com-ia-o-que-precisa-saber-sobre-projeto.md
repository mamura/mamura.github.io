---
title: "O que a IA precisa saber sobre o seu projeto?"
description: "Saiba o que registrar no repositório, o que incluir na descrição da tarefa e como lidar com instruções desatualizadas ao trabalhar com agentes de IA."
publishedAt: 2026-09-09
category: "Engenharia de Software"
series: "Engenharia de Software com IA"
seriesOrder: 3
tags:
  - Inteligência Artificial
  - Agentes de IA
  - Engenharia de Software
  - Revisão de Código
  - Testes Automatizados
cover: "/images/articles/engenharia-software-ia-03.png"
draft: false
featured: true
---

Quando passo uma tarefa para um agente de IA, separo o contexto em duas partes. Na tarefa, coloco o que vale para aquela mudança. No repositório, deixo o que deve servir para o próximo trabalho também. Se estou pedindo para ajustar uma mensagem de erro na tela de cadastro, a tarefa precisa dizer qual mensagem deve mudar e quando ela aparece. Já o lugar onde ficam as traduções e o comando para testar essa tela são informações que outras tarefas vão usar.

Essa separação ajuda a explicar por que ter acesso ao repositório é só parte da história. Um agente pode procurar outras mensagens de erro e encontrar dois jeitos de escrever a mesma coisa. As telas antigas colocam o texto direto no componente. As mais novas usam o catálogo de traduções. Os dois padrões existem, e o código sozinho pode dar a impressão de que ambos são aceitos para mudanças novas. Quem trabalha no projeto talvez saiba que os textos antigos estão sendo migrados aos poucos. É essa decisão que vale deixar registrada.

Eu colocaria a orientação perto de onde ela vai ser usada. Se ela vale para todo o frontend, pode ficar na documentação dessa parte do projeto, com um link nas instruções gerais do repositório. Ali, basta dizer que mensagens novas entram no catálogo de traduções e apontar uma tela que já segue o padrão. Na tarefa, eu acrescentaria uma informação diferente. O texto a ser alterado é o aviso exibido quando o envio falha. As mensagens de validação dos campos ficam como estão. Assim, o agente tem uma referência para trabalhar e sabe até onde vai a alteração.

A mesma ideia vale para os comandos. Se existe um script no projeto para rodar os testes do frontend, prefiro apontar para ele no guia de contribuição. Se cada tarefa traz sua própria cópia do comando, uma atualização pode deixar várias instruções antigas circulando ao mesmo tempo. No pedido, eu só especificaria a verificação que interessa naquele caso. Rodar os testes da tela de cadastro e conferir o aviso quando o envio falha.

Mesmo uma documentação curta pode ficar desatualizada. A tela indicada como exemplo pode ter sido removida, ou o catálogo de traduções pode ter mudado de lugar. Se o agente encontrar uma diferença entre o guia e o código, eu pediria que mostrasse os dois antes de seguir. A equipe consegue então dizer se a instrução antiga precisa ser corrigida ou se o código encontrado faz parte de uma migração em andamento. Quando der para corrigir a referência na origem, a próxima tarefa já começa com a informação certa.

Um jeito simples de começar é prestar atenção no que você repete. Se em toda tarefa de frontend você precisa explicar onde ficam as traduções, qual componente usar ou como rodar os testes, essas orientações provavelmente merecem um lugar no projeto. Já as informações sobre qual tela alterar, o comportamento esperado e o que precisa ser preservado fazem mais sentido na tarefa. Eu começaria pelas instruções que a equipe já usa no dia a dia e acrescentaria exemplos à medida que surgissem dúvidas reais.

Com o contexto no lugar, ainda falta escrever um pedido que deixe claro o que deve acontecer. Uma tela de referência pode mostrar onde guardar a mensagem, mas a descrição da tarefa ainda precisa dizer em que situação ela aparece. No próximo artigo, quero olhar para essa diferença. **Uma boa especificação muda quando quem implementa é um agente?**