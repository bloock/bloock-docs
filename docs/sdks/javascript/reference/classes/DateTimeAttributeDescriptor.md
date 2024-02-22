[@bloock/sdk](../index.md) / DateTimeAttributeDescriptor

# Class: DateTimeAttributeDescriptor

Represents a descriptor for an attribute with a datetime value.

## Hierarchy

- [`AttributeDescriptor`](AttributeDescriptor.md)

  ↳ **`DateTimeAttributeDescriptor`**

## Table of contents

### Constructors

- [constructor](DateTimeAttributeDescriptor.md#constructor)

### Properties

- [description](DateTimeAttributeDescriptor.md#description)
- [displayName](DateTimeAttributeDescriptor.md#displayname)
- [required](DateTimeAttributeDescriptor.md#required)
- [technicalName](DateTimeAttributeDescriptor.md#technicalname)

### Methods

- [toProto](DateTimeAttributeDescriptor.md#toproto)
- [fromProto](DateTimeAttributeDescriptor.md#fromproto)

## Constructors

### constructor

• **new DateTimeAttributeDescriptor**(`displayName`, `technicalName`, `description`, `required`): [`DateTimeAttributeDescriptor`](DateTimeAttributeDescriptor.md)

Constructs an AttributeDescriptor object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayName` | `string` |
| `technicalName` | `string` |
| `description` | `string` |
| `required` | `boolean` |

#### Returns

[`DateTimeAttributeDescriptor`](DateTimeAttributeDescriptor.md)

#### Inherited from

[AttributeDescriptor](AttributeDescriptor.md).[constructor](AttributeDescriptor.md#constructor)

#### Defined in

[entity/identity/attribute_descriptor.ts:29](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/identity/attribute_descriptor.ts#L29)

## Properties

### description

• `Optional` **description**: `string`

Is a description providing additional information about the attribute.

#### Inherited from

[AttributeDescriptor](AttributeDescriptor.md).[description](AttributeDescriptor.md#description)

#### Defined in

[entity/identity/attribute_descriptor.ts:16](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/identity/attribute_descriptor.ts#L16)

___

### displayName

• **displayName**: `string`

Is the human-readable display name of the attribute.

#### Inherited from

[AttributeDescriptor](AttributeDescriptor.md).[displayName](AttributeDescriptor.md#displayname)

#### Defined in

[entity/identity/attribute_descriptor.ts:8](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/identity/attribute_descriptor.ts#L8)

___

### required

• **required**: `boolean`

Specifies whether the attribute is required.

#### Inherited from

[AttributeDescriptor](AttributeDescriptor.md).[required](AttributeDescriptor.md#required)

#### Defined in

[entity/identity/attribute_descriptor.ts:20](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/identity/attribute_descriptor.ts#L20)

___

### technicalName

• **technicalName**: `string`

Is the identifier for the attribute.

#### Inherited from

[AttributeDescriptor](AttributeDescriptor.md).[technicalName](AttributeDescriptor.md#technicalname)

#### Defined in

[entity/identity/attribute_descriptor.ts:12](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/identity/attribute_descriptor.ts#L12)

## Methods

### toProto

▸ **toProto**(): `DateTimeAttributeDefinition`

#### Returns

`DateTimeAttributeDefinition`

#### Defined in

[entity/identity/datetime_attribute_descriptor.ts:8](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/identity/datetime_attribute_descriptor.ts#L8)

___

### fromProto

▸ **fromProto**(`r`): [`DateTimeAttributeDescriptor`](DateTimeAttributeDescriptor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `DateTimeAttributeDefinition` |

#### Returns

[`DateTimeAttributeDescriptor`](DateTimeAttributeDescriptor.md)

#### Defined in

[entity/identity/datetime_attribute_descriptor.ts:17](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/identity/datetime_attribute_descriptor.ts#L17)
