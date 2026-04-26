---
layout: post
title:  "Checklist de testes unitários"
author: mamura
categories: [cookbooks, artigos]
tags: [recipe, entrevista, roteiro, dica, emprego, programador, senior]
image: 'assets/images/checklist.jpg'
description: 'Checklist de testes de unidade com Pest para Jobs & Services no Laravel'
featured: true
hidden: true
date: 2026-04-22 13:06:31
rating: 5
---
Testar uma aplicação Laravel vai muito além de verificar se uma rota retorna status 200.

Em projetos reais, principalmente sistemas legados ou aplicações corporativas, boa parte da complexidade não está no controller. Ela costuma estar em classes como Services, Use Cases, Jobs, Repositories, validadores, integradores externos e processos assíncronos.

É nesse ponto que os testes de unidade começam a fazer diferença.

Quando bem escritos, eles ajudam a validar regras de negócio, proteger comportamentos importantes e permitir refatorações com mais segurança. Quando mal escritos, viram apenas uma coleção de testes frágeis, acoplados à implementação interna e difíceis de manter.

Neste artigo, vamos montar um checklist prático para testar Jobs e Services em Laravel utilizando Pest PHP, com foco em clareza, isolamento e manutenção.

---
## Por que testar Jobs e Services?
Em uma aplicação Laravel bem organizada, o controller normalmente deveria ser uma camada fina.

Ele recebe a requisição, valida os dados, chama uma classe responsável pela regra de negócio e devolve uma resposta.

Por exemplo:
```php
public function store(StoreDocumentRequest $request, UploadDocumentService $service)
{
    $document = $service->execute($request->validated());

    return response()->json($document, 201);
}
```

Nesse exemplo, o controller não deveria conter a complexidade do upload, validação de regras, persistência, envio para storage, geração de logs ou disparo de eventos.

Essa lógica tende a ficar em classes como:
```php
UploadDocumentService
ProcessDocumentJob
CombinePdfFilesService
ImportCsvService
GenerateReportService
SendNotificationJob
```

Essas classes são ótimas candidatas para testes de unidade porque concentram comportamento relevante da aplicação.

Testar essas camadas permite responder perguntas como:
- O serviço retorna o resultado esperado?
- A regra de negócio está sendo respeitada?
- O job trata falhas corretamente?
- A aplicação se comporta bem quando uma API externa falha?
- O processamento evita duplicidade?
- O storage foi chamado corretamente?
- Eventos ou notificações foram disparados quando deveriam?

Em outras palavras: testar Jobs e Services é testar o coração da aplicação.

---
## Teste de unidade não é teste de tudo
Um erro comum é chamar qualquer teste automatizado de “teste unitário”. Nem todo teste que usa Pest ou PHPUnit é necessariamente um teste de unidade.

Um teste de unidade deve validar uma unidade específica de comportamento, preferencialmente com o mínimo possível de dependências externas.

Se o teste depende de banco real, fila real, API real, storage real e autenticação real, provavelmente ele está mais próximo de um teste de integração ou funcional.

Isso não é necessariamente ruim. Testes de integração são importantes. Mas é importante saber o que está sendo testado.

Para Services e Jobs, uma boa estratégia costuma ser combinar:
- testes de unidade para regras isoladas;
- testes de integração para validar comunicação entre camadas;
- testes de feature para validar endpoints e fluxos completos.

O problema acontece quando tudo vira teste de feature. A suíte fica lenta, frágil e difícil de depurar.

---
## Pest PHP em poucas palavras
Pest é uma camada mais expressiva sobre o PHPUnit. Ele permite escrever testes com uma sintaxe mais limpa e fluida.

Um teste simples em Pest fica assim:
```php
it('calculates the total amount correctly', function () {
    $service = new CalculateOrderTotalService();

    $total = $service->execute([
        ['price' => 100, 'quantity' => 2],
        ['price' => 50, 'quantity' => 1],
    ]);

    expect($total)->toBe(250);
});
```

A grande vantagem é a legibilidade.O teste quase parece uma frase:
> “it calculates the total amount correctly”

Isso ajuda bastante quando a suíte começa a crescer.

---

## Checklist prático para testar Jobs e Services
### 1. Entenda a responsabilidade da classe
Antes de escrever qualquer teste, a primeira pergunta deve ser:

**O que essa classe realmente faz?**

Essa pergunta parece simples, mas evita muitos testes ruins.

