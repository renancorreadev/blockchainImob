# TypeDoc Pages Plugin

## Table of contents

### Namespaces

- [&lt;internal\&gt;](../wiki/%3Cinternal%3E)
- [&lt;internal\&gt;](../wiki/%3Cinternal%3E)
- [&lt;internal\&gt;](../wiki/%3Cinternal%3E)
- [&lt;internal\&gt;](../wiki/%3Cinternal%3E)
- [&lt;internal\&gt;](../wiki/%3Cinternal%3E)
- [&lt;internal\&gt;](../wiki/%3Cinternal%3E)
- [&lt;internal\&gt;](../wiki/%3Cinternal%3E)
- [&lt;internal\&gt;](../wiki/%3Cinternal%3E)
- [&lt;internal\&gt;](../wiki/%3Cinternal%3E)
- [BlockImobReadCalls](../wiki/BlockImobReadCalls)
- [JSX](../wiki/JSX)

### Classes

- [BlockImobReadContract](../wiki/BlockImobReadContract)

### Interfaces

- [BlockImobContractInterface](../wiki/BlockImobContractInterface)
- [GetUserAllowedIn](../wiki/GetUserAllowedIn)
- [PaymentsContractInterface](../wiki/PaymentsContractInterface)
- [consultContractInterface](../wiki/consultContractInterface)

### Type Aliases

