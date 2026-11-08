---
title: "Como planejar mudanças que você consegue revisar?"
description: "Veja como dividir uma implementação com IA em etapas verificáveis e definir o que revisar antes de avançar para a próxima mudança."
publishedAt: 2026-09-23
category: "Engenharia de Software"
series: "Engenharia de Software com IA"
seriesOrder: 5
tags:
  - Inteligência Artificial
  - Agentes de IA
  - Engenharia de Software
  - Revisão de Código
  - Testes Automatizados
cover: "/images/articles/engenharia-software-ia-05.png"
draft: false
featured: true
---

Quando peço a um agente para implementar uma funcionalidade, já tento definir em que ponto vou parar para olhar o que ele fez. Se eu só consigo avaliar a mudança depois que a tela, a API e os testes estão prontos, qualquer ajuste no começo pode me obrigar a revisar tudo de novo. Antes de dividir o trabalho, eu penso em quais decisões consigo conferir separadamente e no que preciso ter em mãos para fazer essa conferência.

Imagine uma tarefa para permitir que uma pessoa silencie as notificações de um projeto. A regra já está definida. Se ela silenciar o projeto A, para de receber os avisos dele e continua recebendo os do projeto B. Quem nunca alterou a preferência continua recebendo os avisos normalmente. Dá para pedir ao agente que implemente tudo de uma vez, desde o botão até a rotina que envia as notificações. Mas eu começaria pela parte em que um erro é mais fácil de esconder. O botão pode mostrar que o projeto está silenciado mesmo que o sistema continue enviando os avisos.

Na primeira etapa, eu pediria ao agente que implementasse a preferência por pessoa e por projeto e fizesse a rotina de envio respeitá-la. Os testes dessa regra entrariam junto. Eu usaria dois projetos, silenciaria um deles e rodaria o envio para verificar que só o outro gera uma notificação para aquela pessoa. Também conferiria o que acontece com alguém que nunca configurou a preferência. Com isso, já consigo revisar uma mudança de comportamento antes de discutir como ela aparece na tela.

Depois que essa parte estiver conferida, dá para passar para a interface. A revisão agora tem outra pergunta. O botão mostra o estado que foi salvo e continua mostrando o estado certo depois de recarregar a página? A resposta depende da primeira etapa, mas o revisor já sabe onde olhar se algo falhar. As duas etapas podem entrar no mesmo PR se a funcionalidade fizer sentido como uma única entrega. A divisão serve para orientar a implementação e a revisão ao longo do trabalho.

O que eu pediria ao agente, na prática, é que pare quando terminar a primeira etapa e mostre o que mudou, quais testes rodou e o que ficou pendente. Isso dá espaço para reagir a uma descoberta. Se ele encontrar dois caminhos de envio, por exemplo, eu quero entender quais notificações passam por cada um antes de aceitar uma proposta para unificar as rotinas. Pode bastar aplicar a preferência nos dois lugares. Pode fazer sentido separar uma refatoração em outra tarefa. Essa escolha fica mais fácil enquanto o restante da funcionalidade ainda está em aberto.

Para saber se o plano ficou bom, eu tento descrever **o que vou conferir no fim de cada etapa**. “Criar a tabela” diz o que foi feito, mas ainda deixa a regra sem uma forma de ser verificada. “Silenciar o projeto A e confirmar que o aviso do projeto B continua chegando” já indica o resultado que espero ver. Quando consigo fazer essa conferência antes de seguir, fica mais fácil retomar o trabalho, pedir um ajuste e entender o que a próxima mudança acrescentou.

Em algum desses pontos, o agente pode apresentar duas soluções que passam pelos mesmos testes, mas têm efeitos diferentes sobre a estrutura do projeto. É a decisão que quero discutir no próximo artigo. **Quem decide a arquitetura quando a IA propõe a solução?**