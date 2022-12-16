# Class: Component<P, S, SS\>

[<internal>](../wiki/%3Cinternal%3E).Component

## Type parameters

| Name | Type |
| :------ | :------ |
| `P` | {} |
| `S` | {} |
| `SS` | `any` |

## Hierarchy

- [`ComponentLifecycle`](../wiki/%3Cinternal%3E.ComponentLifecycle)<`P`, `S`, `SS`\>

  ↳ **`Component`**

## Table of contents

### Constructors

- [constructor](../wiki/%3Cinternal%3E.Component#constructor-1)

### Properties

- [context](../wiki/%3Cinternal%3E.Component#context-1)
- [props](../wiki/%3Cinternal%3E.Component#props-1)
- [refs](../wiki/%3Cinternal%3E.Component#refs-1)
- [state](../wiki/%3Cinternal%3E.Component#state-1)
- [contextType](../wiki/%3Cinternal%3E.Component#contexttype-1)

### Methods

- [UNSAFE\_componentWillMount](../wiki/%3Cinternal%3E.Component#unsafe_componentwillmount-1)
- [UNSAFE\_componentWillReceiveProps](../wiki/%3Cinternal%3E.Component#unsafe_componentwillreceiveprops-1)
- [UNSAFE\_componentWillUpdate](../wiki/%3Cinternal%3E.Component#unsafe_componentwillupdate-1)
- [componentDidCatch](../wiki/%3Cinternal%3E.Component#componentdidcatch-1)
- [componentDidMount](../wiki/%3Cinternal%3E.Component#componentdidmount-1)
- [componentDidUpdate](../wiki/%3Cinternal%3E.Component#componentdidupdate-1)
- [componentWillMount](../wiki/%3Cinternal%3E.Component#componentwillmount-1)
- [componentWillReceiveProps](../wiki/%3Cinternal%3E.Component#componentwillreceiveprops-1)
- [componentWillUnmount](../wiki/%3Cinternal%3E.Component#componentwillunmount-1)
- [componentWillUpdate](../wiki/%3Cinternal%3E.Component#componentwillupdate-1)
- [forceUpdate](../wiki/%3Cinternal%3E.Component#forceupdate-1)
- [getSnapshotBeforeUpdate](../wiki/%3Cinternal%3E.Component#getsnapshotbeforeupdate-1)
- [render](../wiki/%3Cinternal%3E.Component#render-1)
- [setState](../wiki/%3Cinternal%3E.Component#setstate-1)
- [shouldComponentUpdate](../wiki/%3Cinternal%3E.Component#shouldcomponentupdate-1)

## Constructors

### constructor

• **new Component**<`P`, `S`, `SS`\>(`props`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | {} |
| `S` | {} |
| `SS` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `P` \| [`Readonly`](../wiki/%3Cinternal%3E#readonly)<`P`\> |

#### Inherited from

ComponentLifecycle<P, S, SS\>.constructor

#### Defined in

node_modules/@types/styled-components/node_modules/@types/react/index.d.ts:473

• **new Component**<`P`, `S`, `SS`\>(`props`, `context`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `P` | {} |
| `S` | {} |
| `SS` | `any` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `P` |
| `context` | `any` |

#### Inherited from

ComponentLifecycle<P, S, SS\>.constructor

#### Defined in

node_modules/@types/styled-components/node_modules/@types/react/index.d.ts:478

## Properties

### context

• **context**: `unknown`

#### Defined in

node_modules/@types/styled-components/node_modules/@types/react/index.d.ts:471

___

### props

• `Readonly` **props**: [`Readonly`](../wiki/%3Cinternal%3E#readonly)<`P`\>

#### Defined in

node_modules/@types/styled-components/node_modules/@types/react/index.d.ts:491

___

### refs

• **refs**: `Object`

#### Index signature

▪ [key: `string`]: [`ReactInstance`](../wiki/%3Cinternal%3E#reactinstance-1)

#### Defined in

node_modules/@types/styled-components/node_modules/@types/react/index.d.ts:497

___

### state

• **state**: [`Readonly`](../wiki/%3Cinternal%3E#readonly)<`S`\>

#### Defined in

node_modules/@types/styled-components/node_modules/@types/react/index.d.ts:492

___

### contextType

▪ `Static` `Optional` **contextType**: [`Context`](../wiki/%3Cinternal%3E.Context)<`any`\>

#### Defined in

node_modules/@types/styled-components/node_modules/@types/react/index.d.ts:454

## Methods

### UNSAFE\_componentWillMount

▸ `Optional` **UNSAFE_componentWillMount**(): `void`

#### Returns

`void`

#### Inherited from

[ComponentLifecycle](../wiki/%3Cinternal%3E.ComponentLifecycle).[UNSAFE_componentWillMount](../wiki/%3Cinternal%3E.ComponentLifecycle#unsafe_componentwillmount-1)

#### Defined in

node_modules/@types/styled-components/node_modules/@types/react/index.d.ts:688

___

### UNSAFE\_componentWillReceiveProps

▸ `Optional` **UNSAFE_componentWillReceiveProps**(`nextProps`, `nextContext`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | [`Readonly`](../wiki/%3Cinternal%3E#readonly)<`P`\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

[ComponentLifecycle](../wiki/%3Cinternal%3E.ComponentLifecycle).[UNSAFE_componentWillReceiveProps](../wiki/%3Cinternal%3E.ComponentLifecycle#unsafe_componentwillreceiveprops-1)

#### Defined in

node_modules/@types/styled-components/node_modules/@types/react/index.d.ts:720

___

### UNSAFE\_componentWillUpdate

▸ `Optional` **UNSAFE_componentWillUpdate**(`nextProps`, `nextState`, `nextContext`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | [`Readonly`](../wiki/%3Cinternal%3E#readonly)<`P`\> |
| `nextState` | [`Readonly`](../wiki/%3Cinternal%3E#readonly)<`S`\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

[ComponentLifecycle](../wiki/%3Cinternal%3E.ComponentLifecycle).[UNSAFE_componentWillUpdate](../wiki/%3Cinternal%3E.ComponentLifecycle#unsafe_componentwillupdate-1)

#### Defined in

node_modules/@types/styled-components/node_modules/@types/react/index.d.ts:748

___

### componentDidCatch

▸ `Optional` **componentDidCatch**(`error`, `errorInfo`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | [`Error`](../wiki/%3Cinternal%3E#error) |
| `errorInfo` | [`ErrorInfo`](../wiki/%3Cinternal%3E.ErrorInfo) |

#### Returns

`void`

#### Inherited from

[ComponentLifecycle](../wiki/%3Cinternal%3E.ComponentLifecycle).[componentDidCatch](../wiki/%3Cinternal%3E.ComponentLifecycle#componentdidcatch-1)

#### Defined in

node_modules/@types/styled-components/node_modules/@types/react/index.d.ts:617

___

### componentDidMount

▸ `Optional` **componentDidMount**(): `void`

#### Returns

`void`

#### Inherited from

[ComponentLifecycle](../wiki/%3Cinternal%3E.ComponentLifecycle).[componentDidMount](../wiki/%3Cinternal%3E.ComponentLifecycle#componentdidmount-1)

#### Defined in

node_modules/@types/styled-components/node_modules/@types/react/index.d.ts:596

___

### componentDidUpdate

▸ `Optional` **componentDidUpdate**(`prevProps`, `prevState`, `snapshot?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prevProps` | [`Readonly`](../wiki/%3Cinternal%3E#readonly)<`P`\> |
| `prevState` | [`Readonly`](../wiki/%3Cinternal%3E#readonly)<`S`\> |
| `snapshot?` | `SS` |

#### Returns

`void`

#### Inherited from

[ComponentLifecycle](../wiki/%3Cinternal%3E.ComponentLifecycle).[componentDidUpdate](../wiki/%3Cinternal%3E.ComponentLifecycle#componentdidupdate-1)

#### Defined in

node_modules/@types/styled-components/node_modules/@types/react/index.d.ts:659

___

### componentWillMount

▸ `Optional` **componentWillMount**(): `void`

#### Returns

`void`

#### Inherited from

[ComponentLifecycle](../wiki/%3Cinternal%3E.ComponentLifecycle).[componentWillMount](../wiki/%3Cinternal%3E.ComponentLifecycle#componentwillmount-1)

#### Defined in

node_modules/@types/styled-components/node_modules/@types/react/index.d.ts:674

___

### componentWillReceiveProps

▸ `Optional` **componentWillReceiveProps**(`nextProps`, `nextContext`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | [`Readonly`](../wiki/%3Cinternal%3E#readonly)<`P`\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

[ComponentLifecycle](../wiki/%3Cinternal%3E.ComponentLifecycle).[componentWillReceiveProps](../wiki/%3Cinternal%3E.ComponentLifecycle#componentwillreceiveprops-1)

#### Defined in

node_modules/@types/styled-components/node_modules/@types/react/index.d.ts:703

___

### componentWillUnmount

▸ `Optional` **componentWillUnmount**(): `void`

#### Returns

`void`

#### Inherited from

[ComponentLifecycle](../wiki/%3Cinternal%3E.ComponentLifecycle).[componentWillUnmount](../wiki/%3Cinternal%3E.ComponentLifecycle#componentwillunmount-1)

#### Defined in

node_modules/@types/styled-components/node_modules/@types/react/index.d.ts:612

___

### componentWillUpdate

▸ `Optional` **componentWillUpdate**(`nextProps`, `nextState`, `nextContext`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | [`Readonly`](../wiki/%3Cinternal%3E#readonly)<`P`\> |
| `nextState` | [`Readonly`](../wiki/%3Cinternal%3E#readonly)<`S`\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

[ComponentLifecycle](../wiki/%3Cinternal%3E.ComponentLifecycle).[componentWillUpdate](../wiki/%3Cinternal%3E.ComponentLifecycle#componentwillupdate-1)

#### Defined in

node_modules/@types/styled-components/node_modules/@types/react/index.d.ts:733

___

### forceUpdate

▸ **forceUpdate**(`callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | () => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/styled-components/node_modules/@types/react/index.d.ts:488

___

### getSnapshotBeforeUpdate

▸ `Optional` **getSnapshotBeforeUpdate**(`prevProps`, `prevState`): ``null`` \| `SS`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prevProps` | [`Readonly`](../wiki/%3Cinternal%3E#readonly)<`P`\> |
| `prevState` | [`Readonly`](../wiki/%3Cinternal%3E#readonly)<`S`\> |

#### Returns

``null`` \| `SS`

#### Inherited from

[ComponentLifecycle](../wiki/%3Cinternal%3E.ComponentLifecycle).[getSnapshotBeforeUpdate](../wiki/%3Cinternal%3E.ComponentLifecycle#getsnapshotbeforeupdate-1)

#### Defined in

node_modules/@types/styled-components/node_modules/@types/react/index.d.ts:653

___

### render

▸ **render**(): [`ReactNode`](../wiki/%3Cinternal%3E#reactnode-1)

#### Returns

[`ReactNode`](../wiki/%3Cinternal%3E#reactnode-1)

#### Defined in

node_modules/@types/styled-components/node_modules/@types/react/index.d.ts:489

___

### setState

▸ **setState**<`K`\>(`state`, `callback?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` \| `number` \| `symbol` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | ``null`` \| `S` \| (`prevState`: [`Readonly`](../wiki/%3Cinternal%3E#readonly)<`S`\>, `props`: [`Readonly`](../wiki/%3Cinternal%3E#readonly)<`P`\>) => ``null`` \| `S` \| [`Pick`](../wiki/%3Cinternal%3E#pick)<`S`, `K`\> \| [`Pick`](../wiki/%3Cinternal%3E#pick)<`S`, `K`\> |
| `callback?` | () => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/styled-components/node_modules/@types/react/index.d.ts:483

___

### shouldComponentUpdate

▸ `Optional` **shouldComponentUpdate**(`nextProps`, `nextState`, `nextContext`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | [`Readonly`](../wiki/%3Cinternal%3E#readonly)<`P`\> |
| `nextState` | [`Readonly`](../wiki/%3Cinternal%3E#readonly)<`S`\> |
| `nextContext` | `any` |

#### Returns

`boolean`

#### Inherited from

[ComponentLifecycle](../wiki/%3Cinternal%3E.ComponentLifecycle).[shouldComponentUpdate](../wiki/%3Cinternal%3E.ComponentLifecycle#shouldcomponentupdate-1)

#### Defined in

node_modules/@types/styled-components/node_modules/@types/react/index.d.ts:607
