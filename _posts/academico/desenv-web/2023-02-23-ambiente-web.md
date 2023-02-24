---
layout: post
title:  "Ambiente Web | Cliente X Servidor | Tecnologias"
tree: "Ambiente Web"
image: ''
date:   2023-02-23 19:59:31
tags:
- faculdade, sistemas de informação
description: ''
categories:
- faculdade
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

## Tecnologias do lado do servidor

