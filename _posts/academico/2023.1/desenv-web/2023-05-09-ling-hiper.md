---
layout: post
title:  "Linguagem de marcação de hipertexto"
tree: "HTML"
image: ''
date:   2023-05-09 23:50:11
tags:
- faculdade, sistemas de informação
description: ''
categories:
- faculdade
---

## Estrutura de uma página web
A especificação da HTML foi criada a partir da junção de dois padrões: o SGML e o HyTime. O primeiro, SGML (Standard Generalized Markup Language), é, na verdade, um padrão ISO que especifica as regras para a criação de linguagens de marcação que sejam independentes de plataforma.

Já o HyTime é um padrão desenvolvido pela ISO com o objetivo de possibilitar que hiperdocumentos hipermídia pudessem ser descritos em função de sua estrutura e conteúdo e, consequentemente, utilizados por quaisquer sistemas conformantes (NEWCOMB et al., 1991).

Inicialmente, a especificação da HTML e sua evolução foram mantidas pelo IETF (Internet Engineering Task Force), desde sua primeira publicação formal, em 1993. Entretanto, a partir de 1996 passou a ser mantida pelo World Wide Web Consortium (W3C), além de ter ganhado também o status de norma internacional (ISO/IEC) em 2000.

### A evolução do da HTML: versões
Ao longo dos anos, a HTML tem passado por uma série de aperfeiçoamentos. Tal processo é liderado pelo W3C. Desde a sua criação, a HTML teve diferentes versões: HTML, HTML 2.0, HTML 3.2, HTML 4.01, XHTML, HTML 5, HTML 5.1 e HTML 5.2.

| Ano | Versão | Histórico |
| --- | ------ | --------- |
| 1991 | HTML | Tim Berners-Lee cria a HTML |
| 1995 | HTML 2 | Grupo de Trabalho HTML define a HTML 2.0 |
| 1997 | HTML 3.2 | W3C publica a Recomendação HTML 3.2 |
| 1999 | HTML 4.01 | W3C publica a Recomendação HTML 4.01 |
| 2000 | XHTML | W3C publica a Recomendação XHTML 1.0 |
| 2014 | HTML 5 | W3C publica a Recomendação HTML5 |
| 2016 | HTML 5.1 | W3C candidata a Recomendação HTML 5.1 W3C publica a Recomendação HTML 5.1 2ª edição |
| 2017 | HTML 5.21 | W3C publica a Recomendação HTML5.2 |

Cada versão lançada da HTML representa algum tipo de evolução em relação à versão anterior: formalização de regras e características; correção de problemas de compatibilidade; criação de novas tags; suporte a novos recursos etc.

### Definição de tipos de documento - DTD
O ponto inicial da estrutura de uma página Web é o tipo de documento a ser utilizado. Inicialmente, a HTML continha apenas tags para marcações simples, uma vez que ainda não existia um dispositivo com interface gráfica onde pudesse ser exibida.

Com isso, as primeiras tags eram relacionadas a elementos como títulos, parágrafos, quebras de linha etc. Entretanto, com a sua rápida expansão e sobretudo pelo lançamento do primeiro navegador, o Mosaic, surgiu a necessidade de criação de novas tags, para marcações mais complexas.

Tal necessidade se tornou contínua, tendo como principais pilares estes eventos já mencionados: a rápida expansão da Web e a construção de novos navegadores.

O fato de que cada navegador implementava seus próprios padrões, incluindo tags que só podiam ser interpretadas por eles mesmos, tornou necessária a adoção de padrões. Por isso, o W3C criou o DTD – Definição de Tipos de Documentos (Document Type Definition), que é uma lista de elementos, atributos e requisitos relacionados a determinada linguagem ou variação da linguagem.

#### Utilizando Doctypes - Document Types
A importância dos Document Types, na criação de páginas HTML, diz respeito ao conjunto de tags que podem ser usadas e que serão ou não renderizadas a partir do tipo utilizado.

Antes da HTML5, existia um conceito chamado concordância de documento. Embora relevante apenas nas versões anteriores da HTML, ainda é importante abordá-lo, uma vez que muitas páginas Web ainda não foram portadas para a HTML5. Tal conceito significa que cada página precisa ser concordante com a especificação W3C oficial para a qual ela foi escrita.

A especificação da HTML 4, por exemplo, previa três tipos de Doctypes:
- **Strict:** Determinava uma série de restrições e exigências: obrigatoriedade de separação entre a estrutura e a apresentação; limitação nos elementos de apresentação disponíveis - como tags de fonte e atributos de alinhamento −; ausência de suporte a tags obsoletas etc.
- **Transitional:** Mais maleável em relação aos atributos de apresentação, além de possibilitar a utilização de tags obsoletas.
- **Frameset:** Tag obsoleta da HTML4 usada para combinar múltiplos frames e exibi-los como numa única página.

