[@bloock/sdk](../index.md) / IntegerAttribute

# Class: IntegerAttribute

Represents an attribute with an integer value.

## Hierarchy

- [`Attribute`](Attribute.md)\<`number`\>

  ↳ **`IntegerAttribute`**

## Table of contents

### Constructors

- [constructor](IntegerAttribute.md#constructor)

### Properties

- [id](IntegerAttribute.md#id)
- [value](IntegerAttribute.md#value)

### Methods

- [toProto](IntegerAttribute.md#toproto)
- [fromProto](IntegerAttribute.md#fromproto)

## Constructors

### constructor

• **new IntegerAttribute**(`id`, `value`): [`IntegerAttribute`](IntegerAttribute.md)

Constructs a Attribute object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `value` | `number` |

#### Returns

[`IntegerAttribute`](IntegerAttribute.md)

#### Inherited from

[Attribute](Attribute.md).[constructor](Attribute.md#constructor)

#### Defined in

[entity/identity/attribute.ts:13](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/identity/attribute.ts#L13)

## Properties

### id

• **id**: `string`

#### Inherited from

[Attribute](Attribute.md).[id](Attribute.md#id)

#### Defined in

[entity/identity/attribute.ts:5](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/identity/attribute.ts#L5)

___

### value

• **value**: `number`

#### Inherited from

[Attribute](Attribute.md).[value](Attribute.md#value)

#### Defined in

[entity/identity/attribute.ts:6](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/identity/attribute.ts#L6)

## Methods

### toProto

▸ **toProto**(): `IntegerAttribute`

#### Returns

`IntegerAttribute`

#### Defined in

[entity/identity/integer_attribute.ts:8](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/identity/integer_attribute.ts#L8)

___

### fromProto

▸ **fromProto**(`r`): [`IntegerAttribute`](IntegerAttribute.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `IntegerAttribute` |

#### Returns

[`IntegerAttribute`](IntegerAttribute.md)

#### Defined in

[entity/identity/integer_attribute.ts:15](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/identity/integer_attribute.ts#L15)
