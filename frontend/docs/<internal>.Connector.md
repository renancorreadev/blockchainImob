# Class: Connector<Provider, Options, Signer\>

[<internal>](../wiki/%3Cinternal%3E).Connector

## Type parameters

| Name | Type |
| :------ | :------ |
| `Provider` | `any` |
| `Options` | `any` |
| `Signer` | `any` |

## Hierarchy

- [`EventEmitter`](../wiki/%3Cinternal%3E.EventEmitter)<[`ConnectorEvents`](../wiki/%3Cinternal%3E.ConnectorEvents)<`Provider`\>\>

  ↳ **`Connector`**

## Table of contents

### Constructors

- [constructor](../wiki/%3Cinternal%3E.Connector#constructor)

### Properties

- [chains](../wiki/%3Cinternal%3E.Connector#chains)
- [id](../wiki/%3Cinternal%3E.Connector#id)
- [name](../wiki/%3Cinternal%3E.Connector#name)
- [options](../wiki/%3Cinternal%3E.Connector#options)
- [ready](../wiki/%3Cinternal%3E.Connector#ready)
- [prefixed](../wiki/%3Cinternal%3E.Connector#prefixed)

### Methods

- [addListener](../wiki/%3Cinternal%3E.Connector#addlistener)
- [connect](../wiki/%3Cinternal%3E.Connector#connect)
- [disconnect](../wiki/%3Cinternal%3E.Connector#disconnect)
- [emit](../wiki/%3Cinternal%3E.Connector#emit)
- [eventNames](../wiki/%3Cinternal%3E.Connector#eventnames)
- [getAccount](../wiki/%3Cinternal%3E.Connector#getaccount)
- [getBlockExplorerUrls](../wiki/%3Cinternal%3E.Connector#getblockexplorerurls)
- [getChainId](../wiki/%3Cinternal%3E.Connector#getchainid)
- [getProvider](../wiki/%3Cinternal%3E.Connector#getprovider)
- [getSigner](../wiki/%3Cinternal%3E.Connector#getsigner)
- [isAuthorized](../wiki/%3Cinternal%3E.Connector#isauthorized)
- [isChainUnsupported](../wiki/%3Cinternal%3E.Connector#ischainunsupported)
- [listenerCount](../wiki/%3Cinternal%3E.Connector#listenercount)
- [listeners](../wiki/%3Cinternal%3E.Connector#listeners)
- [off](../wiki/%3Cinternal%3E.Connector#off)
- [on](../wiki/%3Cinternal%3E.Connector#on)
- [onAccountsChanged](../wiki/%3Cinternal%3E.Connector#onaccountschanged)
- [onChainChanged](../wiki/%3Cinternal%3E.Connector#onchainchanged)
- [onDisconnect](../wiki/%3Cinternal%3E.Connector#ondisconnect)
- [once](../wiki/%3Cinternal%3E.Connector#once)
- [removeAllListeners](../wiki/%3Cinternal%3E.Connector#removealllisteners)
- [removeListener](../wiki/%3Cinternal%3E.Connector#removelistener)
- [switchChain](../wiki/%3Cinternal%3E.Connector#switchchain)
- [watchAsset](../wiki/%3Cinternal%3E.Connector#watchasset)

## Constructors

### constructor

• **new Connector**<`Provider`, `Options`, `Signer`\>(`«destructured»`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Provider` | `any` |
| `Options` | `any` |
| `Signer` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `chains?` | [`Chain`](../wiki/%3Cinternal%3E#chain)[] |
| › `options` | `Options` |

#### Overrides

[EventEmitter](../wiki/%3Cinternal%3E.EventEmitter).[constructor](../wiki/%3Cinternal%3E.EventEmitter#constructor)

#### Defined in

node_modules/@wagmi/core/dist/base-a32d0b91.d.ts:34

## Properties

### chains

• `Readonly` **chains**: [`Chain`](../wiki/%3Cinternal%3E#chain)[]

#### Defined in

node_modules/@wagmi/core/dist/base-a32d0b91.d.ts:29

___

### id

• `Readonly` `Abstract` **id**: `string`

#### Defined in

node_modules/@wagmi/core/dist/base-a32d0b91.d.ts:25

___

### name

• `Readonly` `Abstract` **name**: `string`

#### Defined in

node_modules/@wagmi/core/dist/base-a32d0b91.d.ts:27

___

### options

• `Readonly` **options**: `Options`

#### Defined in

node_modules/@wagmi/core/dist/base-a32d0b91.d.ts:31

___

### ready

• `Readonly` `Abstract` **ready**: `boolean`

#### Defined in

node_modules/@wagmi/core/dist/base-a32d0b91.d.ts:33

___

### prefixed

▪ `Static` **prefixed**: `string` \| `boolean`

#### Inherited from

[EventEmitter](../wiki/%3Cinternal%3E.EventEmitter).[prefixed](../wiki/%3Cinternal%3E.EventEmitter#prefixed)

#### Defined in

node_modules/eventemitter3/index.d.ts:9

## Methods

### addListener

▸ **addListener**<`T`\>(`event`, `fn`, `context?`): [`Connector`](../wiki/%3Cinternal%3E.Connector)<`Provider`, `Options`, `Signer`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`ConnectorEvents`](../wiki/%3Cinternal%3E.ConnectorEvents)<`Provider`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn` | (...`args`: [`ArgumentMap`](../wiki/%3Cinternal%3E.EventEmitter#argumentmap)<[`ConnectorEvents`](../wiki/%3Cinternal%3E.ConnectorEvents)<`Provider`\>\>[[`Extract`](../wiki/%3Cinternal%3E#extract)<`T`, keyof [`ConnectorEvents`](../wiki/%3Cinternal%3E.ConnectorEvents)<`Provider`\>\>]) => `void` |
| `context?` | `any` |

#### Returns

[`Connector`](../wiki/%3Cinternal%3E.Connector)<`Provider`, `Options`, `Signer`\>

#### Inherited from

[EventEmitter](../wiki/%3Cinternal%3E.EventEmitter).[addListener](../wiki/%3Cinternal%3E.EventEmitter#addlistener)

#### Defined in

node_modules/eventemitter3/index.d.ts:45

___

### connect

▸ `Abstract` **connect**(`config?`): `Promise`<[`Required`](../wiki/%3Cinternal%3E#required)<[`ConnectorData`](../wiki/%3Cinternal%3E#connectordata)<`any`\>\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | `Object` |
| `config.chainId?` | `number` |

#### Returns

`Promise`<[`Required`](../wiki/%3Cinternal%3E#required)<[`ConnectorData`](../wiki/%3Cinternal%3E#connectordata)<`any`\>\>\>

#### Defined in

node_modules/@wagmi/core/dist/base-a32d0b91.d.ts:38

___

### disconnect

▸ `Abstract` **disconnect**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@wagmi/core/dist/base-a32d0b91.d.ts:41

___

### emit

▸ **emit**<`T`\>(`event`, `...args`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`ConnectorEvents`](../wiki/%3Cinternal%3E.ConnectorEvents)<`Provider`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `...args` | [`ArgumentMap`](../wiki/%3Cinternal%3E.EventEmitter#argumentmap)<[`ConnectorEvents`](../wiki/%3Cinternal%3E.ConnectorEvents)<`Provider`\>\>[[`Extract`](../wiki/%3Cinternal%3E#extract)<`T`, keyof [`ConnectorEvents`](../wiki/%3Cinternal%3E.ConnectorEvents)<`Provider`\>\>] |

#### Returns

`boolean`

#### Inherited from

[EventEmitter](../wiki/%3Cinternal%3E.EventEmitter).[emit](../wiki/%3Cinternal%3E.EventEmitter#emit)

#### Defined in

node_modules/eventemitter3/index.d.ts:32

___

### eventNames

▸ **eventNames**(): keyof [`ConnectorEvents`](../wiki/%3Cinternal%3E.ConnectorEvents)<`Provider`\>[]

#### Returns

keyof [`ConnectorEvents`](../wiki/%3Cinternal%3E.ConnectorEvents)<`Provider`\>[]

#### Inherited from

[EventEmitter](../wiki/%3Cinternal%3E.EventEmitter).[eventNames](../wiki/%3Cinternal%3E.EventEmitter#eventnames-1)

#### Defined in

node_modules/eventemitter3/index.d.ts:15

___

### getAccount

▸ `Abstract` **getAccount**(): `Promise`<\`0x${string}\`\>

#### Returns

`Promise`<\`0x${string}\`\>

#### Defined in

node_modules/@wagmi/core/dist/base-a32d0b91.d.ts:42

___

### getBlockExplorerUrls

▸ `Protected` **getBlockExplorerUrls**(`chain`): `undefined` \| `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `chain` | [`Chain`](../wiki/%3Cinternal%3E#chain) |

#### Returns

`undefined` \| `string`[]

#### Defined in

node_modules/@wagmi/core/dist/base-a32d0b91.d.ts:61

___

### getChainId

▸ `Abstract` **getChainId**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

node_modules/@wagmi/core/dist/base-a32d0b91.d.ts:43

___

### getProvider

▸ `Abstract` **getProvider**(`config?`): `Promise`<`Provider`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | `Object` |
| `config.chainId?` | `number` |

#### Returns

`Promise`<`Provider`\>

#### Defined in

node_modules/@wagmi/core/dist/base-a32d0b91.d.ts:44

___

### getSigner

▸ `Abstract` **getSigner**(`config?`): `Promise`<`Signer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `config?` | `Object` |
| `config.chainId?` | `number` |

#### Returns

`Promise`<`Signer`\>

#### Defined in

node_modules/@wagmi/core/dist/base-a32d0b91.d.ts:47

___

### isAuthorized

▸ `Abstract` **isAuthorized**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

node_modules/@wagmi/core/dist/base-a32d0b91.d.ts:50

___

### isChainUnsupported

▸ `Protected` **isChainUnsupported**(`chainId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `number` |

#### Returns

`boolean`

#### Defined in

node_modules/@wagmi/core/dist/base-a32d0b91.d.ts:62

___

### listenerCount

▸ **listenerCount**(`event`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | keyof [`ConnectorEvents`](../wiki/%3Cinternal%3E.ConnectorEvents)<`Provider`\> |

#### Returns

`number`

#### Inherited from

[EventEmitter](../wiki/%3Cinternal%3E.EventEmitter).[listenerCount](../wiki/%3Cinternal%3E.EventEmitter#listenercount)

#### Defined in

node_modules/eventemitter3/index.d.ts:27

___

### listeners

▸ **listeners**<`T`\>(`event`): (...`args`: [`ArgumentMap`](../wiki/%3Cinternal%3E.EventEmitter#argumentmap)<[`ConnectorEvents`](../wiki/%3Cinternal%3E.ConnectorEvents)<`Provider`\>\>[[`Extract`](../wiki/%3Cinternal%3E#extract)<`T`, keyof [`ConnectorEvents`](../wiki/%3Cinternal%3E.ConnectorEvents)<`Provider`\>\>]) => `void`[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`ConnectorEvents`](../wiki/%3Cinternal%3E.ConnectorEvents)<`Provider`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |

#### Returns

(...`args`: [`ArgumentMap`](../wiki/%3Cinternal%3E.EventEmitter#argumentmap)<[`ConnectorEvents`](../wiki/%3Cinternal%3E.ConnectorEvents)<`Provider`\>\>[[`Extract`](../wiki/%3Cinternal%3E#extract)<`T`, keyof [`ConnectorEvents`](../wiki/%3Cinternal%3E.ConnectorEvents)<`Provider`\>\>]) => `void`[]

#### Inherited from

[EventEmitter](../wiki/%3Cinternal%3E.EventEmitter).[listeners](../wiki/%3Cinternal%3E.EventEmitter#listeners)

#### Defined in

node_modules/eventemitter3/index.d.ts:20

___

### off

▸ **off**<`T`\>(`event`, `fn?`, `context?`, `once?`): [`Connector`](../wiki/%3Cinternal%3E.Connector)<`Provider`, `Options`, `Signer`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`ConnectorEvents`](../wiki/%3Cinternal%3E.ConnectorEvents)<`Provider`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn?` | (...`args`: [`ArgumentMap`](../wiki/%3Cinternal%3E.EventEmitter#argumentmap)<[`ConnectorEvents`](../wiki/%3Cinternal%3E.ConnectorEvents)<`Provider`\>\>[[`Extract`](../wiki/%3Cinternal%3E#extract)<`T`, keyof [`ConnectorEvents`](../wiki/%3Cinternal%3E.ConnectorEvents)<`Provider`\>\>]) => `void` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`Connector`](../wiki/%3Cinternal%3E.Connector)<`Provider`, `Options`, `Signer`\>

#### Inherited from

[EventEmitter](../wiki/%3Cinternal%3E.EventEmitter).[off](../wiki/%3Cinternal%3E.EventEmitter#off)

#### Defined in

node_modules/eventemitter3/index.d.ts:69

___

### on

▸ **on**<`T`\>(`event`, `fn`, `context?`): [`Connector`](../wiki/%3Cinternal%3E.Connector)<`Provider`, `Options`, `Signer`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`ConnectorEvents`](../wiki/%3Cinternal%3E.ConnectorEvents)<`Provider`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn` | (...`args`: [`ArgumentMap`](../wiki/%3Cinternal%3E.EventEmitter#argumentmap)<[`ConnectorEvents`](../wiki/%3Cinternal%3E.ConnectorEvents)<`Provider`\>\>[[`Extract`](../wiki/%3Cinternal%3E#extract)<`T`, keyof [`ConnectorEvents`](../wiki/%3Cinternal%3E.ConnectorEvents)<`Provider`\>\>]) => `void` |
| `context?` | `any` |

#### Returns

[`Connector`](../wiki/%3Cinternal%3E.Connector)<`Provider`, `Options`, `Signer`\>

#### Inherited from

[EventEmitter](../wiki/%3Cinternal%3E.EventEmitter).[on](../wiki/%3Cinternal%3E.EventEmitter#on)

#### Defined in

node_modules/eventemitter3/index.d.ts:40

___

### onAccountsChanged

▸ `Protected` `Abstract` **onAccountsChanged**(`accounts`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `accounts` | \`0x${string}\`[] |

#### Returns

`void`

#### Defined in

node_modules/@wagmi/core/dist/base-a32d0b91.d.ts:58

___

### onChainChanged

▸ `Protected` `Abstract` **onChainChanged**(`chain`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chain` | `string` \| `number` |

#### Returns

`void`

#### Defined in

node_modules/@wagmi/core/dist/base-a32d0b91.d.ts:59

___

### onDisconnect

▸ `Protected` `Abstract` **onDisconnect**(`error`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | [`Error`](../wiki/%3Cinternal%3E#error) |

#### Returns

`void`

#### Defined in

node_modules/@wagmi/core/dist/base-a32d0b91.d.ts:60

___

### once

▸ **once**<`T`\>(`event`, `fn`, `context?`): [`Connector`](../wiki/%3Cinternal%3E.Connector)<`Provider`, `Options`, `Signer`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`ConnectorEvents`](../wiki/%3Cinternal%3E.ConnectorEvents)<`Provider`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn` | (...`args`: [`ArgumentMap`](../wiki/%3Cinternal%3E.EventEmitter#argumentmap)<[`ConnectorEvents`](../wiki/%3Cinternal%3E.ConnectorEvents)<`Provider`\>\>[[`Extract`](../wiki/%3Cinternal%3E#extract)<`T`, keyof [`ConnectorEvents`](../wiki/%3Cinternal%3E.ConnectorEvents)<`Provider`\>\>]) => `void` |
| `context?` | `any` |

#### Returns

[`Connector`](../wiki/%3Cinternal%3E.Connector)<`Provider`, `Options`, `Signer`\>

#### Inherited from

[EventEmitter](../wiki/%3Cinternal%3E.EventEmitter).[once](../wiki/%3Cinternal%3E.EventEmitter#once)

#### Defined in

node_modules/eventemitter3/index.d.ts:54

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`Connector`](../wiki/%3Cinternal%3E.Connector)<`Provider`, `Options`, `Signer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | keyof [`ConnectorEvents`](../wiki/%3Cinternal%3E.ConnectorEvents)<`Provider`\> |

#### Returns

[`Connector`](../wiki/%3Cinternal%3E.Connector)<`Provider`, `Options`, `Signer`\>

#### Inherited from

[EventEmitter](../wiki/%3Cinternal%3E.EventEmitter).[removeAllListeners](../wiki/%3Cinternal%3E.EventEmitter#removealllisteners)

#### Defined in

node_modules/eventemitter3/index.d.ts:79

___

### removeListener

▸ **removeListener**<`T`\>(`event`, `fn?`, `context?`, `once?`): [`Connector`](../wiki/%3Cinternal%3E.Connector)<`Provider`, `Options`, `Signer`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends keyof [`ConnectorEvents`](../wiki/%3Cinternal%3E.ConnectorEvents)<`Provider`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn?` | (...`args`: [`ArgumentMap`](../wiki/%3Cinternal%3E.EventEmitter#argumentmap)<[`ConnectorEvents`](../wiki/%3Cinternal%3E.ConnectorEvents)<`Provider`\>\>[[`Extract`](../wiki/%3Cinternal%3E#extract)<`T`, keyof [`ConnectorEvents`](../wiki/%3Cinternal%3E.ConnectorEvents)<`Provider`\>\>]) => `void` |
| `context?` | `any` |
| `once?` | `boolean` |

#### Returns

[`Connector`](../wiki/%3Cinternal%3E.Connector)<`Provider`, `Options`, `Signer`\>

#### Inherited from

[EventEmitter](../wiki/%3Cinternal%3E.EventEmitter).[removeListener](../wiki/%3Cinternal%3E.EventEmitter#removelistener)

#### Defined in

node_modules/eventemitter3/index.d.ts:63

___

### switchChain

▸ `Optional` **switchChain**(`chainId`): `Promise`<[`Chain`](../wiki/%3Cinternal%3E#chain)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `chainId` | `number` |

#### Returns

`Promise`<[`Chain`](../wiki/%3Cinternal%3E#chain)\>

#### Defined in

node_modules/@wagmi/core/dist/base-a32d0b91.d.ts:51

___

### watchAsset

▸ `Optional` **watchAsset**(`asset`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `asset` | `Object` |
| `asset.address` | `string` |
| `asset.decimals?` | `number` |
| `asset.image?` | `string` |
| `asset.symbol` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

node_modules/@wagmi/core/dist/base-a32d0b91.d.ts:52
