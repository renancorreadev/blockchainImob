# Class: Removable

[<internal>](../wiki/%3Cinternal%3E).Removable

## Hierarchy

- **`Removable`**

  ↳ [`Query`](../wiki/%3Cinternal%3E.Query)

  ↳ [`Mutation`](../wiki/%3Cinternal%3E.Mutation)

## Table of contents

### Constructors

- [constructor](../wiki/%3Cinternal%3E.Removable#constructor)

### Properties

- [cacheTime](../wiki/%3Cinternal%3E.Removable#cachetime)
- [gcTimeout](../wiki/%3Cinternal%3E.Removable#gctimeout)

### Methods

- [clearGcTimeout](../wiki/%3Cinternal%3E.Removable#cleargctimeout)
- [destroy](../wiki/%3Cinternal%3E.Removable#destroy)
- [optionalRemove](../wiki/%3Cinternal%3E.Removable#optionalremove)
- [scheduleGc](../wiki/%3Cinternal%3E.Removable#schedulegc)
- [updateCacheTime](../wiki/%3Cinternal%3E.Removable#updatecachetime)

## Constructors

### constructor

• **new Removable**()

## Properties

### cacheTime

• **cacheTime**: `number`

#### Defined in

node_modules/@tanstack/query-core/build/lib/removable.d.ts:2

___

### gcTimeout

• `Private` `Optional` **gcTimeout**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/removable.d.ts:3

## Methods

### clearGcTimeout

▸ `Protected` **clearGcTimeout**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/removable.d.ts:7

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/removable.d.ts:4

___

### optionalRemove

▸ `Protected` `Abstract` **optionalRemove**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/removable.d.ts:8

___

### scheduleGc

▸ `Protected` **scheduleGc**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/removable.d.ts:5

___

### updateCacheTime

▸ `Protected` **updateCacheTime**(`newCacheTime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newCacheTime` | `undefined` \| `number` |

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/removable.d.ts:6
