# Interface: RefetchPageFilters<TPageData\>

[<internal>](../wiki/%3Cinternal%3E).RefetchPageFilters

## Type parameters

| Name | Type |
| :------ | :------ |
| `TPageData` | `unknown` |

## Hierarchy

- **`RefetchPageFilters`**

  ↳ [`ResetQueryFilters`](../wiki/%3Cinternal%3E.ResetQueryFilters)

  ↳ [`InvalidateQueryFilters`](../wiki/%3Cinternal%3E.InvalidateQueryFilters)

  ↳ [`RefetchQueryFilters`](../wiki/%3Cinternal%3E.RefetchQueryFilters)

## Table of contents

### Methods

- [refetchPage](../wiki/%3Cinternal%3E.RefetchPageFilters#refetchpage)

## Methods

### refetchPage

▸ `Optional` **refetchPage**(`lastPage`, `index`, `allPages`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lastPage` | `TPageData` |
| `index` | `number` |
| `allPages` | `TPageData`[] |

#### Returns

`boolean`

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:190
