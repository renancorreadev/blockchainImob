# Interface: EnsResolver

[<internal>](../wiki/%3Cinternal%3E).EnsResolver

## Implemented by

- [`Resolver`](../wiki/%3Cinternal%3E.Resolver)

## Table of contents

### Properties

- [address](../wiki/%3Cinternal%3E.EnsResolver#address)
- [name](../wiki/%3Cinternal%3E.EnsResolver#name)

### Methods

- [getAddress](../wiki/%3Cinternal%3E.EnsResolver#getaddress)
- [getContentHash](../wiki/%3Cinternal%3E.EnsResolver#getcontenthash)
- [getText](../wiki/%3Cinternal%3E.EnsResolver#gettext)

## Properties

### address

• `Readonly` **address**: `string`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:23

___

### name

• `Readonly` **name**: `string`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:22

## Methods

### getAddress

▸ **getAddress**(`coinType?`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `coinType?` | ``60`` |

#### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:24

___

### getContentHash

▸ **getContentHash**(): `Promise`<``null`` \| `string`\>

#### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:25

___

### getText

▸ **getText**(`key`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:26
