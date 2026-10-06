---
title: "Filas bem comportadas: idempotência, retries e eventos no Laravel"
description: "Entenda como desenhar Jobs mais seguros no Laravel usando idempotência, retries com critério, eventos no momento certo e estratégias de recuperação."
publishedAt: 2026-04-28
category: "Engenharia de Software"
tags:
  - Laravel
  - PHP
  - Filas
  - Jobs
  - Idempotência
  - Eventos
cover: "/images/articles/filas-laravel.jpg"
draft: false
featured: true
---

Filas bem comportadas não são as que “funcionam”. São as que falham sem quebrar o sistema.

No Laravel, usar filas é relativamente simples. O problema começa quando o Job é executado duas vezes, falha no meio do processo ou dispara eventos duplicados.

E isso acontece mais do que parece. Uma fila bem desenhada precisa considerar três pontos:

## 1. Idempotência

O Job deve poder rodar mais de uma vez sem causar efeito duplicado. Exemplo: se você está gerando uma fatura, antes de criar uma nova, verifique se ela já existe.
```
if ($order->invoice()->exists()) {
    return;
}

$invoice = $this->invoiceService->createFromOrder($order);
```

## 2. Retries com critério

Nem toda falha merece nova tentativa. Erro temporário de API externa? Pode tentar novamente. Erro de validação ou dado inconsistente? Provavelmente deve falhar rápido.

public int $tries = 3;

public function backoff(): array
{
    return [60, 300, 900];
}
## 3. Eventos no momento certo

Evite disparar eventos antes da persistência estar concluída. Se o Job salva dados, gera arquivo, atualiza status e notifica o frontend, a ordem importa. Um evento disparado cedo demais pode mostrar uma informação que ainda não existe de fato.
```
DB::transaction(function () use ($order) {
    $invoice = $this->invoiceService->createFromOrder($order);

    event(new InvoiceCreated($invoice));
});
```

Fila não é só “jogar para background”. É desenho de consistência, recuperação e rastreabilidade. Quando um Job falha, ele precisa deixar claro:
- o que foi processado;
- o que ficou pendente;
- se pode tentar de novo;
- se a tentativa vai gerar duplicidade;
- quem deve ser notificado.

No Laravel, ferramentas como tries, backoff, failed(), logs estruturados, eventos e transações ajudam bastante. Mas a parte mais importante continua sendo o desenho da regra.

Um Job bem comportado não é aquele que nunca falha. É aquele que, quando falha, não transforma uma instabilidade em bagunça operacional.

Salve esse checklist para revisar seus próximos Jobs no Laravel.