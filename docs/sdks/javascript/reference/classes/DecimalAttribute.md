[@bloock/sdk](../index.md) / DecimalAttribute

# Class: DecimalAttribute

Represents an attribute with a decimal value.

## Hierarchy

- [`Attribute`](Attribute.md)\<`number`\>

  ↳ **`DecimalAttribute`**

## Table of contents

### Constructors

- [constructor](DecimalAttribute.md#constructor)

### Properties

- [id](DecimalAttribute.md#id)
- [value](DecimalAttribute.md#value)

### Methods

- [toProto](DecimalAttribute.md#toproto)
- [fromProto](DecimalAttribute.md#fromproto)

## Constructors

### constructor

• **new DecimalAttribute**(`id`, `value`): [`DecimalAttribute`](DecimalAttribute.md)

Constructs a Attribute object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `value` | `number` |

#### Returns

[`DecimalAttribute`](DecimalAttribute.md)

#### Inherited from

[Attribute](Attribute.md).[constructor](Attribute.md#constructor)

#### Defined in

[entity/identity/attribute.ts:13](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/attribute.ts#L13)

## Properties

### id

• **id**: `string`

#### Inherited from

[Attribute](Attribute.md).[id](Attribute.md#id)

#### Defined in

[entity/identity/attribute.ts:5](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/attribute.ts#L5)

___

### value

• **value**: `number`

#### Inherited from

[Attribute](Attribute.md).[value](Attribute.md#value)

#### Defined in

[entity/identity/attribute.ts:6](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/attribute.ts#L6)

## Methods

### toProto

▸ **toProto**(): `DecimalAttribute`

#### Returns

`DecimalAttribute`

#### Defined in

[entity/identity/decimal_attribute.ts:8](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/decimal_attribute.ts#L8)

___

### fromProto

▸ **fromProto**(`r`): [`DecimalAttribute`](DecimalAttribute.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `DecimalAttribute` |

#### Returns

[`DecimalAttribute`](DecimalAttribute.md)

#### Defined in

[entity/identity/decimal_attribute.ts:15](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/decimal_attribute.ts#L15)
