---
layout: post
title:  "Ambiente Web | Cliente X Servidor | Tecnologias"
author: mamura
categories: [Faculdade]
tags: [faculdade, sistemas de informação]
image: 'assets/images/cliente-servidor.png'
description: "Ambiente Web"
date:   2023-02-23 19:59:31
featured: false
hidden: false
class: "Desenvolvimento Web"
---

## O Ambiente Web
### Modelo Cliente Servidor
O modelo cliente X servidor foi criado pela Xerox PARC nos anos 1970, tendo como principal premissa a separação entre dados e recursos de processamento, ao contrário do modelo predominante à época — conhecido como modelo centralizado, em que tanto o armazenamento dos dados quanto o seu processamento ficavam a cargo dos computadores de grande porte: mainframe.

#### Ambiente cliente X servidor
O ponto de partida para entendermos a arquitetura do modelo cliente X servidor é tomarmos como exemplo a rede interna de computadores de uma empresa, em que temos máquinas exercendo a função de servidores — provendo serviços como armazenamento de arquivos ou dados, impressão, e-mail etc. — e máquinas exercendo a função de clientes — consumindo os recursos fornecidos pelos servidores.

#### Aplicações no modelo cliente X servidor
Esse modelo tornou possível o desenvolvimento de aplicações que fizessem uso de sua arquitetura distribuída. Tais aplicações foram desenvolvidas tendo como base o conceito de desenvolvimento em camadas. Logo, surgiram os modelos de duas, três e quatro (ou N) camadas.

#### Modelo de duas camadas
Nesse modelo, temos as camadas cliente e servidor, sendo função da primeira tratar a lógica do negócio e fazer a interface com o usuário, enquanto a segunda é responsável por tratar os dados — normalmente fazendo uso de sistemas gerenciadores de bancos de dados (SGDB). São exemplos desse modelo as aplicações desktop instaladas em cada computador cliente que se comunicam com um servidor na mesma rede.

#### Modelo de três camadas
Esse modelo foi criado para resolver alguns problemas do modelo anterior, entre eles a necessidade de reinstalação/atualização da aplicação nos clientes a cada mudança de regra ou lógica. Logo, foi incluída uma camada a mais, a camada de aplicação. Com isso, as responsabilidades de cada camada ficaram assim divididas:
- **Camada de apresentação:** Representada pela aplicação instalada na máquina cliente. Era responsável pela interface com o usuário e passou a acessar o servidor de aplicação, perdendo o acesso direto ao servidor de dados.
- **Camada de aplicação:** Representada por um servidor responsável pela lógica e pelas regras de negócio, assim como pelo controle de acesso ao servidor de dados.
- **Camada de dados:** Representada por um servidor responsável pelo armazenamento dos dados.

#### Modelo de quatro camadas
O grande avanço obtido nesse modelo foi tirar da máquina cliente a responsabilidade pela interface com o usuário, passando a centralizá-la em um único ponto, normalmente em um servidor web. Com isso, no lugar de aplicações instaladas em cada máquina cliente, passamos a ter os clientes acessando aplicações hospedadas em servidores web a partir de navegadores.

### Ambiente Web
Como vimos, inicialmente as aplicações ficavam hospedadas dentro de uma rede interna, onde estavam tanto os clientes quanto os servidores. Posteriormente, elas migraram para a internet, surgindo então o ambiente web, cuja base é justamente prover aos clientes, usuários, o acesso a várias aplicações a partir de diversos dispositivos, como navegadores em desktops e smartphones ou a partir de aplicações mobile.

Vimos que esse ambiente é composto por:
- **Cliente:** Utiliza um navegador ou aplicativo e consome serviços hospedados em um servidor web.
- **Servidor:** Sua estrutura pode comportar tanto as camadas de apresentação, aplicação e dados numa única máquina quanto em diversas máquinas, sendo essa distribuição indistinguível para o cliente.

#### Comunicação no ambiente web
A comunicação, nesse ambiente, é feita sobre a internet, com o uso dos seus protocolos de comunicação, sendo o principal protocolo o HTTP (HyperText Transfer Protocol), que é um protocolo para transferência de hipertexto.

### Ambiente cliente X servidor
#### Solicitação e resposta
O processo de comunicação no ambiente web é conhecido como solicitação (request) e resposta (response). Normalmente, a solicitação é iniciada pelo cliente, mas é possível que também o servidor a inicie, como em serviços PUSH — serviços que disparam notificações/mensagens para os clientes que fizeram opção por recebê-las.

