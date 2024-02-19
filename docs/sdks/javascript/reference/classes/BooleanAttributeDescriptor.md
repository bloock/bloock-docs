[@bloock/sdk](../index.md) / BooleanAttributeDescriptor

# Class: BooleanAttributeDescriptor

Represents a descriptor for a boolean attribute.

## Hierarchy

- [`AttributeDescriptor`](AttributeDescriptor.md)

  ↳ **`BooleanAttributeDescriptor`**

## Table of contents

### Constructors

- [constructor](BooleanAttributeDescriptor.md#constructor)

### Properties

- [description](BooleanAttributeDescriptor.md#description)
- [displayName](BooleanAttributeDescriptor.md#displayname)
- [required](BooleanAttributeDescriptor.md#required)
- [technicalName](BooleanAttributeDescriptor.md#technicalname)

### Methods

- [toProto](BooleanAttributeDescriptor.md#toproto)
- [fromProto](BooleanAttributeDescriptor.md#fromproto)

## Constructors

### constructor

• **new BooleanAttributeDescriptor**(`displayName`, `technicalName`, `description`, `required`): [`BooleanAttributeDescriptor`](BooleanAttributeDescriptor.md)

Constructs an AttributeDescriptor object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayName` | `string` |
| `technicalName` | `string` |
| `description` | `string` |
| `required` | `boolean` |

#### Returns

[`BooleanAttributeDescriptor`](BooleanAttributeDescriptor.md)

#### Inherited from

[AttributeDescriptor](AttributeDescriptor.md).[constructor](AttributeDescriptor.md#constructor)

#### Defined in

[entity/identity/attribute_descriptor.ts:29](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/attribute_descriptor.ts#L29)

## Properties

### description

• `Optional` **description**: `string`

Is a description providing additional information about the attribute.

#### Inherited from

[AttributeDescriptor](AttributeDescriptor.md).[description](AttributeDescriptor.md#description)

#### Defined in

[entity/identity/attribute_descriptor.ts:16](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/attribute_descriptor.ts#L16)

___

### displayName

• **displayName**: `string`

Is the human-readable display name of the attribute.

#### Inherited from

[AttributeDescriptor](AttributeDescriptor.md).[displayName](AttributeDescriptor.md#displayname)

#### Defined in

[entity/identity/attribute_descriptor.ts:8](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/attribute_descriptor.ts#L8)

___

### required

• **required**: `boolean`

Specifies whether the attribute is required.

#### Inherited from

[AttributeDescriptor](AttributeDescriptor.md).[required](AttributeDescriptor.md#required)

#### Defined in

[entity/identity/attribute_descriptor.ts:20](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/attribute_descriptor.ts#L20)

___

### technicalName

• **technicalName**: `string`

Is the identifier for the attribute.

#### Inherited from

[AttributeDescriptor](AttributeDescriptor.md).[technicalName](AttributeDescriptor.md#technicalname)

#### Defined in

[entity/identity/attribute_descriptor.ts:12](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/attribute_descriptor.ts#L12)

## Methods

### toProto

▸ **toProto**(): `BooleanAttributeDefinition`

#### Returns

`BooleanAttributeDefinition`

#### Defined in

[entity/identity/boolean_attribute_descriptor.ts:8](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/boolean_attribute_descriptor.ts#L8)

___

### fromProto

▸ **fromProto**(`r`): [`BooleanAttributeDescriptor`](BooleanAttributeDescriptor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `BooleanAttributeDefinition` |

#### Returns

[`BooleanAttributeDescriptor`](BooleanAttributeDescriptor.md)

#### Defined in

[entity/identity/boolean_attribute_descriptor.ts:17](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/boolean_attribute_descriptor.ts#L17)
