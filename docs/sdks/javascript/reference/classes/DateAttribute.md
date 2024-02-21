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

[entity/identity/attribute.ts:13](https://github.com/bloock/bloock-sdk/blob/34885a1/languages/js/src/entity/identity/attribute.ts#L13)

## Properties

### id

• **id**: `string`

#### Inherited from

[Attribute](Attribute.md).[id](Attribute.md#id)

#### Defined in

[entity/identity/attribute.ts:5](https://github.com/bloock/bloock-sdk/blob/34885a1/languages/js/src/entity/identity/attribute.ts#L5)

___

### value

• **value**: `Date`

#### Inherited from

[Attribute](Attribute.md).[value](Attribute.md#value)

#### Defined in

[entity/identity/attribute.ts:6](https://github.com/bloock/bloock-sdk/blob/34885a1/languages/js/src/entity/identity/attribute.ts#L6)

## Methods

### toProto

▸ **toProto**(): `DateAttribute`

#### Returns

`DateAttribute`

#### Defined in

[entity/identity/date_attribute.ts:8](https://github.com/bloock/bloock-sdk/blob/34885a1/languages/js/src/entity/identity/date_attribute.ts#L8)

___

### fromProto

▸ **fromProto**(`r`): [`DateAttribute`](DateAttribute.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `DateAttribute` |

#### Returns

[`DateAttribute`](DateAttribute.md)

#### Defined in

[entity/identity/date_attribute.ts:15](https://github.com/bloock/bloock-sdk/blob/34885a1/languages/js/src/entity/identity/date_attribute.ts#L15)
