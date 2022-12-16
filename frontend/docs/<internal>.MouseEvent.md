# Interface: MouseEvent<T, E\>

[<internal>](../wiki/%3Cinternal%3E).MouseEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Element` |
| `E` | [`NativeMouseEvent`](../wiki/%3Cinternal%3E#nativemouseevent) |

## Hierarchy

- [`UIEvent`](../wiki/%3Cinternal%3E.UIEvent)<`T`, `E`\>

  ↳ **`MouseEvent`**

  ↳↳ [`DragEvent`](../wiki/%3Cinternal%3E.DragEvent)

  ↳↳ [`PointerEvent`](../wiki/%3Cinternal%3E.PointerEvent)

  ↳↳ [`WheelEvent`](../wiki/%3Cinternal%3E.WheelEvent)

## Table of contents

### Properties

- [altKey](../wiki/%3Cinternal%3E.MouseEvent#altkey)
- [bubbles](../wiki/%3Cinternal%3E.MouseEvent#bubbles)
- [button](../wiki/%3Cinternal%3E.MouseEvent#button)
- [buttons](../wiki/%3Cinternal%3E.MouseEvent#buttons)
- [cancelable](../wiki/%3Cinternal%3E.MouseEvent#cancelable)
- [clientX](../wiki/%3Cinternal%3E.MouseEvent#clientx)
- [clientY](../wiki/%3Cinternal%3E.MouseEvent#clienty)
- [ctrlKey](../wiki/%3Cinternal%3E.MouseEvent#ctrlkey)
- [currentTarget](../wiki/%3Cinternal%3E.MouseEvent#currenttarget)
- [defaultPrevented](../wiki/%3Cinternal%3E.MouseEvent#defaultprevented)
- [detail](../wiki/%3Cinternal%3E.MouseEvent#detail)
- [eventPhase](../wiki/%3Cinternal%3E.MouseEvent#eventphase)
- [isTrusted](../wiki/%3Cinternal%3E.MouseEvent#istrusted)
- [metaKey](../wiki/%3Cinternal%3E.MouseEvent#metakey)
- [movementX](../wiki/%3Cinternal%3E.MouseEvent#movementx)
- [movementY](../wiki/%3Cinternal%3E.MouseEvent#movementy)
- [nativeEvent](../wiki/%3Cinternal%3E.MouseEvent#nativeevent)
- [pageX](../wiki/%3Cinternal%3E.MouseEvent#pagex)
- [pageY](../wiki/%3Cinternal%3E.MouseEvent#pagey)
- [relatedTarget](../wiki/%3Cinternal%3E.MouseEvent#relatedtarget)
- [screenX](../wiki/%3Cinternal%3E.MouseEvent#screenx)
- [screenY](../wiki/%3Cinternal%3E.MouseEvent#screeny)
- [shiftKey](../wiki/%3Cinternal%3E.MouseEvent#shiftkey)
- [target](../wiki/%3Cinternal%3E.MouseEvent#target)
- [timeStamp](../wiki/%3Cinternal%3E.MouseEvent#timestamp)
- [type](../wiki/%3Cinternal%3E.MouseEvent#type)
- [view](../wiki/%3Cinternal%3E.MouseEvent#view)

### Methods

- [getModifierState](../wiki/%3Cinternal%3E.MouseEvent#getmodifierstate)
- [isDefaultPrevented](../wiki/%3Cinternal%3E.MouseEvent#isdefaultprevented)
- [isPropagationStopped](../wiki/%3Cinternal%3E.MouseEvent#ispropagationstopped)
- [persist](../wiki/%3Cinternal%3E.MouseEvent#persist)
- [preventDefault](../wiki/%3Cinternal%3E.MouseEvent#preventdefault)
- [stopPropagation](../wiki/%3Cinternal%3E.MouseEvent#stoppropagation)

## Properties

### altKey

• **altKey**: `boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1278

___

### bubbles

• **bubbles**: `boolean`

#### Inherited from

