# Interface: ComponentLifecycle<P, S, SS\>

[<internal>](../wiki/%3Cinternal%3E).ComponentLifecycle

## Type parameters

| Name | Type |
| :------ | :------ |
| `P` | `P` |
| `S` | `S` |
| `SS` | `any` |

## Hierarchy

- [`NewLifecycle`](../wiki/%3Cinternal%3E.NewLifecycle)<`P`, `S`, `SS`\>

- [`DeprecatedLifecycle`](../wiki/%3Cinternal%3E.DeprecatedLifecycle)<`P`, `S`\>

  ↳ **`ComponentLifecycle`**

  ↳↳ [`Component`](../wiki/%3Cinternal%3E.Component)

## Table of contents

### Methods

- [UNSAFE\_componentWillMount](../wiki/%3Cinternal%3E.ComponentLifecycle#unsafe_componentwillmount-1)
- [UNSAFE\_componentWillReceiveProps](../wiki/%3Cinternal%3E.ComponentLifecycle#unsafe_componentwillreceiveprops-1)
- [UNSAFE\_componentWillUpdate](../wiki/%3Cinternal%3E.ComponentLifecycle#unsafe_componentwillupdate-1)
- [componentDidCatch](../wiki/%3Cinternal%3E.ComponentLifecycle#componentdidcatch-1)
- [componentDidMount](../wiki/%3Cinternal%3E.ComponentLifecycle#componentdidmount-1)
- [componentDidUpdate](../wiki/%3Cinternal%3E.ComponentLifecycle#componentdidupdate-1)
- [componentWillMount](../wiki/%3Cinternal%3E.ComponentLifecycle#componentwillmount-1)
- [componentWillReceiveProps](../wiki/%3Cinternal%3E.ComponentLifecycle#componentwillreceiveprops-1)
- [componentWillUnmount](../wiki/%3Cinternal%3E.ComponentLifecycle#componentwillunmount-1)
- [componentWillUpdate](../wiki/%3Cinternal%3E.ComponentLifecycle#componentwillupdate-1)
- [getSnapshotBeforeUpdate](../wiki/%3Cinternal%3E.ComponentLifecycle#getsnapshotbeforeupdate-1)
- [shouldComponentUpdate](../wiki/%3Cinternal%3E.ComponentLifecycle#shouldcomponentupdate-1)

## Methods

### UNSAFE\_componentWillMount

▸ `Optional` **UNSAFE_componentWillMount**(): `void`

#### Returns

`void`

#### Inherited from

[DeprecatedLifecycle](../wiki/%3Cinternal%3E.DeprecatedLifecycle).[UNSAFE_componentWillMount](../wiki/%3Cinternal%3E.DeprecatedLifecycle#unsafe_componentwillmount-1)

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

[DeprecatedLifecycle](../wiki/%3Cinternal%3E.DeprecatedLifecycle).[UNSAFE_componentWillReceiveProps](../wiki/%3Cinternal%3E.DeprecatedLifecycle#unsafe_componentwillreceiveprops-1)

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

[DeprecatedLifecycle](../wiki/%3Cinternal%3E.DeprecatedLifecycle).[UNSAFE_componentWillUpdate](../wiki/%3Cinternal%3E.DeprecatedLifecycle#unsafe_componentwillupdate-1)

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

#### Defined in

node_modules/@types/styled-components/node_modules/@types/react/index.d.ts:617

___

### componentDidMount

▸ `Optional` **componentDidMount**(): `void`

#### Returns

`void`

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

[NewLifecycle](../wiki/%3Cinternal%3E.NewLifecycle).[componentDidUpdate](../wiki/%3Cinternal%3E.NewLifecycle#componentdidupdate-1)

#### Defined in

node_modules/@types/styled-components/node_modules/@types/react/index.d.ts:659

___

### componentWillMount

▸ `Optional` **componentWillMount**(): `void`

#### Returns

`void`

#### Inherited from

[DeprecatedLifecycle](../wiki/%3Cinternal%3E.DeprecatedLifecycle).[componentWillMount](../wiki/%3Cinternal%3E.DeprecatedLifecycle#componentwillmount-1)

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

[DeprecatedLifecycle](../wiki/%3Cinternal%3E.DeprecatedLifecycle).[componentWillReceiveProps](../wiki/%3Cinternal%3E.DeprecatedLifecycle#componentwillreceiveprops-1)

#### Defined in

node_modules/@types/styled-components/node_modules/@types/react/index.d.ts:703

___

### componentWillUnmount

▸ `Optional` **componentWillUnmount**(): `void`

#### Returns

`void`

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

[DeprecatedLifecycle](../wiki/%3Cinternal%3E.DeprecatedLifecycle).[componentWillUpdate](../wiki/%3Cinternal%3E.DeprecatedLifecycle#componentwillupdate-1)

#### Defined in

node_modules/@types/styled-components/node_modules/@types/react/index.d.ts:733

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

[NewLifecycle](../wiki/%3Cinternal%3E.NewLifecycle).[getSnapshotBeforeUpdate](../wiki/%3Cinternal%3E.NewLifecycle#getsnapshotbeforeupdate-1)

#### Defined in

node_modules/@types/styled-components/node_modules/@types/react/index.d.ts:653

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

#### Defined in

node_modules/@types/styled-components/node_modules/@types/react/index.d.ts:607
