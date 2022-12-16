# Interface: MutationObserverBaseResult<TData, TError, TVariables, TContext\>

[<internal>](../wiki/%3Cinternal%3E).MutationObserverBaseResult

## Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `unknown` |
| `TError` | `unknown` |
| `TVariables` | `void` |
| `TContext` | `unknown` |

## Hierarchy

- [`MutationState`](../wiki/%3Cinternal%3E.MutationState)<`TData`, `TError`, `TVariables`, `TContext`\>

  ↳ **`MutationObserverBaseResult`**

  ↳↳ [`MutationObserverIdleResult`](../wiki/%3Cinternal%3E.MutationObserverIdleResult)

  ↳↳ [`MutationObserverLoadingResult`](../wiki/%3Cinternal%3E.MutationObserverLoadingResult)

  ↳↳ [`MutationObserverErrorResult`](../wiki/%3Cinternal%3E.MutationObserverErrorResult)

  ↳↳ [`MutationObserverSuccessResult`](../wiki/%3Cinternal%3E.MutationObserverSuccessResult)

## Table of contents

### Properties

- [context](../wiki/%3Cinternal%3E.MutationObserverBaseResult#context)
- [data](../wiki/%3Cinternal%3E.MutationObserverBaseResult#data)
- [error](../wiki/%3Cinternal%3E.MutationObserverBaseResult#error)
- [failureCount](../wiki/%3Cinternal%3E.MutationObserverBaseResult#failurecount)
- [failureReason](../wiki/%3Cinternal%3E.MutationObserverBaseResult#failurereason)
- [isError](../wiki/%3Cinternal%3E.MutationObserverBaseResult#iserror)
- [isIdle](../wiki/%3Cinternal%3E.MutationObserverBaseResult#isidle)
- [isLoading](../wiki/%3Cinternal%3E.MutationObserverBaseResult#isloading)
- [isPaused](../wiki/%3Cinternal%3E.MutationObserverBaseResult#ispaused)
- [isSuccess](../wiki/%3Cinternal%3E.MutationObserverBaseResult#issuccess)
- [mutate](../wiki/%3Cinternal%3E.MutationObserverBaseResult#mutate)
- [status](../wiki/%3Cinternal%3E.MutationObserverBaseResult#status)
- [variables](../wiki/%3Cinternal%3E.MutationObserverBaseResult#variables)

### Methods

- [reset](../wiki/%3Cinternal%3E.MutationObserverBaseResult#reset)

## Properties

### context

• **context**: `undefined` \| `TContext`

#### Inherited from

[MutationState](../wiki/%3Cinternal%3E.MutationState).[context](../wiki/%3Cinternal%3E.MutationState#context)

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutation.d.ts:16

___

### data

• **data**: `undefined` \| `TData`

#### Inherited from

[MutationState](../wiki/%3Cinternal%3E.MutationState).[data](../wiki/%3Cinternal%3E.MutationState#data)

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutation.d.ts:17

___

### error

• **error**: ``null`` \| `TError`

#### Inherited from

[MutationState](../wiki/%3Cinternal%3E.MutationState).[error](../wiki/%3Cinternal%3E.MutationState#error)

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutation.d.ts:18

___

### failureCount

• **failureCount**: `number`

#### Inherited from

[MutationState](../wiki/%3Cinternal%3E.MutationState).[failureCount](../wiki/%3Cinternal%3E.MutationState#failurecount)

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutation.d.ts:19

___

### failureReason

• **failureReason**: ``null`` \| `TError`

#### Inherited from

[MutationState](../wiki/%3Cinternal%3E.MutationState).[failureReason](../wiki/%3Cinternal%3E.MutationState#failurereason)

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutation.d.ts:20

___

### isError

• **isError**: `boolean`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:365

___

### isIdle

• **isIdle**: `boolean`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:366

___

### isLoading

• **isLoading**: `boolean`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:367

___

### isPaused

• **isPaused**: `boolean`

#### Inherited from

[MutationState](../wiki/%3Cinternal%3E.MutationState).[isPaused](../wiki/%3Cinternal%3E.MutationState#ispaused)

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutation.d.ts:21

___

### isSuccess

• **isSuccess**: `boolean`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:368

___

### mutate

• **mutate**: [`MutateFunction`](../wiki/%3Cinternal%3E#mutatefunction)<`TData`, `TError`, `TVariables`, `TContext`\>

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:369

___

### status

• **status**: [`MutationStatus`](../wiki/%3Cinternal%3E#mutationstatus)

#### Inherited from

[MutationState](../wiki/%3Cinternal%3E.MutationState).[status](../wiki/%3Cinternal%3E.MutationState#status)

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutation.d.ts:22

___

### variables

• **variables**: `undefined` \| `TVariables`

#### Inherited from

[MutationState](../wiki/%3Cinternal%3E.MutationState).[variables](../wiki/%3Cinternal%3E.MutationState#variables)

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutation.d.ts:23

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:370