#### Client side X Server side
Essas duas expressões são muito comuns quando falamos de aplicações rodando no ambiente web. Ambas se referem a tecnologias e códigos disponibilizados no lado cliente (nesse caso, o dispositivo utilizado por um usuário para fazer uma requisição) e no lado servidor.

## O conceito de interface
### Visão geral
O conceito de interface está ligado à área de Interação Humano-Computador (IHC), que pode ser resumida como o estudo da interação entre pessoas e computadores. Nesse contexto, a interface, muitas vezes chamada de interface do utilizador, é quem provê a interação entre o ser humano e o computador. No início da utilização dos computadores, tal interação era realizada por meio de linha de comando e, posteriormente, também mediante interfaces gráficas (Graphical User Interface - GUI). Segundo Morais (2014), no início, a interação foi, de certo modo, primária, deixando um pouco de lado o ser humano, por não existir um estudo aprofundado desses aspectos.

Dessa forma, o foco do estudo da interface envolvia principalmente o hardware e o software, e o ser humano simplesmente tinha que se adaptar ao sistema criado.

Posteriormente, com o avanço da tecnologia e do acesso a computadores, e mais recentemente a outros dispositivos, sobretudo os smartphones, a necessidade de melhorar a interação tem crescido continuamente.

#### A interface do lado do cliente
Como Silva (2014) explica, a evolução tecnológica levou a uma crescente utilização de dispositivos móveis que possuem os mais variados tamanhos de tela e funcionalidades. Sobre essa variedade nas características dos dispositivos utilizados como interface para o acesso a aplicações no ambiente web, é necessário garantir a usabilidade, ou seja, que sejam desenvolvidos sistemas fáceis de usar e de aprender, além de flexíveis. Em complemento a esse conceito, e partindo do ponto de vista da usabilidade, esta deve estar alinhada ao conceito de design responsivo, o qual deverá permitir que as páginas web e consequentemente as aplicações web respondam a qualquer dispositivo sem perda de informações por parte do usuário.

### O conceito do design responsivo
#### Design responsivo
Segundo Knight (2011), o design responsivo é a abordagem que sugere que o design e o desenvolvimento devam responder ao comportamento e ao ambiente do usuário com base no tamanho da tela, na plataforma e na orientação do dispositivo por ele utilizado.

Essa definição, na prática, implica que a página web/aplicação acessada deve ser capaz de, automaticamente, responder às preferências do usuário e, com isso, evitar que seja necessário construir diferentes versões de uma mesma página/aplicação para diferentes tipos e tamanhos de dispositivos.

#### A origem do design responsivo
O conceito de design responsivo teve sua origem no Projeto Arquitetônico Responsivo. Tal projeto prega que uma sala ou um espaço deve se ajustar automaticamente ao número e fluxo de pessoas dentro dele. Para tanto, é utilizada uma combinação de robótica e tecnologia, como: sensores de movimento; sistemas de controle climático com ajuste de temperatura e iluminação; juntamente com materiais — estruturas que dobram, flexionam e expandem.

Da mesma forma que no Projeto Arquitetônico Responsivo, arquitetos não refazem uma sala ou um espaço de acordo com o número, fluxo e as características de seus ocupantes, no ambiente web não devemos ter que precisar construir uma versão de uma mesma página de acordo com as características dos seus visitantes. Isso traria ainda outros custos, como identificar uma enorme combinação de tamanhos de tela e tecnologia, entre outros fatores, para criar uma mesma quantidade de páginas correspondentes.

#### Design responsivo na prática
Na prática, ao aplicarmos o conceito de design responsivo, fazemos uso de uma combinação de técnicas, como layouts fluidos, media query e scripts.

#### Layouts fluidos
Para entender o conceito de layout fluido, é necessário entender primeiro o que seria o seu oposto, ou seja, o layout fixo.
- **Layout fixo:** As dimensões (largura e altura) dos elementos de uma página web são definidos com a utilização de unidades de medidas fixas, como os pixels (menor ponto que forma uma imagem digital). Com isso, tais elementos não se adaptam às alterações no tamanho do campo de visão dos dispositivos que os visualiza.
- **Layout fluido:** Já os layouts fluidos fazem uso de unidades flexíveis — no lugar de definir as dimensões com o uso de quantidades fixas são utilizados valores flexíveis. Isso permite, por exemplo, que em vez de definir que o cabeçalho de uma página tenha 1366 pixels de largura, possamos definir que ele ocupe 90% do tamanho da tela do dispositivo que o visualiza. Daí o conceito de fluido, ou seja, de adaptabilidade ao campo de visão conforme dimensões do dispositivo que visualiza a página.

