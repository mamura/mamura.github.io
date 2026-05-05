---
layout: post
title:  "Criando um componente de Toast/Notify no Vue 3 com TypeScript"
author: mamura
categories: [artigos]
tags: [recipe, vue, notify, typescript]
image: 'assets/images/notify.jpg'
description: 'Criando um componente de Toast/Notify no Vue 3 com TypeScript'
featured: true
hidden: true
date: 2026-05-05 13:06:31
rating: 5
---
## Introdução
Componentes de notificação parecem simples à primeira vista.

Normalmente começam com uma necessidade básica: exibir uma mensagem de sucesso, erro ou alerta após alguma ação do usuário.

Por exemplo:

- cliente cadastrado com sucesso;
- erro ao salvar um formulário;
- aviso antes de continuar uma operação;
- mensagem informativa após uma requisição.

O problema é que esse tipo de componente costuma crescer rápido. Quando não existe uma estrutura clara, é comum que notificações fiquem espalhadas pela aplicação, com chamadas globais difíceis de testar, payloads inconsistentes e pouca preocupação com acessibilidade.

Neste artigo, vamos criar um pequeno componente de Toast/Notify usando Vue 3, TypeScript e Composition API.

A ideia não é criar uma biblioteca completa, mas sim demonstrar um padrão limpo, tipado e reutilizável.

## O problema com notificações globais

Em projetos Vue 2, era comum encontrar soluções baseadas em plugins globais ou chamadas como:

```js
this.$notify({
  type: 'success',
  message: 'Registro salvo com sucesso!'
})
```

Esse padrão funciona, mas em aplicações maiores pode trazer alguns problemas:

dependência global espalhada pelos componentes;
dificuldade para testar;
payload pouco previsível;
ausência de tipagem;
acoplamento entre lógica e interface;
dificuldade na migração para Vue 3;
pouca atenção a acessibilidade.

No Vue 3, podemos resolver esse problema usando uma abordagem baseada em estado compartilhado e Composition API.

Em vez de depender de uma função global mágica, criamos um composable responsável por controlar as notificações da aplicação.

## Estrutura do projeto
A estrutura utilizada será:
```bash
src/
└── modules/
    └── notify/
        ├── components/
        │   └── NotifyContainer.vue
        ├── composables/
        │   └── useNotify.ts
        ├── types/
        │   └── notify.ts
        └── index.ts
```

Essa organização separa bem as responsabilidades:

types: define os contratos TypeScript;
composables: concentra a lógica de estado;
components: renderiza a interface;
index.ts: expõe uma API simples para uso externo.

Essa estrutura também facilita uma futura evolução para um pacote reutilizável ou para um módulo interno da aplicação.

## Criando os tipos
O primeiro passo é definir os tipos usados pelo notify.
```typescript
export type NotifyType = 'success' | 'error' | 'warning' | 'info'

export interface NotifyPayload {
  type?: NotifyType
  title?: string
  message: string
  timeout?: number
}

export interface NotifyItem {
  id: number
  type: NotifyType
  title?: string
  message: string
  timeout: number
}
```

Aqui temos três definições importantes. 
- `NotifyType` limita os tipos permitidos de notificação. Isso evita valores soltos como "sucesso", "danger", "erro" ou qualquer outra variação inconsistente.
- `NotifyPayload` representa os dados recebidos quando uma notificação é criada.
- `NotifyItem` representa a notificação já normalizada internamente, com id, type e timeout obrigatórios.

Essa diferença é importante porque quem usa o notify não precisa informar tudo. O composable pode aplicar valores padrão.

