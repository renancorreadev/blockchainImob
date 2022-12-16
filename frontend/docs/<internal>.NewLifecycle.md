# Interface: NewLifecycle<P, S, SS\>

[<internal>](../wiki/%3Cinternal%3E).NewLifecycle

## Type parameters

| Name |
| :------ |
| `P` |
| `S` |
| `SS` |

## Hierarchy

- **`NewLifecycle`**

  ↳ [`ComponentLifecycle`](../wiki/%3Cinternal%3E.ComponentLifecycle)

## Table of contents

### Methods

- [componentDidUpdate](../wiki/%3Cinternal%3E.NewLifecycle#componentdidupdate-1)
- [getSnapshotBeforeUpdate](../wiki/%3Cinternal%3E.NewLifecycle#getsnapshotbeforeupdate-1)

## Methods

### componentDidUpdate

▸ `Optional` **componentDidUpdate**(`prevProps`, `prevState`, `snapshot?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prevProps` | [`Readonly`](../wiki/%3Cinternal%3E#readonly)<`P`\> |
| `prevState` | [`Readonly`](../wiki/%3Cinternal%3E#readonly)<`S`\> |
| `snapshot?` | `SS` |

#### Returns

`void`

#### Defined in

node_modules/@types/styled-components/node_modules/@types/react/index.d.ts:659

___

### getSnapshotBeforeUpdate

▸ `Optional` **getSnapshotBeforeUpdate**(`prevProps`, `prevState`): ``null`` \| `SS`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prevProps` | [`Readonly`](../wiki/%3Cinternal%3E#readonly)<`P`\> |
| `prevState` | [`Readonly`](../wiki/%3Cinternal%3E#readonly)<`S`\> |

#### Returns

``null`` \| `SS`

#### Defined in

node_modules/@types/styled-components/node_modules/@types/react/index.d.ts:653
