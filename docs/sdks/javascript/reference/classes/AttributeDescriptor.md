[@bloock/sdk](../index.md) / AttributeDescriptor

# Class: AttributeDescriptor

Represents a descriptor for an attribute.

## Hierarchy

- **`AttributeDescriptor`**

  ↳ [`BooleanAttributeDescriptor`](BooleanAttributeDescriptor.md)

  ↳ [`DateAttributeDescriptor`](DateAttributeDescriptor.md)

  ↳ [`DateTimeAttributeDescriptor`](DateTimeAttributeDescriptor.md)

  ↳ [`StringAttributeDescriptor`](StringAttributeDescriptor.md)

  ↳ [`IntegerAttributeDescriptor`](IntegerAttributeDescriptor.md)

  ↳ [`DecimalAttributeDescriptor`](DecimalAttributeDescriptor.md)

  ↳ [`StringEnumAttributeDescriptor`](StringEnumAttributeDescriptor.md)

  ↳ [`IntegerEnumAttributeDescriptor`](IntegerEnumAttributeDescriptor.md)

  ↳ [`DecimalEnumAttributeDescriptor`](DecimalEnumAttributeDescriptor.md)

## Table of contents

### Constructors

- [constructor](AttributeDescriptor.md#constructor)

### Properties

- [description](AttributeDescriptor.md#description)
- [displayName](AttributeDescriptor.md#displayname)
- [required](AttributeDescriptor.md#required)
- [technicalName](AttributeDescriptor.md#technicalname)

## Constructors

### constructor

• **new AttributeDescriptor**(`displayName`, `technicalName`, `description`, `required`): [`AttributeDescriptor`](AttributeDescriptor.md)

Constructs an AttributeDescriptor object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayName` | `string` |
| `technicalName` | `string` |
| `description` | `string` |
| `required` | `boolean` |

#### Returns

[`AttributeDescriptor`](AttributeDescriptor.md)

#### Defined in

[entity/identity/attribute_descriptor.ts:29](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/entity/identity/attribute_descriptor.ts#L29)

## Properties

### description

• `Optional` **description**: `string`

Is a description providing additional information about the attribute.

#### Defined in

[entity/identity/attribute_descriptor.ts:16](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/entity/identity/attribute_descriptor.ts#L16)

___

### displayName

• **displayName**: `string`

Is the human-readable display name of the attribute.

#### Defined in

[entity/identity/attribute_descriptor.ts:8](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/entity/identity/attribute_descriptor.ts#L8)

___

### required

• **required**: `boolean`

Specifies whether the attribute is required.

#### Defined in

[entity/identity/attribute_descriptor.ts:20](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/entity/identity/attribute_descriptor.ts#L20)

___

### technicalName

• **technicalName**: `string`

Is the identifier for the attribute.

#### Defined in

[entity/identity/attribute_descriptor.ts:12](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/entity/identity/attribute_descriptor.ts#L12)