Um Service, por exemplo, pode ter responsabilidades diferentes:
- validar uma regra de negócio;
- calcular um valor;
- persistir uma entidade;
- orquestrar outros serviços;
- chamar uma integração externa;
- transformar dados;
- disparar eventos;
- gerar arquivos;
- consultar dados externos.

Já um Job normalmente representa uma tarefa assíncrona:
- processar uma importação;
- enviar um e-mail;
- combinar arquivos;
- sincronizar dados;
- gerar relatórios;
- consumir uma fila;
- chamar uma API externa.

O teste precisa refletir essa responsabilidade.

Exemplo ruim:
```php
it('calls validate method', function () {
    // ...
});
```

Esse teste está muito preso à implementação.

Exemplo melhor:
```php
it('rejects invalid documents before processing', function () {
    // ...
});
```

Aqui o foco está no comportamento esperado. Antes de testar, defina o comportamento da classe em linguagem simples.

Por exemplo:
> “Dado um arquivo PDF válido, o serviço deve gerar um novo arquivo combinado.”

Ou:
> “Dado um erro na API externa, o job deve registrar a falha e não interromper a fila.”

Esse tipo de frase ajuda a encontrar bons cenários de teste.

---
## 2. Teste comportamento, não detalhes internos
Um bom teste deve proteger o comportamento da aplicação, não a implementação exata.

Isso significa que, em geral, você não deveria testar diretamente métodos privados, estruturas internas ou detalhes que podem mudar durante uma refatoração sem alterar o resultado final.

Imagine um serviço de combinação de PDFs:
```php
class PdfCombineService
{
    public function combine(array $files): string
    {
        $this->validateFiles($files);
        $this->prepareTemporaryDirectory();
        $this->mergeFiles($files);

        return $this->outputPath();
    }

    private function validateFiles(array $files): void
    {
        // ...
    }

    private function prepareTemporaryDirectory(): void
    {
        // ...
    }

    private function mergeFiles(array $files): void
    {
        // ...
    }

    private function outputPath(): string
    {
        // ...
    }
}
```

Um teste ruim tentaria validar cada método privado isoladamente. Mas esses métodos são detalhes internos da classe. Eles podem mudar amanhã.

Um teste melhor validaria o comportamento público:
```php
it('combines valid pdf files and returns the output path', function () {
    $service = new PdfCombineService();

    $output = $service->combine([
        __DIR__ . '/../../Fixtures/pdfs/a.pdf',
        __DIR__ . '/../../Fixtures/pdfs/b.pdf',
    ]);

    expect($output)->toBeString();
    expect(file_exists($output))->toBeTrue();
});
```

O teste não precisa saber se internamente a classe usa FPDI, Ghostscript, API externa ou qualquer outra estratégia. Ele precisa garantir que, dadas entradas válidas, o resultado esperado acontece.

Esse princípio deixa os testes mais resilientes. Você consegue refatorar o código interno sem quebrar testes desnecessariamente.

---
### 3. Isole dependências externas
Jobs e Services costumam conversar com recursos externos.

Exemplos:
- banco de dados;
- Redis;
- filas;
- storage;
- APIs externas;
- filesystem;
- envio de e-mail;
- notificações;
- eventos;
- logs;
- cache.

Em testes de unidade, o ideal é isolar essas dependências. O Laravel oferece várias ferramentas para isso.

**Fake de PHP**
Quando a classe chama uma API externa, você pode usar:
```php
use Illuminate\Support\Facades\Http;

Http::fake([
    'https://api.exemplo.com/*' => Http::response([
        'status' => 'success',
        'id' => 123,
    ], 200),
]);
```

Depois, você pode validar se a chamada foi feita:
```php
Http::assertSent(function ($request) {
    return $request->url() === 'https://api.exemplo.com/process';
});
```

Isso evita que seu teste dependa de uma API real. Um teste que chama API externa de verdade tende a ser lento, instável e imprevisível.

**Fake de Storage**
Para testar upload, geração ou persistência de arquivos:
```php
use Illuminate\Support\Facades\Storage;

Storage::fake('s3');
Storage::disk('s3')->put('documents/test.pdf', 'fake-content');
Storage::disk('s3')->assertExists('documents/test.pdf');
```
Isso permite validar comportamento sem gravar em um bucket real.

