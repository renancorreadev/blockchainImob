# Interface: PointerEvent<T\>

[<internal>](../wiki/%3Cinternal%3E).PointerEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Element` |

## Hierarchy

- [`MouseEvent`](../wiki/%3Cinternal%3E.MouseEvent)<`T`, [`NativePointerEvent`](../wiki/%3Cinternal%3E#nativepointerevent)\>

  ↳ **`PointerEvent`**

## Table of contents

### Properties

- [altKey](../wiki/%3Cinternal%3E.PointerEvent#altkey)
- [bubbles](../wiki/%3Cinternal%3E.PointerEvent#bubbles)
- [button](../wiki/%3Cinternal%3E.PointerEvent#button)
- [buttons](../wiki/%3Cinternal%3E.PointerEvent#buttons)
- [cancelable](../wiki/%3Cinternal%3E.PointerEvent#cancelable)
- [clientX](../wiki/%3Cinternal%3E.PointerEvent#clientx)
- [clientY](../wiki/%3Cinternal%3E.PointerEvent#clienty)
- [ctrlKey](../wiki/%3Cinternal%3E.PointerEvent#ctrlkey)
- [currentTarget](../wiki/%3Cinternal%3E.PointerEvent#currenttarget)
- [defaultPrevented](../wiki/%3Cinternal%3E.PointerEvent#defaultprevented)
- [detail](../wiki/%3Cinternal%3E.PointerEvent#detail)
- [eventPhase](../wiki/%3Cinternal%3E.PointerEvent#eventphase)
- [height](../wiki/%3Cinternal%3E.PointerEvent#height)
- [isPrimary](../wiki/%3Cinternal%3E.PointerEvent#isprimary)
- [isTrusted](../wiki/%3Cinternal%3E.PointerEvent#istrusted)
- [metaKey](../wiki/%3Cinternal%3E.PointerEvent#metakey)
- [movementX](../wiki/%3Cinternal%3E.PointerEvent#movementx)
- [movementY](../wiki/%3Cinternal%3E.PointerEvent#movementy)
- [nativeEvent](../wiki/%3Cinternal%3E.PointerEvent#nativeevent)
- [pageX](../wiki/%3Cinternal%3E.PointerEvent#pagex)
- [pageY](../wiki/%3Cinternal%3E.PointerEvent#pagey)
- [pointerId](../wiki/%3Cinternal%3E.PointerEvent#pointerid)
- [pointerType](../wiki/%3Cinternal%3E.PointerEvent#pointertype)
- [pressure](../wiki/%3Cinternal%3E.PointerEvent#pressure)
- [relatedTarget](../wiki/%3Cinternal%3E.PointerEvent#relatedtarget)
- [screenX](../wiki/%3Cinternal%3E.PointerEvent#screenx)
- [screenY](../wiki/%3Cinternal%3E.PointerEvent#screeny)
- [shiftKey](../wiki/%3Cinternal%3E.PointerEvent#shiftkey)
- [tangentialPressure](../wiki/%3Cinternal%3E.PointerEvent#tangentialpressure)
- [target](../wiki/%3Cinternal%3E.PointerEvent#target)
- [tiltX](../wiki/%3Cinternal%3E.PointerEvent#tiltx)
- [tiltY](../wiki/%3Cinternal%3E.PointerEvent#tilty)
- [timeStamp](../wiki/%3Cinternal%3E.PointerEvent#timestamp)
- [twist](../wiki/%3Cinternal%3E.PointerEvent#twist)
- [type](../wiki/%3Cinternal%3E.PointerEvent#type)
- [view](../wiki/%3Cinternal%3E.PointerEvent#view)
- [width](../wiki/%3Cinternal%3E.PointerEvent#width)

### Methods

- [getModifierState](../wiki/%3Cinternal%3E.PointerEvent#getmodifierstate)
- [isDefaultPrevented](../wiki/%3Cinternal%3E.PointerEvent#isdefaultprevented)
- [isPropagationStopped](../wiki/%3Cinternal%3E.PointerEvent#ispropagationstopped)
- [persist](../wiki/%3Cinternal%3E.PointerEvent#persist)
- [preventDefault](../wiki/%3Cinternal%3E.PointerEvent#preventdefault)
- [stopPropagation](../wiki/%3Cinternal%3E.PointerEvent#stoppropagation)

## Properties

### altKey

• **altKey**: `boolean`

#### Inherited from

[MouseEvent](../wiki/%3Cinternal%3E.MouseEvent).[altKey](../wiki/%3Cinternal%3E.MouseEvent#altkey)

#### Defined in

node_modules/@types/react/index.d.ts:1278

___

### bubbles

• **bubbles**: `boolean`

#### Inherited from

[MouseEvent](../wiki/%3Cinternal%3E.MouseEvent).[bubbles](../wiki/%3Cinternal%3E.MouseEvent#bubbles)

#### Defined in

node_modules/@types/react/index.d.ts:1188

___

### button

• **button**: `number`

#### Inherited from

[MouseEvent](../wiki/%3Cinternal%3E.MouseEvent).[button](../wiki/%3Cinternal%3E.MouseEvent#button)

#### Defined in

node_modules/@types/react/index.d.ts:1279

___

### buttons

• **buttons**: `number`

#### Inherited from

[MouseEvent](../wiki/%3Cinternal%3E.MouseEvent).[buttons](../wiki/%3Cinternal%3E.MouseEvent#buttons)

#### Defined in

node_modules/@types/react/index.d.ts:1280

___

### cancelable

• **cancelable**: `boolean`

#### Inherited from

[MouseEvent](../wiki/%3Cinternal%3E.MouseEvent).[cancelable](../wiki/%3Cinternal%3E.MouseEvent#cancelable)

#### Defined in

node_modules/@types/react/index.d.ts:1189

___

### clientX

• **clientX**: `number`

#### Inherited from

[MouseEvent](../wiki/%3Cinternal%3E.MouseEvent).[clientX](../wiki/%3Cinternal%3E.MouseEvent#clientx)

#### Defined in

node_modules/@types/react/index.d.ts:1281

___

### clientY

• **clientY**: `number`

#### Inherited from

[MouseEvent](../wiki/%3Cinternal%3E.MouseEvent).[clientY](../wiki/%3Cinternal%3E.MouseEvent#clienty)

#### Defined in

node_modules/@types/react/index.d.ts:1282

___

### ctrlKey

• **ctrlKey**: `boolean`

#### Inherited from

[MouseEvent](../wiki/%3Cinternal%3E.MouseEvent).[ctrlKey](../wiki/%3Cinternal%3E.MouseEvent#ctrlkey)

#### Defined in

node_modules/@types/react/index.d.ts:1283

___

### currentTarget

• **currentTarget**: `EventTarget` & `T`

#### Inherited from

[MouseEvent](../wiki/%3Cinternal%3E.MouseEvent).[currentTarget](../wiki/%3Cinternal%3E.MouseEvent#currenttarget)

#### Defined in

node_modules/@types/react/index.d.ts:1186

___

### defaultPrevented

• **defaultPrevented**: `boolean`

#### Inherited from

[MouseEvent](../wiki/%3Cinternal%3E.MouseEvent).[defaultPrevented](../wiki/%3Cinternal%3E.MouseEvent#defaultprevented)

#### Defined in

node_modules/@types/react/index.d.ts:1190

___

### detail

• **detail**: `number`

#### Inherited from

[MouseEvent](../wiki/%3Cinternal%3E.MouseEvent).[detail](../wiki/%3Cinternal%3E.MouseEvent#detail)

#### Defined in

node_modules/@types/react/index.d.ts:1314

___

### eventPhase

• **eventPhase**: `number`

#### Inherited from

[MouseEvent](../wiki/%3Cinternal%3E.MouseEvent).[eventPhase](../wiki/%3Cinternal%3E.MouseEvent#eventphase)

#### Defined in

node_modules/@types/react/index.d.ts:1191

___

### height

• **height**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1231

___

### isPrimary

• **isPrimary**: `boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1233

