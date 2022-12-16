# Interface: TouchEvent<T\>

[<internal>](../wiki/%3Cinternal%3E).TouchEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Element` |

## Hierarchy

- [`UIEvent`](../wiki/%3Cinternal%3E.UIEvent)<`T`, [`NativeTouchEvent`](../wiki/%3Cinternal%3E#nativetouchevent)\>

  ↳ **`TouchEvent`**

## Table of contents

### Properties

- [altKey](../wiki/%3Cinternal%3E.TouchEvent#altkey)
- [bubbles](../wiki/%3Cinternal%3E.TouchEvent#bubbles)
- [cancelable](../wiki/%3Cinternal%3E.TouchEvent#cancelable)
- [changedTouches](../wiki/%3Cinternal%3E.TouchEvent#changedtouches)
- [ctrlKey](../wiki/%3Cinternal%3E.TouchEvent#ctrlkey)
- [currentTarget](../wiki/%3Cinternal%3E.TouchEvent#currenttarget)
- [defaultPrevented](../wiki/%3Cinternal%3E.TouchEvent#defaultprevented)
- [detail](../wiki/%3Cinternal%3E.TouchEvent#detail)
- [eventPhase](../wiki/%3Cinternal%3E.TouchEvent#eventphase)
- [isTrusted](../wiki/%3Cinternal%3E.TouchEvent#istrusted)
- [metaKey](../wiki/%3Cinternal%3E.TouchEvent#metakey)
- [nativeEvent](../wiki/%3Cinternal%3E.TouchEvent#nativeevent)
- [shiftKey](../wiki/%3Cinternal%3E.TouchEvent#shiftkey)
- [target](../wiki/%3Cinternal%3E.TouchEvent#target)
- [targetTouches](../wiki/%3Cinternal%3E.TouchEvent#targettouches)
- [timeStamp](../wiki/%3Cinternal%3E.TouchEvent#timestamp)
- [touches](../wiki/%3Cinternal%3E.TouchEvent#touches)
- [type](../wiki/%3Cinternal%3E.TouchEvent#type)
- [view](../wiki/%3Cinternal%3E.TouchEvent#view)

### Methods

- [getModifierState](../wiki/%3Cinternal%3E.TouchEvent#getmodifierstate)
- [isDefaultPrevented](../wiki/%3Cinternal%3E.TouchEvent#isdefaultprevented)
- [isPropagationStopped](../wiki/%3Cinternal%3E.TouchEvent#ispropagationstopped)
- [persist](../wiki/%3Cinternal%3E.TouchEvent#persist)
- [preventDefault](../wiki/%3Cinternal%3E.TouchEvent#preventdefault)
- [stopPropagation](../wiki/%3Cinternal%3E.TouchEvent#stoppropagation)

## Properties

### altKey

• **altKey**: `boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1300

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

### changedTouches

• **changedTouches**: [`TouchList`](../wiki/%3Cinternal%3E.TouchList)

#### Defined in

node_modules/@types/react/index.d.ts:1301

___

### ctrlKey

• **ctrlKey**: `boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1302

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

node_modules/@types/react/index.d.ts:1307

___

### nativeEvent

• **nativeEvent**: `TouchEvent`

#### Inherited from

[UIEvent](../wiki/%3Cinternal%3E.UIEvent).[nativeEvent](../wiki/%3Cinternal%3E.UIEvent#nativeevent)

#### Defined in

node_modules/@types/react/index.d.ts:1185

___

### shiftKey

• **shiftKey**: `boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1308

___

### target

• **target**: `EventTarget`

#### Inherited from

[UIEvent](../wiki/%3Cinternal%3E.UIEvent).[target](../wiki/%3Cinternal%3E.UIEvent#target)

#### Defined in

node_modules/@types/react/index.d.ts:1187

___

### targetTouches

• **targetTouches**: [`TouchList`](../wiki/%3Cinternal%3E.TouchList)

#### Defined in

node_modules/@types/react/index.d.ts:1309

___

### timeStamp

• **timeStamp**: `number`

#### Inherited from

[UIEvent](../wiki/%3Cinternal%3E.UIEvent).[timeStamp](../wiki/%3Cinternal%3E.UIEvent#timestamp)

#### Defined in

node_modules/@types/react/index.d.ts:1198

___

### touches

• **touches**: [`TouchList`](../wiki/%3Cinternal%3E.TouchList)

#### Defined in

node_modules/@types/react/index.d.ts:1310

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

node_modules/@types/react/index.d.ts:1306

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
