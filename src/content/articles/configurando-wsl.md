---
title: "WSL: o que é e como instalar o Linux no Windows"
description: "Entenda o que é o Windows Subsystem for Linux (WSL) e veja como configurar o WSL 2 e instalar o Ubuntu no Windows para criar um ambiente Linux de desenvolvimento."
publishedAt: 2021-01-15
category: "Engenharia de Software"
tags:
  - WSL
  - Linux
  - Windows
  - Ubuntu
  - Ambiente de Desenvolvimento
cover: "/images/articles/wsl.png"
draft: false
featured: false
---

## O que é WSL?
WSL (Windows Subsytem for Linux) é uma maneira nativa que o Windows fornece de virtualizar distribuições linux. Com ela não é preciso mais instalar ferramentas de virtualização, fazer dual boot, etc. O Windows fornece nativamente esse recurso para utilizarmos as ferramentas de linha de comando do linux. E ainda há a promessa de ser possível usar as ferramentas gráficas no Windows 11.

### Instalando e configurando
- Instalar o Terminal do Windows (essa parte é opcional, mas esse terminal tem alguns recursos melhores que o pronpt de comando padrão)




- Habilitar o recurso Subsistema do Windows para Linux

dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
- Habilitar o recursos "Plataforma de máquina virtual" Após essa etapa será necessário reiniciar a máquina.

dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
- Baixar o pacote de atualização do kernel do linux. Selecione o link correto para seu tipo de computador, aqui eu deixo o link para computadores:

https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi

https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_arm64.msi

- Definir WSL2 como versão padrão

wsl --set-default-version 2
- Instalar a distribuição linux pela Microsoft store. Eu instalarei o Ubuntu:
https://apps.microsoft.com/detail/9n9tngvndl3q?rtc=1&hl=en-US&gl=US

Há algumas opções na Microsoft Store
https://learn.microsoft.com/en-us/windows/wsl/install

A partir daqui, só é preciso iniciar o ubuntu, criar um usuário e senha e ser feliz usando o seu linux!