# Interface: SyntheticEvent<T, E\>

[<internal>](../wiki/%3Cinternal%3E).SyntheticEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `Element` |
| `E` | `Event` |

## Hierarchy

- [`BaseSyntheticEvent`](../wiki/%3Cinternal%3E.BaseSyntheticEvent)<`E`, `EventTarget` & `T`, `EventTarget`\>

  ↳ **`SyntheticEvent`**

  ↳↳ [`ClipboardEvent`](../wiki/%3Cinternal%3E.ClipboardEvent)

  ↳↳ [`CompositionEvent`](../wiki/%3Cinternal%3E.CompositionEvent)

  ↳↳ [`FocusEvent`](../wiki/%3Cinternal%3E.FocusEvent)

  ↳↳ [`FormEvent`](../wiki/%3Cinternal%3E.FormEvent)

  ↳↳ [`UIEvent`](../wiki/%3Cinternal%3E.UIEvent)

  ↳↳ [`AnimationEvent`](../wiki/%3Cinternal%3E.AnimationEvent)

  ↳↳ [`TransitionEvent`](../wiki/%3Cinternal%3E.TransitionEvent)

## Table of contents

### Properties

- [bubbles](../wiki/%3Cinternal%3E.SyntheticEvent#bubbles)
- [cancelable](../wiki/%3Cinternal%3E.SyntheticEvent#cancelable)
- [currentTarget](../wiki/%3Cinternal%3E.SyntheticEvent#currenttarget)
- [defaultPrevented](../wiki/%3Cinternal%3E.SyntheticEvent#defaultprevented)
- [eventPhase](../wiki/%3Cinternal%3E.SyntheticEvent#eventphase)
- [isTrusted](../wiki/%3Cinternal%3E.SyntheticEvent#istrusted)
- [nativeEvent](../wiki/%3Cinternal%3E.SyntheticEvent#nativeevent)
- [target](../wiki/%3Cinternal%3E.SyntheticEvent#target)
- [timeStamp](../wiki/%3Cinternal%3E.SyntheticEvent#timestamp)
- [type](../wiki/%3Cinternal%3E.SyntheticEvent#type)

### Methods

- [isDefaultPrevented](../wiki/%3Cinternal%3E.SyntheticEvent#isdefaultprevented)
- [isPropagationStopped](../wiki/%3Cinternal%3E.SyntheticEvent#ispropagationstopped)
- [persist](../wiki/%3Cinternal%3E.SyntheticEvent#persist)
- [preventDefault](../wiki/%3Cinternal%3E.SyntheticEvent#preventdefault)
- [stopPropagation](../wiki/%3Cinternal%3E.SyntheticEvent#stoppropagation)

## Properties

### bubbles

• **bubbles**: `boolean`

#### Inherited from

[BaseSyntheticEvent](../wiki/%3Cinternal%3E.BaseSyntheticEvent).[bubbles](../wiki/%3Cinternal%3E.BaseSyntheticEvent#bubbles)

#### Defined in

node_modules/@types/react/index.d.ts:1188

___

### cancelable

• **cancelable**: `boolean`

#### Inherited from

[BaseSyntheticEvent](../wiki/%3Cinternal%3E.BaseSyntheticEvent).[cancelable](../wiki/%3Cinternal%3E.BaseSyntheticEvent#cancelable)

#### Defined in

node_modules/@types/react/index.d.ts:1189

___

### currentTarget

• **currentTarget**: `EventTarget` & `T`

#### Inherited from

[BaseSyntheticEvent](../wiki/%3Cinternal%3E.BaseSyntheticEvent).[currentTarget](../wiki/%3Cinternal%3E.BaseSyntheticEvent#currenttarget)

#### Defined in

node_modules/@types/react/index.d.ts:1186

___

### defaultPrevented

• **defaultPrevented**: `boolean`

#### Inherited from

[BaseSyntheticEvent](../wiki/%3Cinternal%3E.BaseSyntheticEvent).[defaultPrevented](../wiki/%3Cinternal%3E.BaseSyntheticEvent#defaultprevented)

#### Defined in

node_modules/@types/react/index.d.ts:1190

___

### eventPhase

• **eventPhase**: `number`

#### Inherited from

[BaseSyntheticEvent](../wiki/%3Cinternal%3E.BaseSyntheticEvent).[eventPhase](../wiki/%3Cinternal%3E.BaseSyntheticEvent#eventphase)

#### Defined in

node_modules/@types/react/index.d.ts:1191

___

### isTrusted

• **isTrusted**: `boolean`

#### Inherited from

[BaseSyntheticEvent](../wiki/%3Cinternal%3E.BaseSyntheticEvent).[isTrusted](../wiki/%3Cinternal%3E.BaseSyntheticEvent#istrusted)

#### Defined in

node_modules/@types/react/index.d.ts:1192

___

### nativeEvent

• **nativeEvent**: `E`

#### Inherited from

[BaseSyntheticEvent](../wiki/%3Cinternal%3E.BaseSyntheticEvent).[nativeEvent](../wiki/%3Cinternal%3E.BaseSyntheticEvent#nativeevent)

#### Defined in

node_modules/@types/react/index.d.ts:1185

___

### target

• **target**: `EventTarget`

#### Inherited from

[BaseSyntheticEvent](../wiki/%3Cinternal%3E.BaseSyntheticEvent).[target](../wiki/%3Cinternal%3E.BaseSyntheticEvent#target)

#### Defined in

node_modules/@types/react/index.d.ts:1187

___

### timeStamp

• **timeStamp**: `number`

#### Inherited from

[BaseSyntheticEvent](../wiki/%3Cinternal%3E.BaseSyntheticEvent).[timeStamp](../wiki/%3Cinternal%3E.BaseSyntheticEvent#timestamp)

#### Defined in

node_modules/@types/react/index.d.ts:1198

___

### type

• **type**: `string`

#### Inherited from

[BaseSyntheticEvent](../wiki/%3Cinternal%3E.BaseSyntheticEvent).[type](../wiki/%3Cinternal%3E.BaseSyntheticEvent#type)

#### Defined in

node_modules/@types/react/index.d.ts:1199

## Methods

### isDefaultPrevented

▸ **isDefaultPrevented**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[BaseSyntheticEvent](../wiki/%3Cinternal%3E.BaseSyntheticEvent).[isDefaultPrevented](../wiki/%3Cinternal%3E.BaseSyntheticEvent#isdefaultprevented)

#### Defined in

node_modules/@types/react/index.d.ts:1194

___

### isPropagationStopped

▸ **isPropagationStopped**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[BaseSyntheticEvent](../wiki/%3Cinternal%3E.BaseSyntheticEvent).[isPropagationStopped](../wiki/%3Cinternal%3E.BaseSyntheticEvent#ispropagationstopped)

#### Defined in

node_modules/@types/react/index.d.ts:1196

___

### persist

▸ **persist**(): `void`

#### Returns

`void`

#### Inherited from

[BaseSyntheticEvent](../wiki/%3Cinternal%3E.BaseSyntheticEvent).[persist](../wiki/%3Cinternal%3E.BaseSyntheticEvent#persist)

#### Defined in

node_modules/@types/react/index.d.ts:1197

___

### preventDefault

▸ **preventDefault**(): `void`

#### Returns

`void`

#### Inherited from

[BaseSyntheticEvent](../wiki/%3Cinternal%3E.BaseSyntheticEvent).[preventDefault](../wiki/%3Cinternal%3E.BaseSyntheticEvent#preventdefault)

#### Defined in

node_modules/@types/react/index.d.ts:1193

___

### stopPropagation

▸ **stopPropagation**(): `void`

#### Returns

`void`

#### Inherited from

[BaseSyntheticEvent](../wiki/%3Cinternal%3E.BaseSyntheticEvent).[stopPropagation](../wiki/%3Cinternal%3E.BaseSyntheticEvent#stoppropagation)

#### Defined in

node_modules/@types/react/index.d.ts:1195
