# Class: Event

[<internal>](../wiki/%3Cinternal%3E).Event

## Table of contents

### Constructors

- [constructor](../wiki/%3Cinternal%3E.Event#constructor)

### Properties

- [\_inflight](../wiki/%3Cinternal%3E.Event#_inflight)
- [\_lastBlockNumber](../wiki/%3Cinternal%3E.Event#_lastblocknumber)
- [listener](../wiki/%3Cinternal%3E.Event#listener)
- [once](../wiki/%3Cinternal%3E.Event#once)
- [tag](../wiki/%3Cinternal%3E.Event#tag)

### Accessors

- [event](../wiki/%3Cinternal%3E.Event#event)
- [filter](../wiki/%3Cinternal%3E.Event#filter)
- [hash](../wiki/%3Cinternal%3E.Event#hash)
- [type](../wiki/%3Cinternal%3E.Event#type)

### Methods

- [pollable](../wiki/%3Cinternal%3E.Event#pollable)

## Constructors

### constructor

• **new Event**(`tag`, `listener`, `once`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `tag` | `string` |
| `listener` | [`Listener`](../wiki/%3Cinternal%3E#listener) |
| `once` | `boolean` |

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:14

## Properties

### \_inflight

• **\_inflight**: `boolean`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:13

___

### \_lastBlockNumber

• **\_lastBlockNumber**: `number`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:12

___

### listener

• `Readonly` **listener**: [`Listener`](../wiki/%3Cinternal%3E#listener)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:9

___

### once

• `Readonly` **once**: `boolean`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:10

___

### tag

• `Readonly` **tag**: `string`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:11

## Accessors

### event

• `get` **event**(): [`EventType`](../wiki/%3Cinternal%3E#eventtype)

#### Returns

[`EventType`](../wiki/%3Cinternal%3E#eventtype)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:15

___

### filter

• `get` **filter**(): [`Filter`](../wiki/%3Cinternal%3E.Filter)

#### Returns

[`Filter`](../wiki/%3Cinternal%3E.Filter)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:18

___

### hash

• `get` **hash**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:17

___

### type

• `get` **type**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:16

## Methods

### pollable

▸ **pollable**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:19
