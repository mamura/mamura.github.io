---
title: "Independência também é uma questão de software"
description: "Uma reflexão sobre dependências em software, autonomia de times e o papel da liderança técnica na construção de sistemas e equipes menos acoplados."
publishedAt: 2026-09-07
category: "Carreira & Mercado"
tags:
  - Tech Leadership
  - Liderança Técnica
  - Arquitetura de Software
  - Autonomia
  - Times de Engenharia
  - Gestão de Conhecimento
cover: "/images/articles/independencia.jpg"
draft: false
featured: true
---

Hoje é 7 de setembro. No Brasil, a data imediatamente nos remete à ideia de independência. E, pensando sobre essa palavra, percebi que ela também aparece de uma forma interessante no desenvolvimento de software.

À primeira vista, falar em software independente parece até contraditório. Praticamente tudo o que construímos depende de alguma coisa: frameworks, bibliotecas, bancos de dados, APIs, serviços externos, provedores de cloud e uma infinidade de ferramentas que fazem parte do nosso dia a dia. Mesmo quando tentamos reduzir dependências técnicas, ainda dependemos das pessoas que projetam, desenvolvem e mantêm esses sistemas.

Por isso, talvez independência, em software, não seja sobre deixar de depender. **Seja sobre ter autonomia suficiente para evoluir sem ficar refém das nossas dependências.**

## Dependências fazem parte do desenvolvimento

Não existe nada de errado em depender de um framework, de uma biblioteca ou de um serviço externo. Na maioria das vezes, seria um enorme desperdício tentar construir tudo do zero apenas para evitar essas relações. O problema começa quando uma dependência passa a determinar demais o que podemos fazer.

Isso acontece quando trocar uma biblioteca exige alterações espalhadas por toda a aplicação, quando uma mudança em um módulo provoca efeitos inesperados em vários outros ou quando regras importantes do negócio estão tão ligadas ao framework que se torna difícil imaginar uma coisa sem a outra. E é nesse momento que começamos a perceber a diferença entre simplesmente **ter dependências** e estar **excessivamente acoplado a elas**.

Uma arquitetura saudável não precisa eliminar dependências. Ela precisa estabelecer limites claros para elas. Quando conseguimos substituir uma implementação sem reescrever boa parte do sistema, evoluir um módulo sem quebrar os demais ou testar uma regra de negócio sem precisar levantar toda a infraestrutura da aplicação, existe um certo grau de independência ali.

Não porque aquela parte do sistema não dependa de nada, mas porque conseguimos controlar melhor essas relações. Nesse sentido, **autonomia também é uma decisão de arquitetura**.

## Mas código não é a única dependência de um sistema

Existe outro tipo de dependência que talvez seja ainda mais perigosa porque dificilmente aparece em um diagrama de arquitetura. A dependência de pessoas.

Quem nunca trabalhou em um projeto no qual determinadas frases eram completamente normais?

“Só fulano sabe mexer nisso.”

“Precisamos esperar o Tech Lead.”

“Não sei por que foi feito dessa maneira.”

“Melhor não alterar essa parte porque ninguém sabe exatamente como funciona.”

Esse cenário não é muito diferente de uma aplicação excessivamente acoplada. A diferença é que, em vez de uma classe, módulo ou serviço concentrar responsabilidades demais, é uma pessoa que concentra contexto, conhecimento e capacidade de decisão.

Enquanto essa pessoa está disponível, talvez o problema nem seja tão evidente. Ela responde às dúvidas, revisa as implementações, resolve os problemas mais difíceis e ajuda o time a tomar decisões. Mas basta ela sair de férias, mudar de projeto ou deixar a empresa para descobrirmos quanto do funcionamento daquele time dependia dela. E é justamente aqui que arquitetura de software e liderança técnica começam a se encontrar.

## O paradoxo da liderança técnica

Durante muito tempo, a imagem de uma boa liderança técnica esteve associada à pessoa que sabia responder tudo. Era quem conhecia profundamente o sistema, resolvia os problemas mais difíceis e tinha a palavra final sobre praticamente todas as decisões técnicas.

Existe valor em ter alguém com experiência e capacidade para orientar o time. O problema aparece quando essa referência se transforma em uma dependência.

Se toda decisão precisa passar pelo Tech Lead, ele rapidamente se torna um gargalo. Se apenas ele conhece determinadas partes do sistema, criamos um ponto único de conhecimento. Se o restante do time evita tomar decisões sem sua aprovação, diminuímos justamente aquilo que uma boa liderança deveria ajudar a desenvolver: autonomia.

Isso cria um paradoxo interessante. **Quanto melhor o trabalho de uma liderança técnica, menos o time deveria depender dela para funcionar no dia a dia.**

Isso não significa tornar o Tech Lead desnecessário. Significa mudar o tipo de valor que ele entrega. Em vez de simplesmente responder perguntas, compartilhar o contexto necessário para que outras pessoas consigam encontrar respostas. Em vez de tomar todas as decisões, ajudar a construir critérios para que o próprio time consiga decidir. Em vez de concentrar conhecimento, criar mecanismos para distribuí-lo por meio de documentação, code reviews, discussões técnicas, pareamento e troca constante de conhecimento.

A liderança deixa de ser apenas uma fonte de respostas e passa a ser uma forma de ampliar a capacidade do time.

## Independência não significa isolamento

Talvez essa seja a parte mais interessante da analogia. Um módulo independente não é um módulo que nunca conversa com os demais. Um serviço não deixa de consumir APIs. Uma aplicação não deixa de usar bibliotecas. Da mesma forma, um desenvolvedor autônomo não deixa de pedir ajuda e um time autônomo não deixa de precisar de liderança. **Independência não significa ausência de relações. Significa construir essas relações de maneira que elas não eliminem nossa capacidade de evoluir.**

No software, fazemos isso criando limites, contratos e responsabilidades claras. Nos times, fazemos algo parecido ao compartilhar contexto, distribuir conhecimento, desenvolver pessoas e criar espaço para que decisões sejam tomadas sem depender constantemente de uma única pessoa.

Talvez por isso arquitetura e liderança técnica tenham mais em comum do que parece. Ambas lidam com dependências, responsabilidades, comunicação e limites. E, quando funcionam bem, conseguem produzir algo muito parecido: **autonomia sem isolamento**.

No fim, um software saudável não é aquele que não possui dependências. É aquele que escolhe conscientemente de quem depende e consegue continuar evoluindo quando essas relações mudam. Talvez um time saudável também seja assim.

## E é daqui que quero continuar

Tenho pensado bastante sobre o papel do Tech Lead e, principalmente, sobre como ele vai muito além de ser a pessoa com maior conhecimento técnico do time. Arquitetura, decisões técnicas, comunicação, desenvolvimento de pessoas, compartilhamento de conhecimento, conflitos, autonomia e responsabilidade fazem parte desse papel de maneiras que nem sempre ficam claras quando começamos a exercer uma liderança técnica.

Por isso, este texto também é o ponto de partida para uma série de conteúdos que quero publicar sobre **Tech Leadership**. MInha ideia é explorar essas situações a partir da prática: o que muda quando deixamos de ser responsáveis apenas pelo nosso código e passamos a influenciar as decisões, o ambiente e o desenvolvimento de um time inteiro.

E talvez seja apropriado começar justamente falando de independência. Porque uma boa liderança não deveria construir seguidores que dependem dela para tudo. **Deveria ajudar a construir pessoas e times capazes de seguir em frente.**