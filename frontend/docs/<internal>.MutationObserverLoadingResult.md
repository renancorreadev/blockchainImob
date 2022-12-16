# Interface: MutationObserverLoadingResult<TData, TError, TVariables, TContext\>

[<internal>](../wiki/%3Cinternal%3E).MutationObserverLoadingResult

## Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `unknown` |
| `TError` | `unknown` |
| `TVariables` | `void` |
| `TContext` | `unknown` |

## Hierarchy

- [`MutationObserverBaseResult`](../wiki/%3Cinternal%3E.MutationObserverBaseResult)<`TData`, `TError`, `TVariables`, `TContext`\>

  ↳ **`MutationObserverLoadingResult`**

## Table of contents

### Properties

- [context](../wiki/%3Cinternal%3E.MutationObserverLoadingResult#context)
- [data](../wiki/%3Cinternal%3E.MutationObserverLoadingResult#data)
- [error](../wiki/%3Cinternal%3E.MutationObserverLoadingResult#error)
- [failureCount](../wiki/%3Cinternal%3E.MutationObserverLoadingResult#failurecount)
- [failureReason](../wiki/%3Cinternal%3E.MutationObserverLoadingResult#failurereason)
- [isError](../wiki/%3Cinternal%3E.MutationObserverLoadingResult#iserror)
- [isIdle](../wiki/%3Cinternal%3E.MutationObserverLoadingResult#isidle)
- [isLoading](../wiki/%3Cinternal%3E.MutationObserverLoadingResult#isloading)
- [isPaused](../wiki/%3Cinternal%3E.MutationObserverLoadingResult#ispaused)
- [isSuccess](../wiki/%3Cinternal%3E.MutationObserverLoadingResult#issuccess)
- [mutate](../wiki/%3Cinternal%3E.MutationObserverLoadingResult#mutate)
- [status](../wiki/%3Cinternal%3E.MutationObserverLoadingResult#status)
- [variables](../wiki/%3Cinternal%3E.MutationObserverLoadingResult#variables)

### Methods

- [reset](../wiki/%3Cinternal%3E.MutationObserverLoadingResult#reset)

## Properties

### context

• **context**: `undefined` \| `TContext`

#### Inherited from

[MutationObserverBaseResult](../wiki/%3Cinternal%3E.MutationObserverBaseResult).[context](../wiki/%3Cinternal%3E.MutationObserverBaseResult#context)

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutation.d.ts:16

___

### data

• **data**: `undefined`

#### Overrides

[MutationObserverBaseResult](../wiki/%3Cinternal%3E.MutationObserverBaseResult).[data](../wiki/%3Cinternal%3E.MutationObserverBaseResult#data)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:382

___

### error

• **error**: ``null``

#### Overrides

[MutationObserverBaseResult](../wiki/%3Cinternal%3E.MutationObserverBaseResult).[error](../wiki/%3Cinternal%3E.MutationObserverBaseResult#error)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:383

___

### failureCount

• **failureCount**: `number`

#### Inherited from

[MutationObserverBaseResult](../wiki/%3Cinternal%3E.MutationObserverBaseResult).[failureCount](../wiki/%3Cinternal%3E.MutationObserverBaseResult#failurecount)

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutation.d.ts:19

___

### failureReason

• **failureReason**: ``null`` \| `TError`

#### Inherited from

[MutationObserverBaseResult](../wiki/%3Cinternal%3E.MutationObserverBaseResult).[failureReason](../wiki/%3Cinternal%3E.MutationObserverBaseResult#failurereason)

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutation.d.ts:20

___

### isError

• **isError**: ``false``

#### Overrides

[MutationObserverBaseResult](../wiki/%3Cinternal%3E.MutationObserverBaseResult).[isError](../wiki/%3Cinternal%3E.MutationObserverBaseResult#iserror)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:384

___

### isIdle

• **isIdle**: ``false``

#### Overrides

[MutationObserverBaseResult](../wiki/%3Cinternal%3E.MutationObserverBaseResult).[isIdle](../wiki/%3Cinternal%3E.MutationObserverBaseResult#isidle)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:385

___

### isLoading

• **isLoading**: ``true``

#### Overrides

[MutationObserverBaseResult](../wiki/%3Cinternal%3E.MutationObserverBaseResult).[isLoading](../wiki/%3Cinternal%3E.MutationObserverBaseResult#isloading)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:386

___

### isPaused

• **isPaused**: `boolean`

#### Inherited from

[MutationObserverBaseResult](../wiki/%3Cinternal%3E.MutationObserverBaseResult).[isPaused](../wiki/%3Cinternal%3E.MutationObserverBaseResult#ispaused)

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutation.d.ts:21

___

### isSuccess

• **isSuccess**: ``false``

#### Overrides

[MutationObserverBaseResult](../wiki/%3Cinternal%3E.MutationObserverBaseResult).[isSuccess](../wiki/%3Cinternal%3E.MutationObserverBaseResult#issuccess)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:387

___

### mutate

• **mutate**: [`MutateFunction`](../wiki/%3Cinternal%3E#mutatefunction)<`TData`, `TError`, `TVariables`, `TContext`\>

#### Inherited from

[MutationObserverBaseResult](../wiki/%3Cinternal%3E.MutationObserverBaseResult).[mutate](../wiki/%3Cinternal%3E.MutationObserverBaseResult#mutate)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:369

___

### status

• **status**: ``"loading"``

#### Overrides

[MutationObserverBaseResult](../wiki/%3Cinternal%3E.MutationObserverBaseResult).[status](../wiki/%3Cinternal%3E.MutationObserverBaseResult#status)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:388

___

### variables

• **variables**: `undefined` \| `TVariables`

#### Inherited from

[MutationObserverBaseResult](../wiki/%3Cinternal%3E.MutationObserverBaseResult).[variables](../wiki/%3Cinternal%3E.MutationObserverBaseResult#variables)

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutation.d.ts:23

## Methods

### reset

▸ **reset**(): `void`

#### Returns

`void`

#### Inherited from

[MutationObserverBaseResult](../wiki/%3Cinternal%3E.MutationObserverBaseResult).[reset](../wiki/%3Cinternal%3E.MutationObserverBaseResult#reset)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:370
