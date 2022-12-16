# Interface: UIEvent<T, E\>

[<internal>](../wiki/%3Cinternal%3E).UIEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Element` |
| `E` | [`NativeUIEvent`](../wiki/%3Cinternal%3E#nativeuievent) |

## Hierarchy

- [`SyntheticEvent`](../wiki/%3Cinternal%3E.SyntheticEvent)<`T`, `E`\>

  ↳ **`UIEvent`**

  ↳↳ [`KeyboardEvent`](../wiki/%3Cinternal%3E.KeyboardEvent)

  ↳↳ [`MouseEvent`](../wiki/%3Cinternal%3E.MouseEvent)

  ↳↳ [`TouchEvent`](../wiki/%3Cinternal%3E.TouchEvent)

## Table of contents

### Properties

- [bubbles](../wiki/%3Cinternal%3E.UIEvent#bubbles)
- [cancelable](../wiki/%3Cinternal%3E.UIEvent#cancelable)
- [currentTarget](../wiki/%3Cinternal%3E.UIEvent#currenttarget)
- [defaultPrevented](../wiki/%3Cinternal%3E.UIEvent#defaultprevented)
- [detail](../wiki/%3Cinternal%3E.UIEvent#detail)
- [eventPhase](../wiki/%3Cinternal%3E.UIEvent#eventphase)
- [isTrusted](../wiki/%3Cinternal%3E.UIEvent#istrusted)
- [nativeEvent](../wiki/%3Cinternal%3E.UIEvent#nativeevent)
- [target](../wiki/%3Cinternal%3E.UIEvent#target)
- [timeStamp](../wiki/%3Cinternal%3E.UIEvent#timestamp)
- [type](../wiki/%3Cinternal%3E.UIEvent#type)
- [view](../wiki/%3Cinternal%3E.UIEvent#view)

### Methods

- [isDefaultPrevented](../wiki/%3Cinternal%3E.UIEvent#isdefaultprevented)
- [isPropagationStopped](../wiki/%3Cinternal%3E.UIEvent#ispropagationstopped)
- [persist](../wiki/%3Cinternal%3E.UIEvent#persist)
- [preventDefault](../wiki/%3Cinternal%3E.UIEvent#preventdefault)
- [stopPropagation](../wiki/%3Cinternal%3E.UIEvent#stoppropagation)

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

### detail

• **detail**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1314

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

• **nativeEvent**: `E`

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

___

### view

• **view**: [`AbstractView`](../wiki/%3Cinternal%3E.AbstractView)

#### Defined in

node_modules/@types/react/index.d.ts:1315

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
