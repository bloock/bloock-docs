[@bloock/sdk](../index.md) / StringAttributeDescriptor

# Class: StringAttributeDescriptor

Represents a descriptor for an attribute with a string value.

## Hierarchy

- [`AttributeDescriptor`](AttributeDescriptor.md)

  ↳ **`StringAttributeDescriptor`**

## Table of contents

### Constructors

- [constructor](StringAttributeDescriptor.md#constructor)

### Properties

- [description](StringAttributeDescriptor.md#description)
- [displayName](StringAttributeDescriptor.md#displayname)
- [required](StringAttributeDescriptor.md#required)
- [technicalName](StringAttributeDescriptor.md#technicalname)

### Methods

- [toProto](StringAttributeDescriptor.md#toproto)
- [fromProto](StringAttributeDescriptor.md#fromproto)

## Constructors

### constructor

• **new StringAttributeDescriptor**(`displayName`, `technicalName`, `description`, `required`): [`StringAttributeDescriptor`](StringAttributeDescriptor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayName` | `string` |
| `technicalName` | `string` |
| `description` | `string` |
| `required` | `boolean` |

#### Returns

[`StringAttributeDescriptor`](StringAttributeDescriptor.md)

#### Overrides

[AttributeDescriptor](AttributeDescriptor.md).[constructor](AttributeDescriptor.md#constructor)

#### Defined in

[entity/identity/string_attribute_descriptor.ts:8](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/identity/string_attribute_descriptor.ts#L8)

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

▸ **toProto**(): `StringAttributeDefinition`

#### Returns

`StringAttributeDefinition`

#### Defined in

[entity/identity/string_attribute_descriptor.ts:17](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/identity/string_attribute_descriptor.ts#L17)

___

### fromProto

▸ **fromProto**(`r`): [`StringAttributeDescriptor`](StringAttributeDescriptor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `StringAttributeDefinition` |

#### Returns

[`StringAttributeDescriptor`](StringAttributeDescriptor.md)

#### Defined in

[entity/identity/string_attribute_descriptor.ts:26](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/identity/string_attribute_descriptor.ts#L26)