[UIEvent](../wiki/%3Cinternal%3E.UIEvent).[bubbles](../wiki/%3Cinternal%3E.UIEvent#bubbles)

#### Defined in

node_modules/@types/react/index.d.ts:1188

___

### button

• **button**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1279

___

### buttons

• **buttons**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1280

___

### cancelable

• **cancelable**: `boolean`

#### Inherited from

[UIEvent](../wiki/%3Cinternal%3E.UIEvent).[cancelable](../wiki/%3Cinternal%3E.UIEvent#cancelable)

#### Defined in

node_modules/@types/react/index.d.ts:1189

___

### clientX

• **clientX**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1281

___

### clientY

• **clientY**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1282

___

### ctrlKey

• **ctrlKey**: `boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1283

___

### currentTarget

• **currentTarget**: `EventTarget` & `T`

#### Inherited from

[UIEvent](../wiki/%3Cinternal%3E.UIEvent).[currentTarget](../wiki/%3Cinternal%3E.UIEvent#currenttarget)

#### Defined in

node_modules/@types/react/index.d.ts:1186

___

### defaultPrevented

• **defaultPrevented**: `boolean`

#### Inherited from

[UIEvent](../wiki/%3Cinternal%3E.UIEvent).[defaultPrevented](../wiki/%3Cinternal%3E.UIEvent#defaultprevented)

#### Defined in

node_modules/@types/react/index.d.ts:1190

___

### detail

• **detail**: `number`

#### Inherited from

[UIEvent](../wiki/%3Cinternal%3E.UIEvent).[detail](../wiki/%3Cinternal%3E.UIEvent#detail)

#### Defined in

node_modules/@types/react/index.d.ts:1314

___

### eventPhase

• **eventPhase**: `number`

#### Inherited from

[UIEvent](../wiki/%3Cinternal%3E.UIEvent).[eventPhase](../wiki/%3Cinternal%3E.UIEvent#eventphase)

#### Defined in

node_modules/@types/react/index.d.ts:1191

___

### isTrusted

• **isTrusted**: `boolean`

#### Inherited from

[UIEvent](../wiki/%3Cinternal%3E.UIEvent).[isTrusted](../wiki/%3Cinternal%3E.UIEvent#istrusted)

#### Defined in

node_modules/@types/react/index.d.ts:1192

___

### metaKey

• **metaKey**: `boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1288

___

### movementX

• **movementX**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1289

___

### movementY

• **movementY**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1290

___

### nativeEvent

• **nativeEvent**: `E`

#### Inherited from

[UIEvent](../wiki/%3Cinternal%3E.UIEvent).[nativeEvent](../wiki/%3Cinternal%3E.UIEvent#nativeevent)

#### Defined in

node_modules/@types/react/index.d.ts:1185

___

### pageX

• **pageX**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1291

___

### pageY

• **pageY**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1292

___

### relatedTarget

• **relatedTarget**: ``null`` \| `EventTarget`

#### Defined in

node_modules/@types/react/index.d.ts:1293

___

### screenX

• **screenX**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1294

___

### screenY

• **screenY**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1295

___

### shiftKey

• **shiftKey**: `boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1296

___

### target

• **target**: `EventTarget`

#### Inherited from

[UIEvent](../wiki/%3Cinternal%3E.UIEvent).[target](../wiki/%3Cinternal%3E.UIEvent#target)

#### Defined in

node_modules/@types/react/index.d.ts:1187

___

### timeStamp

• **timeStamp**: `number`

#### Inherited from

[UIEvent](../wiki/%3Cinternal%3E.UIEvent).[timeStamp](../wiki/%3Cinternal%3E.UIEvent#timestamp)

#### Defined in

node_modules/@types/react/index.d.ts:1198

___

### type

• **type**: `string`

#### Inherited from

[UIEvent](../wiki/%3Cinternal%3E.UIEvent).[type](../wiki/%3Cinternal%3E.UIEvent#type)

#### Defined in

node_modules/@types/react/index.d.ts:1199

___

### view

• **view**: [`AbstractView`](../wiki/%3Cinternal%3E.AbstractView)

#### Inherited from

[UIEvent](../wiki/%3Cinternal%3E.UIEvent).[view](../wiki/%3Cinternal%3E.UIEvent#view)

#### Defined in

node_modules/@types/react/index.d.ts:1315

## Methods

### getModifierState

▸ **getModifierState**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1287

___

### isDefaultPrevented

▸ **isDefaultPrevented**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[UIEvent](../wiki/%3Cinternal%3E.UIEvent).[isDefaultPrevented](../wiki/%3Cinternal%3E.UIEvent#isdefaultprevented)

#### Defined in

node_modules/@types/react/index.d.ts:1194

___

### isPropagationStopped

▸ **isPropagationStopped**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[UIEvent](../wiki/%3Cinternal%3E.UIEvent).[isPropagationStopped](../wiki/%3Cinternal%3E.UIEvent#ispropagationstopped)

#### Defined in

node_modules/@types/react/index.d.ts:1196

___

### persist

▸ **persist**(): `void`

#### Returns

`void`

#### Inherited from

[UIEvent](../wiki/%3Cinternal%3E.UIEvent).[persist](../wiki/%3Cinternal%3E.UIEvent#persist)

#### Defined in

node_modules/@types/react/index.d.ts:1197

___

### preventDefault

▸ **preventDefault**(): `void`

#### Returns

`void`

#### Inherited from

[UIEvent](../wiki/%3Cinternal%3E.UIEvent).[preventDefault](../wiki/%3Cinternal%3E.UIEvent#preventdefault)

#### Defined in

node_modules/@types/react/index.d.ts:1193

___

### stopPropagation

▸ **stopPropagation**(): `void`

#### Returns

`void`

#### Inherited from

[UIEvent](../wiki/%3Cinternal%3E.UIEvent).[stopPropagation](../wiki/%3Cinternal%3E.UIEvent#stoppropagation)

#### Defined in

node_modules/@types/react/index.d.ts:1195
