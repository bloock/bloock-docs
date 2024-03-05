[@bloock/sdk](../index.md) / IntegerAttributeDescriptor

# Class: IntegerAttributeDescriptor

Represents a descriptor for an attribute with an integer value.

## Hierarchy

- [`AttributeDescriptor`](AttributeDescriptor.md)

  ↳ **`IntegerAttributeDescriptor`**

## Table of contents

### Constructors

- [constructor](IntegerAttributeDescriptor.md#constructor)

### Properties

- [description](IntegerAttributeDescriptor.md#description)
- [displayName](IntegerAttributeDescriptor.md#displayname)
- [required](IntegerAttributeDescriptor.md#required)
- [technicalName](IntegerAttributeDescriptor.md#technicalname)

### Methods

- [toProto](IntegerAttributeDescriptor.md#toproto)
- [fromProto](IntegerAttributeDescriptor.md#fromproto)

## Constructors

### constructor

• **new IntegerAttributeDescriptor**(`displayName`, `technicalName`, `description`, `required`): [`IntegerAttributeDescriptor`](IntegerAttributeDescriptor.md)

Constructs an AttributeDescriptor object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayName` | `string` |
| `technicalName` | `string` |
| `description` | `string` |
| `required` | `boolean` |

#### Returns

[`IntegerAttributeDescriptor`](IntegerAttributeDescriptor.md)

#### Inherited from

[AttributeDescriptor](AttributeDescriptor.md).[constructor](AttributeDescriptor.md#constructor)

#### Defined in

[entity/identity/attribute_descriptor.ts:29](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/entity/identity/attribute_descriptor.ts#L29)

## Properties

### description

• `Optional` **description**: `string`

Is a description providing additional information about the attribute.

#### Inherited from

[AttributeDescriptor](AttributeDescriptor.md).[description](AttributeDescriptor.md#description)

#### Defined in

[entity/identity/attribute_descriptor.ts:16](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/entity/identity/attribute_descriptor.ts#L16)

___

### displayName

• **displayName**: `string`

Is the human-readable display name of the attribute.

#### Inherited from

[AttributeDescriptor](AttributeDescriptor.md).[displayName](AttributeDescriptor.md#displayname)

#### Defined in

[entity/identity/attribute_descriptor.ts:8](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/entity/identity/attribute_descriptor.ts#L8)

___

### required

• **required**: `boolean`

Specifies whether the attribute is required.

#### Inherited from

[AttributeDescriptor](AttributeDescriptor.md).[required](AttributeDescriptor.md#required)

#### Defined in

[entity/identity/attribute_descriptor.ts:20](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/entity/identity/attribute_descriptor.ts#L20)

___

### technicalName

• **technicalName**: `string`

Is the identifier for the attribute.

#### Inherited from

[AttributeDescriptor](AttributeDescriptor.md).[technicalName](AttributeDescriptor.md#technicalname)

#### Defined in

[entity/identity/attribute_descriptor.ts:12](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/entity/identity/attribute_descriptor.ts#L12)

## Methods

### toProto

▸ **toProto**(): `IntegerAttributeDefinition`

#### Returns

`IntegerAttributeDefinition`

#### Defined in

[entity/identity/integer_attribute_descriptor.ts:8](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/entity/identity/integer_attribute_descriptor.ts#L8)

___

### fromProto

▸ **fromProto**(`r`): [`IntegerAttributeDescriptor`](IntegerAttributeDescriptor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `IntegerAttributeDefinition` |

#### Returns

[`IntegerAttributeDescriptor`](IntegerAttributeDescriptor.md)

#### Defined in

[entity/identity/integer_attribute_descriptor.ts:17](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/entity/identity/integer_attribute_descriptor.ts#L17)