___

### isTrusted

• **isTrusted**: `boolean`

#### Inherited from

[MouseEvent](../wiki/%3Cinternal%3E.MouseEvent).[isTrusted](../wiki/%3Cinternal%3E.MouseEvent#istrusted)

#### Defined in

node_modules/@types/react/index.d.ts:1192

___

### metaKey

• **metaKey**: `boolean`

#### Inherited from

[MouseEvent](../wiki/%3Cinternal%3E.MouseEvent).[metaKey](../wiki/%3Cinternal%3E.MouseEvent#metakey)

#### Defined in

node_modules/@types/react/index.d.ts:1288

___

### movementX

• **movementX**: `number`

#### Inherited from

[MouseEvent](../wiki/%3Cinternal%3E.MouseEvent).[movementX](../wiki/%3Cinternal%3E.MouseEvent#movementx)

#### Defined in

node_modules/@types/react/index.d.ts:1289

___

### movementY

• **movementY**: `number`

#### Inherited from

[MouseEvent](../wiki/%3Cinternal%3E.MouseEvent).[movementY](../wiki/%3Cinternal%3E.MouseEvent#movementy)

#### Defined in

node_modules/@types/react/index.d.ts:1290

___

### nativeEvent

• **nativeEvent**: `PointerEvent`

#### Inherited from

[MouseEvent](../wiki/%3Cinternal%3E.MouseEvent).[nativeEvent](../wiki/%3Cinternal%3E.MouseEvent#nativeevent)

#### Defined in

node_modules/@types/react/index.d.ts:1185

___

### pageX

• **pageX**: `number`

#### Inherited from

[MouseEvent](../wiki/%3Cinternal%3E.MouseEvent).[pageX](../wiki/%3Cinternal%3E.MouseEvent#pagex)

#### Defined in

node_modules/@types/react/index.d.ts:1291

___

### pageY

• **pageY**: `number`

#### Inherited from

[MouseEvent](../wiki/%3Cinternal%3E.MouseEvent).[pageY](../wiki/%3Cinternal%3E.MouseEvent#pagey)

#### Defined in

node_modules/@types/react/index.d.ts:1292

___

### pointerId

• **pointerId**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1224

___

### pointerType

• **pointerType**: ``"mouse"`` \| ``"pen"`` \| ``"touch"``

#### Defined in

node_modules/@types/react/index.d.ts:1232

___

### pressure

• **pressure**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1225

___

### relatedTarget

• **relatedTarget**: ``null`` \| `EventTarget`

#### Inherited from

[MouseEvent](../wiki/%3Cinternal%3E.MouseEvent).[relatedTarget](../wiki/%3Cinternal%3E.MouseEvent#relatedtarget)

#### Defined in

node_modules/@types/react/index.d.ts:1293

___

### screenX

• **screenX**: `number`

#### Inherited from

[MouseEvent](../wiki/%3Cinternal%3E.MouseEvent).[screenX](../wiki/%3Cinternal%3E.MouseEvent#screenx)

#### Defined in

node_modules/@types/react/index.d.ts:1294

___

### screenY

• **screenY**: `number`

#### Inherited from

[MouseEvent](../wiki/%3Cinternal%3E.MouseEvent).[screenY](../wiki/%3Cinternal%3E.MouseEvent#screeny)

#### Defined in

node_modules/@types/react/index.d.ts:1295

___

### shiftKey

• **shiftKey**: `boolean`

#### Inherited from

[MouseEvent](../wiki/%3Cinternal%3E.MouseEvent).[shiftKey](../wiki/%3Cinternal%3E.MouseEvent#shiftkey)

#### Defined in

node_modules/@types/react/index.d.ts:1296

___

### tangentialPressure

• **tangentialPressure**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1226

___

### target

• **target**: `EventTarget`

#### Inherited from

[MouseEvent](../wiki/%3Cinternal%3E.MouseEvent).[target](../wiki/%3Cinternal%3E.MouseEvent#target)

#### Defined in

node_modules/@types/react/index.d.ts:1187

___

### tiltX

• **tiltX**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1227

___

### tiltY

• **tiltY**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1228

___

### timeStamp

• **timeStamp**: `number`

#### Inherited from

[MouseEvent](../wiki/%3Cinternal%3E.MouseEvent).[timeStamp](../wiki/%3Cinternal%3E.MouseEvent#timestamp)

#### Defined in

node_modules/@types/react/index.d.ts:1198

___

### twist

• **twist**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1229

___

### type

• **type**: `string`

#### Inherited from

[MouseEvent](../wiki/%3Cinternal%3E.MouseEvent).[type](../wiki/%3Cinternal%3E.MouseEvent#type)

#### Defined in

node_modules/@types/react/index.d.ts:1199

___

### view

• **view**: [`AbstractView`](../wiki/%3Cinternal%3E.AbstractView)

#### Inherited from

[MouseEvent](../wiki/%3Cinternal%3E.MouseEvent).[view](../wiki/%3Cinternal%3E.MouseEvent#view)

#### Defined in

node_modules/@types/react/index.d.ts:1315

___

### width

• **width**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1230

## Methods

### getModifierState

▸ **getModifierState**(`key`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`boolean`

#### Inherited from

[MouseEvent](../wiki/%3Cinternal%3E.MouseEvent).[getModifierState](../wiki/%3Cinternal%3E.MouseEvent#getmodifierstate)

#### Defined in

node_modules/@types/react/index.d.ts:1287

___

### isDefaultPrevented

▸ **isDefaultPrevented**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[MouseEvent](../wiki/%3Cinternal%3E.MouseEvent).[isDefaultPrevented](../wiki/%3Cinternal%3E.MouseEvent#isdefaultprevented)

#### Defined in

node_modules/@types/react/index.d.ts:1194

___

### isPropagationStopped

▸ **isPropagationStopped**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[MouseEvent](../wiki/%3Cinternal%3E.MouseEvent).[isPropagationStopped](../wiki/%3Cinternal%3E.MouseEvent#ispropagationstopped)

#### Defined in

node_modules/@types/react/index.d.ts:1196

___

### persist

▸ **persist**(): `void`

#### Returns

`void`

#### Inherited from

[MouseEvent](../wiki/%3Cinternal%3E.MouseEvent).[persist](../wiki/%3Cinternal%3E.MouseEvent#persist)

#### Defined in

node_modules/@types/react/index.d.ts:1197

___

### preventDefault

▸ **preventDefault**(): `void`

#### Returns

`void`

#### Inherited from

[MouseEvent](../wiki/%3Cinternal%3E.MouseEvent).[preventDefault](../wiki/%3Cinternal%3E.MouseEvent#preventdefault)

#### Defined in

node_modules/@types/react/index.d.ts:1193

___

### stopPropagation

▸ **stopPropagation**(): `void`

#### Returns

`void`

#### Inherited from

[MouseEvent](../wiki/%3Cinternal%3E.MouseEvent).[stopPropagation](../wiki/%3Cinternal%3E.MouseEvent#stoppropagation)

#### Defined in

node_modules/@types/react/index.d.ts:1195
