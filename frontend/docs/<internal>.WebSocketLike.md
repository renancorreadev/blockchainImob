# Interface: WebSocketLike

[<internal>](../wiki/%3Cinternal%3E).WebSocketLike

## Table of contents

### Properties

- [onerror](../wiki/%3Cinternal%3E.WebSocketLike#onerror)
- [onmessage](../wiki/%3Cinternal%3E.WebSocketLike#onmessage)
- [onopen](../wiki/%3Cinternal%3E.WebSocketLike#onopen)
- [readyState](../wiki/%3Cinternal%3E.WebSocketLike#readystate)

### Methods

- [close](../wiki/%3Cinternal%3E.WebSocketLike#close)
- [send](../wiki/%3Cinternal%3E.WebSocketLike#send)

## Properties

### onerror

• **onerror**: ``null`` \| (...`args`: `any`[]) => `any`

#### Defined in

node_modules/@ethersproject/providers/lib/websocket-provider.d.ts:15

___

### onmessage

• **onmessage**: ``null`` \| (...`args`: `any`[]) => `any`

#### Defined in

node_modules/@ethersproject/providers/lib/websocket-provider.d.ts:14

___

### onopen

• **onopen**: ``null`` \| (...`args`: `any`[]) => `any`

#### Defined in

node_modules/@ethersproject/providers/lib/websocket-provider.d.ts:13

___

### readyState

• **readyState**: `number`

#### Defined in

node_modules/@ethersproject/providers/lib/websocket-provider.d.ts:16

## Methods

### close

▸ **close**(`code?`, `reason?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `code?` | `number` |
| `reason?` | `string` |

#### Returns

`void`

#### Defined in

node_modules/@ethersproject/providers/lib/websocket-provider.d.ts:18

___

### send

▸ **send**(`payload`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `any` |

#### Returns

`void`

#### Defined in

node_modules/@ethersproject/providers/lib/websocket-provider.d.ts:17
