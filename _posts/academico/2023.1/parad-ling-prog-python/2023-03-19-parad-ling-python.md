---
layout: post
title:  "Paradigmoas e linguagem Python"
tree: "Paradigmoas e linguagem Python"
image: ''
date:   2023-03-19 14:31:27
tags:
- faculdade, sistemas de informação
description: ''
categories:
- faculdade
---

Desde o surgimento dos computadores, centenas de linguagens de programação vêm sendo criadas com o objetivo de permitir ao programador mais eficiência e conforto ao escrever seus códigos.

Muitos são os problemas que hoje em dia são solucionados com a ajuda de softwares, escritos sempre em uma linguagem de programação (que por sua vez também é um software) e muitas vezes esses problemas demandam diferentes pensamentos computacionais em sua solução.

A classificação das linguagens em paradigmas permite que entendamos qual é o melhor deles para solucionar determinado problema e, a partir daí, escolher a linguagem de programação (pertencente a esse paradigma) mais adequada, conforme características e especificidades do contexto em que se aplica o problema.

## Classificação das linguagens
### Razões para estudarmos linguagens de programação
#### Linguagem de programação e produtividade do programador
Um programa de computador, ou software, é um conjunto de instruções a fim de orientar o hardware do computador para o que deve ser feito. O software pode ser classificado em aplicativo ou básico.
- **Software aplicativo:** Ou, simplesmente, aplicativo ou app (mundo mobile), que visa oferecer ao usuário facilidades para realizar uma tarefa laboral ou de lazer.
- **Software básicio:** Compreende programas essenciais ao funcionamento do computador. O sistema operacional é o principal exemplo.

Uma linguagem de programação é um software básico, que permite ao programador escrever outros programas de computador, seja ela um software aplicativo ou básico.

A codificação de um programa em uma linguagem de programação, chama-se programa-fonte, que ainda não pode ser entendido e executado pelo hardware do computador, pois este apenas entende a linguagem de máquina ou linguagem binária, na qual cada instrução é uma sequência de bits (0 ou 1).

Uma linguagem de programação é um formalismo com um conjunto de símbolos, palavras reservadas, comandos, regras sintáticas e semânticas e outros recursos, que permitem especificar instruções de um programa.

As linguagens de programação surgiram da necessidade de livrar o programador dos detalhes mais íntimos das máquinas em que a programação é feita, permitindo a programação em termos mais próximos ao problema, ou em nível mais alto.

A produtividade de um programador ao escrever código em uma linguagem de programação está intimamente relacionada à facilidade de aprendizado, leitura e escrita de programas naquela linguagem, somada a expertise do programador no contato com a linguagem. Isto é, quanto mais o programador conhecer as propriedades superlativas daquela linguagem, melhores e mais eficientes serão os códigos escritos.

> O aspecto mais importante, mas também o mais elusivo de qualquer ferramenta, é sua influência nos hábitos daqueles que se treinam no seu uso. Se a ferramenta é uma linguagem de programação, essa influência é, gostemos ou não, uma influência em nosso hábito de pensar. (Edsger W. Dijkstra)

#### O papel da abstração nas linguagens de programação
Abstração é o processo de identificação das qualidades e/ou propriedades relevantes para o contexto que está sendo analisado e desprezando o que seja irrelevante. Um modelo é uma abstração da realidade.

Um programa de computador é um modelo, pois representa a solução de um problema em termos algorítmicos. Assim sendo, a abstração permeia toda a atividade de programação de computadores.

A linguagem de máquina foi a primeira a ser criada para a prática de programação. Trata-se da linguagem nativa do computador, a única que ele, de fato, compreende. Uma linguagem muito complicada para ser entendida pelas pessoas, em que um comando que soma 2 números, é formado por uma sequência de 1 e 0, muito difícil de ser memorizada, usada e, mais ainda, de ser entendida por terceiros.

As primeiras linguagens de programação, porém, não reconheciam o papel crucial que a abstração desempenha na programação. Por exemplo, no início da década de 1950, o único mecanismo de abstração fornecido pela linguagem de montagem, ou Assembly, em relação às linguagens de máquina eram os nomes simbólicos.

O programador podia empregar termos relativamente autoexplicativos (nomes simbólicos) para nomear códigos de operação (ADD = soma, SUB = subtração, M = multiplicação e DIV = divisão) e posições de memória. A linguagem de montagem (Assembly) melhorou a vida do programador, porém obrigava-o a escrever 1 linha de código para cada instrução que a máquina deve executar, forçando-o a pensar como se fosse uma máquina.

Um pouco mais adiante, visando a aumentar o poder de abstração das linguagens de forma a permitir uma melhor performance dos programadores, surgem as linguagens de alto nível, próximas à linguagem humana e mais distantes das linguagens Assembly e de máquina.

A tabela, a seguir, exibe, à esquerda, um programa-fonte, escrito numa linguagem de alto nível, a linguagem Python. Ao centro, temos o código equivalente na linguagem Assembly para o sistema operacional Linux e, à direita, o respectivo código na linguagem de máquina, de um determinado processador. Observe:



| Linguagem Python | Assembly | Linguagem de máquina |
| ---------------- | -------- | -------------------- |
| ```
def swap(self, v, k):
temp = self.v[k];
self.v[k] =
self.v[k+1];
self.v[k+1]= temp; | ```
swap:
Muli $2,$5,4
Add $2,$4,$2
Lw $15,0($2)
Lw $16,4($2)
Sw $16,0($2)
Sw $15,4($2)
Jr $31 | ```
00000000001111111111100000000001
00011111111000000111000011111101
11111000001100000111111110000000
10000000100000001000000010000000
00000000010000000001000000000010
00000000000000001111000010010101
00000000111000111111001111111111 |

## Critérios de avaliação de linguagens

## Paradigmas e suas características

## Métodos de implementação das linguagens