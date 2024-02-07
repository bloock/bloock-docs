[@bloock/sdk](../index.md) / BooleanAttribute

# Class: BooleanAttribute

Represents an attribute with a boolean value.

## Hierarchy

- [`Attribute`](Attribute.md)\<`boolean`\>

  ↳ **`BooleanAttribute`**

## Table of contents

### Constructors

- [constructor](BooleanAttribute.md#constructor)

### Properties

- [id](BooleanAttribute.md#id)
- [value](BooleanAttribute.md#value)

### Methods

- [toProto](BooleanAttribute.md#toproto)
- [fromProto](BooleanAttribute.md#fromproto)

## Constructors

### constructor

• **new BooleanAttribute**(`id`, `value`): [`BooleanAttribute`](BooleanAttribute.md)

Constructs a Attribute object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `value` | `boolean` |

#### Returns

[`BooleanAttribute`](BooleanAttribute.md)

#### Inherited from

[Attribute](Attribute.md).[constructor](Attribute.md#constructor)

#### Defined in

[entity/identity_v2/attribute.ts:13](https://github.com/bloock/bloock-sdk/blob/d82279b/languages/js/src/entity/identity_v2/attribute.ts#L13)

## Properties

### id

• **id**: `string`

#### Inherited from

[Attribute](Attribute.md).[id](Attribute.md#id)

#### Defined in

[entity/identity_v2/attribute.ts:5](https://github.com/bloock/bloock-sdk/blob/d82279b/languages/js/src/entity/identity_v2/attribute.ts#L5)

___

### value

• **value**: `boolean`

#### Inherited from

[Attribute](Attribute.md).[value](Attribute.md#value)

#### Defined in

[entity/identity_v2/attribute.ts:6](https://github.com/bloock/bloock-sdk/blob/d82279b/languages/js/src/entity/identity_v2/attribute.ts#L6)

## Methods

### toProto

▸ **toProto**(): `BooleanAttributeV2`

#### Returns

`BooleanAttributeV2`

#### Defined in

[entity/identity_v2/boolean_attribute.ts:8](https://github.com/bloock/bloock-sdk/blob/d82279b/languages/js/src/entity/identity_v2/boolean_attribute.ts#L8)

___

### fromProto

▸ **fromProto**(`r`): [`BooleanAttribute`](BooleanAttribute.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `BooleanAttributeV2` |

#### Returns

[`BooleanAttribute`](BooleanAttribute.md)

#### Defined in

[entity/identity_v2/boolean_attribute.ts:15](https://github.com/bloock/bloock-sdk/blob/d82279b/languages/js/src/entity/identity_v2/boolean_attribute.ts#L15)