Além dos valores percentuais, há outras unidades de medidas flexíveis, por exemplo:
- **EM:** Unidade de medida tipográfica, estando relacionada à letra “M”. O tamanho base dessa unidade equivale à largura da letra “M” em maiúscula.
- **REM:** Enquanto o EM está relacionado ao tamanho do elemento de contexto (ou seja, definimos o valor EM de um elemento tomando como base o seu elemento pai), no REM definimos que o elemento de contexto, o elemento pai, será sempre a tag HTML <body>. Daí a letra “R” nessa unidade, que faz referência à raiz (root).

Além das unidades, fixas e flexíveis já mencionadas, há ainda outras disponíveis. A listagem completa pode ser acessada no site do <a href="https://www.w3schools.com/cssref/css_units.php">W3C – CSS Units</a>.

#### Media query
A função de apresentação, de estruturar o layout de uma página, no ambiente web, cabe às folhas de estilo (CSS). Para definir o que é media query, falaremos um pouco também sobre CSS.
Com base na afirmação de que cabe ao CSS estruturar o layout de uma página web, temos normalmente associada a uma página web uma ou mais folhas de estilo — que são códigos que definem aspectos de toda a página, como as dimensões dos elementos, cores de fundo, as cores e os tipos de fonte etc.

Nesse contexto, media query é a utilização de media types (tipos de mídia) a partir de uma ou mais expressões para definir formatações para dispositivos diversos. Com o seu uso podemos, por exemplo, definir que determinado estilo de um ou mais elementos seja aplicado apenas a dispositivos cuja largura máxima de tela seja igual ou menor que 600px.

#### Scripts
Quando falamos em scripts no lado cliente, no ambiente web, estamos falando de linguagens de programação que rodam no navegador e cujo exemplo mais comum é o JavaScript.

Essa linguagem adiciona interação a uma página web, permitindo, por exemplo, a atualização dinâmica de conteúdos, o controle de multimídia, a animação de imagens e muito mais. No contexto do design responsivo, sua faceta mais importante é a de atualização dinâmica de conteúdo — e não só do conteúdo, mas também da apresentação dele.

#### Design responsivo X Design adaptativo
O conceito de design adaptativo, muitas vezes, confunde-se com o de design responsivo. Enquanto o segundo, como já visto anteriormente, consiste na utilização de uma combinação de técnicas para ajustar um site automaticamente em função do tamanho da tela dos dispositivos utilizados pelos usuários, no design adaptativo são usados layouts estáticos baseados em pontos de quebra (ou de interrupção), em que, após o tamanho de tela ser detectado, é carregado um layout apropriado para ele. Em linhas gerais, no design adaptativo, são criados layouts com base em seis tamanhos de tela mais comuns. A aplicação desses dois conceitos na prática acontece da seguinte forma:
- **Design responsivo:** Medias queries são utilizadas, em conjunto com scripts, para criar um layout fluido que se adapte — por meio, sobretudo, da adequação das dimensões de seus elementos — ao tamanho da tela do dispositivo utilizado pelo visitante.
- **Design adaptativo:** Um site é planejado e construído com a definição de seis layouts predefinidos, em que são previstos pontos de quebra para que a página se adapte às seis diferentes dimensões utilizadas.

#### Mobile first
Uma das abordagens de design responsivo mais utilizadas atualmente é a mobile first. Tal abordagem está centrada no crescente uso de dispositivos móveis na navegação no ambiente web e defende que em primeiro lugar seja pensado o design para telas menores e, posteriormente, para telas maiores. Trata-se de um enfoque progressivo (progressive enhancement), no qual se parte dos recursos e tamanhos de tela disponíveis nos dispositivos menores, progredindo com a adição de recursos e conteúdo tendo em vista as telas e os dispositivos maiores.

A partir da definição de mobile first podemos identificar o seu contraponto com o desenvolvimento web tradicional, em que temos o conceito de degradação graciosa (graceful degradation):
***As páginas web são projetadas tendo em vista dispositivos desktop e telas maiores e, posteriormente, adaptadas para dispositivos móveis e telas menores.***

