[@bloock/sdk](../index.md) / IntegerEnumAttributeDescriptor

# Class: IntegerEnumAttributeDescriptor

Represents a descriptor for an attribute with an integer enum value.

## Hierarchy

- [`AttributeDescriptor`](AttributeDescriptor.md)

  ↳ **`IntegerEnumAttributeDescriptor`**

## Table of contents

### Constructors

- [constructor](IntegerEnumAttributeDescriptor.md#constructor)

### Properties

- [description](IntegerEnumAttributeDescriptor.md#description)
- [displayName](IntegerEnumAttributeDescriptor.md#displayname)
- [enumeration](IntegerEnumAttributeDescriptor.md#enumeration)
- [required](IntegerEnumAttributeDescriptor.md#required)
- [technicalName](IntegerEnumAttributeDescriptor.md#technicalname)

### Methods

- [toProto](IntegerEnumAttributeDescriptor.md#toproto)
- [fromProto](IntegerEnumAttributeDescriptor.md#fromproto)

## Constructors

### constructor

• **new IntegerEnumAttributeDescriptor**(`displayName`, `technicalName`, `description`, `required`, `enumeration`): [`IntegerEnumAttributeDescriptor`](IntegerEnumAttributeDescriptor.md)

Constructs an IntegerEnumAttributeDescriptor object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayName` | `string` |
| `technicalName` | `string` |
| `description` | `string` |
| `required` | `boolean` |
| `enumeration` | `number`[] |

#### Returns

[`IntegerEnumAttributeDescriptor`](IntegerEnumAttributeDescriptor.md)

#### Overrides

[AttributeDescriptor](AttributeDescriptor.md).[constructor](AttributeDescriptor.md#constructor)

#### Defined in

[entity/identity_v2/integer_enum_attribute_descriptor.ts:18](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity_v2/integer_enum_attribute_descriptor.ts#L18)

## Properties

### description

• `Optional` **description**: `string`

Is a description providing additional information about the attribute.

#### Inherited from

[AttributeDescriptor](AttributeDescriptor.md).[description](AttributeDescriptor.md#description)

#### Defined in

[entity/identity_v2/attribute_descriptor.ts:16](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity_v2/attribute_descriptor.ts#L16)

___

### displayName

• **displayName**: `string`

Is the human-readable display name of the attribute.

#### Inherited from

[AttributeDescriptor](AttributeDescriptor.md).[displayName](AttributeDescriptor.md#displayname)

#### Defined in

[entity/identity_v2/attribute_descriptor.ts:8](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity_v2/attribute_descriptor.ts#L8)

___

### enumeration

• **enumeration**: `number`[]

#### Defined in

[entity/identity_v2/integer_enum_attribute_descriptor.ts:8](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity_v2/integer_enum_attribute_descriptor.ts#L8)

___

### required

• **required**: `boolean`

Specifies whether the attribute is required.

#### Inherited from

[AttributeDescriptor](AttributeDescriptor.md).[required](AttributeDescriptor.md#required)

#### Defined in

[entity/identity_v2/attribute_descriptor.ts:20](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity_v2/attribute_descriptor.ts#L20)

___

### technicalName

• **technicalName**: `string`

Is the identifier for the attribute.

#### Inherited from

[AttributeDescriptor](AttributeDescriptor.md).[technicalName](AttributeDescriptor.md#technicalname)

#### Defined in

[entity/identity_v2/attribute_descriptor.ts:12](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity_v2/attribute_descriptor.ts#L12)

## Methods

### toProto

▸ **toProto**(): `IntegerEnumAttributeDefinitionV2`

#### Returns

`IntegerEnumAttributeDefinitionV2`

#### Defined in

[entity/identity_v2/integer_enum_attribute_descriptor.ts:29](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity_v2/integer_enum_attribute_descriptor.ts#L29)

___

### fromProto

▸ **fromProto**(`r`): [`IntegerEnumAttributeDescriptor`](IntegerEnumAttributeDescriptor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `IntegerEnumAttributeDefinitionV2` |

#### Returns

[`IntegerEnumAttributeDescriptor`](IntegerEnumAttributeDescriptor.md)

#### Defined in

[entity/identity_v2/integer_enum_attribute_descriptor.ts:39](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity_v2/integer_enum_attribute_descriptor.ts#L39)
