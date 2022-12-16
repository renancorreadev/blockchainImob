# Interface: MutationState<TData, TError, TVariables, TContext\>

[<internal>](../wiki/%3Cinternal%3E).MutationState

## Type parameters

| Name | Type |
| :------ | :------ |
| `TData` | `unknown` |
| `TError` | `unknown` |
| `TVariables` | `void` |
| `TContext` | `unknown` |

## Hierarchy

- **`MutationState`**

  ↳ [`MutationObserverBaseResult`](../wiki/%3Cinternal%3E.MutationObserverBaseResult)

## Table of contents

### Properties

- [context](../wiki/%3Cinternal%3E.MutationState#context)
- [data](../wiki/%3Cinternal%3E.MutationState#data)
- [error](../wiki/%3Cinternal%3E.MutationState#error)
- [failureCount](../wiki/%3Cinternal%3E.MutationState#failurecount)
- [failureReason](../wiki/%3Cinternal%3E.MutationState#failurereason)
- [isPaused](../wiki/%3Cinternal%3E.MutationState#ispaused)
- [status](../wiki/%3Cinternal%3E.MutationState#status)
- [variables](../wiki/%3Cinternal%3E.MutationState#variables)

## Properties

### context

• **context**: `undefined` \| `TContext`

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutation.d.ts:16

___

### data

• **data**: `undefined` \| `TData`

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutation.d.ts:17

___

### error

• **error**: ``null`` \| `TError`

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutation.d.ts:18

___

### failureCount

• **failureCount**: `number`

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutation.d.ts:19

___

### failureReason

• **failureReason**: ``null`` \| `TError`

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutation.d.ts:20

___

### isPaused

• **isPaused**: `boolean`

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutation.d.ts:21

___

### status

• **status**: [`MutationStatus`](../wiki/%3Cinternal%3E#mutationstatus)

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutation.d.ts:22

___

### variables

• **variables**: `undefined` \| `TVariables`

#### Defined in

node_modules/@tanstack/query-core/build/lib/mutation.d.ts:23