**Fake de Queue**
Para validar se um job foi despachado:
```php
use Illuminate\Support\Facades\Queue;
use App\Jobs\ProcessDocumentJob;

Queue::fake();

ProcessDocumentService::dispatch($document);

Queue::assertPushed(ProcessDocumentJob::class);
``` 

Ou com condição:
```php
Queue::assertPushed(ProcessDocumentJob::class, function ($job) use ($document) {
    return $job->documentId === $document->id;
});
```

**Fake de eventos**
Para validar eventos:
```php
use Illuminate\Support\Facades\Event;
use App\Events\DocumentProcessed;

Event::fake();

$service->execute($document);

Event::assertDispatched(DocumentProcessed::class);
```

**Fake de Notification**
Para validar notificações
```php
use Illuminate\Support\Facades\Notification;
use App\Notifications\ImportFinishedNotification;

Notification::fake();

$service->finishImport($user);

Notification::assertSentTo($user, ImportFinishedNotification::class);
```

**Mock de dependências próprias**
Quando você usa interfaces e injeção de dependência, fica mais fácil substituir implementações reais por mocks.

Exemplo:
```php
interface PdfCombinerContract
{
    public function combine(array $files): string;
}
```

No teste:
```php
$combiner = Mockery::mock(PdfCombinerContract::class);

$combiner
    ->shouldReceive('combine')
    ->once()
    ->andReturn('/tmp/output.pdf');
```

Depois injeta no serviço:
```php
$service = new GenerateMergedDocumentService($combiner);

$result = $service->execute($files);

expect($result)->toBe('/tmp/output.pdf');
```

---
### 4. Cubra o caminho feliz e os cenários de falha
É comum começar testando apenas o cenário de sucesso.

Exemplo:
```php
it('processes the document successfully', function () {
    // ...
});
```

Esse teste é importante, mas insuficiente. Em aplicações reais, boa parte dos problemas aparece nos caminhos alternativos.

Por isso, um bom checklist deve incluir:
- entrada válida;
- entrada inválida;
- recurso não encontrado;
- dependência externa indisponível;
- erro controlado;
- exceção inesperada;
- duplicidade;
- ausência de permissão;
- timeout;
- arquivo inválido;
- payload incompleto;
- resposta inesperada de API externa.

Exemplo para um serviço de importação:
```php
it('imports a valid csv file successfully', function () {
    // ...
});

it('rejects csv file with invalid header', function () {
    // ...
});

it('skips duplicated rows', function () {
    // ...
});

it('registers failed rows without stopping the whole import', function () {
    // ...
});

it('throws an exception when the file does not exist', function () {
    // ...
});
```

Esse conjunto de testes dá mais confiança do que apenas validar o sucesso.

--- 
### 5. Para Services, teste a regra isolada
Um Service não deveria depender demais do Laravel para ser testado.

Quanto mais simples for instanciar e executar um service no teste, melhor.

Exemplo de service fácil de testar:
```php
class CalculateCommissionService
{
    public function execute(float $amount, float $percentage): float
    {
        if ($amount < 0) {
            throw new InvalidArgumentException('Amount cannot be negative.');
        }

        return round($amount * ($percentage / 100), 2);
    }
}
```

Teste:
```php
it('calculates commission correctly', function () {
    $service = new CalculateCommissionService();

    $result = $service->execute(1000, 10);

    expect($result)->toBe(100.00);
});
```

Teste de erro:
```php
it('does not allow negative amount', function () {
    $service = new CalculateCommissionService();

    $service->execute(-100, 10);
})->throws(InvalidArgumentException::class);
```

Esse é um exemplo simples, mas mostra um ponto importante: a regra está isolada. Quando o service precisa acessar banco, storage ou API externa, prefira depender de contratos:
```php
class ProcessPaymentService
{
    public function __construct(
        private PaymentGatewayContract $gateway,
        private OrderRepositoryContract $orders,
    ) {}

    public function execute(int $orderId): PaymentResultDTO
    {
        $order = $this->orders->findById($orderId);

        return $this->gateway->charge($order);
    }
}
```

No teste, você pode mockar o gateway e o repository. Isso torna o teste mais direto e mais rápido.

---
### 6. Para Jobs, teste o handle() com cuidado
Em Laravel, o comportamento principal de um job normalmente está no método `handle()`. Exemplo:
```php
class ProcessDocumentJob implements ShouldQueue
{
    public function __construct(
        public int $documentId
    ) {}

    public function handle(ProcessDocumentService $service): void
    {
        $service->execute($this->documentId);
    }
}
```