A aplicação prática do mobile first consiste em planejar o desenvolvimento de um site priorizando os recursos e as características presentes nos dispositivos móveis, como o tamanho de tela, a largura de banda disponível e até mesmo recursos específicos, como os de localização, por exemplo.

## Tecnologias do lado do cliente
### As tecnologias HTML
#### HTML
HTML é considerada a tecnologia fundamental da web, pois sua função é definir a estrutura de uma página web. Essa linguagem de marcação, criada port Tim Berners-Lee na década de 1990, inicialmente objetivava permitir a disseminação de pesquisas entre Lee e seus colegas pesquisadores, mas foi rapidamente difundida até formar a rede que, posteriormente, veio a se tornar a World Wide Web como a conhecemos atualmente.

Em linhas gerais, a HTML é uma linguagem de marcação simples, composta por elementos, chamados tags, que são relacionadas a textos e outros conteúdos a fim de lhes dar significado. Por exemplo: podemos marcar um texto como sendo um parágrafi, uma lista ou uma tabela. É possível, ainda, inserir vídeos e imagens. Além disso, também utilizamos essa marcação para definir a estrutura de um documento de forma lógica: menu de navegação, cabeçalho, rodapé, etc. As tags podem ser agrupadas nos seguintes tipos:
- **Estruturais:** Juntamente com o elemento de definição do DocType, como pode ser visto logo abaixo, compõem a estrutura obrigatória de uma página web.
```html
<!DOCTYPE html>
<html>
    <head>

    </head>

    <body>

    </body>
</html>
```
- **De conteúdo:** Como o nome sugere, têm o papel de marcar o conteúdo pelo seu tipo.
```html
<body>
    <h1>Minha página</h1>
    <p><strong>Conteúdo da página</strong></p>
    <img src="images/image1.jpg" alt="imagem 1 da página">
    <hr/>
</body>
```
- **Semânticas:** Relacionadas ao tipo de conteúdo e à criação de sessões para agrupálo de acordo com sua função no documento. Para melhor entender esse conceito, veja o código abaixo:

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Titulo da página</title>
    </head>

    <body>
        <header>
            Cabeçalho da página
        </header>

        <nav>
            Navegação da página
        </nav>

        <main>
            Conteúdo da página

            <aside>
                Barra lateral
            </aside>
        </main>
    </body>
</html>
```

Como mostrado, as tags \<header\>, \<nav\>, \<main\> e \<footer\> desempenham um papel semântico, uma vez que estruturam a página em sessões. Como seus nomes indicam, elas separam o conteúdo em partes lógicas que formam o esqueleto da maioria das páginas HTML.

### HTML5
A versão mais recente do HTML é a 5, que trouxe algumas importantes evoluções em relação às santeriores. Entre elas, destacam-se:
- Novos atributos e elementos, com foco sobretudo na semântica.
- Melhorias de conectividade.
- Possibilidade de armazenamento de dados do lado do cliente.
- Otimização nas operações off-line.
- Suporte extendido a multimídia - áudio e vídeo.

### CSS
o CSS corresponde à segunda camada do tripé de tecnologias que formam o lado cliente, no ambiente web. Trata-se de uma linguagem declarativa cuja função é controlar a apresentação visual de páginas web. Com isso, têm-se a separação de funções em relação à HTML.

#### Sintaxe
A sintaxe do CSS consiste em uma declaração em que são definidos o(s) elemento(s) e o(s) estilo(s) que desenjamos aplicar a ele(s) ou, em outras palavras:
- **O seletor:** Um elemento HTML (body, div, p, etc.) ou o seu identificador (atributo ID) ou class (atributo class).
- **A propriedade:** Característica di elemento (cor, fonte, posição, etc.).
- **O valor:** Novo parâmetro a ser aplicado à característica do elemento.

Por exemplo, para alterar a cor da fonte de um texto inserido em um parágrafo, poderíamos utilizar uma das variações apresentadas abaixo:
```html
<p id="paragrafo_exemplo">Texto do parágrafo de exemplo</p>
```
```css
#paragrafo_exemplo{
    color: #ff0000; // vermelho
}

// OU

