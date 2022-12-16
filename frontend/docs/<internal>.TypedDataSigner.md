# Interface: TypedDataSigner

[<internal>](../wiki/%3Cinternal%3E).TypedDataSigner

## Implemented by

- [`JsonRpcSigner`](../wiki/%3Cinternal%3E.JsonRpcSigner)

## Table of contents

### Methods

- [\_signTypedData](../wiki/%3Cinternal%3E.TypedDataSigner#_signtypeddata)

## Methods

### \_signTypedData

▸ **_signTypedData**(`domain`, `types`, `value`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `domain` | [`TypedDataDomain`](../wiki/%3Cinternal%3E.TypedDataDomain) |
| `types` | [`Record`](../wiki/%3Cinternal%3E#record)<`string`, [`TypedDataField`](../wiki/%3Cinternal%3E.TypedDataField)[]\> |
| `value` | [`Record`](../wiki/%3Cinternal%3E#record)<`string`, `any`\> |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@ethersproject/abstract-signer/lib/index.d.ts:21
