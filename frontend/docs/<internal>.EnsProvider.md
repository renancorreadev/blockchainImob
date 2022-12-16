# Interface: EnsProvider

[<internal>](../wiki/%3Cinternal%3E).EnsProvider

## Implemented by

- [`BaseProvider`](../wiki/%3Cinternal%3E.BaseProvider)

## Table of contents

### Methods

- [getResolver](../wiki/%3Cinternal%3E.EnsProvider#getresolver)
- [lookupAddress](../wiki/%3Cinternal%3E.EnsProvider#lookupaddress)
- [resolveName](../wiki/%3Cinternal%3E.EnsProvider#resolvename)

## Methods

### getResolver

▸ **getResolver**(`name`): `Promise`<``null`` \| [`EnsResolver`](../wiki/%3Cinternal%3E.EnsResolver)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<``null`` \| [`EnsResolver`](../wiki/%3Cinternal%3E.EnsResolver)\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:31

___

### lookupAddress

▸ **lookupAddress**(`address`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `address` | `string` |

#### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:30

___

### resolveName

▸ **resolveName**(`name`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:29
