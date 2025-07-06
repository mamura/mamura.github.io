---
layout: post
title:  "Configurar HTTPS em localhost (Nginx)"
author: mamura
categories: [cookbooks]
tags: [recipe, nginx, localhost, homeserver, linux, ubuntu, https, tls]
image: 'assets/images/nginx-https.jpg'
description: 'Montando um Homeserver'
featured: false
hidden: true
date:   2025-01-20 00:06:31
rating: 4.5
---

## Configurar HTTPS em localhost (Nginx)
Essa configuração se aplica em um servidor Ubuntu utilizando Nginx como servidor web.

### Gerando o certificado
```bash
	openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/selfsigned.key -out /etc/ssl/certs/selfsigned.crt
```
- `openssl`: esta é a ferramenta de linha de comando para criação e gerenciamento de certificados OpenSSL, chaves e outros arquivos.

- `req -x509`: isto especifica que queremos usar o gerenciamento X.509 de solicitação de assinatura de certificado (CSR). O X.509 é um padrão de infraestrutura de chave pública ao qual o SSL e o TLS aderem para gerenciamento de chaves e certificados.

- `-nodes`: isso diz ao OpenSSL para pular a opção de proteger nosso certificado com uma frase secreta. Precisamos que o servidor web consiga ler o arquivo, sem a intervenção do usuário, quando o servidor for iniciado. Uma frase secreta impediria que isso acontecesse porque teríamos que digitá-la após cada reinício.

- `-days 365`: esta opção define o período de tempo em que o certificado será considerado válido. Aqui, nós configuramos ela para um ano. Muitos navegadores modernos irão rejeitar quaisquer certificados que sejam válidos por mais de um ano.

- `-newkey rsa:2048`: isso especifica que queremos gerar um novo certificado e uma nova chave ao mesmo tempo. Não criamos a chave necessária para assinar o certificado em um passo anterior, então precisamos criá-la junto com o certificado. A parte `rsa:2048` diz a ele para criar uma chave RSA com 2048 bits.

- `-keyout`: esta linha diz ao OpenSSL onde colocar o arquivo de chave privada gerado que estamos criando.

- `-out`: isso diz ao OpenSSL onde colocar o certificado que estamos criando.

Esse comando gera um prompt solicitando algumas informações necessárias para criação do certificado. A linha mais importante é aquela que requisita o `Common Name`. Você precisa digitar o nome do host que usará para acessar o servidor ou o IP público do mesmo. É importante que este campo corresponda ao que você colocar na barra de endereços do seu navegador para acessar o site, pois uma incompatibilidade irá causar mais erros de segurança:
```
Country Name (2 letter code) [XX]:BR
State or Province Name (full name) []:Ceara
Locality Name (eg, city) [Default City]:Fortaleza 
Organization Name (eg, company) [Default Company Ltd ]:Mamura
Organizational Unit Name (eg, section) []:Mmaura
Common Name (eg, your name or your server's hostname) []:mamura.test
Email Address []:mamura@mamura.com
```

Ao usar o OpenSSL, você também deve criar um grupo [Diffie-Hellman](https://pt.wikipedia.org/wiki/Troca_de_chaves_de_Diffie%E2%80%93Hellman) (DH) forte, que é usado na negociação [do Perfect Forward Secrecy](https://en.wikipedia.org/wiki/Forward_secrecy) com clientes. Você pode fazer isso digitando:
```
openssl dhparam -out /etc/nginx/dhparam.pem 4096
```

### Configurando o Nginx para usar SSL
Vamos criar dois snippets de configuração para o Nginx. Um com as informações sobre a chave SSL e os locais do arquivo de certificado. Outro com a configuração SSL forte que pode ser usada com quaisquer certificados no futuro.
Este método de configuração do Nginx permitirá blocos de servidor limpos e coloca segmentos de configuração comuns em módulos reutilizáveis.
#### Snippet de configuração da chave e certificado SSL
Basta criar um arquivo de configuração no local de instalação do Nginx:
```
nano /etc/nginx/snippets/selfsigned.conf
```

Dentro desse arquivo, adicionamos a diretiva para os arquivos gerados pelo OpenSSL:
```bash
ssl_certificate /etc/ssl/certs/selfsigned.crt;
ssl_certificate_key /etc/ssl/private/selfsigned.key;
```

#### Snippet de configuração de criptografia forte
O outro snippet que definirá algumas configurações de SSL. Isso configurará o Nginx com um conjunto de cifras SSL forte e habilitará alguns recursos avançados que ajudarão a manter seu servidor seguro.

Os parâmetros definidos podem ser reutilizados em configurações futuras do Nginx, então podemos dar ao arquivo um nome genérico:
```bash
nano /etc/nginx/snippets/ssl-params.conf
```

Eu adaptei as recomendações do [Cipherlist.eu](https://cipherlist.eu/), que é um recurso útil para entender as configurações de criptografia usadas para softwares populares. Para nosso uso as configurações em fornecidas na íntegra são o suficiente, fiz apenas algumas pequenas modificações:
```bash
ssl_protocols TLSv1.3;
ssl_prefer_server_ciphers on;
ssl_dhparam /etc/nginx/dhparam.pem; 
ssl_ciphers EECDH+AESGCM:EDH+AESGCM;
ssl_ecdh_curve secp384r1;
ssl_session_timeout  10m;
ssl_session_cache shared:SSL:10m;
ssl_session_tickets off;
ssl_stapling on;
ssl_stapling_verify on;
resolver 8.8.8.8 8.8.4.4 valid=300s;
resolver_timeout 5s;
# Disable strict transport security for now. You can uncomment the following
# line if you understand the implications.
#add_header Strict-Transport-Security "max-age=63072000; includeSubDomains; preload";
add_header X-Frame-Options DENY;
add_header X-Content-Type-Options nosniff;
add_header X-XSS-Protection "1; mode=block";
```

#### Ajustando a configuração do Nginx
```
server {
    listen 443 ssl;
    listen [::]:443 ssl;
    include snippets/self-signed.conf;
    include snippets/ssl-params.conf;

root /var/www/your_domain/html;
        index index.html index.htm index.nginx-debian.html;
  
  server_name your_domain.com www.your_domain.com;

  location / {
                try_files $uri $uri/ =404;
        }
}
```

```
server {
    listen 80;
    listen [::]:80;

    server_name your_domain.com www.your_domain.com;

    return 302 https://$server_name$request_uri;
}
```

#### Acessando pelo Chrome
Ao testar o https acessando pelo Chrome a gente se depara com um aviso de site inseguro:
![[hsts-error.png]]

Existem diversos tutoriais ensinando como resolver isso, mas a maneira mais prática que eu arranjei para isso foi simplesmente clicar em qualquer lugar dessa página e digitar `thisisunsafe` e ele passará a carregar sem esse aviso.