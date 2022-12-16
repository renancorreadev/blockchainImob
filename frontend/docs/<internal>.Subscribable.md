# Class: Subscribable<TListener\>

[<internal>](../wiki/%3Cinternal%3E).Subscribable

## Type parameters

| Name | Type |
| :------ | :------ |
| `TListener` | extends `Function` = [`Listener`](../wiki/%3Cinternal%3E#listener-1) |

## Hierarchy

- **`Subscribable`**

  ↳ [`QueryCache`](../wiki/%3Cinternal%3E.QueryCache)

  ↳ [`MutationCache`](../wiki/%3Cinternal%3E.MutationCache)

  ↳ [`QueryObserver`](../wiki/%3Cinternal%3E.QueryObserver)

  ↳ [`MutationObserver`](../wiki/%3Cinternal%3E.MutationObserver)

## Table of contents

### Constructors

- [constructor](../wiki/%3Cinternal%3E.Subscribable#constructor)

### Properties

- [listeners](../wiki/%3Cinternal%3E.Subscribable#listeners)

### Methods

- [hasListeners](../wiki/%3Cinternal%3E.Subscribable#haslisteners)
- [onSubscribe](../wiki/%3Cinternal%3E.Subscribable#onsubscribe)
- [onUnsubscribe](../wiki/%3Cinternal%3E.Subscribable#onunsubscribe)
- [subscribe](../wiki/%3Cinternal%3E.Subscribable#subscribe)

## Constructors

### constructor

• **new Subscribable**<`TListener`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TListener` | extends `Function` = [`Listener`](../wiki/%3Cinternal%3E#listener-1) |

#### Defined in

node_modules/@tanstack/query-core/build/lib/subscribable.d.ts:4

## Properties

### listeners

• `Protected` **listeners**: `TListener`[]

#### Defined in

node_modules/@tanstack/query-core/build/lib/subscribable.d.ts:3

## Methods

### hasListeners

▸ **hasListeners**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@tanstack/query-core/build/lib/subscribable.d.ts:6

___

### onSubscribe

▸ `Protected` **onSubscribe**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/subscribable.d.ts:7

___

### onUnsubscribe

▸ `Protected` **onUnsubscribe**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/subscribable.d.ts:8

___

### subscribe

▸ **subscribe**(`listener`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | `TListener` |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/subscribable.d.ts:5
