# Class: EventEmitter<EventTypes, Context\>

[<internal>](../wiki/%3Cinternal%3E).EventEmitter

## Type parameters

| Name | Type |
| :------ | :------ |
| `EventTypes` | extends [`ValidEventTypes`](../wiki/%3Cinternal%3E.EventEmitter#valideventtypes) = `string` \| `symbol` |
| `Context` | extends `any` = `any` |

## Hierarchy

- **`EventEmitter`**

  ↳ [`Connector`](../wiki/%3Cinternal%3E.Connector)

## Table of contents

### Constructors

- [constructor](../wiki/%3Cinternal%3E.EventEmitter#constructor)

### Properties

- [prefixed](../wiki/%3Cinternal%3E.EventEmitter#prefixed)

### Methods

- [addListener](../wiki/%3Cinternal%3E.EventEmitter#addlistener)
- [emit](../wiki/%3Cinternal%3E.EventEmitter#emit)
- [eventNames](../wiki/%3Cinternal%3E.EventEmitter#eventnames-1)
- [listenerCount](../wiki/%3Cinternal%3E.EventEmitter#listenercount)
- [listeners](../wiki/%3Cinternal%3E.EventEmitter#listeners)
- [off](../wiki/%3Cinternal%3E.EventEmitter#off)
- [on](../wiki/%3Cinternal%3E.EventEmitter#on)
- [once](../wiki/%3Cinternal%3E.EventEmitter#once)
- [removeAllListeners](../wiki/%3Cinternal%3E.EventEmitter#removealllisteners)
- [removeListener](../wiki/%3Cinternal%3E.EventEmitter#removelistener)

## Constructors

### constructor

• **new EventEmitter**<`EventTypes`, `Context`\>()

#### Type parameters

| Name | Type |
| :------ | :------ |
| `EventTypes` | extends [`ValidEventTypes`](../wiki/%3Cinternal%3E.EventEmitter#valideventtypes) = `string` \| `symbol` |
| `Context` | extends `unknown` = `any` |

## Properties

### prefixed

▪ `Static` **prefixed**: `string` \| `boolean`

#### Defined in

node_modules/eventemitter3/index.d.ts:9

## Methods

### addListener

▸ **addListener**<`T`\>(`event`, `fn`, `context?`): [`EventEmitter`](../wiki/%3Cinternal%3E.EventEmitter)<`EventTypes`, `Context`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn` | [`EventListener`](../wiki/%3Cinternal%3E.EventEmitter#eventlistener)<`EventTypes`, `T`\> |
| `context?` | `Context` |

#### Returns

[`EventEmitter`](../wiki/%3Cinternal%3E.EventEmitter)<`EventTypes`, `Context`\>

#### Defined in

node_modules/eventemitter3/index.d.ts:45

___

### emit

▸ **emit**<`T`\>(`event`, `...args`): `boolean`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `...args` | [`Parameters`](../wiki/%3Cinternal%3E#parameters)<[`EventListener`](../wiki/%3Cinternal%3E.EventEmitter#eventlistener)<`EventTypes`, `T`\>\> |

#### Returns

`boolean`

#### Defined in

node_modules/eventemitter3/index.d.ts:32

___

### eventNames

▸ **eventNames**(): [`EventNames`](../wiki/%3Cinternal%3E.EventEmitter#eventnames)<`EventTypes`\>[]

#### Returns

[`EventNames`](../wiki/%3Cinternal%3E.EventEmitter#eventnames)<`EventTypes`\>[]

#### Defined in

node_modules/eventemitter3/index.d.ts:15

___

### listenerCount

▸ **listenerCount**(`event`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`EventNames`](../wiki/%3Cinternal%3E.EventEmitter#eventnames)<`EventTypes`\> |

#### Returns

`number`

#### Defined in

node_modules/eventemitter3/index.d.ts:27

___

### listeners

▸ **listeners**<`T`\>(`event`): [`EventListener`](../wiki/%3Cinternal%3E.EventEmitter#eventlistener)<`EventTypes`, `T`\>[]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |

#### Returns

[`EventListener`](../wiki/%3Cinternal%3E.EventEmitter#eventlistener)<`EventTypes`, `T`\>[]

#### Defined in

node_modules/eventemitter3/index.d.ts:20

___

### off

▸ **off**<`T`\>(`event`, `fn?`, `context?`, `once?`): [`EventEmitter`](../wiki/%3Cinternal%3E.EventEmitter)<`EventTypes`, `Context`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn?` | [`EventListener`](../wiki/%3Cinternal%3E.EventEmitter#eventlistener)<`EventTypes`, `T`\> |
| `context?` | `Context` |
| `once?` | `boolean` |

#### Returns

[`EventEmitter`](../wiki/%3Cinternal%3E.EventEmitter)<`EventTypes`, `Context`\>

#### Defined in

node_modules/eventemitter3/index.d.ts:69

___

### on

▸ **on**<`T`\>(`event`, `fn`, `context?`): [`EventEmitter`](../wiki/%3Cinternal%3E.EventEmitter)<`EventTypes`, `Context`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn` | [`EventListener`](../wiki/%3Cinternal%3E.EventEmitter#eventlistener)<`EventTypes`, `T`\> |
| `context?` | `Context` |

#### Returns

[`EventEmitter`](../wiki/%3Cinternal%3E.EventEmitter)<`EventTypes`, `Context`\>

#### Defined in

node_modules/eventemitter3/index.d.ts:40

___

### once

▸ **once**<`T`\>(`event`, `fn`, `context?`): [`EventEmitter`](../wiki/%3Cinternal%3E.EventEmitter)<`EventTypes`, `Context`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn` | [`EventListener`](../wiki/%3Cinternal%3E.EventEmitter#eventlistener)<`EventTypes`, `T`\> |
| `context?` | `Context` |

#### Returns

[`EventEmitter`](../wiki/%3Cinternal%3E.EventEmitter)<`EventTypes`, `Context`\>

#### Defined in

node_modules/eventemitter3/index.d.ts:54

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`EventEmitter`](../wiki/%3Cinternal%3E.EventEmitter)<`EventTypes`, `Context`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | [`EventNames`](../wiki/%3Cinternal%3E.EventEmitter#eventnames)<`EventTypes`\> |

#### Returns

[`EventEmitter`](../wiki/%3Cinternal%3E.EventEmitter)<`EventTypes`, `Context`\>

#### Defined in

node_modules/eventemitter3/index.d.ts:79

___

### removeListener

▸ **removeListener**<`T`\>(`event`, `fn?`, `context?`, `once?`): [`EventEmitter`](../wiki/%3Cinternal%3E.EventEmitter)<`EventTypes`, `Context`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `string` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `T` |
| `fn?` | [`EventListener`](../wiki/%3Cinternal%3E.EventEmitter#eventlistener)<`EventTypes`, `T`\> |
| `context?` | `Context` |
| `once?` | `boolean` |

#### Returns

[`EventEmitter`](../wiki/%3Cinternal%3E.EventEmitter)<`EventTypes`, `Context`\>

#### Defined in

node_modules/eventemitter3/index.d.ts:63