- [BlockImobReadContractInterface](../wiki/Exports#blockimobreadcontractinterface)
- [ImobReadContractInterface](../wiki/Exports#imobreadcontractinterface)
- [ThemeType](../wiki/Exports#themetype)

### Variables

- [BlockImobContractConfig](../wiki/Exports#blockimobcontractconfig)
- [Button](../wiki/Exports#button)
- [Carousel](../wiki/Exports#carousel)
- [ConsultContractConfig](../wiki/Exports#consultcontractconfig)
- [Container](../wiki/Exports#container)
- [ContainerWrapper](../wiki/Exports#containerwrapper)
- [Fiis](../wiki/Exports#fiis)
- [GlobalStyle](../wiki/Exports#globalstyle)
- [Header](../wiki/Exports#header)
- [HeaderTest](../wiki/Exports#headertest)
- [HeaderWrapper](../wiki/Exports#headerwrapper)
- [Home](../wiki/Exports#home)
- [HomeWrapper](../wiki/Exports#homewrapper)
- [Image](../wiki/Exports#image)
- [ImageWrapper](../wiki/Exports#imagewrapper)
- [InfoWrapper](../wiki/Exports#infowrapper)
- [Logo](../wiki/Exports#logo)
- [NavItem](../wiki/Exports#navitem)
- [NavWrapper](../wiki/Exports#navwrapper)
- [PaymentsdContractConfig](../wiki/Exports#paymentsdcontractconfig)
- [Query](../wiki/Exports#query)
- [Register](../wiki/Exports#register)
- [RegisterHeader](../wiki/Exports#registerheader)
- [Section](../wiki/Exports#section)
- [Sellers](../wiki/Exports#sellers)
- [TextContent](../wiki/Exports#textcontent)
- [Title](../wiki/Exports#title)
- [Title](../wiki/Exports#title-1)
- [Video](../wiki/Exports#video)
- [WalletConnectWrapper](../wiki/Exports#walletconnectwrapper)
- [abi](../wiki/Exports#abi)
- [abi](../wiki/Exports#abi-1)
- [chains](../wiki/Exports#chains)
- [defaultTheme](../wiki/Exports#defaulttheme)
- [wagmiClient](../wiki/Exports#wagmiclient)

### Functions

- [App](../wiki/Exports#app)
- [ConsultIcon](../wiki/Exports#consulticon)
- [FillsIcon](../wiki/Exports#fillsicon)
- [HomeIcon](../wiki/Exports#homeicon)
- [Layout](../wiki/Exports#layout)
- [LogoIcon](../wiki/Exports#logoicon)
- [RainbowKitProvider](../wiki/Exports#rainbowkitprovider)
- [RegisterIcon](../wiki/Exports#registericon)
- [Router](../wiki/Exports#router)
- [SellerIcon](../wiki/Exports#sellericon)
- [connectors](../wiki/Exports#connectors)
- [provider](../wiki/Exports#provider)
- [success](../wiki/Exports#success)
- [useIsMounted](../wiki/Exports#useismounted)
- [webSocketProvider](../wiki/Exports#websocketprovider)

## Type Aliases

### BlockImobReadContractInterface

Ƭ **BlockImobReadContractInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getContractNameRequest` | () => `Promise`<`string`\> |
| `getUserAllowed` | (`__namedParameters`: [`GetUserAllowedIn`](../wiki/GetUserAllowedIn)) => `Promise`<`boolean`\> |

#### Defined in

[src/data/useCases/blockimob-reads-calls-protocol.ts:3](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/data/useCases/blockimob-reads-calls-protocol.ts#L3)

___

### ImobReadContractInterface

Ƭ **ImobReadContractInterface**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `getContractName` | () => `Promise`<`undefined` \| `string`\> |

#### Defined in

[src/data/protocols/blockimob-read-calls-protocols.ts:1](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/data/protocols/blockimob-read-calls-protocols.ts#L1)

___

### ThemeType

Ƭ **ThemeType**: typeof [`defaultTheme`](../wiki/Exports#defaulttheme)

#### Defined in

[src/@types/styled.d.ts:5](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/@types/styled.d.ts#L5)

## Variables

### BlockImobContractConfig

• `Const` **BlockImobContractConfig**: [`BlockImobContractInterface`](../wiki/BlockImobContractInterface)

#### Defined in

[src/utils/ContractConfigs/BlockImobContractConfig.ts:3](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/utils/ContractConfigs/BlockImobContractConfig.ts#L3)

___

### Button

• `Const` **Button**: [`StyledComponent`](../wiki/%3Cinternal%3E#styledcomponent)<``"button"``, `DefaultTheme`, {}, `never`\>

#### Defined in

[src/main/factories/pages/Home/styles.ts:48](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/main/factories/pages/Home/styles.ts#L48)

___

### Carousel

• `Const` **Carousel**: [`FC`](../wiki/%3Cinternal%3E#fc)<[`CarouselProps`](../wiki/%3Cinternal%3E#carouselprops)\>

#### Defined in

[src/presentation/components/Carousel/index.tsx:18](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/presentation/components/Carousel/index.tsx#L18)

___

### ConsultContractConfig

• `Const` **ConsultContractConfig**: [`consultContractInterface`](../wiki/consultContractInterface)

#### Defined in

[src/utils/ContractConfigs/ConsultContractConfig.ts:3](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/utils/ContractConfigs/ConsultContractConfig.ts#L3)

___

### Container

• `Const` **Container**: [`StyledComponent`](../wiki/%3Cinternal%3E#styledcomponent)<``"section"``, `DefaultTheme`, {}, `never`\>

#### Defined in

[src/presentation/components/Section/styles.ts:3](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/presentation/components/Section/styles.ts#L3)

___

### ContainerWrapper

• `Const` **ContainerWrapper**: [`StyledComponent`](../wiki/%3Cinternal%3E#styledcomponent)<``"div"``, `DefaultTheme`, {}, `never`\>

#### Defined in

[src/main/factories/pages/Register/components/RegisterHeader/styles.ts:3](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/main/factories/pages/Register/components/RegisterHeader/styles.ts#L3)

___

### Fiis

• `Const` **Fiis**: [`FunctionComponent`](../wiki/%3Cinternal%3E.FunctionComponent)

#### Defined in

[src/main/factories/pages/Fiis/index.tsx:4](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/main/factories/pages/Fiis/index.tsx#L4)

___

### GlobalStyle

• `Const` **GlobalStyle**: [`GlobalStyleComponent`](../wiki/%3Cinternal%3E.GlobalStyleComponent)<{}, `DefaultTheme`\>

#### Defined in

[src/presentation/styles/global.ts:3](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/presentation/styles/global.ts#L3)

___

### Header

• `Const` **Header**: [`FC`](../wiki/%3Cinternal%3E#fc)

#### Defined in

[src/presentation/components/Header/index.tsx:18](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/presentation/components/Header/index.tsx#L18)

___

### HeaderTest

• `Const` **HeaderTest**: [`FC`](../wiki/%3Cinternal%3E#fc)

#### Defined in

[src/presentation/components/Header/HeaderTest.tsx:11](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/presentation/components/Header/HeaderTest.tsx#L11)

___

### HeaderWrapper

• `Const` **HeaderWrapper**: [`StyledComponent`](../wiki/%3Cinternal%3E#styledcomponent)<``"header"``, `DefaultTheme`, {}, `never`\>

#### Defined in

[src/presentation/components/Header/styles.ts:3](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/presentation/components/Header/styles.ts#L3)

___

### Home

• `Const` **Home**: [`FC`](../wiki/%3Cinternal%3E#fc)

#### Defined in

[src/main/factories/pages/Home/index.tsx:22](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/main/factories/pages/Home/index.tsx#L22)

___

### HomeWrapper

• `Const` **HomeWrapper**: [`StyledComponent`](../wiki/%3Cinternal%3E#styledcomponent)<``"div"``, `DefaultTheme`, {}, `never`\>

#### Defined in

[src/main/factories/pages/Home/styles.ts:3](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/main/factories/pages/Home/styles.ts#L3)

___

### Image

• `Const` **Image**: [`StyledComponent`](../wiki/%3Cinternal%3E#styledcomponent)<``"img"``, `DefaultTheme`, {}, `never`\>

#### Defined in

[src/main/factories/pages/Home/styles.ts:73](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/main/factories/pages/Home/styles.ts#L73)

___

### ImageWrapper

• `Const` **ImageWrapper**: [`StyledComponent`](../wiki/%3Cinternal%3E#styledcomponent)<``"div"``, `DefaultTheme`, {}, `never`\>

#### Defined in

[src/main/factories/pages/Home/styles.ts:22](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/main/factories/pages/Home/styles.ts#L22)

___

### InfoWrapper

• `Const` **InfoWrapper**: [`StyledComponent`](../wiki/%3Cinternal%3E#styledcomponent)<``"div"``, `DefaultTheme`, {}, `never`\>

#### Defined in

[src/main/factories/pages/Home/styles.ts:11](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/main/factories/pages/Home/styles.ts#L11)

___

### Logo

• `Const` **Logo**: [`StyledComponent`](../wiki/%3Cinternal%3E#styledcomponent)<``"img"``, `DefaultTheme`, {}, `never`\>

#### Defined in

[src/presentation/components/Header/styles.ts:42](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/presentation/components/Header/styles.ts#L42)

___

### NavItem

• `Const` **NavItem**: [`StyledComponent`](../wiki/%3Cinternal%3E#styledcomponent)<``"div"``, `DefaultTheme`, {}, `never`\>

#### Defined in

[src/presentation/components/Header/styles.ts:36](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/presentation/components/Header/styles.ts#L36)

___

### NavWrapper

• `Const` **NavWrapper**: [`StyledComponent`](../wiki/%3Cinternal%3E#styledcomponent)<``"nav"``, `DefaultTheme`, {}, `never`\>

#### Defined in

[src/presentation/components/Header/styles.ts:12](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/presentation/components/Header/styles.ts#L12)

___

### PaymentsdContractConfig

• `Const` **PaymentsdContractConfig**: [`PaymentsContractInterface`](../wiki/PaymentsContractInterface)

#### Defined in

[src/utils/ContractConfigs/PaymentsContractConfig.ts:3](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/utils/ContractConfigs/PaymentsContractConfig.ts#L3)

___

### Query

• `Const` **Query**: [`FunctionComponent`](../wiki/%3Cinternal%3E.FunctionComponent)

#### Defined in

[src/main/factories/pages/Query/index.tsx:24](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/main/factories/pages/Query/index.tsx#L24)

___

### Register

• `Const` **Register**: [`FunctionComponent`](../wiki/%3Cinternal%3E.FunctionComponent)

#### Defined in

[src/main/factories/pages/Register/index.tsx:26](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/main/factories/pages/Register/index.tsx#L26)

___

### RegisterHeader

• `Const` **RegisterHeader**: [`FC`](../wiki/%3Cinternal%3E#fc)

#### Defined in

[src/main/factories/pages/Register/components/RegisterHeader/index.tsx:5](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/main/factories/pages/Register/components/RegisterHeader/index.tsx#L5)

___

### Section

• `Const` **Section**: [`FC`](../wiki/%3Cinternal%3E#fc)<[`Props`](../wiki/%3Cinternal%3E#props)\>

#### Defined in

[src/presentation/components/Section/index.tsx:8](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/presentation/components/Section/index.tsx#L8)

___

### Sellers

• `Const` **Sellers**: [`FunctionComponent`](../wiki/%3Cinternal%3E.FunctionComponent)

#### Defined in

[src/main/factories/pages/Sellers/index.tsx:4](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/main/factories/pages/Sellers/index.tsx#L4)

___

### TextContent

• `Const` **TextContent**: [`StyledComponent`](../wiki/%3Cinternal%3E#styledcomponent)<``"p"``, `DefaultTheme`, {}, `never`\>

#### Defined in

[src/main/factories/pages/Home/styles.ts:37](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/main/factories/pages/Home/styles.ts#L37)

___

### Title

• `Const` **Title**: [`StyledComponent`](../wiki/%3Cinternal%3E#styledcomponent)<``"h1"``, `DefaultTheme`, {}, `never`\>

#### Defined in

[src/main/factories/pages/Home/styles.ts:27](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/main/factories/pages/Home/styles.ts#L27)

___

### Title

• `Const` **Title**: [`StyledComponent`](../wiki/%3Cinternal%3E#styledcomponent)<``"p"``, `DefaultTheme`, {}, `never`\>

#### Defined in

[src/presentation/components/Section/styles.ts:10](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/presentation/components/Section/styles.ts#L10)

___

### Video

• `Const` **Video**: [`FunctionComponent`](../wiki/%3Cinternal%3E.FunctionComponent)

#### Defined in

[src/main/factories/pages/Video/index.tsx:4](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/main/factories/pages/Video/index.tsx#L4)

___

### WalletConnectWrapper

• `Const` **WalletConnectWrapper**: [`StyledComponent`](../wiki/%3Cinternal%3E#styledcomponent)<``"div"``, `DefaultTheme`, {}, `never`\>

#### Defined in

[src/presentation/components/Header/styles.ts:48](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/presentation/components/Header/styles.ts#L48)

___

### abi

• `Const` **abi**: readonly [{ `inputs`: readonly [{ `internalType`: ``"string"`` = "string"; `name`: ``"_name"`` = "\_name"; `type`: ``"string"`` = "string" }, { `internalType`: ``"string"`` = "string"; `name`: ``"_symbol"`` = "\_symbol"; `type`: ``"string"`` = "string" }] ; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"constructor"`` = "constructor" }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = "address"; `name`: ``"owner"`` = "owner"; `type`: ``"address"`` = "address" }, { `indexed`: ``true`` = true; `internalType`: ``"address"`` = "address"; `name`: ``"spender"`` = "spender"; `type`: ``"address"`` = "address" }, { `indexed`: ``true`` = true; `internalType`: ``"uint256"`` = "uint256"; `name`: ``"id"`` = "id"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"Approval"`` = "Approval"; `type`: ``"event"`` = "event" }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = "address"; `name`: ``"owner"`` = "owner"; `type`: ``"address"`` = "address" }, { `indexed`: ``true`` = true; `internalType`: ``"address"`` = "address"; `name`: ``"operator"`` = "operator"; `type`: ``"address"`` = "address" }, { `indexed`: ``false`` = false; `internalType`: ``"bool"`` = "bool"; `name`: ``"approved"`` = "approved"; `type`: ``"bool"`` = "bool" }] ; `name`: ``"ApprovalForAll"`` = "ApprovalForAll"; `type`: ``"event"`` = "event" }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"address"`` = "address"; `name`: ``"from"`` = "from"; `type`: ``"address"`` = "address" }, { `indexed`: ``true`` = true; `internalType`: ``"address"`` = "address"; `name`: ``"to"`` = "to"; `type`: ``"address"`` = "address" }, { `indexed`: ``true`` = true; `internalType`: ``"uint256"`` = "uint256"; `name`: ``"id"`` = "id"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"Transfer"`` = "Transfer"; `type`: ``"event"`` = "event" }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"uint256"`` = "uint256"; `name`: ``"tokenId"`` = "tokenId"; `type`: ``"uint256"`` = "uint256" }, { `indexed`: ``true`` = true; `internalType`: ``"address"`` = "address"; `name`: ``"user"`` = "user"; `type`: ``"address"`` = "address" }, { `indexed`: ``false`` = false; `internalType`: ``"uint64"`` = "uint64"; `name`: ``"expires"`` = "expires"; `type`: ``"uint64"`` = "uint64" }] ; `name`: ``"UpdateUser"`` = "UpdateUser"; `type`: ``"event"`` = "event" }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"string"`` = "string"; `name`: ``"newBaseURI"`` = "newBaseURI"; `type`: ``"string"`` = "string" }, { `indexed`: ``false`` = false; `internalType`: ``"string"`` = "string"; `name`: ``"newBaseURIText"`` = "newBaseURIText"; `type`: ``"string"`` = "string" }] ; `name`: ``"UpdatedBaseURI"`` = "UpdatedBaseURI"; `type`: ``"event"`` = "event" }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"uint256"`` = "uint256"; `name`: ``"tokenId"`` = "tokenId"; `type`: ``"uint256"`` = "uint256" }, { `indexed`: ``false`` = false; `internalType`: ``"enum IBlockImob.DealType"`` = "enum IBlockImob.DealType"; `name`: ``"dealType"`` = "dealType"; `type`: ``"uint8"`` = "uint8" }, { `indexed`: ``true`` = true; `internalType`: ``"address"`` = "address"; `name`: ``"dealAddress"`` = "dealAddress"; `type`: ``"address"`` = "address" }, { `indexed`: ``true`` = true; `internalType`: ``"address"`` = "address"; `name`: ``"fiiAddress"`` = "fiiAddress"; `type`: ``"address"`` = "address" }] ; `name`: ``"UpdatedTokenDeal"`` = "UpdatedTokenDeal"; `type`: ``"event"`` = "event" }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"uint256"`` = "uint256"; `name`: ``"tokenId"`` = "tokenId"; `type`: ``"uint256"`` = "uint256" }, { `indexed`: ``true`` = true; `internalType`: ``"string"`` = "string"; `name`: ``"newURI"`` = "newURI"; `type`: ``"string"`` = "string" }, { `indexed`: ``false`` = false; `internalType`: ``"string"`` = "string"; `name`: ``"newURIText"`` = "newURIText"; `type`: ``"string"`` = "string" }, { `indexed`: ``false`` = false; `internalType`: ``"string"`` = "string"; `name`: ``"newValue"`` = "newValue"; `type`: ``"string"`` = "string" }] ; `name`: ``"UpdatedTokenURI"`` = "UpdatedTokenURI"; `type`: ``"event"`` = "event" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``""`` = ""; `type`: ``"address"`` = "address" }] ; `name`: ``"allowed"`` = "allowed"; `outputs`: readonly [{ `internalType`: ``"bool"`` = "bool"; `name`: ``""`` = ""; `type`: ``"bool"`` = "bool" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"spender"`` = "spender"; `type`: ``"address"`` = "address" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"id"`` = "id"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"approve"`` = "approve"; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"owner"`` = "owner"; `type`: ``"address"`` = "address" }] ; `name`: ``"balanceOf"`` = "balanceOf"; `outputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``""`` = ""; `type`: ``"uint256"`` = "uint256" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [] = []; `name`: ``"baseURI"`` = "baseURI"; `outputs`: readonly [{ `internalType`: ``"string"`` = "string"; `name`: ``""`` = ""; `type`: ``"string"`` = "string" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"_tokenId"`` = "\_tokenId"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"burn"`` = "burn"; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"_addr"`` = "\_addr"; `type`: ``"address"`` = "address" }, { `internalType`: ``"bool"`` = "bool"; `name`: ``"_state"`` = "\_state"; `type`: ``"bool"`` = "bool" }] ; `name`: ``"changeAllow"`` = "changeAllow"; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``""`` = ""; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"getApproved"`` = "getApproved"; `outputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``""`` = ""; `type`: ``"address"`` = "address" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``""`` = ""; `type`: ``"address"`` = "address" }, { `internalType`: ``"address"`` = "address"; `name`: ``""`` = ""; `type`: ``"address"`` = "address" }] ; `name`: ``"isApprovedForAll"`` = "isApprovedForAll"; `outputs`: readonly [{ `internalType`: ``"bool"`` = "bool"; `name`: ``""`` = ""; `type`: ``"bool"`` = "bool" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"_owner"`` = "\_owner"; `type`: ``"address"`` = "address" }, { `internalType`: ``"string"`` = "string"; `name`: ``"_uri"`` = "\_uri"; `type`: ``"string"`` = "string" }, { `internalType`: ``"string"`` = "string"; `name`: ``"_district"`` = "\_district"; `type`: ``"string"`` = "string" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"_registry"`` = "\_registry"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"mint"`` = "mint"; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [] = []; `name`: ``"name"`` = "name"; `outputs`: readonly [{ `internalType`: ``"string"`` = "string"; `name`: ``""`` = ""; `type`: ``"string"`` = "string" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [] = []; `name`: ``"nextTokenId"`` = "nextTokenId"; `outputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``""`` = ""; `type`: ``"uint256"`` = "uint256" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"id"`` = "id"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"ownerOf"`` = "ownerOf"; `outputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"owner"`` = "owner"; `type`: ``"address"`` = "address" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"_tokenId"`` = "\_tokenId"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"queryFromTokenId"`` = "queryFromTokenId"; `outputs`: readonly [{ `components`: readonly [{ `internalType`: ``"string"`` = "string"; `name`: ``"district"`` = "district"; `type`: ``"string"`` = "string" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"registry"`` = "registry"; `type`: ``"uint256"`` = "uint256" }] ; `internalType`: ``"struct IBlockImob.Query"`` = "struct IBlockImob.Query"; `name`: ``""`` = ""; `type`: ``"tuple"`` = "tuple" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"string"`` = "string"; `name`: ``""`` = ""; `type`: ``"string"`` = "string" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``""`` = ""; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"queryToTokenId"`` = "queryToTokenId"; `outputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``""`` = ""; `type`: ``"uint256"`` = "uint256" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"_party"`` = "\_party"; `type`: ``"address"`` = "address" }] ; `name`: ``"returnAllowed"`` = "returnAllowed"; `outputs`: readonly [{ `internalType`: ``"bool"`` = "bool"; `name`: ``""`` = ""; `type`: ``"bool"`` = "bool" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"_tokenId"`` = "\_tokenId"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"returnFiiAddress"`` = "returnFiiAddress"; `outputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``""`` = ""; `type`: ``"address"`` = "address" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"from"`` = "from"; `type`: ``"address"`` = "address" }, { `internalType`: ``"address"`` = "address"; `name`: ``"to"`` = "to"; `type`: ``"address"`` = "address" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"id"`` = "id"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"safeTransferFrom"`` = "safeTransferFrom"; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"from"`` = "from"; `type`: ``"address"`` = "address" }, { `internalType`: ``"address"`` = "address"; `name`: ``"to"`` = "to"; `type`: ``"address"`` = "address" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"id"`` = "id"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"bytes"`` = "bytes"; `name`: ``"data"`` = "data"; `type`: ``"bytes"`` = "bytes" }] ; `name`: ``"safeTransferFrom"`` = "safeTransferFrom"; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"operator"`` = "operator"; `type`: ``"address"`` = "address" }, { `internalType`: ``"bool"`` = "bool"; `name`: ``"approved"`` = "approved"; `type`: ``"bool"`` = "bool" }] ; `name`: ``"setApprovalForAll"`` = "setApprovalForAll"; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"string"`` = "string"; `name`: ``"_newBaseURI"`` = "\_newBaseURI"; `type`: ``"string"`` = "string" }] ; `name`: ``"setBaseURI"`` = "setBaseURI"; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"_operator"`` = "\_operator"; `type`: ``"address"`` = "address" }, { `internalType`: ``"bool"`` = "bool"; `name`: ``"_approved"`` = "\_approved"; `type`: ``"bool"`` = "bool" }] ; `name`: ``"setOperator"`` = "setOperator"; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"_tokenId"`` = "\_tokenId"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"string"`` = "string"; `name`: ``"_uri"`` = "\_uri"; `type`: ``"string"`` = "string" }, { `internalType`: ``"string"`` = "string"; `name`: ``"_newValue"`` = "\_newValue"; `type`: ``"string"`` = "string" }] ; `name`: ``"setTokenURI"`` = "setTokenURI"; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"tokenId"`` = "tokenId"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"address"`` = "address"; `name`: ``"user"`` = "user"; `type`: ``"address"`` = "address" }, { `internalType`: ``"uint64"`` = "uint64"; `name`: ``"expires"`` = "expires"; `type`: ``"uint64"`` = "uint64" }] ; `name`: ``"setUser"`` = "setUser"; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"bytes4"`` = "bytes4"; `name`: ``"interfaceId"`` = "interfaceId"; `type`: ``"bytes4"`` = "bytes4" }] ; `name`: ``"supportsInterface"`` = "supportsInterface"; `outputs`: readonly [{ `internalType`: ``"bool"`` = "bool"; `name`: ``""`` = ""; `type`: ``"bool"`` = "bool" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [] = []; `name`: ``"symbol"`` = "symbol"; `outputs`: readonly [{ `internalType`: ``"string"`` = "string"; `name`: ``""`` = ""; `type`: ``"string"`` = "string" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``""`` = ""; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"tokenIdToDeal"`` = "tokenIdToDeal"; `outputs`: readonly [{ `internalType`: ``"enum IBlockImob.DealType"`` = "enum IBlockImob.DealType"; `name`: ``"dealType"`` = "dealType"; `type`: ``"uint8"`` = "uint8" }, { `internalType`: ``"address"`` = "address"; `name`: ``"dealAddress"`` = "dealAddress"; `type`: ``"address"`` = "address" }, { `internalType`: ``"address"`` = "address"; `name`: ``"fiiAddress"`` = "fiiAddress"; `type`: ``"address"`` = "address" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``""`` = ""; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"tokenIdToQuery"`` = "tokenIdToQuery"; `outputs`: readonly [{ `internalType`: ``"string"`` = "string"; `name`: ``"district"`` = "district"; `type`: ``"string"`` = "string" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"registry"`` = "registry"; `type`: ``"uint256"`` = "uint256" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``""`` = ""; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"tokenIdToURI"`` = "tokenIdToURI"; `outputs`: readonly [{ `internalType`: ``"string"`` = "string"; `name`: ``""`` = ""; `type`: ``"string"`` = "string" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"_tokenId"`` = "\_tokenId"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"tokenURI"`` = "tokenURI"; `outputs`: readonly [{ `internalType`: ``"string"`` = "string"; `name`: ``""`` = ""; `type`: ``"string"`` = "string" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"from"`` = "from"; `type`: ``"address"`` = "address" }, { `internalType`: ``"address"`` = "address"; `name`: ``"to"`` = "to"; `type`: ``"address"`` = "address" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"id"`` = "id"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"transferFrom"`` = "transferFrom"; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"_tokenId"`` = "\_tokenId"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"enum IBlockImob.DealType"`` = "enum IBlockImob.DealType"; `name`: ``"_dealType"`` = "\_dealType"; `type`: ``"uint8"`` = "uint8" }, { `internalType`: ``"address"`` = "address"; `name`: ``"_dealAddress"`` = "\_dealAddress"; `type`: ``"address"`` = "address" }, { `internalType`: ``"address"`` = "address"; `name`: ``"_fiiAddress"`` = "\_fiiAddress"; `type`: ``"address"`` = "address" }] ; `name`: ``"updateTokenDeal"`` = "updateTokenDeal"; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"string"`` = "string"; `name`: ``"_district"`` = "\_district"; `type`: ``"string"`` = "string" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"_registry"`` = "\_registry"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"uriFromQuery"`` = "uriFromQuery"; `outputs`: readonly [{ `internalType`: ``"string"`` = "string"; `name`: ``""`` = ""; `type`: ``"string"`` = "string" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"tokenId"`` = "tokenId"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"userExpires"`` = "userExpires"; `outputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``""`` = ""; `type`: ``"uint256"`` = "uint256" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"tokenId"`` = "tokenId"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"userOf"`` = "userOf"; `outputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``""`` = ""; `type`: ``"address"`` = "address" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }]

#### Defined in

[src/utils/formatAbi/block-imob-abi.ts:1](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/utils/formatAbi/block-imob-abi.ts#L1)

___

### abi

• `Const` **abi**: readonly [{ `inputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"constructor"`` = "constructor" }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"uint256"`` = "uint256"; `name`: ``"_idImob"`` = "\_idImob"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"ConsultImobReg"`` = "ConsultImobReg"; `type`: ``"event"`` = "event" }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``true`` = true; `internalType`: ``"uint256"`` = "uint256"; `name`: ``"_registryRural"`` = "\_registryRural"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"ConsultMapRural"`` = "ConsultMapRural"; `type`: ``"event"`` = "event" }, { `anonymous`: ``false`` = false; `inputs`: readonly [{ `indexed`: ``false`` = false; `internalType`: ``"string"`` = "string"; `name`: ``"_map"`` = "\_map"; `type`: ``"string"`` = "string" }, { `indexed`: ``true`` = true; `internalType`: ``"uint256"`` = "uint256"; `name`: ``"_registryRural"`` = "\_registryRural"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"confrontMapEvent"`` = "confrontMapEvent"; `type`: ``"event"`` = "event" }, { `inputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"_idImob"`` = "\_idImob"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"ConsultRegular"`` = "ConsultRegular"; `outputs`: readonly [{ `internalType`: ``"bool"`` = "bool"; `name`: ``"regular"`` = "regular"; `type`: ``"bool"`` = "bool" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"string"`` = "string"; `name`: ``"_map"`` = "\_map"; `type`: ``"string"`` = "string" }, { `internalType`: ``"uint256"`` = "uint256"; `name`: ``"_registryRural"`` = "\_registryRural"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"confrontMap"`` = "confrontMap"; `outputs`: readonly [{ `internalType`: ``"bool"`` = "bool"; `name`: ``""`` = ""; `type`: ``"bool"`` = "bool" }, { `internalType`: ``"string"`` = "string"; `name`: ``""`` = ""; `type`: ``"string"`` = "string" }] ; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"_registryRural"`` = "\_registryRural"; `type`: ``"uint256"`` = "uint256" }] ; `name`: ``"consultMap"`` = "consultMap"; `outputs`: readonly [{ `internalType`: ``"bool"`` = "bool"; `name`: ``"regular"`` = "regular"; `type`: ``"bool"`` = "bool" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [] = []; `name`: ``"numberImobRegular"`` = "numberImobRegular"; `outputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``""`` = ""; `type`: ``"uint256"`` = "uint256" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [] = []; `name`: ``"numberMapRegularRural"`` = "numberMapRegularRural"; `outputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``""`` = ""; `type`: ``"uint256"`` = "uint256" }] ; `stateMutability`: ``"view"`` = "view"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"address"`` = "address"; `name`: ``"_addr"`` = "\_addr"; `type`: ``"address"`` = "address" }, { `internalType`: ``"bool"`` = "bool"; `name`: ``"_allow"`` = "\_allow"; `type`: ``"bool"`` = "bool" }] ; `name`: ``"setAllow"`` = "setAllow"; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"string"`` = "string"; `name`: ``"_maprural"`` = "\_maprural"; `type`: ``"string"`` = "string" }] ; `name`: ``"setMapRural"`` = "setMapRural"; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }, { `inputs`: readonly [{ `internalType`: ``"uint256"`` = "uint256"; `name`: ``"_idImob"`` = "\_idImob"; `type`: ``"uint256"`` = "uint256" }, { `internalType`: ``"bool"`` = "bool"; `name`: ``"_regular"`` = "\_regular"; `type`: ``"bool"`` = "bool" }, { `internalType`: ``"address"`` = "address"; `name`: ``"_imobcontract"`` = "\_imobcontract"; `type`: ``"address"`` = "address" }] ; `name`: ``"setRegular"`` = "setRegular"; `outputs`: readonly [] = []; `stateMutability`: ``"nonpayable"`` = "nonpayable"; `type`: ``"function"`` = "function" }]

#### Defined in

[src/utils/formatAbi/oracle-gov-abi.ts:1](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/utils/formatAbi/oracle-gov-abi.ts#L1)

___

### chains

• **chains**: [`Chain`](../wiki/%3Cinternal%3E#chain)[]

___

### defaultTheme

• `Const` **defaultTheme**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `background` | `string` |
| `white` | `string` |

#### Defined in

[src/presentation/styles/themes/default.ts:1](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/presentation/styles/themes/default.ts#L1)

___

### wagmiClient

• `Const` **wagmiClient**: [`Client`](../wiki/%3Cinternal%3E.Client)<[`FallbackProvider`](../wiki/%3Cinternal%3E.FallbackProvider) & { `chains`: [`Chain`](../wiki/%3Cinternal%3E#chain)[] ; `pollingInterval`: `number`  } & [`JsonRpcProvider`](../wiki/%3Cinternal%3E.JsonRpcProvider) & [`FallbackProviderConfig`](../wiki/%3Cinternal%3E#fallbackproviderconfig) & { `chains`: [`Chain`](../wiki/%3Cinternal%3E#chain)[] ; `pollingInterval`: `number`  }, [`WebSocketProvider`](../wiki/%3Cinternal%3E.WebSocketProvider) & { `chains`: [`Chain`](../wiki/%3Cinternal%3E#chain)[]  }\> & { `queryClient`: [`QueryClient`](../wiki/%3Cinternal%3E.QueryClient)  }

#### Defined in

[src/infra/web3Injector/index.ts:16](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/infra/web3Injector/index.ts#L16)

## Functions

### App

▸ **App**(): `JSX.Element`

#### Returns

`JSX.Element`

#### Defined in

[src/main/App.tsx:12](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/main/App.tsx#L12)

___

### ConsultIcon

▸ **ConsultIcon**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SVGProps`](../wiki/%3Cinternal%3E.SVGProps)<`SVGSVGElement`\> |

#### Returns

`Element`

#### Defined in

[src/presentation/components/Header/icons/ConsultIcon.tsx:3](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/presentation/components/Header/icons/ConsultIcon.tsx#L3)

___

### FillsIcon

▸ **FillsIcon**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SVGProps`](../wiki/%3Cinternal%3E.SVGProps)<`SVGSVGElement`\> |

#### Returns

`Element`

#### Defined in

[src/presentation/components/Header/icons/FillsIcon.tsx:3](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/presentation/components/Header/icons/FillsIcon.tsx#L3)

___

### HomeIcon

▸ **HomeIcon**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SVGProps`](../wiki/%3Cinternal%3E.SVGProps)<`SVGSVGElement`\> |

#### Returns

`Element`

#### Defined in

[src/presentation/components/Header/icons/HomeIcon.tsx:3](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/presentation/components/Header/icons/HomeIcon.tsx#L3)

___

### Layout

▸ **Layout**(): `Element`

#### Returns

`Element`

#### Defined in

[src/main/factories/pages/layout/index.tsx:4](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/main/factories/pages/layout/index.tsx#L4)

___

### LogoIcon

▸ **LogoIcon**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SVGProps`](../wiki/%3Cinternal%3E.SVGProps)<`SVGSVGElement`\> |

#### Returns

`Element`

#### Defined in

[src/presentation/components/Header/icons/LogoIcon.tsx:3](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/presentation/components/Header/icons/LogoIcon.tsx#L3)

___

### RainbowKitProvider

▸ **RainbowKitProvider**(`«destructured»`): `JSX.Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | [`RainbowKitProviderProps`](../wiki/%3Cinternal%3E.RainbowKitProviderProps) |

#### Returns

`JSX.Element`

#### Defined in

node_modules/@rainbow-me/rainbowkit/dist/components/RainbowKitProvider/RainbowKitProvider.d.ts:30

___

### RegisterIcon

▸ **RegisterIcon**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SVGProps`](../wiki/%3Cinternal%3E.SVGProps)<`SVGSVGElement`\> |

#### Returns

`Element`

#### Defined in

[src/presentation/components/Header/icons/RegisterIcon.tsx:3](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/presentation/components/Header/icons/RegisterIcon.tsx#L3)

___

### Router

▸ **Router**(): `Element`

#### Returns

`Element`

#### Defined in

[src/main/routes/Router.tsx:10](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/main/routes/Router.tsx#L10)

___

### SellerIcon

▸ **SellerIcon**(`props`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`SVGProps`](../wiki/%3Cinternal%3E.SVGProps)<`SVGSVGElement`\> |

#### Returns

`Element`

#### Defined in

[src/presentation/components/Header/icons/SellersIcon.tsx:3](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/presentation/components/Header/icons/SellersIcon.tsx#L3)

___

### connectors

▸ **connectors**(): [`Connector`](../wiki/%3Cinternal%3E.Connector)<`any`, `any`, `any`\>[]

#### Returns

[`Connector`](../wiki/%3Cinternal%3E.Connector)<`any`, `any`, `any`\>[]

#### Defined in

node_modules/@rainbow-me/rainbowkit/dist/wallets/connectorsForWallets.d.ts:3

___

### provider

▸ **provider**(`«destructured»`): [`FallbackProvider`](../wiki/%3Cinternal%3E.FallbackProvider) & { `chains`: [`Chain`](../wiki/%3Cinternal%3E#chain)[] ; `pollingInterval`: `number`  } & [`JsonRpcProvider`](../wiki/%3Cinternal%3E.JsonRpcProvider) & [`FallbackProviderConfig`](../wiki/%3Cinternal%3E#fallbackproviderconfig) & { `chains`: [`Chain`](../wiki/%3Cinternal%3E#chain)[] ; `pollingInterval`: `number`  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `chainId?` | `number` |

#### Returns

[`FallbackProvider`](../wiki/%3Cinternal%3E.FallbackProvider) & { `chains`: [`Chain`](../wiki/%3Cinternal%3E#chain)[] ; `pollingInterval`: `number`  } & [`JsonRpcProvider`](../wiki/%3Cinternal%3E.JsonRpcProvider) & [`FallbackProviderConfig`](../wiki/%3Cinternal%3E#fallbackproviderconfig) & { `chains`: [`Chain`](../wiki/%3Cinternal%3E#chain)[] ; `pollingInterval`: `number`  }

#### Defined in

node_modules/@wagmi/core/dist/index.d.ts:1713

___

### success

▸ **success**(): `void`

#### Returns

`void`

#### Defined in

[src/main/factories/pages/Register/utils/effect.ts:4](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/main/factories/pages/Register/utils/effect.ts#L4)

___

### useIsMounted

▸ **useIsMounted**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/infra/hooks/useIsMonted.ts:3](https://github.com/renancorreadev/hackImob/blob/fc29a24/frontend/src/infra/hooks/useIsMonted.ts#L3)

___

### webSocketProvider

▸ **webSocketProvider**(`«destructured»`): `undefined` \| [`WebSocketProvider`](../wiki/%3Cinternal%3E.WebSocketProvider) & { `chains`: [`Chain`](../wiki/%3Cinternal%3E#chain)[]  }

#### Parameters

| Name | Type |
| :------ | :------ |
| `«destructured»` | `Object` |
| › `chainId?` | `number` |

#### Returns

`undefined` \| [`WebSocketProvider`](../wiki/%3Cinternal%3E.WebSocketProvider) & { `chains`: [`Chain`](../wiki/%3Cinternal%3E#chain)[]  }

#### Defined in

node_modules/@wagmi/core/dist/index.d.ts:1719
