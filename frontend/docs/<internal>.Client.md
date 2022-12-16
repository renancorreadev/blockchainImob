# Class: Client<TProvider, TWebSocketProvider\>

[<internal>](../wiki/%3Cinternal%3E).Client

## Type parameters

| Name | Type |
| :------ | :------ |
| `TProvider` | extends [`Provider`](../wiki/%3Cinternal%3E#provider-1) = [`Provider`](../wiki/%3Cinternal%3E#provider-1) |
| `TWebSocketProvider` | extends [`WebSocketProvider`](../wiki/%3Cinternal%3E#websocketprovider) = [`WebSocketProvider`](../wiki/%3Cinternal%3E#websocketprovider) |

## Table of contents

### Constructors

- [constructor](../wiki/%3Cinternal%3E.Client#constructor)

### Properties

- [#private](../wiki/%3Cinternal%3E.Client##private)
- [config](../wiki/%3Cinternal%3E.Client#config)
- [providers](../wiki/%3Cinternal%3E.Client#providers)
- [storage](../wiki/%3Cinternal%3E.Client#storage)
- [store](../wiki/%3Cinternal%3E.Client#store)
- [webSocketProviders](../wiki/%3Cinternal%3E.Client#websocketproviders)

### Accessors

- [chains](../wiki/%3Cinternal%3E.Client#chains)
- [connector](../wiki/%3Cinternal%3E.Client#connector)
- [connectors](../wiki/%3Cinternal%3E.Client#connectors)
- [data](../wiki/%3Cinternal%3E.Client#data)
- [error](../wiki/%3Cinternal%3E.Client#error)
- [lastUsedChainId](../wiki/%3Cinternal%3E.Client#lastusedchainid)
- [provider](../wiki/%3Cinternal%3E.Client#provider)
- [status](../wiki/%3Cinternal%3E.Client#status)
- [subscribe](../wiki/%3Cinternal%3E.Client#subscribe)
- [webSocketProvider](../wiki/%3Cinternal%3E.Client#websocketprovider)

### Methods

- [autoConnect](../wiki/%3Cinternal%3E.Client#autoconnect)
- [clearState](../wiki/%3Cinternal%3E.Client#clearstate)
- [destroy](../wiki/%3Cinternal%3E.Client#destroy)
- [getProvider](../wiki/%3Cinternal%3E.Client#getprovider)
- [getWebSocketProvider](../wiki/%3Cinternal%3E.Client#getwebsocketprovider)
- [setLastUsedConnector](../wiki/%3Cinternal%3E.Client#setlastusedconnector)
- [setState](../wiki/%3Cinternal%3E.Client#setstate)

## Constructors

### constructor

• **new Client**<`TProvider`, `TWebSocketProvider`\>(`«destructured»`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TProvider` | extends [`BaseProvider`](../wiki/%3Cinternal%3E.BaseProvider)<`TProvider`\> & { `chains?`: [`Chain`](../wiki/%3Cinternal%3E#chain)[]  } = [`Provider`](../wiki/%3Cinternal%3E#provider-1) |
| `TWebSocketProvider` | extends [`WebSocketProvider`](../wiki/%3Cinternal%3E.WebSocketProvider)<`TWebSocketProvider`\> & { `chains?`: [`Chain`](../wiki/%3Cinternal%3E#chain)[]  } = [`WebSocketProvider`](../wiki/%3Cinternal%3E#websocketprovider) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`ClientConfig`](../wiki/%3Cinternal%3E#clientconfig)<`TProvider`, `TWebSocketProvider`\> |

#### Defined in

node_modules/@wagmi/core/dist/index.d.ts:842

## Properties

### #private

• `Private` **#private**: `any`

#### Defined in

node_modules/@wagmi/core/dist/index.d.ts:827

___

### config

• **config**: [`ClientConfig`](../wiki/%3Cinternal%3E#clientconfig)<`TProvider`, `TWebSocketProvider`\>

#### Defined in

node_modules/@wagmi/core/dist/index.d.ts:828

___

### providers

• **providers**: `Map`<`number`, `undefined` \| `TProvider`\>

#### Defined in

node_modules/@wagmi/core/dist/index.d.ts:829

___

### storage

• **storage**: [`ClientStorage`](../wiki/%3Cinternal%3E#clientstorage)

#### Defined in

node_modules/@wagmi/core/dist/index.d.ts:830

___

### store

• **store**: `never`

#### Defined in

node_modules/@wagmi/core/dist/index.d.ts:831

___

### webSocketProviders

• **webSocketProviders**: `Map`<`number`, `undefined` \| `TWebSocketProvider`\>

#### Defined in

node_modules/@wagmi/core/dist/index.d.ts:841

## Accessors

### chains

• `get` **chains**(): `undefined` \| [`Chain`](../wiki/%3Cinternal%3E#chain)[]

#### Returns

`undefined` \| [`Chain`](../wiki/%3Cinternal%3E#chain)[]

#### Defined in

node_modules/@wagmi/core/dist/index.d.ts:843

___

### connector

• `get` **connector**(): `undefined` \| [`Connector`](../wiki/%3Cinternal%3E.Connector)<`any`, `any`, `any`\>

#### Returns

`undefined` \| [`Connector`](../wiki/%3Cinternal%3E.Connector)<`any`, `any`, `any`\>

#### Defined in

node_modules/@wagmi/core/dist/index.d.ts:845

___

### connectors

• `get` **connectors**(): [`Connector`](../wiki/%3Cinternal%3E.Connector)<`any`, `any`, `any`\>[]

#### Returns

[`Connector`](../wiki/%3Cinternal%3E.Connector)<`any`, `any`, `any`\>[]

#### Defined in

node_modules/@wagmi/core/dist/index.d.ts:844

___

### data

• `get` **data**(): `undefined` \| [`Data$1`](../wiki/%3Cinternal%3E#data$1)<`TProvider`\>

#### Returns

`undefined` \| [`Data$1`](../wiki/%3Cinternal%3E#data$1)<`TProvider`\>

#### Defined in

node_modules/@wagmi/core/dist/index.d.ts:846

___

### error

• `get` **error**(): `undefined` \| [`Error`](../wiki/%3Cinternal%3E#error)

#### Returns

`undefined` \| [`Error`](../wiki/%3Cinternal%3E#error)

#### Defined in

node_modules/@wagmi/core/dist/index.d.ts:847

___

### lastUsedChainId

• `get` **lastUsedChainId**(): `undefined` \| `number`

#### Returns

`undefined` \| `number`

#### Defined in

node_modules/@wagmi/core/dist/index.d.ts:848

___

### provider

• `get` **provider**(): `TProvider`

#### Returns

`TProvider`

#### Defined in

node_modules/@wagmi/core/dist/index.d.ts:849

___

### status

• `get` **status**(): ``"connecting"`` \| ``"connected"`` \| ``"reconnecting"`` \| ``"disconnected"``

#### Returns

``"connecting"`` \| ``"connected"`` \| ``"reconnecting"`` \| ``"disconnected"``

#### Defined in

node_modules/@wagmi/core/dist/index.d.ts:850

___

### subscribe

• `get` **subscribe**(): (`listener`: (`selectedState`: [`State`](../wiki/%3Cinternal%3E#state)<`TProvider`, `TWebSocketProvider`\>, `previousSelectedState`: [`State`](../wiki/%3Cinternal%3E#state)<`TProvider`, `TWebSocketProvider`\>) => `void`) => () => `void`<U\>(`selector`: (`state`: [`State`](../wiki/%3Cinternal%3E#state)<`TProvider`, `TWebSocketProvider`\>) => `U`, `listener`: (`selectedState`: `U`, `previousSelectedState`: `U`) => `void`, `options?`: { `equalityFn?`: (`a`: `U`, `b`: `U`) => `boolean` ; `fireImmediately?`: `boolean`  }) => () => `void`

#### Returns

`fn`

▸ (`listener`): () => `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `listener` | (`selectedState`: [`State`](../wiki/%3Cinternal%3E#state)<`TProvider`, `TWebSocketProvider`\>, `previousSelectedState`: [`State`](../wiki/%3Cinternal%3E#state)<`TProvider`, `TWebSocketProvider`\>) => `void` |

##### Returns

`fn`

▸ (): `void`

##### Returns

`void`

▸ <`U`\>(`selector`, `listener`, `options?`): () => `void`

##### Type parameters

| Name |
| :------ |
| `U` |

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | (`state`: [`State`](../wiki/%3Cinternal%3E#state)<`TProvider`, `TWebSocketProvider`\>) => `U` |
| `listener` | (`selectedState`: `U`, `previousSelectedState`: `U`) => `void` |
| `options?` | `Object` |
| `options.equalityFn?` | (`a`: `U`, `b`: `U`) => `boolean` |
| `options.fireImmediately?` | `boolean` |

##### Returns

`fn`

▸ (): `void`

##### Returns

`void`

#### Defined in

node_modules/@wagmi/core/dist/index.d.ts:851

___

### webSocketProvider

• `get` **webSocketProvider**(): `undefined` \| `TWebSocketProvider`

#### Returns

`undefined` \| `TWebSocketProvider`

#### Defined in

node_modules/@wagmi/core/dist/index.d.ts:858

## Methods

### autoConnect

▸ **autoConnect**(): `Promise`<`undefined` \| [`Data$1`](../wiki/%3Cinternal%3E#data$1)<`TProvider`\>\>

#### Returns

`Promise`<`undefined` \| [`Data$1`](../wiki/%3Cinternal%3E#data$1)<`TProvider`\>\>

#### Defined in

node_modules/@wagmi/core/dist/index.d.ts:862

___

### clearState

▸ **clearState**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@wagmi/core/dist/index.d.ts:860

___

### destroy

▸ **destroy**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@wagmi/core/dist/index.d.ts:861

___

### getProvider

▸ **getProvider**(`«destructured»?`): `TProvider`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `bust?` | `boolean` |
| › `chainId?` | `number` |

#### Returns

`TProvider`

#### Defined in

node_modules/@wagmi/core/dist/index.d.ts:863

___

### getWebSocketProvider

▸ **getWebSocketProvider**(`«destructured»?`): `undefined` \| `TWebSocketProvider`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `bust?` | `boolean` |
| › `chainId?` | `number` |

#### Returns

`undefined` \| `TWebSocketProvider`

#### Defined in

node_modules/@wagmi/core/dist/index.d.ts:867

___

### setLastUsedConnector

▸ **setLastUsedConnector**(`lastUsedConnector?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `lastUsedConnector?` | ``null`` \| `string` |

#### Returns

`void`

#### Defined in

node_modules/@wagmi/core/dist/index.d.ts:871

___

### setState

▸ **setState**(`updater`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `updater` | [`State`](../wiki/%3Cinternal%3E#state)<`TProvider`, `TWebSocketProvider`\> \| (`state`: [`State`](../wiki/%3Cinternal%3E#state)<`TProvider`, `TWebSocketProvider`\>) => [`State`](../wiki/%3Cinternal%3E#state)<`TProvider`, `TWebSocketProvider`\> |

#### Returns

`void`

#### Defined in

node_modules/@wagmi/core/dist/index.d.ts:859
