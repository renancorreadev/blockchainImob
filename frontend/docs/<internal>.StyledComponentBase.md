# Interface: StyledComponentBase<C, T, O, A\>

[<internal>](../wiki/%3Cinternal%3E).StyledComponentBase

## Type parameters

| Name | Type |
| :------ | :------ |
| `C` | extends `string` \| [`ComponentType`](../wiki/%3Cinternal%3E#componenttype)<`any`\> |
| `T` | extends `object` |
| `O` | extends `object` = {} |
| `A` | extends keyof `any` = `never` |

## Hierarchy

- [`ForwardRefExoticBase`](../wiki/%3Cinternal%3E#forwardrefexoticbase)<[`StyledComponentProps`](../wiki/%3Cinternal%3E#styledcomponentprops)<`C`, `T`, `O`, `A`\>\>

  ↳ **`StyledComponentBase`**

## Callable

### StyledComponentBase

▸ **StyledComponentBase**(`props`): [`ReactElement`](../wiki/%3Cinternal%3E.ReactElement)<[`StyledComponentProps`](../wiki/%3Cinternal%3E#styledcomponentprops)<`C`, `T`, `O`, `A`, `C`\>, `string` \| [`JSXElementConstructor`](../wiki/%3Cinternal%3E#jsxelementconstructor-1)<`any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`StyledComponentProps`](../wiki/%3Cinternal%3E#styledcomponentprops)<`C`, `T`, `O`, `A`, `C`\> & { `as?`: `undefined` ; `forwardedAs?`: `undefined`  } |

#### Returns

[`ReactElement`](../wiki/%3Cinternal%3E.ReactElement)<[`StyledComponentProps`](../wiki/%3Cinternal%3E#styledcomponentprops)<`C`, `T`, `O`, `A`, `C`\>, `string` \| [`JSXElementConstructor`](../wiki/%3Cinternal%3E#jsxelementconstructor-1)<`any`\>\>

#### Defined in

node_modules/@types/styled-components/index.d.ts:156

### StyledComponentBase

▸ **StyledComponentBase**<`AsC`, `FAsC`\>(`props`): [`ReactElement`](../wiki/%3Cinternal%3E.ReactElement)<[`StyledComponentPropsWithAs`](../wiki/%3Cinternal%3E#styledcomponentpropswithas)<`AsC`, `T`, `O`, `A`, `AsC`, `FAsC`\>, `string` \| [`JSXElementConstructor`](../wiki/%3Cinternal%3E#jsxelementconstructor-1)<`any`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `AsC` | extends `string` \| [`ComponentType`](../wiki/%3Cinternal%3E#componenttype)<`any`\> = `C` |
| `FAsC` | extends `string` \| [`ComponentType`](../wiki/%3Cinternal%3E#componenttype)<`any`\> = `AsC` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | [`StyledComponentPropsWithAs`](../wiki/%3Cinternal%3E#styledcomponentpropswithas)<`AsC`, `T`, `O`, `A`, `AsC`, `FAsC`\> |

#### Returns

[`ReactElement`](../wiki/%3Cinternal%3E.ReactElement)<[`StyledComponentPropsWithAs`](../wiki/%3Cinternal%3E#styledcomponentpropswithas)<`AsC`, `T`, `O`, `A`, `AsC`, `FAsC`\>, `string` \| [`JSXElementConstructor`](../wiki/%3Cinternal%3E#jsxelementconstructor-1)<`any`\>\>

#### Defined in

node_modules/@types/styled-components/index.d.ts:159

## Table of contents

### Properties

- [$$typeof](../wiki/%3Cinternal%3E.StyledComponentBase#$$typeof)
- [defaultProps](../wiki/%3Cinternal%3E.StyledComponentBase#defaultprops)
- [displayName](../wiki/%3Cinternal%3E.StyledComponentBase#displayname)
- [propTypes](../wiki/%3Cinternal%3E.StyledComponentBase#proptypes)

### Methods

- [withComponent](../wiki/%3Cinternal%3E.StyledComponentBase#withcomponent)

## Properties

### $$typeof

• `Readonly` **$$typeof**: `symbol`

#### Inherited from

ForwardRefExoticBase.$$typeof

#### Defined in

node_modules/@types/styled-components/node_modules/@types/react/index.d.ts:352

___

### defaultProps

• `Optional` **defaultProps**: [`Partial`](../wiki/%3Cinternal%3E#partial)<[`StyledComponentProps`](../wiki/%3Cinternal%3E#styledcomponentprops)<`C`, `T`, `O`, `A`, `C`\>\>

#### Inherited from

ForwardRefExoticBase.defaultProps

#### Defined in

node_modules/@types/styled-components/node_modules/@types/react/index.d.ts:777

___

### displayName

• `Optional` **displayName**: `string`

#### Inherited from

ForwardRefExoticBase.displayName

#### Defined in

node_modules/@types/styled-components/node_modules/@types/react/index.d.ts:356

___

### propTypes

• `Optional` **propTypes**: [`WeakValidationMap`](../wiki/%3Cinternal%3E#weakvalidationmap-1)<[`StyledComponentProps`](../wiki/%3Cinternal%3E#styledcomponentprops)<`C`, `T`, `O`, `A`, `C`\>\>

#### Inherited from

ForwardRefExoticBase.propTypes

#### Defined in

node_modules/@types/styled-components/node_modules/@types/react/index.d.ts:778

## Methods

### withComponent

▸ **withComponent**<`WithC`\>(`component`): [`StyledComponent`](../wiki/%3Cinternal%3E#styledcomponent)<[`StyledComponentInnerComponent`](../wiki/%3Cinternal%3E#styledcomponentinnercomponent)<`WithC`\>, `T`, `O` & [`StyledComponentInnerOtherProps`](../wiki/%3Cinternal%3E#styledcomponentinnerotherprops)<`WithC`\>, `A` \| [`StyledComponentInnerAttrs`](../wiki/%3Cinternal%3E#styledcomponentinnerattrs)<`WithC`\>\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `WithC` | extends [`AnyStyledComponent`](../wiki/%3Cinternal%3E#anystyledcomponent) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | `WithC` |

#### Returns

[`StyledComponent`](../wiki/%3Cinternal%3E#styledcomponent)<[`StyledComponentInnerComponent`](../wiki/%3Cinternal%3E#styledcomponentinnercomponent)<`WithC`\>, `T`, `O` & [`StyledComponentInnerOtherProps`](../wiki/%3Cinternal%3E#styledcomponentinnerotherprops)<`WithC`\>, `A` \| [`StyledComponentInnerAttrs`](../wiki/%3Cinternal%3E#styledcomponentinnerattrs)<`WithC`\>\>

#### Defined in

node_modules/@types/styled-components/index.d.ts:163

▸ **withComponent**<`WithC`\>(`component`): [`StyledComponent`](../wiki/%3Cinternal%3E#styledcomponent)<`WithC`, `T`, `O`, `A`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `WithC` | extends keyof `IntrinsicElements` \| [`ComponentType`](../wiki/%3Cinternal%3E#componenttype)<`any`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `component` | `WithC` |

#### Returns

[`StyledComponent`](../wiki/%3Cinternal%3E#styledcomponent)<`WithC`, `T`, `O`, `A`\>

#### Defined in

node_modules/@types/styled-components/index.d.ts:171
