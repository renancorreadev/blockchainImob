# Interface: InvalidateQueryFilters<TPageData\>

[<internal>](../wiki/%3Cinternal%3E).InvalidateQueryFilters

## Type parameters

| Name | Type |
| :------ | :------ |
| `TPageData` | `unknown` |

## Hierarchy

- [`QueryFilters`](../wiki/%3Cinternal%3E.QueryFilters)

- [`RefetchPageFilters`](../wiki/%3Cinternal%3E.RefetchPageFilters)<`TPageData`\>

  ↳ **`InvalidateQueryFilters`**

## Table of contents

### Properties

- [exact](../wiki/%3Cinternal%3E.InvalidateQueryFilters#exact)
- [fetchStatus](../wiki/%3Cinternal%3E.InvalidateQueryFilters#fetchstatus)
- [queryKey](../wiki/%3Cinternal%3E.InvalidateQueryFilters#querykey)
- [refetchType](../wiki/%3Cinternal%3E.InvalidateQueryFilters#refetchtype)
- [stale](../wiki/%3Cinternal%3E.InvalidateQueryFilters#stale)
- [type](../wiki/%3Cinternal%3E.InvalidateQueryFilters#type)

### Methods

- [predicate](../wiki/%3Cinternal%3E.InvalidateQueryFilters#predicate)
- [refetchPage](../wiki/%3Cinternal%3E.InvalidateQueryFilters#refetchpage)

## Properties

### exact

• `Optional` **exact**: `boolean`

#### Inherited from

[QueryFilters](../wiki/%3Cinternal%3E.QueryFilters).[exact](../wiki/%3Cinternal%3E.QueryFilters#exact)

#### Defined in

node_modules/@tanstack/query-core/build/lib/utils.d.ts:12

___

### fetchStatus

• `Optional` **fetchStatus**: [`FetchStatus`](../wiki/%3Cinternal%3E#fetchstatus)

#### Inherited from

[QueryFilters](../wiki/%3Cinternal%3E.QueryFilters).[fetchStatus](../wiki/%3Cinternal%3E.QueryFilters#fetchstatus)

#### Defined in

node_modules/@tanstack/query-core/build/lib/utils.d.ts:28

___

### queryKey

• `Optional` **queryKey**: [`QueryKey`](../wiki/%3Cinternal%3E#querykey)

#### Inherited from

[QueryFilters](../wiki/%3Cinternal%3E.QueryFilters).[queryKey](../wiki/%3Cinternal%3E.QueryFilters#querykey)

#### Defined in

node_modules/@tanstack/query-core/build/lib/utils.d.ts:20

___

### refetchType

• `Optional` **refetchType**: ``"none"`` \| [`QueryTypeFilter`](../wiki/%3Cinternal%3E#querytypefilter)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:196

___

### stale

• `Optional` **stale**: `boolean`

#### Inherited from

[QueryFilters](../wiki/%3Cinternal%3E.QueryFilters).[stale](../wiki/%3Cinternal%3E.QueryFilters#stale)

#### Defined in

node_modules/@tanstack/query-core/build/lib/utils.d.ts:24

___

### type

• `Optional` **type**: [`QueryTypeFilter`](../wiki/%3Cinternal%3E#querytypefilter)

#### Inherited from

[QueryFilters](../wiki/%3Cinternal%3E.QueryFilters).[type](../wiki/%3Cinternal%3E.QueryFilters#type)

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

#### Inherited from

[QueryFilters](../wiki/%3Cinternal%3E.QueryFilters).[predicate](../wiki/%3Cinternal%3E.QueryFilters#predicate)

#### Defined in

node_modules/@tanstack/query-core/build/lib/utils.d.ts:16

___

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

#### Inherited from

[RefetchPageFilters](../wiki/%3Cinternal%3E.RefetchPageFilters).[refetchPage](../wiki/%3Cinternal%3E.RefetchPageFilters#refetchpage)

#### Defined in

node_modules/@tanstack/query-core/build/lib/types.d.ts:190