Vemos o fragmento do código inicial de uma página HTML 4.01:
```html
<!DOCTYPE HTML PUBLIC “-/W3C/DTD HTML 4.01 Transitional//EM” http://www.w3.org/TR/html4/loose.dtd>
```
Na declaração, são definidas as seguintes informações sobre a página HTML:
- Tipo de Documento: HTML;
- Acesso à DTD: Public – logo, a DTD a que se refere está disponível para uso de forma pública;
- Onde se encontra o DTD: Foi criado e está hospedado no W3C;
- URL da especificação: O endereço http://www.w3.org/TR/html4/loose.dtd leva à especificação em questão.

Portanto, o Doctype não é uma tag HTML, mas sim uma instrução. É uma declaração que serve para informar ao navegador qual a versão da HTML usada em um arquivo HTML.

A partir da HTML5, quando a HTML deixou de ser baseada na SGML, a declaração do Doctype foi simplificada, como visto a seguir:
```html
<!DOCTYPE html>
```
Comparando as declarações do Doctype entre a HTML5 e a HTML4, notamos algumas diferenças. A principal é que a HTML5, ao contrário das versões anteriores, não se baseia na SGML e, portanto, não requer referência a um DTD.

### Estrutura de uma página Web
#### Elementos Obrigatórios
A estruturação de uma página Web tem início na definição do Doctype a ser utilizado. Em seguida, é necessário inserir um conjunto de tags que, em conjunto com o Doctype, formam a sua estrutura básica. Tal estrutura é demonstrada a seguir:
```html
<html>
    <head>
    </head>  
    <body>
    </body>
</html>
```
Vamos entender o que significa cada tag?

**Raiz**

A tag inicial, após a declaração do Doctype, é a *\<html\>*. Tal elemento é a raiz do documento. Logo, e lembrando que o código HTML é composto por uma estrutura hierárquica de tags, podemos dizer que a *\<html\>* é a raiz da árvore do documento.

Outra característica importante é que uma tag deve ser aberta e fechada.

A declaração *<html>* é a abertura, e o seu fechamento se dá com a declaração *\</html\>*. Com isso, observando a imagem anterior, é possível perceber que as demais tags estão contidas dentro da tag raiz, *\<html\>*.

**Cabeçalho**

A tag *\<head\>* é chamada de cabeçalho do documento. Fazendo analogia ao corpo humano, devemos vê-la como a cabeça, uma vez que contém as tags que serão usadas para manter todo o documento funcionando e em ordem. Na tabela a seguir visualizamos as tags que fazem parte do cabeçalho:
| Tag | Para que serve |
| --- | -------------- |
| \<title\> | É o título do documento, sendo visualizada na barra de título do navegador. |
| \<meta\> | Engloba uma série de informações – comumente chamadas de metainformações - como a descrição da página, palavras-chave etc. |
| \<script\> | É responsável pela inclusão e/ou definição de scripts relacionados ao documento. |
| \<link\> | É responsável pela inclusão de folhas de estilo (externas) relacionadas ao documento. Também possibilita a inclusão de favicons (pequenos ícones que aparecem na barra de endereços do navegador). |
| \<style\> | Assim como a anterior, é responsável pelo vínculo de folhas de estilo ao documento − quando elas são declaradas diretamente no documento. |

**Corpo**

Logo abaixo do cabeçalho deve ser inserida a tag *\<body\>*. Esta é responsável pela estruturação do documento, sobretudo de seu conteúdo e também apresentação – embora seja fortemente recomendado que a apresentação do documento, como será visto no módulo específico, seja feita por meio de folhas de estilo (CSS).

Quando navegamos em um website, todo o conteúdo que vemos – os textos, imagens e demais elementos – está contido na tag *\<body\>*.

#### Elementos Básicos
Embora as páginas Web sejam diferentes umas das outras, elas tendem a compartilhar uma mesma estrutura. Isto é, além da estrutura apresentada acima, uma página Web é, na maioria das vezes, composta por seções, sendo as mais comuns:
- **Cabeçalho:** Uma área inicial, logo na parte superior da página. Normalmente vemos um título, uma logomarca ou algo do tipo.
- **Barra de navegação:** Esta área pode ser tanto horizontal quanto vertical – e, em alguns casos, os dois. Contém os links para navegação pelas seções/páginas do site.
- **Conteúdo:** O conteúdo principal da página, que pode ser dividido em subseções.
- **Barra lateral:** Pode conter tanto links de navegação quanto informações adicionais que forneçam complemento ao conteúdo principal.
- **Rodapé:** A área final da página, onde normalmente são dispostos links, avisos de direitos autorais, informações complementares sobre o proprietário do site etc.

## Tags HTML básicas
Aprendemos que a HTML é uma linguagem de marcação que faz uso de tags para estruturar o seu conteúdo. Mas o que são tags?

Tags são palavras, escritas entre os caracteres de menor “\<” e maior “\>” e que servem para informar ao navegador a estrutura e o significado do conteúdo inserido em uma página Web.

Tente imaginar o site de um portal de notícias com todo o conteúdo amontoado dentro da tag \<body\>.

