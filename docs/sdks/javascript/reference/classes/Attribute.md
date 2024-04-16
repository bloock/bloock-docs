[@bloock/sdk](../index.md) / Attribute

# Class: Attribute\<T\>

Represents an attribute with an identifier and a corresponding value.

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`Attribute`**

  ↳ [`BooleanAttribute`](BooleanAttribute.md)

  ↳ [`DateAttribute`](DateAttribute.md)

  ↳ [`DateTimeAttribute`](DateTimeAttribute.md)

  ↳ [`StringAttribute`](StringAttribute.md)

  ↳ [`IntegerAttribute`](IntegerAttribute.md)

  ↳ [`DecimalAttribute`](DecimalAttribute.md)

## Table of contents

### Constructors

- [constructor](Attribute.md#constructor)

### Properties

- [id](Attribute.md#id)
- [value](Attribute.md#value)

## Constructors

### constructor

• **new Attribute**\<`T`\>(`id`, `value`): [`Attribute`](Attribute.md)\<`T`\>

Constructs a Attribute object with the specified parameters.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `value` | `T` |

#### Returns

[`Attribute`](Attribute.md)\<`T`\>

#### Defined in

[entity/identity/attribute.ts:13](https://github.com/bloock/bloock-sdk/blob/4afdb4b/languages/js/src/entity/identity/attribute.ts#L13)

## Properties

### id

• **id**: `string`

#### Defined in

[entity/identity/attribute.ts:5](https://github.com/bloock/bloock-sdk/blob/4afdb4b/languages/js/src/entity/identity/attribute.ts#L5)

___

### value

• **value**: `T`

#### Defined in

[entity/identity/attribute.ts:6](https://github.com/bloock/bloock-sdk/blob/4afdb4b/languages/js/src/entity/identity/attribute.ts#L6)