Nesse caso, o job é apenas um wrapper assíncrono para o service. O teste pode validar que o service foi chamado:
```php
it('processes the document using the service', function () {
    $service = Mockery::mock(ProcessDocumentService::class);

    $service
        ->shouldReceive('execute')
        ->once()
        ->with(10);

    $job = new ProcessDocumentJob(10);

    $job->handle($service);
});
```

Esse é um bom desenho porque mantém o job simples. A regra de negócio fica no service, e o job apenas delega.

---
### 7. Evite transformar Jobs em classes gigantes
Um erro comum é colocar toda a lógica dentro do job. Exemplo ruim:
```php
class ImportCsvJob implements ShouldQueue
{
    public function handle(): void
    {
        // abre arquivo
        // valida cabeçalho
        // lê linha por linha
        // consulta banco
        // valida dados
        // persiste registros
        // envia evento
        // atualiza status
        // trata erros
        // gera relatório
    }
}
```

Esse tipo de job fica difícil de testar porque faz coisa demais. Uma alternativa melhor seria dividir responsabilidades:
```php
class ImportCsvJob implements ShouldQueue
{
    public function __construct(
        public int $importId
    ) {}

    public function handle(ImportCsvOrchestrator $orchestrator): void
    {
        $orchestrator->execute($this->importId);
    }
}
```

E dentro do orchestrator:
```php
class ImportCsvOrchestrator
{
    public function __construct(
        private ValidateCsvFileService $validator,
        private ParseCsvFileService $parser,
        private PersistCsvRowsService $persister,
        private ImportReportService $report,
    ) {}

    public function execute(int $importId): void
    {
        // orquestra o fluxo
    }
}
```

Agora cada parte pode ser testada separadamente.

Você pode ter testes para:
- ValidateCsvFileService;
- ParseCsvFileService;
- PersistCsvRowsService;
- ImportCsvOrchestrator;
- ImportCsvJob.

Isso melhora muito a manutenção.

---
### 8. Nomeie bem os testes
Nome de teste é documentação. Um teste com nome ruim obriga quem está lendo a abrir o corpo do teste para entender o cenário.

Exemplo fraco:
```php
it('works', function () {
    // ...
});
```

Exemplo melhor:
```php
it('combines valid pdf files successfully', function () {
    // ...
});
```

Melhor ainda:
```php
it('uses local fallback when external pdf merge api fails', function () {
    // ...
});
```

O nome deve deixar claro:
- o cenário;
- a condição;
- o resultado esperado.

Alguns padrões úteis:
```php
it('creates a document when the payload is valid', function () {
    // ...
});

it('throws an exception when the document is not found', function () {
    // ...
});

it('does not process duplicated rows', function () {
    // ...
});

it('dispatches notification after import finishes', function () {
    // ...
});

it('stores the generated file in the configured disk', function () {
    // ...
});
```

Em projetos maiores, nomes bons reduzem muito o custo de manutenção.

---
### 9. Use fixtures para dados reais, mas pequenos
Quando testamos arquivos, payloads ou estruturas complexas, fixtures ajudam bastante. Uma organização possível:
```
tests/
├── Fixtures/
│   ├── pdfs/
│   │   ├── valid-a.pdf
│   │   ├── valid-b.pdf
│   │   └── invalid.pdf
│   ├── csv/
│   │   ├── valid-import.csv
│   │   ├── invalid-header.csv
│   │   └── duplicated-rows.csv
│   └── json/
│       ├── api-success-response.json
│       └── api-error-response.json
├── Helpers/
│   └── PdfTestHelper.php
└── Unit/
```

Fixtures tornam o teste mais realista. Mas existe um cuidado importante: fixtures devem ser pequenas.

Não faz sentido colocar um CSV de 500 MB dentro da suíte de teste. Use arquivos mínimos, com apenas os dados necessários para validar o comportamento.

Exemplo:
```csv
id;name;amount
1;Product A;100
2;Product B;200
```

Se o teste precisa validar erro de cabeçalho:
```csv
wrong;header;columns
1;Product A;100
```

Quanto menor a fixture, mais fácil entender o teste.

---
### 10. Crie helpers para reduzir repetição
Com o tempo, alguns testes começam a repetir muita preparação.

Exemplo:
```php
$fileA = __DIR__ . '/../../Fixtures/pdfs/valid-a.pdf';
$fileB = __DIR__ . '/../../Fixtures/pdfs/valid-b.pdf';
$output = storage_path('testing/output.pdf');
```

