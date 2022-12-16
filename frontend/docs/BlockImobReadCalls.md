# Namespace: BlockImobReadCalls

## Table of contents

### Functions

- [getApproved](../wiki/BlockImobReadCalls#getapproved)
- [getBalanceOf](../wiki/BlockImobReadCalls#getbalanceof)
- [getBaseURI](../wiki/BlockImobReadCalls#getbaseuri)
- [getContractName](../wiki/BlockImobReadCalls#getcontractname)
- [getIsApproveForAll](../wiki/BlockImobReadCalls#getisapproveforall)
- [getNextTokenId](../wiki/BlockImobReadCalls#getnexttokenid)
- [getOwnerOf](../wiki/BlockImobReadCalls#getownerof)
- [getQueryFromTokenId](../wiki/BlockImobReadCalls#getqueryfromtokenid)
- [getQueryToTokenId](../wiki/BlockImobReadCalls#getquerytotokenid)
- [getReturnAllowed](../wiki/BlockImobReadCalls#getreturnallowed)
- [getTokenURI](../wiki/BlockImobReadCalls#gettokenuri)
- [getUserAllowed](../wiki/BlockImobReadCalls#getuserallowed)
- [uriFromQuery](../wiki/BlockImobReadCalls#urifromquery)
- [userExpires](../wiki/BlockImobReadCalls#userexpires)
- [userOf](../wiki/BlockImobReadCalls#userof)

## Functions

### getApproved

▸ **getApproved**(`numberToApproval`): `Promise`<\`0x${string}\`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `numberToApproval` | [`BigNumber`](../wiki/%3Cinternal%3E.BigNumber) |

#### Returns

`Promise`<\`0x${string}\`\>

#### Defined in

[src/main/adapters/read-contract-interaction.ts:69](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/main/adapters/read-contract-interaction.ts#L69)

___

### getBalanceOf

▸ **getBalanceOf**(`addressProvider`): `Promise`<[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressProvider` | \`0x${string}\` |

#### Returns

`Promise`<[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)\>

#### Defined in

[src/main/adapters/read-contract-interaction.ts:51](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/main/adapters/read-contract-interaction.ts#L51)

___

### getBaseURI

▸ **getBaseURI**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[src/main/adapters/read-contract-interaction.ts:124](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/main/adapters/read-contract-interaction.ts#L124)

___

### getContractName

▸ **getContractName**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

[src/main/adapters/read-contract-interaction.ts:16](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/main/adapters/read-contract-interaction.ts#L16)

___

### getIsApproveForAll

▸ **getIsApproveForAll**(`«destructured»`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`GetIsApproveForAllType`](../wiki/%3Cinternal%3E#getisapproveforalltype) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/main/adapters/read-contract-interaction.ts:105](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/main/adapters/read-contract-interaction.ts#L105)

___

### getNextTokenId

▸ **getNextTokenId**(): `Promise`<[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)\>

#### Returns

`Promise`<[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)\>

#### Defined in

[src/main/adapters/read-contract-interaction.ts:158](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/main/adapters/read-contract-interaction.ts#L158)

___

### getOwnerOf

▸ **getOwnerOf**(`AddressToQuery`): `Promise`<\`0x${string}\`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `AddressToQuery` | [`BigNumber`](../wiki/%3Cinternal%3E.BigNumber) |

#### Returns

`Promise`<\`0x${string}\`\>

#### Defined in

[src/main/adapters/read-contract-interaction.ts:140](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/main/adapters/read-contract-interaction.ts#L140)

___

### getQueryFromTokenId

▸ **getQueryFromTokenId**(`tokenID`): `Promise`<{ `district`: `string` ; `registry`: [`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)  }\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenID` | [`BigNumber`](../wiki/%3Cinternal%3E.BigNumber) |

#### Returns

`Promise`<{ `district`: `string` ; `registry`: [`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)  }\>

#### Defined in

[src/main/adapters/read-contract-interaction.ts:173](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/main/adapters/read-contract-interaction.ts#L173)

___

### getQueryToTokenId

▸ **getQueryToTokenId**(`TokenAddress`, `TokenId`): `Promise`<[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `TokenAddress` | `string` |
| `TokenId` | [`BigNumber`](../wiki/%3Cinternal%3E.BigNumber) |

#### Returns

`Promise`<[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)\>

#### Defined in

[src/main/adapters/read-contract-interaction.ts:189](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/main/adapters/read-contract-interaction.ts#L189)

___

### getReturnAllowed

▸ **getReturnAllowed**(`addressToQuery`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressToQuery` | \`0x${string}\` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/main/adapters/read-contract-interaction.ts:208](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/main/adapters/read-contract-interaction.ts#L208)

___

### getTokenURI

▸ **getTokenURI**(`tokenURI`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenURI` | [`BigNumber`](../wiki/%3Cinternal%3E.BigNumber) |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/main/adapters/read-contract-interaction.ts:88](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/main/adapters/read-contract-interaction.ts#L88)

___

### getUserAllowed

▸ **getUserAllowed**(`addressProvider`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `addressProvider` | \`0x${string}\` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/main/adapters/read-contract-interaction.ts:32](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/main/adapters/read-contract-interaction.ts#L32)

___

### uriFromQuery

▸ **uriFromQuery**(`uriToQuery`, `ID`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `uriToQuery` | `string` |
| `ID` | [`BigNumber`](../wiki/%3Cinternal%3E.BigNumber) |

#### Returns

`Promise`<`string`\>

#### Defined in

[src/main/adapters/read-contract-interaction.ts:226](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/main/adapters/read-contract-interaction.ts#L226)

___

### userExpires

▸ **userExpires**(`tokenIDUser`): `Promise`<[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenIDUser` | [`BigNumber`](../wiki/%3Cinternal%3E.BigNumber) |

#### Returns

`Promise`<[`BigNumber`](../wiki/%3Cinternal%3E.BigNumber)\>

#### Defined in

[src/main/adapters/read-contract-interaction.ts:245](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/main/adapters/read-contract-interaction.ts#L245)

___

### userOf

▸ **userOf**(`tokenIDUser`): `Promise`<\`0x${string}\`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `tokenIDUser` | [`BigNumber`](../wiki/%3Cinternal%3E.BigNumber) |

#### Returns

`Promise`<\`0x${string}\`\>

#### Defined in

[src/main/adapters/read-contract-interaction.ts:263](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/main/adapters/read-contract-interaction.ts#L263)
