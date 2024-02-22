[@bloock/sdk](../index.md) / DecimalEnumAttributeDescriptor

# Class: DecimalEnumAttributeDescriptor

Represents a descriptor for an attribute with a decimal enum value.

## Hierarchy

- [`AttributeDescriptor`](AttributeDescriptor.md)

  ↳ **`DecimalEnumAttributeDescriptor`**

## Table of contents

### Constructors

- [constructor](DecimalEnumAttributeDescriptor.md#constructor)

### Properties

- [description](DecimalEnumAttributeDescriptor.md#description)
- [displayName](DecimalEnumAttributeDescriptor.md#displayname)
- [enumeration](DecimalEnumAttributeDescriptor.md#enumeration)
- [required](DecimalEnumAttributeDescriptor.md#required)
- [technicalName](DecimalEnumAttributeDescriptor.md#technicalname)

### Methods

- [toProto](DecimalEnumAttributeDescriptor.md#toproto)
- [fromProto](DecimalEnumAttributeDescriptor.md#fromproto)

## Constructors

### constructor

• **new DecimalEnumAttributeDescriptor**(`displayName`, `technicalName`, `description`, `required`, `enumeration`): [`DecimalEnumAttributeDescriptor`](DecimalEnumAttributeDescriptor.md)

Constructs an DecimalEnumAttributeDescriptor object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayName` | `string` |
| `technicalName` | `string` |
| `description` | `string` |
| `required` | `boolean` |
| `enumeration` | `number`[] |

#### Returns

[`DecimalEnumAttributeDescriptor`](DecimalEnumAttributeDescriptor.md)

#### Overrides

[AttributeDescriptor](AttributeDescriptor.md).[constructor](AttributeDescriptor.md#constructor)

#### Defined in

[entity/identity/decimal_enum_attribute_descriptor.ts:18](https://github.com/bloock/bloock-sdk/blob/82af4b7/languages/js/src/entity/identity/decimal_enum_attribute_descriptor.ts#L18)

## Properties

### description

• `Optional` **description**: `string`

Is a description providing additional information about the attribute.

#### Inherited from

[AttributeDescriptor](AttributeDescriptor.md).[description](AttributeDescriptor.md#description)

#### Defined in

[entity/identity/attribute_descriptor.ts:16](https://github.com/bloock/bloock-sdk/blob/82af4b7/languages/js/src/entity/identity/attribute_descriptor.ts#L16)

___

### displayName

• **displayName**: `string`

Is the human-readable display name of the attribute.

#### Inherited from

[AttributeDescriptor](AttributeDescriptor.md).[displayName](AttributeDescriptor.md#displayname)

#### Defined in

[entity/identity/attribute_descriptor.ts:8](https://github.com/bloock/bloock-sdk/blob/82af4b7/languages/js/src/entity/identity/attribute_descriptor.ts#L8)

___

### enumeration

• **enumeration**: `number`[]

#### Defined in

[entity/identity/decimal_enum_attribute_descriptor.ts:8](https://github.com/bloock/bloock-sdk/blob/82af4b7/languages/js/src/entity/identity/decimal_enum_attribute_descriptor.ts#L8)

___

### required

• **required**: `boolean`

Specifies whether the attribute is required.

#### Inherited from

[AttributeDescriptor](AttributeDescriptor.md).[required](AttributeDescriptor.md#required)

#### Defined in

[entity/identity/attribute_descriptor.ts:20](https://github.com/bloock/bloock-sdk/blob/82af4b7/languages/js/src/entity/identity/attribute_descriptor.ts#L20)

___

### technicalName

• **technicalName**: `string`

Is the identifier for the attribute.

#### Inherited from

[AttributeDescriptor](AttributeDescriptor.md).[technicalName](AttributeDescriptor.md#technicalname)

#### Defined in

[entity/identity/attribute_descriptor.ts:12](https://github.com/bloock/bloock-sdk/blob/82af4b7/languages/js/src/entity/identity/attribute_descriptor.ts#L12)

## Methods

### toProto

▸ **toProto**(): `DecimalEnumAttributeDefinition`

#### Returns

`DecimalEnumAttributeDefinition`

#### Defined in

[entity/identity/decimal_enum_attribute_descriptor.ts:29](https://github.com/bloock/bloock-sdk/blob/82af4b7/languages/js/src/entity/identity/decimal_enum_attribute_descriptor.ts#L29)

___

### fromProto

▸ **fromProto**(`r`): [`DecimalEnumAttributeDescriptor`](DecimalEnumAttributeDescriptor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `DecimalEnumAttributeDefinition` |

#### Returns

[`DecimalEnumAttributeDescriptor`](DecimalEnumAttributeDescriptor.md)

#### Defined in

[entity/identity/decimal_enum_attribute_descriptor.ts:39](https://github.com/bloock/bloock-sdk/blob/82af4b7/languages/js/src/entity/identity/decimal_enum_attribute_descriptor.ts#L39)
