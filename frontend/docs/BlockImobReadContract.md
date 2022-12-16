# Class: BlockImobReadContract

## Implements

- [`BlockImobReadContractInterface`](../wiki/Exports#blockimobreadcontractinterface)

## Table of contents

### Constructors

- [constructor](../wiki/BlockImobReadContract#constructor)

### Methods

- [getContractNameRequest](../wiki/BlockImobReadContract#getcontractnamerequest)
- [getUserAllowed](../wiki/BlockImobReadContract#getuserallowed)

## Constructors

### constructor

• **new BlockImobReadContract**()

## Methods

### getContractNameRequest

▸ **getContractNameRequest**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Implementation of

BlockImobReadContractInterface.getContractNameRequest

#### Defined in

[src/data/useCases/blockimob-reads-calls.ts:9](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/data/useCases/blockimob-reads-calls.ts#L9)

___

### getUserAllowed

▸ **getUserAllowed**(`«destructured»`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`GetUserAllowedIn`](../wiki/GetUserAllowedIn) |

#### Returns

`Promise`<`boolean`\>

#### Implementation of

BlockImobReadContractInterface.getUserAllowed

#### Defined in

[src/data/useCases/blockimob-reads-calls.ts:14](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/data/useCases/blockimob-reads-calls.ts#L14)
