[@bloock/sdk](../index.md) / CredentialBuilder

# Class: CredentialBuilder

Helps construct credentials by specifying various attributes.

## Table of contents

### Constructors

- [constructor](CredentialBuilder.md#constructor)

### Properties

- [booleanAttributes](CredentialBuilder.md#booleanattributes)
- [configData](CredentialBuilder.md#configdata)
- [dateAttributes](CredentialBuilder.md#dateattributes)
- [dateTimeAttributes](CredentialBuilder.md#datetimeattributes)
- [decimalAttributes](CredentialBuilder.md#decimalattributes)
- [expiration](CredentialBuilder.md#expiration)
- [holderDid](CredentialBuilder.md#holderdid)
- [integerAttributes](CredentialBuilder.md#integerattributes)
- [key](CredentialBuilder.md#key)
- [schemaId](CredentialBuilder.md#schemaid)
- [stringAttributes](CredentialBuilder.md#stringattributes)
- [version](CredentialBuilder.md#version)

### Methods

- [build](CredentialBuilder.md#build)
- [withBooleanAttribute](CredentialBuilder.md#withbooleanattribute)
- [withDateAttribute](CredentialBuilder.md#withdateattribute)
- [withDateTimeAttribute](CredentialBuilder.md#withdatetimeattribute)
- [withDecimalAttribute](CredentialBuilder.md#withdecimalattribute)
- [withIntegerAttribute](CredentialBuilder.md#withintegerattribute)
- [withStringAttribute](CredentialBuilder.md#withstringattribute)

## Constructors

### constructor

• **new CredentialBuilder**(`issuer`, `schemaId`, `holderDid`, `expiration`, `version`, `configData`): [`CredentialBuilder`](CredentialBuilder.md)

Creates a new CredentialBuilder instance with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `issuer` | [`Issuer`](Issuer.md) |
| `schemaId` | `string` |
| `holderDid` | `string` |
| `expiration` | `number` |
| `version` | `number` |
| `configData` | `ConfigData` |

#### Returns

[`CredentialBuilder`](CredentialBuilder.md)

#### Defined in

[entity/identity/credential_builder.ts:49](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/identity/credential_builder.ts#L49)

## Properties

### booleanAttributes

• **booleanAttributes**: `BooleanAttribute`[]

#### Defined in

[entity/identity/credential_builder.ts:36](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/identity/credential_builder.ts#L36)

___

### configData

• **configData**: `ConfigData`

#### Defined in

[entity/identity/credential_builder.ts:31](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/identity/credential_builder.ts#L31)

___

### dateAttributes

• **dateAttributes**: `DateAttribute`[]

#### Defined in

[entity/identity/credential_builder.ts:37](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/identity/credential_builder.ts#L37)

___

### dateTimeAttributes

• **dateTimeAttributes**: `DateTimeAttribute`[]

#### Defined in

[entity/identity/credential_builder.ts:38](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/identity/credential_builder.ts#L38)

___

### decimalAttributes

• **decimalAttributes**: `DecimalAttribute`[]

#### Defined in

[entity/identity/credential_builder.ts:35](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/identity/credential_builder.ts#L35)

___

### expiration

• **expiration**: `number`

#### Defined in

[entity/identity/credential_builder.ts:28](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/identity/credential_builder.ts#L28)

___

### holderDid

• **holderDid**: `string`

#### Defined in

[entity/identity/credential_builder.ts:27](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/identity/credential_builder.ts#L27)

___

### integerAttributes

• **integerAttributes**: `IntegerAttribute`[]

#### Defined in

[entity/identity/credential_builder.ts:34](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/identity/credential_builder.ts#L34)

___

### key

• `Optional` **key**: `Key`

#### Defined in

[entity/identity/credential_builder.ts:30](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/identity/credential_builder.ts#L30)

___

### schemaId

• **schemaId**: `string`

#### Defined in

[entity/identity/credential_builder.ts:26](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/identity/credential_builder.ts#L26)

___

### stringAttributes

• **stringAttributes**: `StringAttribute`[]

#### Defined in

[entity/identity/credential_builder.ts:33](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/identity/credential_builder.ts#L33)

___

### version

• **version**: `number`

#### Defined in

[entity/identity/credential_builder.ts:29](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/identity/credential_builder.ts#L29)

## Methods

### build

▸ **build**(): `Promise`\<[`CredentialReceipt`](CredentialReceipt.md)\>

Creates and returns a Credential using the specified attributes.

#### Returns

`Promise`\<[`CredentialReceipt`](CredentialReceipt.md)\>

#### Defined in

[entity/identity/credential_builder.ts:142](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/identity/credential_builder.ts#L142)

___

### withBooleanAttribute

▸ **withBooleanAttribute**(`key`, `value`): [`CredentialBuilder`](CredentialBuilder.md)

Adds a boolean attribute to the CredentialBuilder.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `boolean` |

#### Returns

[`CredentialBuilder`](CredentialBuilder.md)

#### Defined in

[entity/identity/credential_builder.ts:111](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/identity/credential_builder.ts#L111)

___

### withDateAttribute

▸ **withDateAttribute**(`key`, `value`): [`CredentialBuilder`](CredentialBuilder.md)

Adds a date attribute to the CredentialBuilder.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `Date` |

#### Returns

[`CredentialBuilder`](CredentialBuilder.md)

#### Defined in

[entity/identity/credential_builder.ts:122](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/identity/credential_builder.ts#L122)

___

### withDateTimeAttribute

▸ **withDateTimeAttribute**(`key`, `value`): [`CredentialBuilder`](CredentialBuilder.md)

Adds a datetime attribute to the CredentialBuilder.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `Date` |

#### Returns

[`CredentialBuilder`](CredentialBuilder.md)

#### Defined in

[entity/identity/credential_builder.ts:133](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/identity/credential_builder.ts#L133)

___

### withDecimalAttribute

▸ **withDecimalAttribute**(`key`, `value`): [`CredentialBuilder`](CredentialBuilder.md)

Adds a decimal attribute to the CredentialBuilder.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `number` |

#### Returns

[`CredentialBuilder`](CredentialBuilder.md)

#### Defined in

[entity/identity/credential_builder.ts:100](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/identity/credential_builder.ts#L100)

___

### withIntegerAttribute

▸ **withIntegerAttribute**(`key`, `value`): [`CredentialBuilder`](CredentialBuilder.md)

Adds an integer attribute to the CredentialBuilder.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `number` |

#### Returns

[`CredentialBuilder`](CredentialBuilder.md)

#### Defined in

[entity/identity/credential_builder.ts:89](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/identity/credential_builder.ts#L89)

___

### withStringAttribute

▸ **withStringAttribute**(`key`, `value`): [`CredentialBuilder`](CredentialBuilder.md)

Adds a string attribute to the CredentialBuilder.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `string` |

#### Returns

[`CredentialBuilder`](CredentialBuilder.md)

#### Defined in

[entity/identity/credential_builder.ts:78](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/identity/credential_builder.ts#L78)
