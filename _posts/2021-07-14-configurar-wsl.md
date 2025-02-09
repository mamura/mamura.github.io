---
layout: post
title:  "Configurando WSL"
author: mamura
categories: [cookbooks]
tags: [recipe, wsl, localhost, homeserver, linux, ubuntu]
image: 'assets/images/wsl.png'
description: 'Configurando WSL em uma máquina Windows para programadores'
featured: false
hidden: false
date:   2021-07-14 00:06:31
rating: 4
---

## O que é WSL?

WSL (Windows Subsytem for Linux) é uma maneira nativa que o Windows fornece de virtualizar distribuições linux. Com ela não é preciso mais instalar ferramentas de virtualização, fazer dual boot, etc. O Windows fornece nativamente esse recurso para utilizarmos as ferramentas de linha de comando do linux. E ainda há a promessa de ser possível usar as ferramentas gráficas no Windows 11.

### Instalando e configurando

- Instalar o **Terminal do Windows** (essa parte é opcional, mas esse terminal tem alguns recursos melhores que o pronpt de comando padrão)
<a href="https://www.microsoft.com/pt-br/p/windows-terminal/9n0dx20hk701?rtc=1#activetab=pivot:overviewtab">Link para Windows Store</a>

- Habilitar o recurso **Subsistema do Windows para Linux**

``` bash
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

- Habilitar o recursos "Plataforma de máquina virtual" Após essa etapa será necessário reiniciar a máquina.

``` bash
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

- Baixar o pacote de atualização do kernel do linux. Selecione o link correto para seu tipo de computador, aqui eu deixo o link para computadores <a href="https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi">x64</a> e <a href="https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_arm64.msi">arm64</a>

- Definir WSL2 como versão padrão

``` bash
wsl --set-default-version 2
```

- Instalar a distribuição linux pela Microsoft store. Eu instalarei o <a href="https://www.microsoft.com/store/apps/9N9TNGVNDL3Q">Ubuntu</a>, mas há algumas opções na <a href="https://aka.ms/wslstore">Store</a>.

A partir daqui, só é preciso iniciar o ubuntu, criar um usuário e senha e ser feliz usando o seu linux!
