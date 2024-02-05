[@bloock/sdk](../index.md) / NumberAttributeDescriptor

# Class: NumberAttributeDescriptor

## Hierarchy

- `AttributeDescriptor`

  ↳ **`NumberAttributeDescriptor`**

## Table of contents

### Constructors

- [constructor](NumberAttributeDescriptor.md#constructor)

### Properties

- [description](NumberAttributeDescriptor.md#description)
- [displayName](NumberAttributeDescriptor.md#displayname)
- [technicalName](NumberAttributeDescriptor.md#technicalname)

### Methods

- [toProto](NumberAttributeDescriptor.md#toproto)
- [fromProto](NumberAttributeDescriptor.md#fromproto)

## Constructors

### constructor

• **new NumberAttributeDescriptor**(`displayName`, `technicalName`, `description?`): [`NumberAttributeDescriptor`](NumberAttributeDescriptor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayName` | `string` |
| `technicalName` | `string` |
| `description?` | `string` |

#### Returns

[`NumberAttributeDescriptor`](NumberAttributeDescriptor.md)

#### Inherited from

AttributeDescriptor.constructor

#### Defined in

[entity/identity/attribute_descriptor.ts:6](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity/attribute_descriptor.ts#L6)

## Properties

### description

• `Optional` **description**: `string`

#### Inherited from

AttributeDescriptor.description

#### Defined in

[entity/identity/attribute_descriptor.ts:4](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity/attribute_descriptor.ts#L4)

___

### displayName

• **displayName**: `string`

#### Inherited from

AttributeDescriptor.displayName

#### Defined in

[entity/identity/attribute_descriptor.ts:2](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity/attribute_descriptor.ts#L2)

___

### technicalName

• **technicalName**: `string`

#### Inherited from

AttributeDescriptor.technicalName

#### Defined in

[entity/identity/attribute_descriptor.ts:3](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity/attribute_descriptor.ts#L3)

## Methods

### toProto

▸ **toProto**(): `NumberAttributeDefinition`

#### Returns

`NumberAttributeDefinition`

#### Defined in

[entity/identity/number_attribute_descriptor.ts:5](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity/number_attribute_descriptor.ts#L5)

___

### fromProto

▸ **fromProto**(`r`): [`NumberAttributeDescriptor`](NumberAttributeDescriptor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `NumberAttributeDefinition` |

#### Returns

[`NumberAttributeDescriptor`](NumberAttributeDescriptor.md)

#### Defined in

[entity/identity/number_attribute_descriptor.ts:13](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity/number_attribute_descriptor.ts#L13)
