# Interface: KeyboardEvent<T\>

[<internal>](../wiki/%3Cinternal%3E).KeyboardEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Element` |

## Hierarchy

- [`UIEvent`](../wiki/%3Cinternal%3E.UIEvent)<`T`, [`NativeKeyboardEvent`](../wiki/%3Cinternal%3E#nativekeyboardevent)\>

  ↳ **`KeyboardEvent`**

## Table of contents

### Properties

- [altKey](../wiki/%3Cinternal%3E.KeyboardEvent#altkey)
- [bubbles](../wiki/%3Cinternal%3E.KeyboardEvent#bubbles)
- [cancelable](../wiki/%3Cinternal%3E.KeyboardEvent#cancelable)
- [charCode](../wiki/%3Cinternal%3E.KeyboardEvent#charcode)
- [code](../wiki/%3Cinternal%3E.KeyboardEvent#code)
- [ctrlKey](../wiki/%3Cinternal%3E.KeyboardEvent#ctrlkey)
- [currentTarget](../wiki/%3Cinternal%3E.KeyboardEvent#currenttarget)
- [defaultPrevented](../wiki/%3Cinternal%3E.KeyboardEvent#defaultprevented)
- [detail](../wiki/%3Cinternal%3E.KeyboardEvent#detail)
- [eventPhase](../wiki/%3Cinternal%3E.KeyboardEvent#eventphase)
- [isTrusted](../wiki/%3Cinternal%3E.KeyboardEvent#istrusted)
- [key](../wiki/%3Cinternal%3E.KeyboardEvent#key)
- [keyCode](../wiki/%3Cinternal%3E.KeyboardEvent#keycode)
- [locale](../wiki/%3Cinternal%3E.KeyboardEvent#locale)
- [location](../wiki/%3Cinternal%3E.KeyboardEvent#location)
- [metaKey](../wiki/%3Cinternal%3E.KeyboardEvent#metakey)
- [nativeEvent](../wiki/%3Cinternal%3E.KeyboardEvent#nativeevent)
- [repeat](../wiki/%3Cinternal%3E.KeyboardEvent#repeat)
- [shiftKey](../wiki/%3Cinternal%3E.KeyboardEvent#shiftkey)
- [target](../wiki/%3Cinternal%3E.KeyboardEvent#target)
- [timeStamp](../wiki/%3Cinternal%3E.KeyboardEvent#timestamp)
- [type](../wiki/%3Cinternal%3E.KeyboardEvent#type)
- [view](../wiki/%3Cinternal%3E.KeyboardEvent#view)
- [which](../wiki/%3Cinternal%3E.KeyboardEvent#which)

### Methods

- [getModifierState](../wiki/%3Cinternal%3E.KeyboardEvent#getmodifierstate)
- [isDefaultPrevented](../wiki/%3Cinternal%3E.KeyboardEvent#isdefaultprevented)
- [isPropagationStopped](../wiki/%3Cinternal%3E.KeyboardEvent#ispropagationstopped)
- [persist](../wiki/%3Cinternal%3E.KeyboardEvent#persist)
- [preventDefault](../wiki/%3Cinternal%3E.KeyboardEvent#preventdefault)
- [stopPropagation](../wiki/%3Cinternal%3E.KeyboardEvent#stoppropagation)

## Properties

### altKey

• **altKey**: `boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1253

___

### bubbles

• **bubbles**: `boolean`

#### Inherited from

[UIEvent](../wiki/%3Cinternal%3E.UIEvent).[bubbles](../wiki/%3Cinternal%3E.UIEvent#bubbles)

#### Defined in

node_modules/@types/react/index.d.ts:1188

___

### cancelable

• **cancelable**: `boolean`

#### Inherited from

[UIEvent](../wiki/%3Cinternal%3E.UIEvent).[cancelable](../wiki/%3Cinternal%3E.UIEvent#cancelable)

#### Defined in

node_modules/@types/react/index.d.ts:1189

___

### charCode

• **charCode**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1255

___

### code

• **code**: `string`

#### Defined in

node_modules/@types/react/index.d.ts:1257

___

### ctrlKey

• **ctrlKey**: `boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1256

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

### key

• **key**: `string`

#### Defined in

node_modules/@types/react/index.d.ts:1265

___

### keyCode

• **keyCode**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1267

___

### locale

• **locale**: `string`

#### Defined in

node_modules/@types/react/index.d.ts:1268

___

### location

• **location**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1269

___

### metaKey

• **metaKey**: `boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1270

___

### nativeEvent

• **nativeEvent**: `KeyboardEvent`

#### Inherited from

[UIEvent](../wiki/%3Cinternal%3E.UIEvent).[nativeEvent](../wiki/%3Cinternal%3E.UIEvent#nativeevent)

#### Defined in

node_modules/@types/react/index.d.ts:1185

___

### repeat

• **repeat**: `boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1271

___

### shiftKey

• **shiftKey**: `boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1272

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

___

### which

• **which**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1274

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

node_modules/@types/react/index.d.ts:1261

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
