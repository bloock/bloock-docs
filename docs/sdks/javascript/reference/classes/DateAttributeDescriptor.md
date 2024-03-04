[@bloock/sdk](../index.md) / DateAttributeDescriptor

# Class: DateAttributeDescriptor

Represents a descriptor for a date attribute, including its display name, ID, description, and required status.

## Hierarchy

- [`AttributeDescriptor`](AttributeDescriptor.md)

  ↳ **`DateAttributeDescriptor`**

## Table of contents

### Constructors

- [constructor](DateAttributeDescriptor.md#constructor)

### Properties

- [description](DateAttributeDescriptor.md#description)
- [displayName](DateAttributeDescriptor.md#displayname)
- [required](DateAttributeDescriptor.md#required)
- [technicalName](DateAttributeDescriptor.md#technicalname)

### Methods

- [toProto](DateAttributeDescriptor.md#toproto)
- [fromProto](DateAttributeDescriptor.md#fromproto)

## Constructors

### constructor

• **new DateAttributeDescriptor**(`displayName`, `technicalName`, `description`, `required`): [`DateAttributeDescriptor`](DateAttributeDescriptor.md)

Constructs an AttributeDescriptor object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayName` | `string` |
| `technicalName` | `string` |
| `description` | `string` |
| `required` | `boolean` |

#### Returns

[`DateAttributeDescriptor`](DateAttributeDescriptor.md)

#### Inherited from

[AttributeDescriptor](AttributeDescriptor.md).[constructor](AttributeDescriptor.md#constructor)

#### Defined in

[entity/identity/attribute_descriptor.ts:29](https://github.com/bloock/bloock-sdk/blob/cf3411f/languages/js/src/entity/identity/attribute_descriptor.ts#L29)

## Properties

### description

• `Optional` **description**: `string`

Is a description providing additional information about the attribute.

#### Inherited from

[AttributeDescriptor](AttributeDescriptor.md).[description](AttributeDescriptor.md#description)

#### Defined in

[entity/identity/attribute_descriptor.ts:16](https://github.com/bloock/bloock-sdk/blob/cf3411f/languages/js/src/entity/identity/attribute_descriptor.ts#L16)

___

### displayName

• **displayName**: `string`

Is the human-readable display name of the attribute.

#### Inherited from

[AttributeDescriptor](AttributeDescriptor.md).[displayName](AttributeDescriptor.md#displayname)

#### Defined in

[entity/identity/attribute_descriptor.ts:8](https://github.com/bloock/bloock-sdk/blob/cf3411f/languages/js/src/entity/identity/attribute_descriptor.ts#L8)

___

### required

• **required**: `boolean`

Specifies whether the attribute is required.

#### Inherited from

[AttributeDescriptor](AttributeDescriptor.md).[required](AttributeDescriptor.md#required)

#### Defined in

[entity/identity/attribute_descriptor.ts:20](https://github.com/bloock/bloock-sdk/blob/cf3411f/languages/js/src/entity/identity/attribute_descriptor.ts#L20)

___

### technicalName

• **technicalName**: `string`

Is the identifier for the attribute.

#### Inherited from

[AttributeDescriptor](AttributeDescriptor.md).[technicalName](AttributeDescriptor.md#technicalname)

#### Defined in

[entity/identity/attribute_descriptor.ts:12](https://github.com/bloock/bloock-sdk/blob/cf3411f/languages/js/src/entity/identity/attribute_descriptor.ts#L12)

## Methods

### toProto

▸ **toProto**(): `DateAttributeDefinition`

#### Returns

`DateAttributeDefinition`

#### Defined in

[entity/identity/date_attribute_descriptor.ts:8](https://github.com/bloock/bloock-sdk/blob/cf3411f/languages/js/src/entity/identity/date_attribute_descriptor.ts#L8)

___

### fromProto

▸ **fromProto**(`r`): [`DateAttributeDescriptor`](DateAttributeDescriptor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `DateAttributeDefinition` |

#### Returns

[`DateAttributeDescriptor`](DateAttributeDescriptor.md)

#### Defined in

[entity/identity/date_attribute_descriptor.ts:17](https://github.com/bloock/bloock-sdk/blob/cf3411f/languages/js/src/entity/identity/date_attribute_descriptor.ts#L17)
