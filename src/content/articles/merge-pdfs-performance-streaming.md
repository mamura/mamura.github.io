---
title: "Como reduzi 80% do tempo de merge de PDFs com pré-validação e streaming"
description: "Um caso prático de otimização em sistema legado usando pré-validação, streaming, separação de responsabilidades, fallback controlado e observabilidade."
publishedAt: 2026-05-06
category: "Engenharia de Software"
tags:
  - PHP
  - Performance
  - Sistemas Legados
  - Refatoração
  - Streaming
  - Observabilidade
  - PDF
cover: "/images/articles/merge-pdfs.jpg"
draft: false
featured: true
---

Em um projeto legado, encontrei uma funcionalidade aparentemente simples: combinar vários PDFs em um único arquivo.

Na prática, ela era um ponto recorrente de lentidão, falhas silenciosas e consumo excessivo de memória. O fluxo antigo seguia uma lógica comum em sistemas que crescem com o tempo:

1. Recebia uma lista de arquivos.
2. Tentava combinar tudo diretamente.
3. Só descobria problemas durante o processamento.
4. Em caso de falha, o usuário recebia uma mensagem genérica.
5. Arquivos grandes causavam lentidão e, em alguns casos, estouro de memória.

O problema não estava apenas na biblioteca usada para unir PDFs. O problema estava no fluxo inteiro. 

Antes de pensar em trocar ferramenta, refatorei o processo em etapas menores:

## Pré-validação dos arquivos
Antes de iniciar o merge, passei a validar:
- se o arquivo existia;
- se era realmente um PDF;
- se estava acessível;
- se estava corrompido;
- se havia pendências impeditivas, como assinatura digital;
- se o arquivo base não estava sendo incluído novamente por engano.

Isso evitou gastar processamento com arquivos inválidos e melhorou muito a clareza dos erros.

## Processamento em streaming
O fluxo antigo carregava arquivos inteiros em memória em alguns pontos.

Ajustei o processo para trabalhar com leitura e escrita em fluxo sempre que possível, reduzindo o impacto de arquivos grandes.

Isso trouxe dois ganhos importantes:
- menor consumo de memória;
- maior estabilidade em merges com muitos documentos.

## Separação de responsabilidades
O job que fazia tudo foi quebrado em etapas mais claras:
- preparação dos arquivos;
- validação;
- tentativa de merge via serviço externo;
- fallback local;
- paginação;
- persistência do resultado;
- emissão de evento para o frontend.

Com isso, ficou mais simples testar cada parte isoladamente.

## Fallback controlado
Em vez de simplesmente falhar quando o serviço externo apresentava erro, o sistema passou a ter um fallback local usando FPDI. Mas com uma diferença importante: o fallback também passou a ter validação, logs e tratamento explícito de erro.

Fallback sem observabilidade só troca um problema por outro.

## Resultado
Com essas mudanças, em um cenário anonimizado de teste, o tempo médio de merge caiu aproximadamente 80%.

Além disso, o processo ficou mais previsível:

- menos falhas silenciosas;
- menor consumo de memória;
- mensagens de erro mais úteis;
- fluxo mais testável;
- melhor experiência para o usuário.

A principal lição aqui foi: performance nem sempre melhora trocando biblioteca. Muitas vezes, melhora quando o fluxo deixa de desperdiçar processamento com coisa que já poderia ter sido validada antes. Em sistemas legados, otimização boa não é só “deixar mais rápido”. É deixar mais rápido, mais seguro e mais fácil de manter.