Você pode extrair isso para helpers.

Exemplo:
```php
function pdf_fixture(string $filename): string
{
    return base_path("tests/Fixtures/pdfs/{$filename}");
}
```

Uso:
```php
it('combines valid pdf files successfully', function () {
    $service = new PdfCombineService();

    $output = $service->combine([
        pdf_fixture('valid-a.pdf'),
        pdf_fixture('valid-b.pdf'),
    ]);

    expect(file_exists($output))->toBeTrue();
});
```

Você também pode criar builders:
```php
function makeImportPayload(array $overrides = []): array
{
    return array_merge([
        'reference_month' => '2026-04',
        'file_path' => csv_fixture('valid-import.csv'),
        'user_id' => 1,
    ], $overrides);
}
```

Uso:
```php
$payload = makeImportPayload([
    'reference_month' => 'invalid-month',
]);
```

Helpers são úteis quando aumentam clareza. Mas cuidado: helper demais também pode esconder o teste. O ideal é que a preparação fique simples, mas ainda compreensível.

---
### 11. Separe testes unitários de testes de feature
Uma estrutura comum em Laravel:
```
tests/
├── Feature/
├── Unit/
├── Fixtures/
└── Helpers/
```

Para services:
```
tests/
└── Unit/
    └── Services/
        ├── CalculateCommissionServiceTest.php
        ├── ProcessPaymentServiceTest.php
        └── PdfCombineServiceTest.php
```

Para Jobs:
```
tests/
└── Unit/
    └── Jobs/
        ├── ProcessDocumentJobTest.php
        └── ImportCsvJobTest.php
```

Para fluxos completos:
```
tests/
└── Feature/
    └── Documents/
        └── UploadDocumentTest.php
```

Essa separação ajuda a entender a intenção da suíte. Um teste de unidade falhando normalmente indica problema em uma regra específica. Um teste de feature falhando pode indicar problema de integração entre várias camadas.

---
### 12. Valide exceções esperadas
Em muitos casos, o comportamento correto é lançar uma exceção.

Exemplo:
```php
it('throws exception when file does not exist', function () {
    $service = new PdfCombineService();

    $service->combine([
        '/path/to/missing-file.pdf',
    ]);
})->throws(FileNotFoundException::class);
```

Também é possível validar a mensagem:
```php
it('throws exception when file is not a pdf', function () {
    $service = new PdfCombineService();

    $service->combine([
        pdf_fixture('invalid.txt'),
    ]);
})->throws(InvalidFileException::class, 'File must be a PDF.');
```

Mas cuidado com mensagens muito específicas. Se a mensagem muda por ajuste de texto, o teste quebra mesmo que o comportamento continue correto.

Prefira validar a classe da exceção. Valide mensagem apenas quando ela for relevante para o domínio ou para a resposta da aplicação.

--- 
### 13. Teste idempotência quando fizer sentido

Jobs são especialmente sensíveis a reprocessamento. Uma fila pode tentar executar o mesmo job mais de uma vez. Uma importação pode ser disparada novamente. Uma integração pode reenviar o mesmo payload.

Por isso, em alguns contextos, idempotência é essencial. 

Exemplo:
```php
it('does not create duplicated records when job is processed twice', function () {
    $job = new ProcessInvoiceJob($invoiceId);

    $job->handle(app(ProcessInvoiceService::class));
    $job->handle(app(ProcessInvoiceService::class));

    expect(InvoiceLog::where('invoice_id', $invoiceId)->count())->toBe(1);
});
```

Esse teste pode ser de integração, dependendo do uso de banco. O ponto é: para jobs críticos, pense no que acontece se ele rodar duas vezes.

---
### 14. Teste logs e rastreabilidade quando forem parte do comportamento

Em alguns fluxos, logs não são apenas detalhes técnicos. Em importações, processamento assíncrono e integrações, logs podem fazer parte da rastreabilidade do negócio.

Exemplo:
- status do processamento;
- quantidade de linhas processadas;
- erros por linha;
- etapa atual;
- payload rejeitado;
- motivo da falha.

Nesses casos, vale testar se o serviço registra as informações importantes.

