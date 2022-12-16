# Class: MutationObserver<TData, TError, TVariables, TContext\>

[<internal>](../wiki/%3Cinternal%3E).MutationObserver

## Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `unknown` |
| `TError` | `unknown` |
| `TVariables` | `void` |
| `TContext` | `unknown` |

## Hierarchy

- [`Subscribable`](../wiki/%3Cinternal%3E.Subscribable)<[`MutationObserverListener`](../wiki/%3Cinternal%3E#mutationobserverlistener)<`TData`, `TError`, `TVariables`, `TContext`\>\>

  ↳ **`MutationObserver`**

## Table of contents

### Constructors

- [constructor](../wiki/%3Cinternal%3E.MutationObserver#constructor)

### Properties

- [client](../wiki/%3Cinternal%3E.MutationObserver#client)
- [currentMutation](../wiki/%3Cinternal%3E.MutationObserver#currentmutation)
- [currentResult](../wiki/%3Cinternal%3E.MutationObserver#currentresult)
- [listeners](../wiki/%3Cinternal%3E.MutationObserver#listeners)
- [mutateOptions](../wiki/%3Cinternal%3E.MutationObserver#mutateoptions)
- [notify](../wiki/%3Cinternal%3E.MutationObserver#notify)
- [options](../wiki/%3Cinternal%3E.MutationObserver#options)
- [updateResult](../wiki/%3Cinternal%3E.MutationObserver#updateresult)

### Methods

- [bindMethods](../wiki/%3Cinternal%3E.MutationObserver#bindmethods)
- [getCurrentResult](../wiki/%3Cinternal%3E.MutationObserver#getcurrentresult)
- [hasListeners](../wiki/%3Cinternal%3E.MutationObserver#haslisteners)
- [mutate](../wiki/%3Cinternal%3E.MutationObserver#mutate)
- [onMutationUpdate](../wiki/%3Cinternal%3E.MutationObserver#onmutationupdate)
- [onSubscribe](../wiki/%3Cinternal%3E.MutationObserver#onsubscribe)
- [onUnsubscribe](../wiki/%3Cinternal%3E.MutationObserver#onunsubscribe)
- [reset](../wiki/%3Cinternal%3E.MutationObserver#reset)
- [setOptions](../wiki/%3Cinternal%3E.MutationObserver#setoptions)
- [subscribe](../wiki/%3Cinternal%3E.MutationObserver#subscribe)

## Constructors

### constructor

• **new MutationObserver**<`TData`, `TError`, `TVariables`, `TContext`\>(`client`, `options`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `unknown` |
| `TError` | `unknown` |
| `TVariables` | `void` |
| `TContext` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`QueryClient`](../wiki/%3Cinternal%3E.QueryClient) |
| `options` | [`MutationObserverOptions`](../wiki/%3Cinternal%3E.MutationObserverOptions)<`TData`, `TError`, `TVariables`, `TContext`\> |

#### Overrides

[Subscribable](../wiki/%3Cinternal%3E.Subscribable).[constructor](../wiki/%3Cinternal%3E.Subscribable#constructor)

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutationObserver.d.ts:12

## Properties

### client

• `Private` **client**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutationObserver.d.ts:8

___

### currentMutation

• `Private` `Optional` **currentMutation**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutationObserver.d.ts:10

___

### currentResult

• `Private` **currentResult**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutationObserver.d.ts:9

___

### listeners

• `Protected` **listeners**: [`MutationObserverListener`](../wiki/%3Cinternal%3E#mutationobserverlistener)<`TData`, `TError`, `TVariables`, `TContext`\>[]

#### Inherited from

[Subscribable](../wiki/%3Cinternal%3E.Subscribable).[listeners](../wiki/%3Cinternal%3E.Subscribable#listeners)

#### Defined in

node_modules/@tanstack/query-core/build/lib/subscribable.d.ts:3

___

### mutateOptions

• `Private` `Optional` **mutateOptions**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutationObserver.d.ts:11

___

### notify

• `Private` **notify**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutationObserver.d.ts:21

___

### options

• **options**: [`MutationObserverOptions`](../wiki/%3Cinternal%3E.MutationObserverOptions)<`TData`, `TError`, `TVariables`, `TContext`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutationObserver.d.ts:7

___

### updateResult

• `Private` **updateResult**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutationObserver.d.ts:20

## Methods

### bindMethods

▸ `Protected` **bindMethods**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutationObserver.d.ts:13

___

### getCurrentResult

▸ **getCurrentResult**(): [`MutationObserverResult`](../wiki/%3Cinternal%3E#mutationobserverresult)<`TData`, `TError`, `TVariables`, `TContext`\>

#### Returns

[`MutationObserverResult`](../wiki/%3Cinternal%3E#mutationobserverresult)<`TData`, `TError`, `TVariables`, `TContext`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutationObserver.d.ts:17

___

### hasListeners

▸ **hasListeners**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[Subscribable](../wiki/%3Cinternal%3E.Subscribable).[hasListeners](../wiki/%3Cinternal%3E.Subscribable#haslisteners)

#### Defined in

node_modules/@tanstack/query-core/build/lib/subscribable.d.ts:6

___

### mutate

▸ **mutate**(`variables?`, `options?`): `Promise`<`TData`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables?` | `TVariables` |
| `options?` | [`MutateOptions`](../wiki/%3Cinternal%3E.MutateOptions)<`TData`, `TError`, `TVariables`, `TContext`\> |

#### Returns

`Promise`<`TData`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutationObserver.d.ts:19

___

### onMutationUpdate

▸ **onMutationUpdate**(`action`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`Action`](../wiki/%3Cinternal%3E#action-1)<`TData`, `TError`, `TVariables`, `TContext`\> |

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutationObserver.d.ts:16

___

### onSubscribe

▸ `Protected` **onSubscribe**(): `void`

#### Returns

`void`

#### Inherited from

[Subscribable](../wiki/%3Cinternal%3E.Subscribable).[onSubscribe](../wiki/%3Cinternal%3E.Subscribable#onsubscribe)

#### Defined in

node_modules/@tanstack/query-core/build/lib/subscribable.d.ts:7

___

### onUnsubscribe

▸ `Protected` **onUnsubscribe**(): `void`

#### Returns

`void`

#### Overrides

[Subscribable](../wiki/%3Cinternal%3E.Subscribable).[onUnsubscribe](../wiki/%3Cinternal%3E.Subscribable#onunsubscribe)

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutationObserver.d.ts:15

___

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutationObserver.d.ts:18

___

### setOptions

▸ **setOptions**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`MutationObserverOptions`](../wiki/%3Cinternal%3E.MutationObserverOptions)<`TData`, `TError`, `TVariables`, `TContext`\> |

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutationObserver.d.ts:14

___

### subscribe

▸ **subscribe**(`listener`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`MutationObserverListener`](../wiki/%3Cinternal%3E#mutationobserverlistener)<`TData`, `TError`, `TVariables`, `TContext`\> |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Inherited from

[Subscribable](../wiki/%3Cinternal%3E.Subscribable).[subscribe](../wiki/%3Cinternal%3E.Subscribable#subscribe)

#### Defined in

node_modules/@tanstack/query-core/build/lib/subscribable.d.ts:5
