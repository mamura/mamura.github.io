---
title: "Quando vale a pena delegar uma tarefa à IA?"
description: "Como decidir quando usar um agente de IA para investigar ou implementar uma mudança e quando vale mais a pena fazer a tarefa por conta própria."
publishedAt: 2026-09-02
category: "Engenharia de Software"
series: "Engenharia de Software com IA"
seriesOrder: 2
tags:
  - Inteligência Artificial
  - Agentes de IA
  - Engenharia de Software
  - Revisão de Código
  - Testes Automatizados
cover: "/images/articles/engenharia-software-ia-02.png"
draft: false
featured: true
---

Eu delego uma tarefa à IA quando consigo dizer como vou saber que ela foi concluída e espero gastar menos tempo orientando o agente, revisando e corrigindo o resultado do que fazendo a mudança por conta própria. Se eu ainda preciso descobrir o que fazer, delego a investigação. Se já sei onde mexer e consigo resolver em dois minutos, geralmente vou direto ao código.

Pense em duas tarefas que aparecem no mesmo PR. A primeira é corrigir o texto de um botão. Se o arquivo já está aberto, editar a frase e conferir na tela pode ser mais rápido do que explicar ao agente qual botão é, esperar a alteração e abrir o diff. A segunda é aplicar uma mudança já definida a doze formulários que usam o mesmo componente de erro. Aqui, faz sentido passar um formulário como referência, delimitar quais telas entram na tarefa e pedir que o agente repita a mudança. Na revisão, eu consigo comparar as alterações com o exemplo e rodar os testes dos formulários. O tempo de preparar o pedido se paga porque o mesmo trabalho seria repetido em vários lugares.

A decisão muda se a tarefa vier descrita apenas como “padronizar os erros dos formulários”. Alguns podem exibir mensagens por campo, outros podem mostrar um aviso geral quando o envio falha. Antes de decidir o que padronizar, eu pediria ao agente que listasse os comportamentos existentes e apontasse onde cada um é implementado. O resultado que eu quero é um mapa para tomar a decisão. Se a equipe decidir manter os erros de campo e padronizar só o aviso geral, já existe uma parte do trabalho que pode ser delegada com um limite claro.

Mesmo com um pedido claro, ainda vale olhar para o que custa verificar a mudança. Imagine que os doze formulários pareçam iguais, mas dois deles também enviem dados para sistemas externos. Se o agente precisar mexer no fluxo de envio para alterar a exibição do erro, eu conduziria essa parte. Primeiro escolheria onde separar a exibição do erro do envio e montaria uma forma de verificar o comportamento dessas integrações. Depois, poderia delegar os testes dos outros formulários ou a aplicação da mudança nas telas que já usam o componente da mesma forma. Assim dá para aproveitar a IA na parte repetitiva enquanto a equipe resolve o trecho que exige mais cuidado.

Na prática, antes de passar a tarefa, eu tento completar duas frases. **“Vou considerar essa mudança pronta quando…”** e **“Vou conferir isso fazendo…”**. Para os formulários, eu poderia dizer que o aviso geral deve aparecer quando o servidor falhar e que as mensagens por campo devem continuar no mesmo lugar. A verificação seria simular os dois tipos de erro. Se eu consigo fazer essa conferência com pouco esforço e a implementação toma mais tempo, delegar faz sentido. Se a segunda frase exige mapear integrações, preparar um ambiente que ainda não existe ou ler quase todo o código gerado para entender seus efeitos, eu reduziria o escopo antes de pedir uma implementação.

No próximo artigo, quero pegar o caso em que já vale delegar e olhar para o que vai junto com a tarefa. **O que a IA precisa saber sobre o seu projeto?**