## Criando o composable useNotify
Agora criamos o composable responsável pelo estado das notificações.
```typescript
import { readonly, ref } from 'vue'
import type { NotifyItem, NotifyPayload } from '../types/notify'

const notifications = ref<NotifyItem[]>([])

let nextId = 1

function notify(payload: NotifyPayload): number {
  const id = nextId++

  const notification: NotifyItem = {
    id,
    type: payload.type ?? 'info',
    title: payload.title,
    message: payload.message,
    timeout: payload.timeout ?? 4000,
  }

  notifications.value.push(notification)

  if (notification.timeout > 0) {
    window.setTimeout(() => {
      removeNotify(id)
    }, notification.timeout)
  }

  return id
}

function removeNotify(id: number): void {
  notifications.value = notifications.value.filter(
    notification => notification.id !== id,
  )
}

function clearNotifications(): void {
  notifications.value = []
}

function success(message: string, title?: string): number {
  return notify({
    type: 'success',
    title,
    message,
  })
}

function error(message: string, title?: string): number {
  return notify({
    type: 'error',
    title,
    message,
  })
}

function warning(message: string, title?: string): number {
  return notify({
    type: 'warning',
    title,
    message,
  })
}

function info(message: string, title?: string): number {
  return notify({
    type: 'info',
    title,
    message,
  })
}

export function useNotify() {
  return {
    notifications: readonly(notifications),
    notify,
    success,
    error,
    warning,
    info,
    removeNotify,
    clearNotifications,
  }
}
```

O ponto principal aqui é que notifications fica fora da função `useNotify`. Isso faz com que o estado seja compartilhado entre todos os componentes que usam o composable.

Na prática, qualquer tela pode chamar:
```typescript
const notify = useNotify()

notify.success('Cliente cadastrado com sucesso!')
```

E o componente visual, que também usa useNotify, consegue acessar a mesma lista de notificações.

Outro detalhe importante é o uso de `readonly()`. Ao retornar notifications como somente leitura, evitamos que qualquer componente externo altere diretamente a lista. A manipulação deve acontecer por funções controladas, como notify, removeNotify e clearNotifications.

## Criando o componente visual
Com a lógica pronta, criamos o componente responsável pela renderização.
```vue
<script setup lang="ts">
import { computed } from 'vue'
import { useNotify } from '../composables/useNotify'
import type { NotifyItem, NotifyType } from '../types/notify'

const { notifications, removeNotify } = useNotify()

const typeClasses: Record<NotifyType, string> = {
  success: 'notify--success',
  error: 'notify--error',
  warning: 'notify--warning',
  info: 'notify--info',
}

const typeLabels: Record<NotifyType, string> = {
  success: 'Sucesso',
  error: 'Erro',
  warning: 'Atenção',
  info: 'Informação',
}

const visibleNotifications = computed(() => notifications.value)

function getNotificationClass(notification: NotifyItem): string {
  return typeClasses[notification.type]
}

function getTitle(notification: NotifyItem): string {
  return notification.title ?? typeLabels[notification.type]
}
</script>

<template>
  <div
    class="notify-container"
    aria-live="polite"
    aria-atomic="false"
  >
    <TransitionGroup name="notify" tag="div" class="notify-list">
      <div
        v-for="notification in visibleNotifications"
        :key="notification.id"
        class="notify-item"
        :class="getNotificationClass(notification)"
        role="status"
      >
        <div class="notify-content">
          <strong class="notify-title">
            {{ getTitle(notification) }}
          </strong>

          <p class="notify-message">
            {{ notification.message }}
          </p>
        </div>

        <button
          type="button"
          class="notify-close"
          aria-label="Fechar notificação"
          @click="removeNotify(notification.id)"
        >
          ×
        </button>
      </div>
    </TransitionGroup>
  </div>
</template>
```

sse componente não cria notificações. Ele apenas observa o estado e renderiza a lista.

Essa separação é importante. A tela que executa uma ação dispara a notificação. O `NotifyContainer` apenas exibe o resultado.

## Adicionando transições
Para melhorar a experiência visual, usamos `TransitionGroup`.
```css
.notify-enter-active,
.notify-leave-active {
  transition: all 0.2s ease;
}

.notify-enter-from,
.notify-leave-to {
  opacity: 0;
  transform: translateX(16px);
}

.notify-move {
  transition: transform 0.2s ease;
}
```

O TransitionGroup é útil quando temos uma lista de elementos entrando e saindo da tela.

Cada notificação possui uma `key` única baseada no `id`, permitindo que o Vue controle corretamente a animação de entrada, saída e reorganização da lista.

