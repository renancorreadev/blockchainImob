# Class: Formatter

[<internal>](../wiki/%3Cinternal%3E).Formatter

## Table of contents

### Constructors

- [constructor](../wiki/%3Cinternal%3E.Formatter#constructor)

### Properties

- [formats](../wiki/%3Cinternal%3E.Formatter#formats)

### Methods

- [\_block](../wiki/%3Cinternal%3E.Formatter#_block)
- [accessList](../wiki/%3Cinternal%3E.Formatter#accesslist)
- [address](../wiki/%3Cinternal%3E.Formatter#address)
- [bigNumber](../wiki/%3Cinternal%3E.Formatter#bignumber)
- [block](../wiki/%3Cinternal%3E.Formatter#block)
- [blockTag](../wiki/%3Cinternal%3E.Formatter#blocktag)
- [blockWithTransactions](../wiki/%3Cinternal%3E.Formatter#blockwithtransactions)
- [boolean](../wiki/%3Cinternal%3E.Formatter#boolean)
- [callAddress](../wiki/%3Cinternal%3E.Formatter#calladdress)
- [contractAddress](../wiki/%3Cinternal%3E.Formatter#contractaddress)
- [data](../wiki/%3Cinternal%3E.Formatter#data)
- [difficulty](../wiki/%3Cinternal%3E.Formatter#difficulty)
- [filter](../wiki/%3Cinternal%3E.Formatter#filter)
- [filterLog](../wiki/%3Cinternal%3E.Formatter#filterlog)
- [getDefaultFormats](../wiki/%3Cinternal%3E.Formatter#getdefaultformats)
- [hash](../wiki/%3Cinternal%3E.Formatter#hash)
- [hex](../wiki/%3Cinternal%3E.Formatter#hex)
- [number](../wiki/%3Cinternal%3E.Formatter#number)
- [receipt](../wiki/%3Cinternal%3E.Formatter#receipt)
- [receiptLog](../wiki/%3Cinternal%3E.Formatter#receiptlog)
- [topics](../wiki/%3Cinternal%3E.Formatter#topics)
- [transaction](../wiki/%3Cinternal%3E.Formatter#transaction)
- [transactionRequest](../wiki/%3Cinternal%3E.Formatter#transactionrequest)
- [transactionResponse](../wiki/%3Cinternal%3E.Formatter#transactionresponse)
- [type](../wiki/%3Cinternal%3E.Formatter#type)
- [uint256](../wiki/%3Cinternal%3E.Formatter#uint256)
- [allowFalsish](../wiki/%3Cinternal%3E.Formatter#allowfalsish)
- [allowNull](../wiki/%3Cinternal%3E.Formatter#allownull)
- [arrayOf](../wiki/%3Cinternal%3E.Formatter#arrayof)
- [check](../wiki/%3Cinternal%3E.Formatter#check)

## Constructors

### constructor

• **new Formatter**()

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:20

## Properties

### formats

• `Readonly` **formats**: [`Formats`](../wiki/%3Cinternal%3E#formats)

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:19

## Methods

### \_block

▸ **_block**(`value`, `format`): [`Block`](../wiki/%3Cinternal%3E.Block)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `format` | `any` |

#### Returns

[`Block`](../wiki/%3Cinternal%3E.Block)

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:36

___

### accessList

▸ **accessList**(`accessList`): [`AccessList`](../wiki/%3Cinternal%3E#accesslist)

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessList` | `any`[] |

#### Returns

[`AccessList`](../wiki/%3Cinternal%3E#accesslist)

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:22

___

### address

▸ **address**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:29

___

### bigNumber

▸ **bigNumber**(`value`): [`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:25

___

### block

▸ **block**(`value`): [`Block`](../wiki/%3Cinternal%3E.Block)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`Block`](../wiki/%3Cinternal%3E.Block)

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:37

___

### blockTag

▸ **blockTag**(`blockTag`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `blockTag` | `any` |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:32

___

### blockWithTransactions

▸ **blockWithTransactions**(`value`): [`Block`](../wiki/%3Cinternal%3E.Block)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`Block`](../wiki/%3Cinternal%3E.Block)

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:38

___

### boolean

▸ **boolean**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`boolean`

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:26

___

### callAddress

▸ **callAddress**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:30

___

### contractAddress

▸ **contractAddress**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:31

___

### data

▸ **data**(`value`, `strict?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `strict?` | `boolean` |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:28

___

### difficulty

▸ **difficulty**(`value`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`number`

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:34

___

### filter

▸ **filter**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:45

___

### filterLog

▸ **filterLog**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:46

___

### getDefaultFormats

▸ **getDefaultFormats**(): [`Formats`](../wiki/%3Cinternal%3E#formats)

#### Returns

[`Formats`](../wiki/%3Cinternal%3E#formats)

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:21

___

### hash

▸ **hash**(`value`, `strict?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `strict?` | `boolean` |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:33

___

### hex

▸ **hex**(`value`, `strict?`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `strict?` | `boolean` |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:27

___

### number

▸ **number**(`number`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `any` |

#### Returns

`number`

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:23

___

### receipt

▸ **receipt**(`value`): [`TransactionReceipt`](../wiki/%3Cinternal%3E.TransactionReceipt)

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

[`TransactionReceipt`](../wiki/%3Cinternal%3E.TransactionReceipt)

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:43

___

### receiptLog

▸ **receiptLog**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:42

___

### topics

▸ **topics**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:44

___

### transaction

▸ **transaction**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:41

___

### transactionRequest

▸ **transactionRequest**(`value`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`any`

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:39

___

### transactionResponse

▸ **transactionResponse**(`transaction`): [`TransactionResponse`](../wiki/%3Cinternal%3E.TransactionResponse)

#### Parameters

| Name | Type |
| :------ | :------ |
| `transaction` | `any` |

#### Returns

[`TransactionResponse`](../wiki/%3Cinternal%3E.TransactionResponse)

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:40

___

### type

▸ **type**(`number`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `number` | `any` |

#### Returns

`number`

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:24

___

### uint256

▸ **uint256**(`value`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |

#### Returns

`string`

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:35

___

### allowFalsish

▸ `Static` **allowFalsish**(`format`, `replaceValue`): [`FormatFunc`](../wiki/%3Cinternal%3E#formatfunc)

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | [`FormatFunc`](../wiki/%3Cinternal%3E#formatfunc) |
| `replaceValue` | `any` |

#### Returns

[`FormatFunc`](../wiki/%3Cinternal%3E#formatfunc)

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:51

___

### allowNull

▸ `Static` **allowNull**(`format`, `nullValue?`): [`FormatFunc`](../wiki/%3Cinternal%3E#formatfunc)

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | [`FormatFunc`](../wiki/%3Cinternal%3E#formatfunc) |
| `nullValue?` | `any` |

#### Returns

[`FormatFunc`](../wiki/%3Cinternal%3E#formatfunc)

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:50

___

### arrayOf

▸ `Static` **arrayOf**(`format`): [`FormatFunc`](../wiki/%3Cinternal%3E#formatfunc)

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | [`FormatFunc`](../wiki/%3Cinternal%3E#formatfunc) |

#### Returns

[`FormatFunc`](../wiki/%3Cinternal%3E#formatfunc)

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:52

___

### check

▸ `Static` **check**(`format`, `object`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | `Object` |
| `object` | `any` |

#### Returns

`any`

#### Defined in

node_modules/@ethersproject/providers/lib/formatter.d.ts:47
