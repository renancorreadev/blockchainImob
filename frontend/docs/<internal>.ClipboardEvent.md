# Interface: ClipboardEvent<T\>

[<internal>](../wiki/%3Cinternal%3E).ClipboardEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Element` |

## Hierarchy

- [`SyntheticEvent`](../wiki/%3Cinternal%3E.SyntheticEvent)<`T`, [`NativeClipboardEvent`](../wiki/%3Cinternal%3E#nativeclipboardevent)\>

  ↳ **`ClipboardEvent`**

## Table of contents

### Properties

- [bubbles](../wiki/%3Cinternal%3E.ClipboardEvent#bubbles)
- [cancelable](../wiki/%3Cinternal%3E.ClipboardEvent#cancelable)
- [clipboardData](../wiki/%3Cinternal%3E.ClipboardEvent#clipboarddata)
- [currentTarget](../wiki/%3Cinternal%3E.ClipboardEvent#currenttarget)
- [defaultPrevented](../wiki/%3Cinternal%3E.ClipboardEvent#defaultprevented)
- [eventPhase](../wiki/%3Cinternal%3E.ClipboardEvent#eventphase)
- [isTrusted](../wiki/%3Cinternal%3E.ClipboardEvent#istrusted)
- [nativeEvent](../wiki/%3Cinternal%3E.ClipboardEvent#nativeevent)
- [target](../wiki/%3Cinternal%3E.ClipboardEvent#target)
- [timeStamp](../wiki/%3Cinternal%3E.ClipboardEvent#timestamp)
- [type](../wiki/%3Cinternal%3E.ClipboardEvent#type)

### Methods

- [isDefaultPrevented](../wiki/%3Cinternal%3E.ClipboardEvent#isdefaultprevented)
- [isPropagationStopped](../wiki/%3Cinternal%3E.ClipboardEvent#ispropagationstopped)
- [persist](../wiki/%3Cinternal%3E.ClipboardEvent#persist)
- [preventDefault](../wiki/%3Cinternal%3E.ClipboardEvent#preventdefault)
- [stopPropagation](../wiki/%3Cinternal%3E.ClipboardEvent#stoppropagation)

## Properties

### bubbles

• **bubbles**: `boolean`

#### Inherited from

[SyntheticEvent](../wiki/%3Cinternal%3E.SyntheticEvent).[bubbles](../wiki/%3Cinternal%3E.SyntheticEvent#bubbles)

#### Defined in

node_modules/@types/react/index.d.ts:1188

___

### cancelable

• **cancelable**: `boolean`

#### Inherited from

[SyntheticEvent](../wiki/%3Cinternal%3E.SyntheticEvent).[cancelable](../wiki/%3Cinternal%3E.SyntheticEvent#cancelable)

#### Defined in

node_modules/@types/react/index.d.ts:1189

___

### clipboardData

• **clipboardData**: `DataTransfer`

#### Defined in

node_modules/@types/react/index.d.ts:1212

___

### currentTarget

• **currentTarget**: `EventTarget` & `T`

#### Inherited from

[SyntheticEvent](../wiki/%3Cinternal%3E.SyntheticEvent).[currentTarget](../wiki/%3Cinternal%3E.SyntheticEvent#currenttarget)

#### Defined in

node_modules/@types/react/index.d.ts:1186

___

### defaultPrevented

• **defaultPrevented**: `boolean`

#### Inherited from

[SyntheticEvent](../wiki/%3Cinternal%3E.SyntheticEvent).[defaultPrevented](../wiki/%3Cinternal%3E.SyntheticEvent#defaultprevented)

#### Defined in

node_modules/@types/react/index.d.ts:1190

___

### eventPhase

• **eventPhase**: `number`

#### Inherited from

[SyntheticEvent](../wiki/%3Cinternal%3E.SyntheticEvent).[eventPhase](../wiki/%3Cinternal%3E.SyntheticEvent#eventphase)

#### Defined in

node_modules/@types/react/index.d.ts:1191

___

### isTrusted

• **isTrusted**: `boolean`

#### Inherited from

[SyntheticEvent](../wiki/%3Cinternal%3E.SyntheticEvent).[isTrusted](../wiki/%3Cinternal%3E.SyntheticEvent#istrusted)

#### Defined in

node_modules/@types/react/index.d.ts:1192

___

### nativeEvent

• **nativeEvent**: `ClipboardEvent`

#### Inherited from

[SyntheticEvent](../wiki/%3Cinternal%3E.SyntheticEvent).[nativeEvent](../wiki/%3Cinternal%3E.SyntheticEvent#nativeevent)

#### Defined in

node_modules/@types/react/index.d.ts:1185

___

### target

• **target**: `EventTarget`

#### Inherited from

[SyntheticEvent](../wiki/%3Cinternal%3E.SyntheticEvent).[target](../wiki/%3Cinternal%3E.SyntheticEvent#target)

#### Defined in

node_modules/@types/react/index.d.ts:1187

___

### timeStamp

• **timeStamp**: `number`

#### Inherited from

[SyntheticEvent](../wiki/%3Cinternal%3E.SyntheticEvent).[timeStamp](../wiki/%3Cinternal%3E.SyntheticEvent#timestamp)

#### Defined in

node_modules/@types/react/index.d.ts:1198

___

### type

• **type**: `string`

#### Inherited from

[SyntheticEvent](../wiki/%3Cinternal%3E.SyntheticEvent).[type](../wiki/%3Cinternal%3E.SyntheticEvent#type)

#### Defined in

node_modules/@types/react/index.d.ts:1199

## Methods

### isDefaultPrevented

▸ **isDefaultPrevented**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[SyntheticEvent](../wiki/%3Cinternal%3E.SyntheticEvent).[isDefaultPrevented](../wiki/%3Cinternal%3E.SyntheticEvent#isdefaultprevented)

#### Defined in

node_modules/@types/react/index.d.ts:1194

___

### isPropagationStopped

▸ **isPropagationStopped**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[SyntheticEvent](../wiki/%3Cinternal%3E.SyntheticEvent).[isPropagationStopped](../wiki/%3Cinternal%3E.SyntheticEvent#ispropagationstopped)

#### Defined in

node_modules/@types/react/index.d.ts:1196

___

### persist

▸ **persist**(): `void`

#### Returns

`void`

#### Inherited from

[SyntheticEvent](../wiki/%3Cinternal%3E.SyntheticEvent).[persist](../wiki/%3Cinternal%3E.SyntheticEvent#persist)

#### Defined in

node_modules/@types/react/index.d.ts:1197

___

### preventDefault

▸ **preventDefault**(): `void`

#### Returns

`void`

#### Inherited from

[SyntheticEvent](../wiki/%3Cinternal%3E.SyntheticEvent).[preventDefault](../wiki/%3Cinternal%3E.SyntheticEvent#preventdefault)

#### Defined in

node_modules/@types/react/index.d.ts:1193

___

### stopPropagation

▸ **stopPropagation**(): `void`

#### Returns

`void`

#### Inherited from

[SyntheticEvent](../wiki/%3Cinternal%3E.SyntheticEvent).[stopPropagation](../wiki/%3Cinternal%3E.SyntheticEvent#stoppropagation)

#### Defined in

node_modules/@types/react/index.d.ts:1195