## Cuidados básicos de acessibilidade
Notificações são elementos visuais, mas também precisam ser compreensíveis para tecnologias assistivas. Neste exemplo usamos:
```html
<div
  class="notify-container"
  aria-live="polite"
  aria-atomic="false"
>
```

O `aria-live="polite"` informa ao leitor de tela que novos conteúdos podem ser anunciados sem interromper imediatamente o usuário.

Também usamos: `role="status"`. Esse atributo indica que o conteúdo representa uma mensagem de status.

No botão de fechar, usamos `aria-label="Fechar notificação"`. Isso evita que o leitor de tela anuncie apenas “vezes” ou “multiplicação” por causa do caractere ×.

São pequenos detalhes, mas fazem diferença na qualidade do componente.

## Registrando o container no `App.vue`
Para que o notify fique disponível globalmente na interface, adicionamos o container no `App.vue`.
```vue
<script setup lang="ts">
import { NotifyContainer } from './modules/notify'
</script>

<template>
  <RouterView />

  <NotifyContainer />
</template>
```

Em um projeto sem Vue Router, o uso pode ser assim:
```vue
<script setup lang="ts">
import { NotifyContainer, useNotify } from './modules/notify'

const notify = useNotify()

function showSuccess() {
  notify.success('Cliente cadastrado com sucesso!')
}
</script>

<template>
  <main>
    <button type="button" @click="showSuccess">
      Exibir notificação
    </button>

    <NotifyContainer />
  </main>
</template>
```

O ponto principal é que o NotifyContainer precisa existir em algum lugar da árvore de componentes. Normalmente, o melhor lugar é o `App.vue`.

## Exemplo de uso
Depois que o container está registrado, qualquer componente pode disparar uma notificação:
```vue
<script setup lang="ts">
import { useNotify } from '@/modules/notify'

const notify = useNotify()

async function saveCustomer() {
  try {
    // await api.post('/customers', form.value)

    notify.success('Cliente cadastrado com sucesso!')
  } catch {
    notify.error('Não foi possível cadastrar o cliente.')
  }
}
</script>

<template>
  <button type="button" @click="saveCustomer">
    Salvar cliente
  </button>
</template>
```

Esse uso é simples, explícito e fácil de entender. A tela não precisa saber como a notificação é renderizada. Ela apenas dispara uma intenção.

## Exportando o módulo
Para facilitar os imports, criamos um `index.ts`:
```typescript
export { useNotify } from './composables/useNotify'
export { default as NotifyContainer } from './components/NotifyContainer.vue'

export type {
  NotifyType,
  NotifyPayload,
  NotifyItem,
} from './types/notify'
```

Com isso, podemos importar assim:
```typescript
import { NotifyContainer, useNotify } from '@/modules/notify'
```

ou, sem alias:
```typescript
import { NotifyContainer, useNotify } from './modules/notify'
```

## Melhorias possíveis
Esse componente é propositalmente simples, mas já possui uma boa base.

Algumas evoluções possíveis seriam:
- permitir posição configurável: topo, base, esquerda ou direita;
- adicionar ícones por tipo;
- limitar número máximo de notificações simultâneas;
- pausar timeout ao passar o mouse;
- adicionar suporte a dark mode;
- integrar com Pinia;
- criar testes unitários;
- transformar o notify em plugin;
- publicar como pacote interno ou biblioteca NPM.

## Conclusão
Criar um componente de notify é um exercício pequeno, mas muito útil para pensar em arquitetura de frontend. Em vez de depender de uma função global espalhada pela aplicação, podemos criar uma solução baseada em Composition API, TypeScript e estado controlado.

O resultado é um componente:
- mais previsível;
- mais fácil de testar;
- tipado;
- reutilizável;
- desacoplado da tela que dispara a notificação;
- com uma base mínima de acessibilidade.

Esse tipo de melhoria é especialmente interessante em migrações de Vue 2 para Vue 3. Nem sempre precisamos reescrever toda a aplicação para melhorar o padrão técnico. Às vezes, pequenos componentes utilitários já são um bom ponto de partida.