Exemplo conceitual:
```php
it('registers failed rows during import', function () {
    $tracker = Mockery::mock(ImportTrackerContract::class);

    $tracker
        ->shouldReceive('registerFailure')
        ->once()
        ->withArgs(function ($rowNumber, $message) {
            return $rowNumber === 2
                && str_contains($message, 'Invalid product');
        });

    $service = new ImportRowsService($tracker);

    $service->execute($rows);
});
```

Se o log é essencial para operação, ele pode e deve ser validado.

---
### 15. Evite excesso de mocks
Mocks são úteis, mas devem ser usados com equilíbrio. Um teste com mocks demais pode ficar frágil e difícil de entender.

Exemplo problemático:
```php
$serviceA->shouldReceive('method1')->once();
$serviceB->shouldReceive('method2')->once();
$serviceC->shouldReceive('method3')->once();
$serviceD->shouldReceive('method4')->once();
$serviceE->shouldReceive('method5')->once();
```

Esse tipo de teste muitas vezes está validando mais a implementação do que o comportamento. Quando possível, prefira validar o resultado final.

Use mocks principalmente para:
- APIs externas;
- serviços lentos;
- dependências com efeitos colaterais;
- contratos importantes;
- integrações que não devem rodar no teste.

Se você precisa mockar 10 dependências para testar uma classe, talvez a classe esteja fazendo coisa demais.

---
### 16. Use datasets do Pest para cenários repetidos

O Pest permite usar datasets para testar múltiplas entradas com a mesma lógica.

Exemplo:
```php
it('rejects invalid file extensions', function (string $filename) {
    $service = new ValidateUploadService();

    $service->validate($filename);
})->with([
    'txt file' => ['document.txt'],
    'exe file' => ['malware.exe'],
    'zip file' => ['archive.zip'],
])->throws(InvalidFileExtensionException::class);
```

Outro exemplo:
```php
it('calculates commission by percentage', function (
    float $amount,
    float $percentage,
    float $expected
) {
    $service = new CalculateCommissionService();

    expect($service->execute($amount, $percentage))->toBe($expected);
})->with([
    [1000, 10, 100.00],
    [500, 5, 25.00],
    [200, 12.5, 25.00],
]);
```

Datasets são excelentes para reduzir duplicação sem perder clareza.

---
### 17. Teste regras de borda

Regras de borda são aquelas situações que não aparecem no uso normal, mas podem quebrar o sistema.

Exemplos:
- lista vazia;
- arquivo sem conteúdo;
- valor zero;
- valor negativo;
- data no limite do período;
- item duplicado;
- campo opcional ausente;
- resposta externa incompleta;
- timeout;
- arquivo grande demais;
- encoding inesperado;
- linha malformada em CSV.

Exemplo:
```php
it('does not process an empty file list', function () {
    $service = new PdfCombineService();

    $service->combine([]);
})->throws(EmptyFileListException::class);
```

Outro exemplo:
```php
it('ignores empty csv lines during import', function () {
    $service = new ParseCsvService();

    $rows = $service->parse(csv_fixture('with-empty-lines.csv'));

    expect($rows)->toHaveCount(2);
});
```

Esses testes aumentam muito a robustez da aplicação.

---
### 18. Cuidado com banco de dados em teste unitário

Nem sempre é errado usar banco em teste. Mas quando você usa banco, provavelmente está se aproximando de um teste de integração.

Para testar um repository, faz sentido usar banco. Para testar uma regra pura de service, talvez não.

Exemplo de regra que não precisa de banco:
```php
class ValidateCommissionRangesService
{
    public function execute(array $ranges): void
    {
        // valida sobreposição de faixas
    }
}
```

Teste:
```php
it('rejects overlapping commission ranges', function () {
    $service = new ValidateCommissionRangesService();

    $service->execute([
        ['from' => 0, 'to' => 100, 'percentage' => 5],
        ['from' => 90, 'to' => 200, 'percentage' => 7],
    ]);
})->throws(OverlappingRangeException::class);
```

Esse teste não precisa de banco. Já um teste de persistência pode usar `RefreshDatabase`:
```php
uses(RefreshDatabase::class);

it('persists a processed document', function () {
    $service = app(PersistProcessedDocumentService::class);

    $document = $service->execute([
        'name' => 'contract.pdf',
        'path' => 'documents/contract.pdf',
    ]);

    expect($document->id)->not->toBeNull();

    $this->assertDatabaseHas('documents', [
        'name' => 'contract.pdf',
    ]);
});
```

Ambos são válidos. Só não são a mesma categoria de teste.

---
### 19. Teste fallback de integrações externas

