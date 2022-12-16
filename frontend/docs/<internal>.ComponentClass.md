# Interface: ComponentClass<P, S\>

[<internal>](../wiki/%3Cinternal%3E).ComponentClass

## Type parameters

| Name | Type |
| :------ | :------ |
| `P` | {} |
| `S` | [`ComponentState`](../wiki/%3Cinternal%3E#componentstate-1) |

## Hierarchy

- [`StaticLifecycle`](../wiki/%3Cinternal%3E.StaticLifecycle)<`P`, `S`\>

  ↳ **`ComponentClass`**

## Table of contents

### Constructors

- [constructor](../wiki/%3Cinternal%3E.ComponentClass#constructor-1)

### Properties

- [childContextTypes](../wiki/%3Cinternal%3E.ComponentClass#childcontexttypes-1)
- [contextType](../wiki/%3Cinternal%3E.ComponentClass#contexttype-1)
- [contextTypes](../wiki/%3Cinternal%3E.ComponentClass#contexttypes-1)
- [defaultProps](../wiki/%3Cinternal%3E.ComponentClass#defaultprops-1)
- [displayName](../wiki/%3Cinternal%3E.ComponentClass#displayname-1)
- [getDerivedStateFromError](../wiki/%3Cinternal%3E.ComponentClass#getderivedstatefromerror-1)
- [getDerivedStateFromProps](../wiki/%3Cinternal%3E.ComponentClass#getderivedstatefromprops-1)
- [propTypes](../wiki/%3Cinternal%3E.ComponentClass#proptypes-1)

## Constructors

### constructor

• **new ComponentClass**(`props`, `context?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `P` |
| `context?` | `any` |

#### Inherited from

StaticLifecycle<P, S\>.constructor

#### Defined in

node_modules/@types/react/index.d.ts:561

## Properties

### childContextTypes

• `Optional` **childContextTypes**: [`ValidationMap`](../wiki/%3Cinternal%3E#validationmap)<`any`\>

#### Defined in

node_modules/@types/react/index.d.ts:565

___

### contextType

• `Optional` **contextType**: [`Context`](../wiki/%3Cinternal%3E.Context)<`any`\>

#### Defined in

node_modules/@types/react/index.d.ts:563

___

### contextTypes

• `Optional` **contextTypes**: [`ValidationMap`](../wiki/%3Cinternal%3E#validationmap)<`any`\>

#### Defined in

node_modules/@types/react/index.d.ts:564

___

### defaultProps

• `Optional` **defaultProps**: [`Partial`](../wiki/%3Cinternal%3E#partial)<`P`\>

#### Defined in

node_modules/@types/react/index.d.ts:566

___

### displayName

• `Optional` **displayName**: `string`

#### Defined in

node_modules/@types/react/index.d.ts:567

___

### getDerivedStateFromError

• `Optional` **getDerivedStateFromError**: [`GetDerivedStateFromError`](../wiki/%3Cinternal%3E#getderivedstatefromerror-1)<`P`, `S`\>

#### Inherited from

[StaticLifecycle](../wiki/%3Cinternal%3E.StaticLifecycle).[getDerivedStateFromError](../wiki/%3Cinternal%3E.StaticLifecycle#getderivedstatefromerror-1)

#### Defined in

node_modules/@types/react/index.d.ts:622

___

### getDerivedStateFromProps

• `Optional` **getDerivedStateFromProps**: [`GetDerivedStateFromProps`](../wiki/%3Cinternal%3E#getderivedstatefromprops-1)<`P`, `S`\>

#### Inherited from

[StaticLifecycle](../wiki/%3Cinternal%3E.StaticLifecycle).[getDerivedStateFromProps](../wiki/%3Cinternal%3E.StaticLifecycle#getderivedstatefromprops-1)

#### Defined in

node_modules/@types/react/index.d.ts:621

___

### propTypes

• `Optional` **propTypes**: [`WeakValidationMap`](../wiki/%3Cinternal%3E#weakvalidationmap)<`P`\>

#### Defined in

node_modules/@types/react/index.d.ts:562
