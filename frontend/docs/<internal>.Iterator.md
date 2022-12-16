# Interface: Iterator<T, TReturn, TNext\>

[<internal>](../wiki/%3Cinternal%3E).Iterator

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TReturn` | `any` |
| `TNext` | `undefined` |

## Table of contents

### Methods

- [next](../wiki/%3Cinternal%3E.Iterator#next)
- [return](../wiki/%3Cinternal%3E.Iterator#return)
- [throw](../wiki/%3Cinternal%3E.Iterator#throw)

## Methods

### next

▸ **next**(`...args`): [`IteratorResult`](../wiki/%3Cinternal%3E#iteratorresult)<`T`, `TReturn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [] \| [`TNext`] |

#### Returns

[`IteratorResult`](../wiki/%3Cinternal%3E#iteratorresult)<`T`, `TReturn`\>

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:45

___

### return

▸ `Optional` **return**(`value?`): [`IteratorResult`](../wiki/%3Cinternal%3E#iteratorresult)<`T`, `TReturn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `TReturn` |

#### Returns

[`IteratorResult`](../wiki/%3Cinternal%3E#iteratorresult)<`T`, `TReturn`\>

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:46

___

### throw

▸ `Optional` **throw**(`e?`): [`IteratorResult`](../wiki/%3Cinternal%3E#iteratorresult)<`T`, `TReturn`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

[`IteratorResult`](../wiki/%3Cinternal%3E#iteratorresult)<`T`, `TReturn`\>

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:47
