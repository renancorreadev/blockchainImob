# Class: MutationCache

[<internal>](../wiki/%3Cinternal%3E).MutationCache

## Hierarchy

- [`Subscribable`](../wiki/%3Cinternal%3E.Subscribable)<[`MutationCacheListener`](../wiki/%3Cinternal%3E#mutationcachelistener)\>

  ↳ **`MutationCache`**

## Table of contents

### Constructors

- [constructor](../wiki/%3Cinternal%3E.MutationCache#constructor)

### Properties

- [config](../wiki/%3Cinternal%3E.MutationCache#config)
- [listeners](../wiki/%3Cinternal%3E.MutationCache#listeners)
- [mutationId](../wiki/%3Cinternal%3E.MutationCache#mutationid)
- [mutations](../wiki/%3Cinternal%3E.MutationCache#mutations)

### Methods

- [add](../wiki/%3Cinternal%3E.MutationCache#add)
- [build](../wiki/%3Cinternal%3E.MutationCache#build)
- [clear](../wiki/%3Cinternal%3E.MutationCache#clear)
- [find](../wiki/%3Cinternal%3E.MutationCache#find)
- [findAll](../wiki/%3Cinternal%3E.MutationCache#findall)
- [getAll](../wiki/%3Cinternal%3E.MutationCache#getall)
- [hasListeners](../wiki/%3Cinternal%3E.MutationCache#haslisteners)
- [notify](../wiki/%3Cinternal%3E.MutationCache#notify)
- [onSubscribe](../wiki/%3Cinternal%3E.MutationCache#onsubscribe)
- [onUnsubscribe](../wiki/%3Cinternal%3E.MutationCache#onunsubscribe)
- [remove](../wiki/%3Cinternal%3E.MutationCache#remove)
- [resumePausedMutations](../wiki/%3Cinternal%3E.MutationCache#resumepausedmutations)
- [subscribe](../wiki/%3Cinternal%3E.MutationCache#subscribe)

## Constructors

### constructor

• **new MutationCache**(`config?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | [`MutationCacheConfig`](../wiki/%3Cinternal%3E.MutationCacheConfig) |

#### Overrides

[Subscribable](../wiki/%3Cinternal%3E.Subscribable).[constructor](../wiki/%3Cinternal%3E.Subscribable#constructor)

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutationCache.d.ts:47

## Properties

### config

• **config**: [`MutationCacheConfig`](../wiki/%3Cinternal%3E.MutationCacheConfig)

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutationCache.d.ts:44

___

### listeners

• `Protected` **listeners**: [`MutationCacheListener`](../wiki/%3Cinternal%3E#mutationcachelistener)[]

#### Inherited from

[Subscribable](../wiki/%3Cinternal%3E.Subscribable).[listeners](../wiki/%3Cinternal%3E.Subscribable#listeners)

#### Defined in

node_modules/@tanstack/query-core/build/lib/subscribable.d.ts:3

___

### mutationId

• `Private` **mutationId**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutationCache.d.ts:46

___

### mutations

• `Private` **mutations**: `any`

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutationCache.d.ts:45

## Methods

### add

▸ **add**(`mutation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mutation` | [`Mutation`](../wiki/%3Cinternal%3E.Mutation)<`any`, `any`, `any`, `any`\> |

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutationCache.d.ts:49

___

### build

▸ **build**<`TData`, `TError`, `TVariables`, `TContext`\>(`client`, `options`, `state?`): [`Mutation`](../wiki/%3Cinternal%3E.Mutation)<`TData`, `TError`, `TVariables`, `TContext`\>

#### Type parameters

| Name |
| :------ |
| `TData` |
| `TError` |
| `TVariables` |
| `TContext` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`QueryClient`](../wiki/%3Cinternal%3E.QueryClient) |
| `options` | [`MutationOptions`](../wiki/%3Cinternal%3E.MutationOptions)<`TData`, `TError`, `TVariables`, `TContext`\> |
| `state?` | [`MutationState`](../wiki/%3Cinternal%3E.MutationState)<`TData`, `TError`, `TVariables`, `TContext`\> |

#### Returns

[`Mutation`](../wiki/%3Cinternal%3E.Mutation)<`TData`, `TError`, `TVariables`, `TContext`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutationCache.d.ts:48

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutationCache.d.ts:51

___

### find

▸ **find**<`TData`, `TError`, `TVariables`, `TContext`\>(`filters`): `undefined` \| [`Mutation`](../wiki/%3Cinternal%3E.Mutation)<`TData`, `TError`, `TVariables`, `TContext`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `unknown` |
| `TError` | `unknown` |
| `TVariables` | `any` |
| `TContext` | `unknown` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `filters` | [`MutationFilters`](../wiki/%3Cinternal%3E.MutationFilters) |

#### Returns

`undefined` \| [`Mutation`](../wiki/%3Cinternal%3E.Mutation)<`TData`, `TError`, `TVariables`, `TContext`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutationCache.d.ts:53

___

### findAll

▸ **findAll**(`filters`): [`Mutation`](../wiki/%3Cinternal%3E.Mutation)<`unknown`, `unknown`, `void`, `unknown`\>[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `filters` | [`MutationFilters`](../wiki/%3Cinternal%3E.MutationFilters) |

#### Returns

[`Mutation`](../wiki/%3Cinternal%3E.Mutation)<`unknown`, `unknown`, `void`, `unknown`\>[]

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutationCache.d.ts:54

___

### getAll

▸ **getAll**(): [`Mutation`](../wiki/%3Cinternal%3E.Mutation)<`unknown`, `unknown`, `void`, `unknown`\>[]

#### Returns

[`Mutation`](../wiki/%3Cinternal%3E.Mutation)<`unknown`, `unknown`, `void`, `unknown`\>[]

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutationCache.d.ts:52

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

### notify

▸ **notify**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`MutationCacheNotifyEvent`](../wiki/%3Cinternal%3E#mutationcachenotifyevent) |

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutationCache.d.ts:55

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

#### Inherited from

[Subscribable](../wiki/%3Cinternal%3E.Subscribable).[onUnsubscribe](../wiki/%3Cinternal%3E.Subscribable#onunsubscribe)

#### Defined in

node_modules/@tanstack/query-core/build/lib/subscribable.d.ts:8

___

### remove

▸ **remove**(`mutation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mutation` | [`Mutation`](../wiki/%3Cinternal%3E.Mutation)<`any`, `any`, `any`, `any`\> |

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutationCache.d.ts:50

___

### resumePausedMutations

▸ **resumePausedMutations**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutationCache.d.ts:56

___

### subscribe

▸ **subscribe**(`listener`): () => `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | [`MutationCacheListener`](../wiki/%3Cinternal%3E#mutationcachelistener) |

#### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Inherited from

[Subscribable](../wiki/%3Cinternal%3E.Subscribable).[subscribe](../wiki/%3Cinternal%3E.Subscribable#subscribe)

#### Defined in

node_modules/@tanstack/query-core/build/lib/subscribable.d.ts:5
