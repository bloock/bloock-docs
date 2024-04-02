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

[entity/identity/attribute.ts:13](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/identity/attribute.ts#L13)

## Properties

### id

• **id**: `string`

#### Inherited from

[Attribute](Attribute.md).[id](Attribute.md#id)

#### Defined in

[entity/identity/attribute.ts:5](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/identity/attribute.ts#L5)

___

### value

• **value**: `boolean`

#### Inherited from

[Attribute](Attribute.md).[value](Attribute.md#value)

#### Defined in

[entity/identity/attribute.ts:6](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/identity/attribute.ts#L6)

## Methods

### toProto

▸ **toProto**(): `BooleanAttribute`

#### Returns

`BooleanAttribute`

#### Defined in

[entity/identity/boolean_attribute.ts:8](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/identity/boolean_attribute.ts#L8)

___

### fromProto

▸ **fromProto**(`r`): [`BooleanAttribute`](BooleanAttribute.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `BooleanAttribute` |

#### Returns

[`BooleanAttribute`](BooleanAttribute.md)

#### Defined in

[entity/identity/boolean_attribute.ts:15](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/identity/boolean_attribute.ts#L15)
