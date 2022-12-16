# Interface: BaseSyntheticEvent<E, C, T\>

[<internal>](../wiki/%3Cinternal%3E).BaseSyntheticEvent

## Type parameters

| Name | Type |
| :------ | :------ |
| `E` | `object` |
| `C` | `any` |
| `T` | `any` |

## Hierarchy

- **`BaseSyntheticEvent`**

  ↳ [`SyntheticEvent`](../wiki/%3Cinternal%3E.SyntheticEvent)

## Table of contents

### Properties

- [bubbles](../wiki/%3Cinternal%3E.BaseSyntheticEvent#bubbles)
- [cancelable](../wiki/%3Cinternal%3E.BaseSyntheticEvent#cancelable)
- [currentTarget](../wiki/%3Cinternal%3E.BaseSyntheticEvent#currenttarget)
- [defaultPrevented](../wiki/%3Cinternal%3E.BaseSyntheticEvent#defaultprevented)
- [eventPhase](../wiki/%3Cinternal%3E.BaseSyntheticEvent#eventphase)
- [isTrusted](../wiki/%3Cinternal%3E.BaseSyntheticEvent#istrusted)
- [nativeEvent](../wiki/%3Cinternal%3E.BaseSyntheticEvent#nativeevent)
- [target](../wiki/%3Cinternal%3E.BaseSyntheticEvent#target)
- [timeStamp](../wiki/%3Cinternal%3E.BaseSyntheticEvent#timestamp)
- [type](../wiki/%3Cinternal%3E.BaseSyntheticEvent#type)

### Methods

- [isDefaultPrevented](../wiki/%3Cinternal%3E.BaseSyntheticEvent#isdefaultprevented)
- [isPropagationStopped](../wiki/%3Cinternal%3E.BaseSyntheticEvent#ispropagationstopped)
- [persist](../wiki/%3Cinternal%3E.BaseSyntheticEvent#persist)
- [preventDefault](../wiki/%3Cinternal%3E.BaseSyntheticEvent#preventdefault)
- [stopPropagation](../wiki/%3Cinternal%3E.BaseSyntheticEvent#stoppropagation)

## Properties

### bubbles

• **bubbles**: `boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1188

___

### cancelable

• **cancelable**: `boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1189

___

### currentTarget

• **currentTarget**: `C`

#### Defined in

node_modules/@types/react/index.d.ts:1186

___

### defaultPrevented

• **defaultPrevented**: `boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1190

___

### eventPhase

• **eventPhase**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1191

___

### isTrusted

• **isTrusted**: `boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1192

___

### nativeEvent

• **nativeEvent**: `E`

#### Defined in

node_modules/@types/react/index.d.ts:1185

___

### target

• **target**: `T`

#### Defined in

node_modules/@types/react/index.d.ts:1187

___

### timeStamp

• **timeStamp**: `number`

#### Defined in

node_modules/@types/react/index.d.ts:1198

___

### type

• **type**: `string`

#### Defined in

node_modules/@types/react/index.d.ts:1199

## Methods

### isDefaultPrevented

▸ **isDefaultPrevented**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1194

___

### isPropagationStopped

▸ **isPropagationStopped**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@types/react/index.d.ts:1196

___

### persist

▸ **persist**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@types/react/index.d.ts:1197

___

### preventDefault

▸ **preventDefault**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@types/react/index.d.ts:1193

___

### stopPropagation

▸ **stopPropagation**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@types/react/index.d.ts:1195