Muitos sistemas reais usam fallback.

Exemplo:
- tenta combinar PDF via API externa;
- se falhar, combina localmente com FPDI;
- se o arquivo estiver corrompido, tenta corrigir;
- se ainda falhar, registra erro e notifica o frontend.

Esse tipo de fluxo precisa de teste.

Exemplo conceitual:
```php
it('uses local fallback when external pdf api fails', function () {
    $externalCombiner = Mockery::mock(ExternalPdfCombinerContract::class);
    $localCombiner = Mockery::mock(LocalPdfCombinerContract::class);

    $externalCombiner
        ->shouldReceive('combine')
        ->once()
        ->andThrow(new ExternalPdfApiException());

    $localCombiner
        ->shouldReceive('combine')
        ->once()
        ->andReturn('/tmp/merged.pdf');

    $service = new PdfMergeService($externalCombiner, $localCombiner);

    $result = $service->execute([
        pdf_fixture('valid-a.pdf'),
        pdf_fixture('valid-b.pdf'),
    ]);

    expect($result)->toBe('/tmp/merged.pdf');
});
```

Esse teste garante um comportamento importante: a aplicação não depende exclusivamente da API externa.

--- 
### 20. Teste que erros previsíveis não derrubam o fluxo inteiro

Em importações e jobs em lote, é comum que uma linha inválida não deva interromper todo o processamento.

Exemplo:
```php
it('continues processing when one row is invalid', function () {
    $service = new ImportRowsService();

    $report = $service->execute([
        ['name' => 'Valid Row', 'amount' => 100],
        ['name' => '', 'amount' => 200],
        ['name' => 'Another Valid Row', 'amount' => 300],
    ]);

    expect($report->total)->toBe(3);
    expect($report->success)->toBe(2);
    expect($report->failed)->toBe(1);
});
```

Esse tipo de teste protege comportamento operacional. Em sistemas reais, esse detalhe faz diferença. Um erro isolado não deveria necessariamente parar uma importação inteira.

---
### 21. Use asserts específicos

Evite asserts genéricos demais.

Exemplo fraco:
```php
expect($result)->not->toBeNull();
```

Esse teste passa para quase qualquer coisa. Melhor:
```php
expect($result)
    ->toBeInstanceOf(ImportReportDTO::class)
    ->and($result->total)->toBe(10)
    ->and($result->success)->toBe(8)
    ->and($result->failed)->toBe(2);
```

Outro exemplo:
```php
expect($document->status)->toBe(DocumentStatus::Processed);
```

Quanto mais específico for o assert, maior a proteção do teste. Mas também existe equilíbrio: não teste campos irrelevantes apenas para aumentar cobertura.

---
### 22. Cuidado com cobertura de código como métrica absoluta
Cobertura de teste é útil, mas pode enganar. É possível ter 100% de cobertura com testes ruins.

Exemplo:
```php
it('executes service', function () {
    $service = new SomeService();

    $service->execute();

    expect(true)->toBeTrue();
});
```

Esse teste pode passar por várias linhas de código, mas não valida comportamento relevante. A cobertura deve ser consequência de bons testes, não o objetivo isolado.

Uma pergunta melhor que “qual a cobertura?” é:
> A suíte me dá confiança para alterar esse código?

Se a resposta for não, a cobertura sozinha não resolve.

---
### 23. Quando usar teste de unidade e quando usar teste de feature?

Use teste de unidade quando quiser validar:
- regra de cálculo;
- validação de domínio;
- transformação de dados;
- comportamento de service;
- comportamento de job isolado;
- fallback;
- tratamento de exceção;
- integração mockada.

Use teste de feature quando quiser validar:
- endpoint HTTP;
- autenticação;
- autorização;
- request validation;
- resposta JSON;
- integração entre controller, service e banco;
- fluxo completo do usuário.

Exemplo de feature test:
```php
it('imports a csv file through the api', function () {
    Storage::fake('local');

    $file = UploadedFile::fake()->createWithContent(
        'import.csv',
        "id;name\n1;Product A"
    );

    $response = $this->postJson('/api/imports', [
        'file' => $file,
    ]);

    $response->assertCreated();
});
```

Esse teste valida o fluxo HTTP. Já o parser do CSV pode ter testes unitários separados. Essa combinação deixa a suíte mais equilibrada.

---
## Exemplo completo: Service com Pest