Embora exibido pelo navegador, tudo seria uma grande bagunça, uma confusão. No lugar disso, imagine que seja possível dizer ao navegador que determinado conteúdo é o título de uma seção, sendo procedido de um parágrafo que diga respeito a tal seção. Você ainda pode ir além, inserindo uma imagem e vários outros elementos. Para isso servem as tags.

### Declaração de tags
#### Como declarar tags
Antes de conhecermos mais a fundo as tags, sua composição e tipos, vamos voltar à criação.

O primeiro ponto a se ter em mente é que existe um conjunto já definido de tags (padronizado pelo W3C). Logo, não é possível criarmos as nossas próprias tags HTML.

Outro ponto importante é a forma como uma tag é escrita, entre os sinais de menor e maior. Além disso, ela deve, obrigatoriamente, ser fechada. Para isso, repetimos a declaração da tag e utilizamos uma barra “/” antes do seu nome. Exemplos:

```html
<h1>Título de uma seção</h1>
<p>Parágrafo contendo um texto</p>
Com base no primeiro exemplo, dizemos que a tag foi iniciada ao inserirmos o “<h1>” e fechada no “</h1>”.
```

Existem algumas tags que fogem à essa regra. Um exemplo bem conhecido é a de quebra de linha: \<br /\>. Repare que, nesse caso, a tag é fechada com a utilização da “/” logo antes do sinal de maior.

### Tipos e composição de tags
As tags podem ser divididas em tipos, de acordo com as suas funções: Estruturais, textuais e semânticas. Outra característica importante é que elas também podem ter atributos. A seguir, falaremos sobre cada um desses temas.

**Os atributos**

Os atributos servem para que algumas características sejam adicionadas a um elemento, a uma tag. São compostos por um nome e por um valor. Exemplo:
```html
<img src=”imagem.jpg” alt=”minha imagem” />
```
Esta tag é utilizada para a inserção de imagens no documento. Temos dois exemplos de atributos em sua declaração: src e alt, que são nomes de atributo; e “imagem.jpg” e “minha imagem” são seus valores, respectivamente.

O atributo “src” define o endereço e o nome da imagem. Já o atributo “alt” define um texto alternativo a ser exibido no navegador caso a imagem não seja carregada.

Há uma enorme variedade de atributos, assim como de relacionamentos entre eles e as tags. Ao longo dos próximos módulos, veremos alguns dos principais, lembrando que o site do W3C contém a lista completa de atributos e combinações. Por ora, cabe ainda destacar dois atributos de extrema importância no desenvolvimento Web:

- **ID:** Utilizado para definir um identificador, que deve ser único, para uma tag em um documento.
- **class:** Usado para definir uma classe à qual uma ou mais tags pertencem. Com base nesses dois tipos de identificação, é possível, por exemplo, fazer referência a um ou mais atributos para inserirmos estilização visual nas páginas, através de Folhas de Estilo ou eventos e interação, através de Javascript.

Até aqui, conhecemos algumas tags associadas à estrutura, dita obrigatória, de uma página. Também vimos que, na maioria dos casos, as páginas Web possuem uma mesma estrutura em termos de conteúdo. A seguir, conheceremos os tipos de tag textuais e semânticos.

**Tags textuais**

São responsáveis por organizar o conteúdo da página, ou seja, textos, mídias e links, por exemplo. Algumas das principais tags textuais, inclusive vistas anteriormente, são: \<p\>, \<h1\> ... \<h6\>, \<img\> e \<a\>. Essas tags e suas funções serão descritas a seguir.

**Tags semânticas**

A partir da HTML5 foram inseridas tags com a função semântica de organizar a estrutura de conteúdo de uma página. Logo, voltando ao exemplo de seções básicas de uma página, nossa página ficaria assim:
```html
<!DOCTYPE html>
<html>
    <head>
        <title>Título da página</title>
    </head>

    <body>
        <header>Cabeçalho da página</header>

        <nav>Barra de navegação</nav>

        <main>
            Conteúdo da página
            <aside>Barra lateral</aside>
        </main>
        
        <footer>
            Rodapé
        </footer>
    </body>
</html>
```

É possível perceber que existem tags específicas para cada seção do conteúdo. Essa é uma característica importante da HTML, chamada de semântica.

Logo, semântica, neste contexto, pode ser considerada a correta utilização de uma tag HTML de acordo com o seu conteúdo ou finalidade.

Em muitos casos é indiferente, ao visualizarmos uma página no navegador, as tags utilizadas para guardar determinado conteúdo. Entretanto, é fortemente recomendado usá-las de acordo com sua função.

Isso cria uma organização no documento que facilita tanto para você, que o escreveu, quanto para outras pessoas que venham a editar o mesmo documento. Além disso, muitos dispositivos fazem uso dessa marcação para uma correta interpretação do conteúdo ali contido.

Veja outras tags e suas respectivas funções:

| Tag | Descrição / Função |
| --- | ------------------ |

## Tags HTML complexas

### 
## Formulários em páginas Web