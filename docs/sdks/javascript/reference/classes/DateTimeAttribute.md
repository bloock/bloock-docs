[@bloock/sdk](../index.md) / DateTimeAttribute

# Class: DateTimeAttribute

Represents an attribute with a datetime value.

## Hierarchy

- [`Attribute`](Attribute.md)\<`Date`\>

  ↳ **`DateTimeAttribute`**

## Table of contents

### Constructors

- [constructor](DateTimeAttribute.md#constructor)

### Properties

- [id](DateTimeAttribute.md#id)
- [value](DateTimeAttribute.md#value)

### Methods

- [toProto](DateTimeAttribute.md#toproto)
- [fromProto](DateTimeAttribute.md#fromproto)

## Constructors

### constructor

• **new DateTimeAttribute**(`id`, `value`): [`DateTimeAttribute`](DateTimeAttribute.md)

Constructs a Attribute object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `value` | `Date` |

#### Returns

[`DateTimeAttribute`](DateTimeAttribute.md)

#### Inherited from

[Attribute](Attribute.md).[constructor](Attribute.md#constructor)

#### Defined in

[entity/identity_v2/attribute.ts:13](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/entity/identity_v2/attribute.ts#L13)

## Properties

### id

• **id**: `string`

#### Inherited from

[Attribute](Attribute.md).[id](Attribute.md#id)

#### Defined in

[entity/identity_v2/attribute.ts:5](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/entity/identity_v2/attribute.ts#L5)

___

### value

• **value**: `Date`

#### Inherited from

[Attribute](Attribute.md).[value](Attribute.md#value)

#### Defined in

[entity/identity_v2/attribute.ts:6](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/entity/identity_v2/attribute.ts#L6)

## Methods

### toProto

▸ **toProto**(): `DateTimeAttributeV2`

#### Returns

`DateTimeAttributeV2`

#### Defined in

[entity/identity_v2/datetime_attribute.ts:8](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/entity/identity_v2/datetime_attribute.ts#L8)

___

### fromProto

▸ **fromProto**(`r`): [`DateTimeAttribute`](DateTimeAttribute.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `DateTimeAttributeV2` |

#### Returns

[`DateTimeAttribute`](DateTimeAttribute.md)

#### Defined in

[entity/identity_v2/datetime_attribute.ts:15](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/entity/identity_v2/datetime_attribute.ts#L15)