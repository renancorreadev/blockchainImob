# Interface: QueryFilters

[<internal>](../wiki/%3Cinternal%3E).QueryFilters

## Hierarchy

- **`QueryFilters`**

  ↳ [`ResetQueryFilters`](../wiki/%3Cinternal%3E.ResetQueryFilters)

  ↳ [`InvalidateQueryFilters`](../wiki/%3Cinternal%3E.InvalidateQueryFilters)

  ↳ [`RefetchQueryFilters`](../wiki/%3Cinternal%3E.RefetchQueryFilters)

## Table of contents

### Properties

- [exact](../wiki/%3Cinternal%3E.QueryFilters#exact)
- [fetchStatus](../wiki/%3Cinternal%3E.QueryFilters#fetchstatus)
- [queryKey](../wiki/%3Cinternal%3E.QueryFilters#querykey)
- [stale](../wiki/%3Cinternal%3E.QueryFilters#stale)
- [type](../wiki/%3Cinternal%3E.QueryFilters#type)

### Methods

- [predicate](../wiki/%3Cinternal%3E.QueryFilters#predicate)

## Properties

### exact

• `Optional` **exact**: `boolean`

#### Defined in

node_modules/@tanstack/query-core/build/lib/utils.d.ts:12

___

### fetchStatus

• `Optional` **fetchStatus**: [`FetchStatus`](../wiki/%3Cinternal%3E#fetchstatus)

#### Defined in

node_modules/@tanstack/query-core/build/lib/utils.d.ts:28

___

### queryKey

• `Optional` **queryKey**: [`QueryKey`](../wiki/%3Cinternal%3E#querykey)

#### Defined in

node_modules/@tanstack/query-core/build/lib/utils.d.ts:20

___

### stale

• `Optional` **stale**: `boolean`

#### Defined in

node_modules/@tanstack/query-core/build/lib/utils.d.ts:24

___

### type

• `Optional` **type**: [`QueryTypeFilter`](../wiki/%3Cinternal%3E#querytypefilter)

#### Defined in

node_modules/@tanstack/query-core/build/lib/utils.d.ts:8

## Methods

### predicate

▸ `Optional` **predicate**(`query`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`Query`](../wiki/%3Cinternal%3E.Query)<`unknown`, `unknown`, `unknown`, [`QueryKey`](../wiki/%3Cinternal%3E#querykey)\> |

#### Returns

`boolean`

#### Defined in

node_modules/@tanstack/query-core/build/lib/utils.d.ts:16
