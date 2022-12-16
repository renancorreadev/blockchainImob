# Class: BigNumber

[<internal>](../wiki/%3Cinternal%3E).BigNumber

## Implements

- [`Hexable`](../wiki/%3Cinternal%3E.Hexable)

## Table of contents

### Constructors

- [constructor](../wiki/%3Cinternal%3E.BigNumber#constructor)

### Properties

- [\_hex](../wiki/%3Cinternal%3E.BigNumber#_hex)
- [\_isBigNumber](../wiki/%3Cinternal%3E.BigNumber#_isbignumber)

### Methods

- [abs](../wiki/%3Cinternal%3E.BigNumber#abs)
- [add](../wiki/%3Cinternal%3E.BigNumber#add)
- [and](../wiki/%3Cinternal%3E.BigNumber#and)
- [div](../wiki/%3Cinternal%3E.BigNumber#div)
- [eq](../wiki/%3Cinternal%3E.BigNumber#eq)
- [fromTwos](../wiki/%3Cinternal%3E.BigNumber#fromtwos)
- [gt](../wiki/%3Cinternal%3E.BigNumber#gt)
- [gte](../wiki/%3Cinternal%3E.BigNumber#gte)
- [isNegative](../wiki/%3Cinternal%3E.BigNumber#isnegative)
- [isZero](../wiki/%3Cinternal%3E.BigNumber#iszero)
- [lt](../wiki/%3Cinternal%3E.BigNumber#lt)
- [lte](../wiki/%3Cinternal%3E.BigNumber#lte)
- [mask](../wiki/%3Cinternal%3E.BigNumber#mask)
- [mod](../wiki/%3Cinternal%3E.BigNumber#mod)
- [mul](../wiki/%3Cinternal%3E.BigNumber#mul)
- [or](../wiki/%3Cinternal%3E.BigNumber#or)
- [pow](../wiki/%3Cinternal%3E.BigNumber#pow)
- [shl](../wiki/%3Cinternal%3E.BigNumber#shl)
- [shr](../wiki/%3Cinternal%3E.BigNumber#shr)
- [sub](../wiki/%3Cinternal%3E.BigNumber#sub)
- [toBigInt](../wiki/%3Cinternal%3E.BigNumber#tobigint)
- [toHexString](../wiki/%3Cinternal%3E.BigNumber#tohexstring)
- [toJSON](../wiki/%3Cinternal%3E.BigNumber#tojson)
- [toNumber](../wiki/%3Cinternal%3E.BigNumber#tonumber)
- [toString](../wiki/%3Cinternal%3E.BigNumber#tostring)
- [toTwos](../wiki/%3Cinternal%3E.BigNumber#totwos)
- [xor](../wiki/%3Cinternal%3E.BigNumber#xor)
- [from](../wiki/%3Cinternal%3E.BigNumber#from)
- [isBigNumber](../wiki/%3Cinternal%3E.BigNumber#isbignumber)

## Constructors

### constructor

• **new BigNumber**(`constructorGuard`, `hex`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `constructorGuard` | `any` |
| `hex` | `string` |

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:7

## Properties

### \_hex

• `Readonly` **\_hex**: `string`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:5

___

### \_isBigNumber

• `Readonly` **\_isBigNumber**: `boolean`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:6

## Methods

### abs

▸ **abs**(): [`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)

#### Returns

[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:10

___

### add

▸ **add**(`other`): [`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../wiki/%3Cinternal%3E#bignumberish) |

#### Returns

[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:11

___

### and

▸ **and**(`other`): [`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../wiki/%3Cinternal%3E#bignumberish) |

#### Returns

[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:17

___

### div

▸ **div**(`other`): [`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../wiki/%3Cinternal%3E#bignumberish) |

#### Returns

[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:13

___

### eq

▸ **eq**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../wiki/%3Cinternal%3E#bignumberish) |

#### Returns

`boolean`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:23

___

### fromTwos

▸ **fromTwos**(`value`): [`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:8

___

### gt

▸ **gt**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../wiki/%3Cinternal%3E#bignumberish) |

#### Returns

`boolean`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:26

___

### gte

▸ **gte**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../wiki/%3Cinternal%3E#bignumberish) |

#### Returns

`boolean`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:27

___

### isNegative

▸ **isNegative**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:28

___

### isZero

▸ **isZero**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:29

___

### lt

▸ **lt**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../wiki/%3Cinternal%3E#bignumberish) |

#### Returns

`boolean`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:24

___

### lte

▸ **lte**(`other`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../wiki/%3Cinternal%3E#bignumberish) |

#### Returns

`boolean`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:25

___

### mask

▸ **mask**(`value`): [`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:20

___

### mod

▸ **mod**(`other`): [`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../wiki/%3Cinternal%3E#bignumberish) |

#### Returns

[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:15

___

### mul

▸ **mul**(`other`): [`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../wiki/%3Cinternal%3E#bignumberish) |

#### Returns

[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:14

___

### or

▸ **or**(`other`): [`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../wiki/%3Cinternal%3E#bignumberish) |

#### Returns

[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:18

___

### pow

▸ **pow**(`other`): [`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../wiki/%3Cinternal%3E#bignumberish) |

#### Returns

[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:16

___

### shl

▸ **shl**(`value`): [`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:21

___

### shr

▸ **shr**(`value`): [`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:22

___

### sub

▸ **sub**(`other`): [`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../wiki/%3Cinternal%3E#bignumberish) |

#### Returns

[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:12

___

### toBigInt

▸ **toBigInt**(): `bigint`

#### Returns

`bigint`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:31

___

### toHexString

▸ **toHexString**(): `string`

#### Returns

`string`

#### Implementation of

[Hexable](../wiki/%3Cinternal%3E.Hexable).[toHexString](../wiki/%3Cinternal%3E.Hexable#tohexstring)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:33

___

### toJSON

▸ **toJSON**(`key?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key?` | `string` |

#### Returns

`any`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:34

___

### toNumber

▸ **toNumber**(): `number`

#### Returns

`number`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:30

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:32

___

### toTwos

▸ **toTwos**(`value`): [`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:9

___

### xor

▸ **xor**(`other`): [`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`BigNumberish`](../wiki/%3Cinternal%3E#bignumberish) |

#### Returns

[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:19

___

### from

▸ `Static` **from**(`value`): [`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:35

___

### isBigNumber

▸ `Static` **isBigNumber**(`value`): value is BigNumber

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

value is BigNumber

#### Defined in

node_modules/@ethersproject/bignumber/lib/bignumber.d.ts:36