p {
    color: #ff0000; // vermelho
}
```
No exemplo apresentado, vimos duas formas para definir o estilo de uma tag de parágrafo. No primeiro, o elemento ao qual o estilo foi aplicado foi definido com a utilização de seu atributo ID. A respeito dos seletores, propriedades existentes e mais detalhes sobre a CSS, é recomendado ler o Guia de Referência do próprio W3C.

#### Como inserir o CSS na página web
Há quatro formas de inserir o CSS em um documento:
- **Inline:** Os estilos, nesse caso, são aplicados com a utilização de atribulo "style" seguido de uma ou mais propriedades/valores.
- **Interno:** Os estilos são definidos com a utilização da tag \<style\>, dentro da tag \<head\> no documento.
- **Externo:** Essa é a forma preferencial de inserir estilos. Nela é utilizado um arquivo externo, com a extensão ".css", contendo apenas estilos. Para vincular esse arquivo externo ao documento, é utilizada a tag \<link\> dentro a tag \<head\>.
- **Escopo:** Essa forma foi introduzida pelo HTML5. Com ela,um estilo pode ser definido em nível de escopo, ou seja, declarado em seções específicas do documento. Sua declaração é feita da mesma forma qwue a inline. Entretanto, no lugar de ser declarada no \<head\>, é declarada dentro da tag à qual se quer aplicar os estilos.

#### Seletores CSS
A CSS permite uma série de combinações para a aplicação de estilos. Pode-se usar aplicações simples, como as vistas até aqui, nas quais apenas um elemento foi selecionado, ou combinações mais complexas, em que vários elementos podem ser agrupados a fim de receberem um mesmo estilo.

#### Boas práticas relacionadas ao CSS
É boa prática e fortemente recomendado utilizar a forma externa para incluir CSS em uma página web. Entre outras vantagens, como uma melhor organização do código, separando o HTML do estilo, devemos ter em mente que um mesmo arquivo CSS pode ser usado em várias páginas de um site.

Outra boa prática, tendo em vista o desempenho do carregamento da página web é compactar o arquivo — normalmente chamamos este processo de minificação. Existem softwares e até mesmo sites que fazem esse trabalho, que consiste em, resumidamente, diminuir os espaços e as linhas no arquivo .css, reduzindo assim o seu tamanho final.

#### Outras considerações sobre CSS
Uma nova funcionalidade tem ganhado bastante espaço ultimamente no que diz respeito à CSS: os pré-processadores, como Sass, Less, Stylus etc. Em linhas gerais, um pré-processador é um programa que permite gerar CSS a partir de uma sintaxe — própria de cada pré-processador —, que inclui inúmeras facilidades não suportadas naturalmente pelo CSS, como variáveis, funções, regras aninhadas, entre outras.

O fluxo de gerar CSS por meio de um pré-processador consiste na escrita do código contendo as regras a serem aplicadas, fazendo uso da sintaxe de cada pré-processador. Ao final, esse código será compilado, gerando então o código CSS normal.

### Javascript
O JavaScript completa o tripé de tecnologias web que rodam no lado cliente. Trata-se de uma linguagem de programação que, assim como o CSS, é interpretada pelo navegador. Entre suas principais características, destaca-se o fato de ser multiparadigma (orientação a objetos, protótipos, funcional etc.).

Sua função é, sobretudo, fornecer interatividade a páginas web, e foi criada com o intuito de diminuir a necessidade de requisições ao lado servidor, permitindo a comunicação assíncrona e a alteração de conteúdo sem que seja necessário recarregar uma página inteira.

#### Sintaxe
O JavaScript é, ao mesmo, amigável, mas também completo e poderoso. Embora criado para ser leve, uma vez que é interpretado nativamente pelos navegadores, trata-se de uma linguagem de programação completa e, como já mencionado, multiparadigma. Logo, seus códigos podem ser tanto estruturados quanto orientados a objetos. Além disso, permitem que bibliotecas, como Jquery, Prototype etc. sejam criadas a partir de seu core, estendendo assim a sua funcionalidade. Vejamos algumas características dessa linguagem:
- **Eventos e manipulação DOM:** Essa linguagem oferece amplo suporte à manipulação de eventos relacionados a elementos HTML. É possível, por exemplo, utilizar um elemento \<button\> (botão) que, ao ser clicado, exiba uma mensagem na tela. Ou ainda aumentar o tamanho de uma fonte ou diminuí-lo.
- **Mensagem e entrada de dados:** O JavaScript possui suporte a funções nativas para a exibição de caixas de diálogo para entrada de dados ou exibição de mensagens, como alertas, por exemplo.

## Tecnologias do lado do servidor
Uma das principais funções das linguagens de programação server side é permitir o acesso a informações armazenadas em bancos de dados. Uma vez que apenas utilizando HTML e JavaScript isso não é possível, faz-se necessária a utilização de uma linguagem no lado servidor. Entre as diversas linguagens disponíveis no lado servidor estão o Java, o Python, o ASP, o .NET e o PHP, que conheceremos um pouco mais ao longo deste estudo.

### PHP
PHP (Hypertext Preprocessor) é uma linguagem de programação baseada em script, open source e destinada, sobretudo, ao desenvolvimento web. Trata-se de uma linguagem criada para ser simples, tendo nascida estruturada e, posteriormente, adotado o paradigma de orientação a objetos — apenas 10 anos depois da sua criação.

#### Como o PHP funciona
O PHP é uma linguagem interpretada, ou seja, ela precisa “rodar” sobre um servidor web. Com isso, todo o código gerado é interpretado pelo servidor, convertido em formato HTML e então exibido no navegador.
1. **Etapa 1:** O código PHP é gerado pelo servidor.
2. **Etapa 2:** Esse código é convertido em formato HTML.
3. **Etapa 3:** O código é exibido no navegador.

Logo, o código-fonte não pode ser visto no lado cliente, mas apenas o HTML gerado.

Outra característica importante do PHP é poder ser utilizado na maior parte dos sistemas operacionais, assim como em vários servidores web diferentes, como o Apache, o IIS e o Nginx, entre outros.

#### Anatomia de um script PHP
Um script PHP é composto por código delimitado pelas tags <?php e ?>. A última, de fechamento, não é obrigatória. Devido à sua simplicidade, um mesmo script PHP pode conter tanto código estruturado quanto orientado a objetos. Pode até conter código de marcação HTML. Neste último caso, o código próprio do PHP deverá ficar entre as tags de abertura e fechamento.

#### Sintaxe
Veja a seguir um resumo sobre a sintaxe do PHP:
- **Variáveis:** No PHP, as variáveis são criadas com a utilização do símbolo de cifrão ($). Além disso, PHP é case sensitive, ou seja, sensível a letras maiúsculas e minúsculas, pois faz diferença quando utilizamos uma e outra.
- **Tipos de dados:** O PHP é uma linguagem fracamente tipada. Logo, embora possua suporte para isto, não é necessário definir o tipo de uma variável em sua declaração. Os tipos de dados disponíveis em PHP são: booleanos, inteiros, números de ponto flutuante, strings, arrays, interáveis (iterables), objetos, recursos, NULL e call-backs.
- **Operadores condicionais:** No PHP, há suporte às condicionais if, else, if e else ternários, if else e switch.
- **Laços de repetição:** No PHP estão disponíveis os laços for, foreach, while e do-while.
- **Funções e métodos:** O código PHP possui uma grande quantidade de funções e métodos nativos.

#### Inclusão de scripts dentro de scripts
O PHP permite a inclusão de um script dentro de outro script. Isso é muito útil, sobretudo se pensarmos no paradigma de orientação a objetos, em que temos, em um programa, diversas classes, codificadas em diferentes scripts. Logo, sempre que precisarmos fazer uso de uma dessas classes, de seus métodos ou atributos, basta incluí-la no script desejado. Para incluir um script em outro, o PHP disponibiliza algumas funções:
- include
- require
- include_once
- require_once

#### Acesso ao sistema de arquivos
Por meio do PHP é possível ter acesso ao sistema de arquivos do servidor web. Com isso, pode-se por exemplo, manipular arquivos e diretórios, desde a simples listagem à inclusão ou exclusão de dados.

#### Páginas dinâmicas
Se fôssemos implementar em uma página web tudo o que estudamos até aqui, teríamos uma página HTML básica, com um pouco de interação no próprio navegador, graças ao JavaScript, e também com um pouco de estilo, este devido ao CSS. Além disso, já sabemos que é possível enviar dados do HTML para o PHP mediante um formulário. Para prosseguirmos, é importante definirmos o que são páginas dinâmicas. A melhor forma de fazer isso, porém, é definindo o que seria o seu antônimo, ou seja, as páginas estáticas.

***HTML + JavaScript + CSS, sem conexão com uma linguagem de programação, formam o que podemos chamar de páginas estáticas. Embora seja até possível termos um site inteiro composto por páginas estáticas, isso seria muito trabalhoso e também nada usual.***

A combinação das tecnologias do lado cliente com as tecnologias do lado servidor produzem páginas dinâmicas. Nelas, é possível receber as informações provenientes do cliente, processá-las, guardá-las, recuperá-las e utilizá-las sempre que desejarmos. E não é só isso: podemos guardar todo o conteúdo do nosso blog no banco de dados. Com isso, teríamos apenas uma página PHP que recuperaria nosso conteúdo no banco e o exibiria no navegador.

#### Acesso a dados
Como mencionado anteriormente, o ambiente web é composto por tecnologias que rodam do lado cliente e do lado servidor. Complementando o que vimos até aqui, temos ainda, do lado servidor, o banco de dados. De forma resumida, podemos defini-lo como um repositório em que diversas informações podem ser armazenadas e posteriormente recuperadas.

Para realizar a gestão desses dados, existem os SGBD, ou sistemas gerenciadores de bancos de dados. Se, por um lado, o SGBD é responsável por montar a estrutura do banco de dados — entre outras funções —, por outro lado, para recuperarmos uma informação guardada em um banco de dados e exibi-la em uma página web, é necessário utilizar uma linguagem do lado servidor, como o PHP. Em outras palavras, não é possível acessar o banco de dados utilizando apenas HTML ou mesmo JavaScript. Sempre será necessária a utilização de uma linguagem server side para o acesso aos dados.

#### Formas de acesso a dados
A partir das tecnologias vistas até aqui, há algumas formas de acessar os dados guardados em um banco de dados.
- **A partir do HTML:** Uma das maneiras mais comuns de enviar e recuperar dados a partir do HTML é fazendo uso de formulários. Com eles, é possível submetermos nossos dados para uma linguagem no lado servidor/PHP. Este, então, recebe as informações e as armazena no banco de dados. Da mesma forma acontece o caminho inverso. Podemos ter um formulário em nossa página HTML que solicite dados ao PHP e este as envie de volta, após recuperá-las do banco de dados.

Vale lembrar ainda o que vimos sobre o PHP: ele permite a utilização de códigos HTML diretamente em seus scripts. Logo, uma página web feita em PHP pode recuperar dados do banco de dados toda vez que é carregada. É isso o que acontece na maioria dos sites. Cada página visualizada é composta por conteúdo armazenado em banco de dados e código HTML produzidos por uma linguagem do lado servidor. Com isso, cada página que abrimos em sites dinâmicos implica em uma chamada/requisição ao lado servidor — script e banco de dados.
- **A partir do JavaScript:** O JavaScript possui, essencialmente, duas formas para se comunicar com linguagens do lado servidor: por meio das APIs (Application Programming Interface) XMLHttpRequest e Fetch API. A primeira é amplamente utilizada, sendo a forma mais comum de realizar essa comunicação. É normalmente associada a uma técnica de desenvolvimento web chamada AJAX. Já a segunda é mais recente e oferece algumas melhorias, embora não seja suportada por todos os navegadores.

A comunicação em ambas consiste em, mediante algum evento no navegador, normalmente originado em uma ação disparada pelo usuário, é enviada uma requisição ao lado servidor, como recuperar algum dado, por exemplo, tratar o seu retorno e o exibir na tela. Isso tudo sem que seja necessário recarregar toda a página.

## Referências
- BENYON, D. Interação humano-computador. São Paulo: Pearson Prentice Hall, 2011.

- STAT COUNTER GLOBAL STATS. Screen resolution stats Brazil. S. d.

- FRIEDMAN, V. Responsive web design: what it is and how to use it. Smashing Magazine, 11 ago. 2018. Consultado na internet em: 13 jun. 2022.

- MOZILLA. MDN web docs: CSS Preprocessor. S. d.

- PAIXÃO, A. Notas de aula sobre ambiente web cliente X servidor e as tecnologias do professor alexandre paixão. Disponível sob licença Creative Commons BR Atribuição – CC BY, 2020.

- SILVA, M. S. Web design responsivo: aprenda a criar sites que se adaptam automaticamente a qualquer dispositivo, desde desktop até telefones celulares. São Paulo: Novatec, 2014.

- WROBLEWSKI, L. Mobile first. S. d.

- W3SCHOOLS. CSS reference. S. d.