Imagine um service responsável por validar e processar arquivos PDF.
```php
class ProcessPdfService
{
    public function __construct(
        private PdfValidatorContract $validator,
        private PdfStorageContract $storage,
    ) {}

    public function execute(string $path): string
    {
        if (! $this->validator->isValid($path)) {
            throw new InvalidPdfException("Invalid PDF file.");
        }

        return $this->storage->store($path);
    }
}
```

Teste com Pest:
```php
use App\Contracts\PdfStorageContract;
use App\Contracts\PdfValidatorContract;
use App\Exceptions\InvalidPdfException;
use App\Services\ProcessPdfService;

it('stores a valid pdf file', function () {
    $validator = Mockery::mock(PdfValidatorContract::class);
    $storage = Mockery::mock(PdfStorageContract::class);

    $validator
        ->shouldReceive('isValid')
        ->once()
        ->with('/tmp/file.pdf')
        ->andReturnTrue();

    $storage
        ->shouldReceive('store')
        ->once()
        ->with('/tmp/file.pdf')
        ->andReturn('documents/file.pdf');

    $service = new ProcessPdfService($validator, $storage);

    $result = $service->execute('/tmp/file.pdf');

    expect($result)->toBe('documents/file.pdf');
});

it('throws exception when pdf is invalid', function () {
    $validator = Mockery::mock(PdfValidatorContract::class);
    $storage = Mockery::mock(PdfStorageContract::class);

    $validator
        ->shouldReceive('isValid')
        ->once()
        ->with('/tmp/invalid.pdf')
        ->andReturnFalse();

    $storage
        ->shouldNotReceive('store');

    $service = new ProcessPdfService($validator, $storage);

    $service->execute('/tmp/invalid.pdf');
})->throws(InvalidPdfException::class);
```

Esse exemplo cobre:
- sucesso;
- erro;
- dependências mockadas;
- comportamento esperado;
- ausência de efeito colateral quando a validação falha.

---
## Exemplo completo: Job com Pest

Imagine um job simples que delega para um service.
```php
class ProcessPdfJob implements ShouldQueue
{
    public function __construct(
        public string $path
    ) {}

    public function handle(ProcessPdfService $service): void
    {
        $service->execute($this->path);
    }
}
```

Teste:
```php
use App\Jobs\ProcessPdfJob;
use App\Services\ProcessPdfService;

it('processes pdf using the service', function () {
    $service = Mockery::mock(ProcessPdfService::class);

    $service
        ->shouldReceive('execute')
        ->once()
        ->with('/tmp/file.pdf');

    $job = new ProcessPdfJob('/tmp/file.pdf');

    $job->handle($service);
});
```

Esse teste é simples porque o job também é simples. Esse é o ponto.

Jobs deveriam orquestrar ou delegar, não concentrar toda a regra de negócio.

---
## Checklist final

Antes de considerar seus testes prontos, revise:
- A responsabilidade da classe está clara?
- O teste valida comportamento em vez de implementação?
- Dependências externas foram isoladas?
- O caminho feliz foi testado?
- Cenários de erro foram testados?
- Exceções esperadas foram validadas?
- Jobs foram mantidos simples?
- Services foram testados de forma isolada?
- Fixtures são pequenas e compreensíveis?
- Helpers reduzem repetição sem esconder contexto?
- O teste tem nome claro?
- Os asserts são específicos?
- O teste ajuda em uma futura refatoração?
- A suíte continua rápida?
- O teste falha pelo motivo certo?

---
## Conclusão

Testes de unidade para Jobs e Services não são apenas uma formalidade técnica. Eles são uma ferramenta de design.

Quando uma classe é difícil de testar, normalmente ela está sinalizando algum problema: responsabilidade demais, acoplamento excessivo, dependências escondidas ou regra de negócio misturada com infraestrutura.

Ao escrever testes com Pest, você acaba sendo forçado a olhar melhor para a arquitetura do código. E isso é extremamente positivo.

Um bom teste não serve apenas para aumentar cobertura. Ele serve para documentar comportamento, proteger regras importantes, facilitar refatorações e reduzir medo de alterar sistemas complexos.

Em projetos Laravel, principalmente quando há código legado, filas, integrações externas e regras de negócio críticas, testar bem Jobs e Services é uma das formas mais práticas de manter a aplicação evoluindo com segurança.

No fim, o objetivo não é ter uma suíte bonita no relatório.

O objetivo é conseguir mudar o código amanhã sem quebrar o negócio hoje.
