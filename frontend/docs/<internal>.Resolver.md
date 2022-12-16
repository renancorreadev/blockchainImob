# Class: Resolver

[<internal>](../wiki/%3Cinternal%3E).Resolver

## Implements

- [`EnsResolver`](../wiki/%3Cinternal%3E.EnsResolver)

## Table of contents

### Constructors

- [constructor](../wiki/%3Cinternal%3E.Resolver#constructor)

### Properties

- [\_resolvedAddress](../wiki/%3Cinternal%3E.Resolver#_resolvedaddress)
- [\_supportsEip2544](../wiki/%3Cinternal%3E.Resolver#_supportseip2544)
- [address](../wiki/%3Cinternal%3E.Resolver#address)
- [name](../wiki/%3Cinternal%3E.Resolver#name)
- [provider](../wiki/%3Cinternal%3E.Resolver#provider)

### Methods

- [\_fetch](../wiki/%3Cinternal%3E.Resolver#_fetch)
- [\_fetchBytes](../wiki/%3Cinternal%3E.Resolver#_fetchbytes)
- [\_getAddress](../wiki/%3Cinternal%3E.Resolver#_getaddress)
- [getAddress](../wiki/%3Cinternal%3E.Resolver#getaddress)
- [getAvatar](../wiki/%3Cinternal%3E.Resolver#getavatar)
- [getContentHash](../wiki/%3Cinternal%3E.Resolver#getcontenthash)
- [getText](../wiki/%3Cinternal%3E.Resolver#gettext)
- [supportsWildcard](../wiki/%3Cinternal%3E.Resolver#supportswildcard)

## Constructors

### constructor

• **new Resolver**(`provider`, `address`, `name`, `resolvedAddress?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `provider` | [`BaseProvider`](../wiki/%3Cinternal%3E.BaseProvider) |
| `address` | `string` |
| `name` | `string` |
| `resolvedAddress?` | `string` |

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:46

## Properties

### \_resolvedAddress

• `Readonly` **\_resolvedAddress**: ``null`` \| `string`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:44

___

### \_supportsEip2544

• **\_supportsEip2544**: ``null`` \| `Promise`<`boolean`\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:45

___

### address

• `Readonly` **address**: `string`

#### Implementation of

[EnsResolver](../wiki/%3Cinternal%3E.EnsResolver).[address](../wiki/%3Cinternal%3E.EnsResolver#address)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:43

___

### name

• `Readonly` **name**: `string`

#### Implementation of

[EnsResolver](../wiki/%3Cinternal%3E.EnsResolver).[name](../wiki/%3Cinternal%3E.EnsResolver#name)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:42

___

### provider

• `Readonly` **provider**: [`BaseProvider`](../wiki/%3Cinternal%3E.BaseProvider)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:41

## Methods

### \_fetch

▸ **_fetch**(`selector`, `parameters?`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` |
| `parameters?` | `string` |

#### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:48

___

### \_fetchBytes

▸ **_fetchBytes**(`selector`, `parameters?`): `Promise`<``null`` \| `string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` |
| `parameters?` | `string` |

#### Returns

`Promise`<``null`` \| `string`\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:49

___

### \_getAddress

▸ **_getAddress**(`coinType`, `hexBytes`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `coinType` | `number` |
| `hexBytes` | `string` |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:50

___

### getAddress

▸ **getAddress**(`coinType?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `coinType?` | `number` |

#### Returns

`Promise`<`string`\>

#### Implementation of

[EnsResolver](../wiki/%3Cinternal%3E.EnsResolver).[getAddress](../wiki/%3Cinternal%3E.EnsResolver#getaddress)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:51

___

### getAvatar

▸ **getAvatar**(): `Promise`<``null`` \| [`Avatar`](../wiki/%3Cinternal%3E.Avatar)\>

#### Returns

`Promise`<``null`` \| [`Avatar`](../wiki/%3Cinternal%3E.Avatar)\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:52

___

### getContentHash

▸ **getContentHash**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Implementation of

[EnsResolver](../wiki/%3Cinternal%3E.EnsResolver).[getContentHash](../wiki/%3Cinternal%3E.EnsResolver#getcontenthash)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:53

___

### getText

▸ **getText**(`key`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`Promise`<`string`\>

#### Implementation of

[EnsResolver](../wiki/%3Cinternal%3E.EnsResolver).[getText](../wiki/%3Cinternal%3E.EnsResolver#gettext)

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:54

___

### supportsWildcard

▸ **supportsWildcard**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

node_modules/@ethersproject/providers/lib/base-provider.d.ts:47
