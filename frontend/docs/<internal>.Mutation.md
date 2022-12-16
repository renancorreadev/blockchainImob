# Class: Mutation<TData, TError, TVariables, TContext\>

[<internal>](../wiki/%3Cinternal%3E).Mutation

## Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `unknown` |
| `TError` | `unknown` |
| `TVariables` | `void` |
| `TContext` | `unknown` |

## Hierarchy

- [`Removable`](../wiki/%3Cinternal%3E.Removable)

  ↳ **`Mutation`**

## Table of contents

### Constructors

- [constructor](../wiki/%3Cinternal%3E.Mutation#constructor)

### Properties

- [cacheTime](../wiki/%3Cinternal%3E.Mutation#cachetime)
- [dispatch](../wiki/%3Cinternal%3E.Mutation#dispatch)
- [logger](../wiki/%3Cinternal%3E.Mutation#logger)
- [mutationCache](../wiki/%3Cinternal%3E.Mutation#mutationcache)
- [mutationId](../wiki/%3Cinternal%3E.Mutation#mutationid)
- [observers](../wiki/%3Cinternal%3E.Mutation#observers)
- [options](../wiki/%3Cinternal%3E.Mutation#options)
- [retryer](../wiki/%3Cinternal%3E.Mutation#retryer)
- [state](../wiki/%3Cinternal%3E.Mutation#state)

### Accessors

- [meta](../wiki/%3Cinternal%3E.Mutation#meta)

### Methods

- [addObserver](../wiki/%3Cinternal%3E.Mutation#addobserver)
- [clearGcTimeout](../wiki/%3Cinternal%3E.Mutation#cleargctimeout)
- [continue](../wiki/%3Cinternal%3E.Mutation#continue)
- [destroy](../wiki/%3Cinternal%3E.Mutation#destroy)
- [execute](../wiki/%3Cinternal%3E.Mutation#execute)
- [optionalRemove](../wiki/%3Cinternal%3E.Mutation#optionalremove)
- [removeObserver](../wiki/%3Cinternal%3E.Mutation#removeobserver)
- [scheduleGc](../wiki/%3Cinternal%3E.Mutation#schedulegc)
- [setState](../wiki/%3Cinternal%3E.Mutation#setstate)
- [updateCacheTime](../wiki/%3Cinternal%3E.Mutation#updatecachetime)

## Constructors

### constructor

• **new Mutation**<`TData`, `TError`, `TVariables`, `TContext`\>(`config`)

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
| `config` | [`MutationConfig`](../wiki/%3Cinternal%3E.MutationConfig)<`TData`, `TError`, `TVariables`, `TContext`\> |

#### Overrides

[Removable](../wiki/%3Cinternal%3E.Removable).[constructor](../wiki/%3Cinternal%3E.Removable#constructor)

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutation.d.ts:62

## Properties

### cacheTime

• **cacheTime**: `number`

#### Inherited from

[Removable](../wiki/%3Cinternal%3E.Removable).[cacheTime](../wiki/%3Cinternal%3E.Removable#cachetime)

#### Defined in

node_modules/@tanstack/query-core/build/lib/removable.d.ts:2

___

### dispatch

• `Private` **dispatch**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutation.d.ts:70

___

### logger

• `Private` **logger**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutation.d.ts:60

___

### mutationCache

• `Private` **mutationCache**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutation.d.ts:59

___

### mutationId

• **mutationId**: `number`

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutation.d.ts:57

___

### observers

• `Private` **observers**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutation.d.ts:58

___

### options

• **options**: [`MutationOptions`](../wiki/%3Cinternal%3E.MutationOptions)<`TData`, `TError`, `TVariables`, `TContext`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutation.d.ts:56

___

### retryer

• `Private` `Optional` **retryer**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutation.d.ts:61

___

### state

• **state**: [`MutationState`](../wiki/%3Cinternal%3E.MutationState)<`TData`, `TError`, `TVariables`, `TContext`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutation.d.ts:55

## Accessors

### meta

• `get` **meta**(): `undefined` \| [`MutationMeta`](../wiki/%3Cinternal%3E.MutationMeta)

#### Returns

`undefined` \| [`MutationMeta`](../wiki/%3Cinternal%3E.MutationMeta)

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutation.d.ts:63

## Methods

### addObserver

▸ **addObserver**(`observer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | [`MutationObserver`](../wiki/%3Cinternal%3E.MutationObserver)<`any`, `any`, `any`, `any`\> |

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutation.d.ts:65

___

### clearGcTimeout

▸ `Protected` **clearGcTimeout**(): `void`

#### Returns

`void`

#### Inherited from

[Removable](../wiki/%3Cinternal%3E.Removable).[clearGcTimeout](../wiki/%3Cinternal%3E.Removable#cleargctimeout)

#### Defined in

node_modules/@tanstack/query-core/build/lib/removable.d.ts:7

___

### continue

▸ **continue**(): `Promise`<`TData`\>

#### Returns

`Promise`<`TData`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutation.d.ts:68

___

### destroy

▸ **destroy**(): `void`

#### Returns

`void`

#### Inherited from

[Removable](../wiki/%3Cinternal%3E.Removable).[destroy](../wiki/%3Cinternal%3E.Removable#destroy)

#### Defined in

node_modules/@tanstack/query-core/build/lib/removable.d.ts:4

___

### execute

▸ **execute**(): `Promise`<`TData`\>

#### Returns

`Promise`<`TData`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutation.d.ts:69

___

### optionalRemove

▸ `Protected` **optionalRemove**(): `void`

#### Returns

`void`

#### Overrides

[Removable](../wiki/%3Cinternal%3E.Removable).[optionalRemove](../wiki/%3Cinternal%3E.Removable#optionalremove)

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutation.d.ts:67

___

### removeObserver

▸ **removeObserver**(`observer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `observer` | [`MutationObserver`](../wiki/%3Cinternal%3E.MutationObserver)<`any`, `any`, `any`, `any`\> |

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutation.d.ts:66

___

### scheduleGc

▸ `Protected` **scheduleGc**(): `void`

#### Returns

`void`

#### Inherited from

[Removable](../wiki/%3Cinternal%3E.Removable).[scheduleGc](../wiki/%3Cinternal%3E.Removable#schedulegc)

#### Defined in

node_modules/@tanstack/query-core/build/lib/removable.d.ts:5

___

### setState

▸ **setState**(`state`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | [`MutationState`](../wiki/%3Cinternal%3E.MutationState)<`TData`, `TError`, `TVariables`, `TContext`\> |

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutation.d.ts:64

___

### updateCacheTime

▸ `Protected` **updateCacheTime**(`newCacheTime`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newCacheTime` | `undefined` \| `number` |

#### Returns

`void`

#### Inherited from

[Removable](../wiki/%3Cinternal%3E.Removable).[updateCacheTime](../wiki/%3Cinternal%3E.Removable#updatecachetime)

#### Defined in

node_modules/@tanstack/query-core/build/lib/removable.d.ts:6
