# Interface: MutationObserverOptions<TData, TError, TVariables, TContext\>

[<internal>](../wiki/%3Cinternal%3E).MutationObserverOptions

## Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `unknown` |
| `TError` | `unknown` |
| `TVariables` | `void` |
| `TContext` | `unknown` |

## Hierarchy

- [`MutationOptions`](../wiki/%3Cinternal%3E.MutationOptions)<`TData`, `TError`, `TVariables`, `TContext`\>

  ↳ **`MutationObserverOptions`**

## Table of contents

### Properties

- [\_defaulted](../wiki/%3Cinternal%3E.MutationObserverOptions#_defaulted)
- [cacheTime](../wiki/%3Cinternal%3E.MutationObserverOptions#cachetime)
- [meta](../wiki/%3Cinternal%3E.MutationObserverOptions#meta)
- [mutationFn](../wiki/%3Cinternal%3E.MutationObserverOptions#mutationfn)
- [mutationKey](../wiki/%3Cinternal%3E.MutationObserverOptions#mutationkey)
- [networkMode](../wiki/%3Cinternal%3E.MutationObserverOptions#networkmode)
- [retry](../wiki/%3Cinternal%3E.MutationObserverOptions#retry)
- [retryDelay](../wiki/%3Cinternal%3E.MutationObserverOptions#retrydelay)
- [useErrorBoundary](../wiki/%3Cinternal%3E.MutationObserverOptions#useerrorboundary)
- [variables](../wiki/%3Cinternal%3E.MutationObserverOptions#variables)

### Methods

- [onError](../wiki/%3Cinternal%3E.MutationObserverOptions#onerror)
- [onMutate](../wiki/%3Cinternal%3E.MutationObserverOptions#onmutate)
- [onSettled](../wiki/%3Cinternal%3E.MutationObserverOptions#onsettled)
- [onSuccess](../wiki/%3Cinternal%3E.MutationObserverOptions#onsuccess)

## Properties

### \_defaulted

• `Optional` **\_defaulted**: `boolean`

#### Inherited from

[MutationOptions](../wiki/%3Cinternal%3E.MutationOptions).[_defaulted](../wiki/%3Cinternal%3E.MutationOptions#_defaulted)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:352

___

### cacheTime

• `Optional` **cacheTime**: `number`

#### Inherited from

[MutationOptions](../wiki/%3Cinternal%3E.MutationOptions).[cacheTime](../wiki/%3Cinternal%3E.MutationOptions#cachetime)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:351

___

### meta

• `Optional` **meta**: [`MutationMeta`](../wiki/%3Cinternal%3E.MutationMeta)

#### Inherited from

[MutationOptions](../wiki/%3Cinternal%3E.MutationOptions).[meta](../wiki/%3Cinternal%3E.MutationOptions#meta)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:353

___

### mutationFn

• `Optional` **mutationFn**: [`MutationFunction`](../wiki/%3Cinternal%3E#mutationfunction)<`TData`, `TVariables`\>

#### Inherited from

[MutationOptions](../wiki/%3Cinternal%3E.MutationOptions).[mutationFn](../wiki/%3Cinternal%3E.MutationOptions#mutationfn)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:341

___

### mutationKey

• `Optional` **mutationKey**: [`MutationKey`](../wiki/%3Cinternal%3E#mutationkey)

#### Inherited from

[MutationOptions](../wiki/%3Cinternal%3E.MutationOptions).[mutationKey](../wiki/%3Cinternal%3E.MutationOptions#mutationkey)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:342

___

### networkMode

• `Optional` **networkMode**: [`NetworkMode`](../wiki/%3Cinternal%3E#networkmode)

#### Inherited from

[MutationOptions](../wiki/%3Cinternal%3E.MutationOptions).[networkMode](../wiki/%3Cinternal%3E.MutationOptions#networkmode)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:350

___

### retry

• `Optional` **retry**: [`RetryValue`](../wiki/%3Cinternal%3E#retryvalue)<`TError`\>

#### Inherited from

[MutationOptions](../wiki/%3Cinternal%3E.MutationOptions).[retry](../wiki/%3Cinternal%3E.MutationOptions#retry)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:348

___

### retryDelay

• `Optional` **retryDelay**: [`RetryDelayValue`](../wiki/%3Cinternal%3E#retrydelayvalue)<`TError`\>

#### Inherited from

[MutationOptions](../wiki/%3Cinternal%3E.MutationOptions).[retryDelay](../wiki/%3Cinternal%3E.MutationOptions#retrydelay)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:349

___

### useErrorBoundary

• `Optional` **useErrorBoundary**: `boolean` \| (`error`: `TError`) => `boolean`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:356

___

### variables

• `Optional` **variables**: `TVariables`

#### Inherited from

[MutationOptions](../wiki/%3Cinternal%3E.MutationOptions).[variables](../wiki/%3Cinternal%3E.MutationOptions#variables)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:343

## Methods

### onError

▸ `Optional` **onError**(`error`, `variables`, `context`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `TError` |
| `variables` | `TVariables` |
| `context` | `undefined` \| `TContext` |

#### Returns

`unknown`

#### Inherited from

[MutationOptions](../wiki/%3Cinternal%3E.MutationOptions).[onError](../wiki/%3Cinternal%3E.MutationOptions#onerror)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:346

___

### onMutate

▸ `Optional` **onMutate**(`variables`): `undefined` \| `TContext` \| `Promise`<`undefined` \| `TContext`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `TVariables` |

#### Returns

`undefined` \| `TContext` \| `Promise`<`undefined` \| `TContext`\>

#### Inherited from

[MutationOptions](../wiki/%3Cinternal%3E.MutationOptions).[onMutate](../wiki/%3Cinternal%3E.MutationOptions#onmutate)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:344

___

### onSettled

▸ `Optional` **onSettled**(`data`, `error`, `variables`, `context`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `undefined` \| `TData` |
| `error` | ``null`` \| `TError` |
| `variables` | `TVariables` |
| `context` | `undefined` \| `TContext` |

#### Returns

`unknown`

#### Inherited from

[MutationOptions](../wiki/%3Cinternal%3E.MutationOptions).[onSettled](../wiki/%3Cinternal%3E.MutationOptions#onsettled)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:347

___

### onSuccess

▸ `Optional` **onSuccess**(`data`, `variables`, `context`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `TData` |
| `variables` | `TVariables` |
| `context` | `undefined` \| `TContext` |

#### Returns

`unknown`

#### Inherited from

[MutationOptions](../wiki/%3Cinternal%3E.MutationOptions).[onSuccess](../wiki/%3Cinternal%3E.MutationOptions#onsuccess)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:345
