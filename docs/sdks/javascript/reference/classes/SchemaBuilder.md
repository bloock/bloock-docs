[@bloock/sdk](../index.md) / SchemaBuilder

# Class: SchemaBuilder

Is a builder pattern for constructing schema instances.

## Table of contents

### Constructors

- [constructor](SchemaBuilder.md#constructor)

### Properties

- [booleanAttributes](SchemaBuilder.md#booleanattributes)
- [configData](SchemaBuilder.md#configdata)
- [dateAttributes](SchemaBuilder.md#dateattributes)
- [dateTimeAttributes](SchemaBuilder.md#datetimeattributes)
- [decimalAttributes](SchemaBuilder.md#decimalattributes)
- [decimalEnumAttributes](SchemaBuilder.md#decimalenumattributes)
- [description](SchemaBuilder.md#description)
- [displayName](SchemaBuilder.md#displayname)
- [integerAttributes](SchemaBuilder.md#integerattributes)
- [integerEnumAttributes](SchemaBuilder.md#integerenumattributes)
- [schemaType](SchemaBuilder.md#schematype)
- [stringAttributes](SchemaBuilder.md#stringattributes)
- [stringEnumAttributes](SchemaBuilder.md#stringenumattributes)
- [version](SchemaBuilder.md#version)

### Methods

- [addBooleanAttribute](SchemaBuilder.md#addbooleanattribute)
- [addDateAttribute](SchemaBuilder.md#adddateattribute)
- [addDateTimeAttribute](SchemaBuilder.md#adddatetimeattribute)
- [addDecimalAttribute](SchemaBuilder.md#adddecimalattribute)
- [addDecimalEnumAttribute](SchemaBuilder.md#adddecimalenumattribute)
- [addIntegerAttribute](SchemaBuilder.md#addintegerattribute)
- [addIntegerEnumAttribute](SchemaBuilder.md#addintegerenumattribute)
- [addStringAttribute](SchemaBuilder.md#addstringattribute)
- [addStringEnumAttribute](SchemaBuilder.md#addstringenumattribute)
- [build](SchemaBuilder.md#build)

## Constructors

### constructor

• **new SchemaBuilder**(`displayName`, `schemaType`, `version`, `description`, `configData`): [`SchemaBuilder`](SchemaBuilder.md)

Creates a new instance of SchemaBuilder with initial values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayName` | `string` |
| `schemaType` | `string` |
| `version` | `string` |
| `description` | `string` |
| `configData` | `ConfigData` |

#### Returns

[`SchemaBuilder`](SchemaBuilder.md)

#### Defined in

[entity/identity/schema_builder.ts:43](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/identity/schema_builder.ts#L43)

## Properties

### booleanAttributes

• **booleanAttributes**: [`BooleanAttributeDescriptor`](BooleanAttributeDescriptor.md)[]

#### Defined in

[entity/identity/schema_builder.ts:28](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/identity/schema_builder.ts#L28)

___

### configData

• **configData**: `ConfigData`

#### Defined in

[entity/identity/schema_builder.ts:23](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/identity/schema_builder.ts#L23)

___

### dateAttributes

• **dateAttributes**: [`DateAttributeDescriptor`](DateAttributeDescriptor.md)[]

#### Defined in

[entity/identity/schema_builder.ts:29](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/identity/schema_builder.ts#L29)

___

### dateTimeAttributes

• **dateTimeAttributes**: [`DateTimeAttributeDescriptor`](DateTimeAttributeDescriptor.md)[]

#### Defined in

[entity/identity/schema_builder.ts:30](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/identity/schema_builder.ts#L30)

___

### decimalAttributes

• **decimalAttributes**: [`DecimalAttributeDescriptor`](DecimalAttributeDescriptor.md)[]

#### Defined in

[entity/identity/schema_builder.ts:27](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/identity/schema_builder.ts#L27)

___

### decimalEnumAttributes

• **decimalEnumAttributes**: [`DecimalEnumAttributeDescriptor`](DecimalEnumAttributeDescriptor.md)[]

#### Defined in

[entity/identity/schema_builder.ts:33](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/identity/schema_builder.ts#L33)

___

### description

• **description**: `string`

#### Defined in

[entity/identity/schema_builder.ts:22](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/identity/schema_builder.ts#L22)

___

### displayName

• **displayName**: `string`

#### Defined in

[entity/identity/schema_builder.ts:19](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/identity/schema_builder.ts#L19)

___

### integerAttributes

• **integerAttributes**: [`IntegerAttributeDescriptor`](IntegerAttributeDescriptor.md)[]

#### Defined in

[entity/identity/schema_builder.ts:26](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/identity/schema_builder.ts#L26)

___

### integerEnumAttributes

• **integerEnumAttributes**: [`IntegerEnumAttributeDescriptor`](IntegerEnumAttributeDescriptor.md)[]

#### Defined in

[entity/identity/schema_builder.ts:32](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/identity/schema_builder.ts#L32)

___

### schemaType

• **schemaType**: `string`

#### Defined in

[entity/identity/schema_builder.ts:20](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/identity/schema_builder.ts#L20)

___

### stringAttributes

• **stringAttributes**: [`StringAttributeDescriptor`](StringAttributeDescriptor.md)[]

#### Defined in

[entity/identity/schema_builder.ts:25](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/identity/schema_builder.ts#L25)

___

### stringEnumAttributes

• **stringEnumAttributes**: [`StringEnumAttributeDescriptor`](StringEnumAttributeDescriptor.md)[]

#### Defined in

[entity/identity/schema_builder.ts:31](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/identity/schema_builder.ts#L31)

___

### version

• **version**: `string`

#### Defined in

[entity/identity/schema_builder.ts:21](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/identity/schema_builder.ts#L21)

## Methods

### addBooleanAttribute

▸ **addBooleanAttribute**(`name`, `technicalName`, `description`, `required`): [`SchemaBuilder`](SchemaBuilder.md)

Adds a boolean attribute descriptor to the schema builder.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `technicalName` | `string` |
| `description` | `string` |
| `required` | `boolean` |

#### Returns

[`SchemaBuilder`](SchemaBuilder.md)

#### Defined in

[entity/identity/schema_builder.ts:134](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/identity/schema_builder.ts#L134)

___

### addDateAttribute

▸ **addDateAttribute**(`name`, `technicalName`, `description`, `required`): [`SchemaBuilder`](SchemaBuilder.md)

Adds a date attribute descriptor to the schema builder.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `technicalName` | `string` |
| `description` | `string` |
| `required` | `boolean` |

#### Returns

[`SchemaBuilder`](SchemaBuilder.md)

#### Defined in

[entity/identity/schema_builder.ts:154](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/identity/schema_builder.ts#L154)

___

### addDateTimeAttribute

▸ **addDateTimeAttribute**(`name`, `technicalName`, `description`, `required`): [`SchemaBuilder`](SchemaBuilder.md)

Adds a datetime attribute descriptor to the schema builder.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `technicalName` | `string` |
| `description` | `string` |
| `required` | `boolean` |

#### Returns

[`SchemaBuilder`](SchemaBuilder.md)

#### Defined in

[entity/identity/schema_builder.ts:174](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/identity/schema_builder.ts#L174)

___

### addDecimalAttribute

▸ **addDecimalAttribute**(`name`, `technicalName`, `description`, `required`): [`SchemaBuilder`](SchemaBuilder.md)

Adds a decimal attribute descriptor to the schema builder.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `technicalName` | `string` |
| `description` | `string` |
| `required` | `boolean` |

#### Returns

[`SchemaBuilder`](SchemaBuilder.md)

#### Defined in

[entity/identity/schema_builder.ts:114](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/identity/schema_builder.ts#L114)

___

### addDecimalEnumAttribute

▸ **addDecimalEnumAttribute**(`name`, `technicalName`, `description`, `required`, `enumeration`): [`SchemaBuilder`](SchemaBuilder.md)

Adds a decimal enum attribute descriptor to the schema builder.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `technicalName` | `string` |
| `description` | `string` |
| `required` | `boolean` |
| `enumeration` | `number`[] |

#### Returns

[`SchemaBuilder`](SchemaBuilder.md)

#### Defined in

[entity/identity/schema_builder.ts:256](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/identity/schema_builder.ts#L256)

___

### addIntegerAttribute

▸ **addIntegerAttribute**(`name`, `technicalName`, `description`, `required`): [`SchemaBuilder`](SchemaBuilder.md)

Adds an integer attribute descriptor to the schema builder.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `technicalName` | `string` |
| `description` | `string` |
| `required` | `boolean` |

#### Returns

[`SchemaBuilder`](SchemaBuilder.md)

#### Defined in

[entity/identity/schema_builder.ts:94](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/identity/schema_builder.ts#L94)

___

### addIntegerEnumAttribute

▸ **addIntegerEnumAttribute**(`name`, `technicalName`, `description`, `required`, `enumeration`): [`SchemaBuilder`](SchemaBuilder.md)

Adds an integer enum attribute descriptor to the schema builder.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `technicalName` | `string` |
| `description` | `string` |
| `required` | `boolean` |
| `enumeration` | `number`[] |

#### Returns

[`SchemaBuilder`](SchemaBuilder.md)

#### Defined in

[entity/identity/schema_builder.ts:228](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/identity/schema_builder.ts#L228)

___

### addStringAttribute

▸ **addStringAttribute**(`name`, `technicalName`, `description`, `required`): [`SchemaBuilder`](SchemaBuilder.md)

Adds a string attribute descriptor to the schema builder.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `technicalName` | `string` |
| `description` | `string` |
| `required` | `boolean` |

#### Returns

[`SchemaBuilder`](SchemaBuilder.md)

#### Defined in

[entity/identity/schema_builder.ts:74](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/identity/schema_builder.ts#L74)

___

### addStringEnumAttribute

▸ **addStringEnumAttribute**(`name`, `technicalName`, `description`, `required`, `enumeration`): [`SchemaBuilder`](SchemaBuilder.md)

Adds a string enum attribute descriptor to the schema builder.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `technicalName` | `string` |
| `description` | `string` |
| `required` | `boolean` |
| `enumeration` | `string`[] |

#### Returns

[`SchemaBuilder`](SchemaBuilder.md)

#### Defined in

[entity/identity/schema_builder.ts:200](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/identity/schema_builder.ts#L200)

___

### build

▸ **build**(): `Promise`\<[`Schema`](Schema.md)\>

Creates a schema using the configured attributes.

#### Returns

`Promise`\<[`Schema`](Schema.md)\>

#### Defined in

[entity/identity/schema_builder.ts:279](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/identity/schema_builder.ts#L279)
