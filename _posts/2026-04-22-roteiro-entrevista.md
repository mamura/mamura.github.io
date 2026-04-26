---
layout: post
title:  "Roteiro entrevista"
author: mamura
categories: [artigos]
tags: [recipe, entrevista, roteiro, dica, emprego, programador, senior]
image: 'assets/images/roteiro-entrevista.jpg'
description: 'Como explicar arquitetura complexa em entrevista sem mostrar código'
featured: true
hidden: true
date: 2026-04-22 13:06:31
rating: 5
---
Explicar arquitetura em uma entrevista técnica pode ser um desafio. Principalmente quando você não pode expor código por questões de confidencialidade.

A boa notícia é que você **não precisa mostrar código** para demonstrar senioridade. O que realmente diferencia um desenvolvedor experiente não é a sintaxe que ele escreve, mas **como ele pensa, decide e resolve problemas**.

Neste artigo, você vai aprender um roteiro simples e direto de **5 minutos** para explicar qualquer arquitetura de forma clara, profissional e convincente.

---
## Estrutura do roteiro
O modelo é baseado em quatro pilares:

> **Problema → Decisão → Trade-off → Resultado**

A seguir, como aplicar isso na prática.

---
## 1. Contexto (30–40 segundos)
Comece situando o cenário. Evite detalhes desnecessários. Foque no tipo de sistema e no problema geral.

**Exemplo:**
> “Eu estava trabalhando em um sistema legado, bem acoplado, com regras de negócio espalhadas.”

Aqui você prepara o terreno para o restante da explicação.

---
## 2. Problema real (40–60 segundos)
Agora mostre o impacto técnico e no time. Isso é fundamental para demonstrar maturidade. Você pode citar:

- dificuldade de manutenção
- risco de mudanças
- lentidão no desenvolvimento
- bugs recorrentes

**Exemplo:**
> “Qualquer alteração gerava efeito cascata. O time evitava mexer em partes críticas por medo de quebrar o sistema.”

Aqui você deixa claro que não era apenas um problema técnico — era um problema de negócio.

---
## 3. Decisão de arquitetura (1–2 minutos)
Esse é o núcleo da explicação. Explique:
- o que você fez 
- por que fez

Sem código. Foque em conceitos como:
- separação de responsabilidades 
- desacoplamento
- isolamento de regras de negócio

**Exemplo:**
> “Eu reorganizei o sistema em camadas (Domain, Application e Infrastructure), separei as regras de negócio e passei a usar contratos para isolar dependências externas.”

Se quiser aprofundar, você pode mencionar:
- Use Cases
- Repository Pattern
- DTOs
- Strategy Pattern

Mas sempre no nível conceitual.

---

## 4. Trade-offs (40–60 segundos)
Aqui está o ponto que mais diferencia um perfil sênior. Mostre que você entende que toda decisão tem custo.

**Exemplo:**
> “A solução aumentou a quantidade de classes e exigiu mais disciplina do time, mas trouxe previsibilidade e facilitou testes.”

Isso demonstra pensamento crítico e equilíbrio técnico.

---

## 5. Resultado (40–60 segundos)
Agora mostre o impacto. Evite frases genéricas. Seja objetivo. Você pode citar:

- redução de bugs
- melhoria na velocidade de entrega
- aumento de testabilidade
- facilidade de evolução

**Exemplo:**

> “Depois da mudança, conseguimos evoluir funcionalidades sem quebrar o legado e aumentamos a cobertura de testes.”

---

## 6. Fechamento (20–30 segundos)
Finalize conectando tudo.

**Exemplo:**

> “O objetivo não foi só organizar o código, mas permitir evolução segura do sistema.”

---

## Conclusão

Você não precisa mostrar código para provar que sabe arquitetura. Se você consegue explicar:
- o problema 
- a decisão
- os trade-offs
- o resultado

você já demonstra exatamente o que as empresas procuram: **capacidade de tomar decisões técnicas conscientes**.

---

## Resumo rápido (para memorizar)

> **Problema → Decisão → Trade-off → Resultado**

Use essa estrutura e você consegue explicar praticamente qualquer arquitetura em poucos minutos — com clareza e sem expor código sensível.
