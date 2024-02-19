[@bloock/sdk](../index.md) / StringEnumAttributeDescriptor

# Class: StringEnumAttributeDescriptor

Represents a descriptor for an attribute with a string enum value.

## Hierarchy

- [`AttributeDescriptor`](AttributeDescriptor.md)

  ↳ **`StringEnumAttributeDescriptor`**

## Table of contents

### Constructors

- [constructor](StringEnumAttributeDescriptor.md#constructor)

### Properties

- [description](StringEnumAttributeDescriptor.md#description)
- [displayName](StringEnumAttributeDescriptor.md#displayname)
- [enumeration](StringEnumAttributeDescriptor.md#enumeration)
- [required](StringEnumAttributeDescriptor.md#required)
- [technicalName](StringEnumAttributeDescriptor.md#technicalname)

### Methods

- [toProto](StringEnumAttributeDescriptor.md#toproto)
- [fromProto](StringEnumAttributeDescriptor.md#fromproto)

## Constructors

### constructor

• **new StringEnumAttributeDescriptor**(`displayName`, `technicalName`, `description`, `required`, `enumeration`): [`StringEnumAttributeDescriptor`](StringEnumAttributeDescriptor.md)

Constructs an StringEnumAttributeDescriptor object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayName` | `string` |
| `technicalName` | `string` |
| `description` | `string` |
| `required` | `boolean` |
| `enumeration` | `string`[] |

#### Returns

[`StringEnumAttributeDescriptor`](StringEnumAttributeDescriptor.md)

#### Overrides

[AttributeDescriptor](AttributeDescriptor.md).[constructor](AttributeDescriptor.md#constructor)

#### Defined in

[entity/identity/string_enum_attribute_descriptor.ts:18](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/string_enum_attribute_descriptor.ts#L18)

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

### enumeration

• **enumeration**: `string`[]

#### Defined in

[entity/identity/string_enum_attribute_descriptor.ts:8](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/string_enum_attribute_descriptor.ts#L8)

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

▸ **toProto**(): `StringEnumAttributeDefinition`

#### Returns

`StringEnumAttributeDefinition`

#### Defined in

[entity/identity/string_enum_attribute_descriptor.ts:29](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/string_enum_attribute_descriptor.ts#L29)

___

### fromProto

▸ **fromProto**(`r`): [`StringEnumAttributeDescriptor`](StringEnumAttributeDescriptor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `StringEnumAttributeDefinition` |

#### Returns

[`StringEnumAttributeDescriptor`](StringEnumAttributeDescriptor.md)

#### Defined in

[entity/identity/string_enum_attribute_descriptor.ts:39](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/string_enum_attribute_descriptor.ts#L39)
