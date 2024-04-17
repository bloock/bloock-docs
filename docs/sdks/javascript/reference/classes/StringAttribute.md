[@bloock/sdk](../index.md) / StringAttribute

# Class: StringAttribute

Represents an attribute with a string value.

## Hierarchy

- [`Attribute`](Attribute.md)\<`string`\>

  ↳ **`StringAttribute`**

## Table of contents

### Constructors

- [constructor](StringAttribute.md#constructor)

### Properties

- [id](StringAttribute.md#id)
- [value](StringAttribute.md#value)

### Methods

- [toProto](StringAttribute.md#toproto)
- [fromProto](StringAttribute.md#fromproto)

## Constructors

### constructor

• **new StringAttribute**(`id`, `value`): [`StringAttribute`](StringAttribute.md)

Constructs a Attribute object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `value` | `string` |

#### Returns

[`StringAttribute`](StringAttribute.md)

#### Inherited from

[Attribute](Attribute.md).[constructor](Attribute.md#constructor)

#### Defined in

[entity/identity/attribute.ts:13](https://github.com/bloock/bloock-sdk/blob/8d532d6/languages/js/src/entity/identity/attribute.ts#L13)

## Properties

### id

• **id**: `string`

#### Inherited from

[Attribute](Attribute.md).[id](Attribute.md#id)

#### Defined in

[entity/identity/attribute.ts:5](https://github.com/bloock/bloock-sdk/blob/8d532d6/languages/js/src/entity/identity/attribute.ts#L5)

___

### value

• **value**: `string`

#### Inherited from

[Attribute](Attribute.md).[value](Attribute.md#value)

#### Defined in

[entity/identity/attribute.ts:6](https://github.com/bloock/bloock-sdk/blob/8d532d6/languages/js/src/entity/identity/attribute.ts#L6)

## Methods

### toProto

▸ **toProto**(): `StringAttribute`

#### Returns

`StringAttribute`

#### Defined in

[entity/identity/string_attribute.ts:8](https://github.com/bloock/bloock-sdk/blob/8d532d6/languages/js/src/entity/identity/string_attribute.ts#L8)

___

### fromProto

▸ **fromProto**(`r`): [`StringAttribute`](StringAttribute.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `StringAttribute` |

#### Returns

[`StringAttribute`](StringAttribute.md)

#### Defined in

[entity/identity/string_attribute.ts:15](https://github.com/bloock/bloock-sdk/blob/8d532d6/languages/js/src/entity/identity/string_attribute.ts#L15)
