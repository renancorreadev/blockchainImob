# Interface: FocusEvent<Target, RelatedTarget\>

[<internal>](../wiki/%3Cinternal%3E).FocusEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `Target` | `Element` |
| `RelatedTarget` | `Element` |

## Hierarchy

- [`SyntheticEvent`](../wiki/%3Cinternal%3E.SyntheticEvent)<`Target`, [`NativeFocusEvent`](../wiki/%3Cinternal%3E#nativefocusevent)\>

  ↳ **`FocusEvent`**

## Table of contents

### Properties

- [bubbles](../wiki/%3Cinternal%3E.FocusEvent#bubbles)
- [cancelable](../wiki/%3Cinternal%3E.FocusEvent#cancelable)
- [currentTarget](../wiki/%3Cinternal%3E.FocusEvent#currenttarget)
- [defaultPrevented](../wiki/%3Cinternal%3E.FocusEvent#defaultprevented)
- [eventPhase](../wiki/%3Cinternal%3E.FocusEvent#eventphase)
- [isTrusted](../wiki/%3Cinternal%3E.FocusEvent#istrusted)
- [nativeEvent](../wiki/%3Cinternal%3E.FocusEvent#nativeevent)
- [relatedTarget](../wiki/%3Cinternal%3E.FocusEvent#relatedtarget)
- [target](../wiki/%3Cinternal%3E.FocusEvent#target)
- [timeStamp](../wiki/%3Cinternal%3E.FocusEvent#timestamp)
- [type](../wiki/%3Cinternal%3E.FocusEvent#type)

### Methods

- [isDefaultPrevented](../wiki/%3Cinternal%3E.FocusEvent#isdefaultprevented)
- [isPropagationStopped](../wiki/%3Cinternal%3E.FocusEvent#ispropagationstopped)
- [persist](../wiki/%3Cinternal%3E.FocusEvent#persist)
- [preventDefault](../wiki/%3Cinternal%3E.FocusEvent#preventdefault)
- [stopPropagation](../wiki/%3Cinternal%3E.FocusEvent#stoppropagation)

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

• **currentTarget**: `EventTarget` & `Target`

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

• **nativeEvent**: `FocusEvent`

#### Inherited from

[SyntheticEvent](../wiki/%3Cinternal%3E.SyntheticEvent).[nativeEvent](../wiki/%3Cinternal%3E.SyntheticEvent#nativeevent)

#### Defined in

node_modules/@types/react/index.d.ts:1185

___

### relatedTarget

• **relatedTarget**: ``null`` \| `EventTarget` & `RelatedTarget`

#### Defined in

node_modules/@types/react/index.d.ts:1237

___

### target

• **target**: `EventTarget` & `Target`

#### Overrides

[SyntheticEvent](../wiki/%3Cinternal%3E.SyntheticEvent).[target](../wiki/%3Cinternal%3E.SyntheticEvent#target)

#### Defined in

node_modules/@types/react/index.d.ts:1238

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
