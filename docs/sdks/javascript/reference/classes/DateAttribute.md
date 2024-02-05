[@bloock/sdk](../index.md) / DateAttribute

# Class: DateAttribute

Represents an attribute with a date value, including its key and formatted value.

## Hierarchy

- [`Attribute`](Attribute.md)\<`Date`\>

  ↳ **`DateAttribute`**

## Table of contents

### Constructors

- [constructor](DateAttribute.md#constructor)

### Properties

- [id](DateAttribute.md#id)
- [value](DateAttribute.md#value)

### Methods

- [toProto](DateAttribute.md#toproto)
- [fromProto](DateAttribute.md#fromproto)

## Constructors

### constructor

• **new DateAttribute**(`id`, `value`): [`DateAttribute`](DateAttribute.md)

Constructs a Attribute object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `value` | `Date` |

#### Returns

[`DateAttribute`](DateAttribute.md)

#### Inherited from

[Attribute](Attribute.md).[constructor](Attribute.md#constructor)

#### Defined in

[entity/identity_v2/attribute.ts:13](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity_v2/attribute.ts#L13)

## Properties

### id

• **id**: `string`

#### Inherited from

[Attribute](Attribute.md).[id](Attribute.md#id)

#### Defined in

[entity/identity_v2/attribute.ts:5](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity_v2/attribute.ts#L5)

___

### value

• **value**: `Date`

#### Inherited from

[Attribute](Attribute.md).[value](Attribute.md#value)

#### Defined in

[entity/identity_v2/attribute.ts:6](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity_v2/attribute.ts#L6)

## Methods

### toProto

▸ **toProto**(): `DateAttributeV2`

#### Returns

`DateAttributeV2`

#### Defined in

[entity/identity_v2/date_attribute.ts:8](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity_v2/date_attribute.ts#L8)

___

### fromProto

▸ **fromProto**(`r`): [`DateAttribute`](DateAttribute.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `DateAttributeV2` |

#### Returns

[`DateAttribute`](DateAttribute.md)

#### Defined in

[entity/identity_v2/date_attribute.ts:15](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity_v2/date_attribute.ts#L15)
