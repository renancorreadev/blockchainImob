# Interface: ConnectorEvents<Provider\>

[<internal>](../wiki/%3Cinternal%3E).ConnectorEvents

## Type parameters

| Name | Type |
| :------ | :------ |
| `Provider` | `any` |

## Table of contents

### Methods

- [change](../wiki/%3Cinternal%3E.ConnectorEvents#change)
- [connect](../wiki/%3Cinternal%3E.ConnectorEvents#connect)
- [disconnect](../wiki/%3Cinternal%3E.ConnectorEvents#disconnect)
- [error](../wiki/%3Cinternal%3E.ConnectorEvents#error)
- [message](../wiki/%3Cinternal%3E.ConnectorEvents#message)

## Methods

### change

▸ **change**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ConnectorData`](../wiki/%3Cinternal%3E#connectordata)<`Provider`\> |

#### Returns

`void`

#### Defined in

node_modules/@wagmi/core/dist/base-a32d0b91.d.ts:14

___

### connect

▸ **connect**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ConnectorData`](../wiki/%3Cinternal%3E#connectordata)<`Provider`\> |

#### Returns

`void`

#### Defined in

node_modules/@wagmi/core/dist/base-a32d0b91.d.ts:15

___

### disconnect

▸ **disconnect**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@wagmi/core/dist/base-a32d0b91.d.ts:20

___

### error

▸ **error**(`error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | [`Error`](../wiki/%3Cinternal%3E#error) |

#### Returns

`void`

#### Defined in

node_modules/@wagmi/core/dist/base-a32d0b91.d.ts:21

___

### message

▸ **message**(`«destructured»`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `data?` | `unknown` |
| › `type` | `string` |

#### Returns

`void`

#### Defined in

node_modules/@wagmi/core/dist/base-a32d0b91.d.ts:16
