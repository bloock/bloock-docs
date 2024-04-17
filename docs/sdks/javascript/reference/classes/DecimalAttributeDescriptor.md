[@bloock/sdk](../index.md) / DecimalAttributeDescriptor

# Class: DecimalAttributeDescriptor

Represents a descriptor for an attribute with a decimal value.

## Hierarchy

- [`AttributeDescriptor`](AttributeDescriptor.md)

  ↳ **`DecimalAttributeDescriptor`**

## Table of contents

### Constructors

- [constructor](DecimalAttributeDescriptor.md#constructor)

### Properties

- [description](DecimalAttributeDescriptor.md#description)
- [displayName](DecimalAttributeDescriptor.md#displayname)
- [required](DecimalAttributeDescriptor.md#required)
- [technicalName](DecimalAttributeDescriptor.md#technicalname)

### Methods

- [toProto](DecimalAttributeDescriptor.md#toproto)
- [fromProto](DecimalAttributeDescriptor.md#fromproto)

## Constructors

### constructor

• **new DecimalAttributeDescriptor**(`displayName`, `technicalName`, `description`, `required`): [`DecimalAttributeDescriptor`](DecimalAttributeDescriptor.md)

Constructs an AttributeDescriptor object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayName` | `string` |
| `technicalName` | `string` |
| `description` | `string` |
| `required` | `boolean` |

#### Returns

[`DecimalAttributeDescriptor`](DecimalAttributeDescriptor.md)

#### Inherited from

[AttributeDescriptor](AttributeDescriptor.md).[constructor](AttributeDescriptor.md#constructor)

#### Defined in

[entity/identity/attribute_descriptor.ts:29](https://github.com/bloock/bloock-sdk/blob/8d532d6/languages/js/src/entity/identity/attribute_descriptor.ts#L29)

## Properties

### description

• `Optional` **description**: `string`

Is a description providing additional information about the attribute.

#### Inherited from

[AttributeDescriptor](AttributeDescriptor.md).[description](AttributeDescriptor.md#description)

#### Defined in

[entity/identity/attribute_descriptor.ts:16](https://github.com/bloock/bloock-sdk/blob/8d532d6/languages/js/src/entity/identity/attribute_descriptor.ts#L16)

___

### displayName

• **displayName**: `string`

Is the human-readable display name of the attribute.

#### Inherited from

[AttributeDescriptor](AttributeDescriptor.md).[displayName](AttributeDescriptor.md#displayname)

#### Defined in

[entity/identity/attribute_descriptor.ts:8](https://github.com/bloock/bloock-sdk/blob/8d532d6/languages/js/src/entity/identity/attribute_descriptor.ts#L8)

___

### required

• **required**: `boolean`

Specifies whether the attribute is required.

#### Inherited from

[AttributeDescriptor](AttributeDescriptor.md).[required](AttributeDescriptor.md#required)

#### Defined in

[entity/identity/attribute_descriptor.ts:20](https://github.com/bloock/bloock-sdk/blob/8d532d6/languages/js/src/entity/identity/attribute_descriptor.ts#L20)

___

### technicalName

• **technicalName**: `string`

Is the identifier for the attribute.

#### Inherited from

[AttributeDescriptor](AttributeDescriptor.md).[technicalName](AttributeDescriptor.md#technicalname)

#### Defined in

[entity/identity/attribute_descriptor.ts:12](https://github.com/bloock/bloock-sdk/blob/8d532d6/languages/js/src/entity/identity/attribute_descriptor.ts#L12)

## Methods

### toProto

▸ **toProto**(): `DecimalAttributeDefinition`

#### Returns

`DecimalAttributeDefinition`

#### Defined in

[entity/identity/decimal_attribute_descriptor.ts:8](https://github.com/bloock/bloock-sdk/blob/8d532d6/languages/js/src/entity/identity/decimal_attribute_descriptor.ts#L8)

___

### fromProto

▸ **fromProto**(`r`): [`DecimalAttributeDescriptor`](DecimalAttributeDescriptor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `DecimalAttributeDefinition` |

#### Returns

[`DecimalAttributeDescriptor`](DecimalAttributeDescriptor.md)

#### Defined in

[entity/identity/decimal_attribute_descriptor.ts:17](https://github.com/bloock/bloock-sdk/blob/8d532d6/languages/js/src/entity/identity/decimal_attribute_descriptor.ts#L17)
