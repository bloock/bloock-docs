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
- [issuerDid](CredentialBuilder.md#issuerdid)
- [schemaId](CredentialBuilder.md#schemaid)
- [signer](CredentialBuilder.md#signer)
- [stringAttributes](CredentialBuilder.md#stringattributes)
- [version](CredentialBuilder.md#version)

### Methods

- [build](CredentialBuilder.md#build)
- [withBoleanAttribute](CredentialBuilder.md#withboleanattribute)
- [withDateAttribute](CredentialBuilder.md#withdateattribute)
- [withDateTimeAttribute](CredentialBuilder.md#withdatetimeattribute)
- [withDecimalAttribute](CredentialBuilder.md#withdecimalattribute)
- [withIntegerAttribute](CredentialBuilder.md#withintegerattribute)
- [withSigner](CredentialBuilder.md#withsigner)
- [withStringAttribute](CredentialBuilder.md#withstringattribute)

## Constructors

### constructor

• **new CredentialBuilder**(`schemaId`, `issuerDid`, `holderDid`, `expiration`, `version`, `configData`): [`CredentialBuilder`](CredentialBuilder.md)

Creates a new CredentialBuilder instance with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaId` | `string` |
| `issuerDid` | `string` |
| `holderDid` | `string` |
| `expiration` | `number` |
| `version` | `number` |
| `configData` | `ConfigData` |

#### Returns

[`CredentialBuilder`](CredentialBuilder.md)

#### Defined in

[entity/identity_v2/credential_builder.ts:50](https://github.com/bloock/bloock-sdk/blob/d82279b/languages/js/src/entity/identity_v2/credential_builder.ts#L50)

## Properties

### booleanAttributes

• **booleanAttributes**: `BooleanAttributeV2`[]

#### Defined in

[entity/identity_v2/credential_builder.ts:37](https://github.com/bloock/bloock-sdk/blob/d82279b/languages/js/src/entity/identity_v2/credential_builder.ts#L37)

___

### configData

• **configData**: `ConfigData`

#### Defined in

[entity/identity_v2/credential_builder.ts:32](https://github.com/bloock/bloock-sdk/blob/d82279b/languages/js/src/entity/identity_v2/credential_builder.ts#L32)

___

### dateAttributes

• **dateAttributes**: `DateAttributeV2`[]

#### Defined in

[entity/identity_v2/credential_builder.ts:38](https://github.com/bloock/bloock-sdk/blob/d82279b/languages/js/src/entity/identity_v2/credential_builder.ts#L38)

___

### dateTimeAttributes

• **dateTimeAttributes**: `DateTimeAttributeV2`[]

#### Defined in

[entity/identity_v2/credential_builder.ts:39](https://github.com/bloock/bloock-sdk/blob/d82279b/languages/js/src/entity/identity_v2/credential_builder.ts#L39)

___

### decimalAttributes

• **decimalAttributes**: `DecimalAttributeV2`[]

#### Defined in

[entity/identity_v2/credential_builder.ts:36](https://github.com/bloock/bloock-sdk/blob/d82279b/languages/js/src/entity/identity_v2/credential_builder.ts#L36)

___

### expiration

• **expiration**: `number`

#### Defined in

[entity/identity_v2/credential_builder.ts:29](https://github.com/bloock/bloock-sdk/blob/d82279b/languages/js/src/entity/identity_v2/credential_builder.ts#L29)

___

### holderDid

• **holderDid**: `string`

#### Defined in

[entity/identity_v2/credential_builder.ts:28](https://github.com/bloock/bloock-sdk/blob/d82279b/languages/js/src/entity/identity_v2/credential_builder.ts#L28)

___

### integerAttributes

• **integerAttributes**: `IntegerAttributeV2`[]

#### Defined in

[entity/identity_v2/credential_builder.ts:35](https://github.com/bloock/bloock-sdk/blob/d82279b/languages/js/src/entity/identity_v2/credential_builder.ts#L35)

___

### issuerDid

• **issuerDid**: `string`

#### Defined in

[entity/identity_v2/credential_builder.ts:27](https://github.com/bloock/bloock-sdk/blob/d82279b/languages/js/src/entity/identity_v2/credential_builder.ts#L27)

___

### schemaId

• **schemaId**: `string`

#### Defined in

[entity/identity_v2/credential_builder.ts:26](https://github.com/bloock/bloock-sdk/blob/d82279b/languages/js/src/entity/identity_v2/credential_builder.ts#L26)

___

### signer

• `Optional` **signer**: `Signer`

#### Defined in

[entity/identity_v2/credential_builder.ts:31](https://github.com/bloock/bloock-sdk/blob/d82279b/languages/js/src/entity/identity_v2/credential_builder.ts#L31)

___

### stringAttributes

• **stringAttributes**: `StringAttributeV2`[]

#### Defined in

[entity/identity_v2/credential_builder.ts:34](https://github.com/bloock/bloock-sdk/blob/d82279b/languages/js/src/entity/identity_v2/credential_builder.ts#L34)

___

### version

• **version**: `number`

#### Defined in

[entity/identity_v2/credential_builder.ts:30](https://github.com/bloock/bloock-sdk/blob/d82279b/languages/js/src/entity/identity_v2/credential_builder.ts#L30)

## Methods

### build

▸ **build**(): `Promise`\<[`CredentialReceipt`](CredentialReceipt.md)\>

Creates and returns a Credential using the specified attributes.

#### Returns

`Promise`\<[`CredentialReceipt`](CredentialReceipt.md)\>

#### Defined in

[entity/identity_v2/credential_builder.ts:154](https://github.com/bloock/bloock-sdk/blob/d82279b/languages/js/src/entity/identity_v2/credential_builder.ts#L154)

___

### withBoleanAttribute

▸ **withBoleanAttribute**(`key`, `value`): [`CredentialBuilder`](CredentialBuilder.md)

Adds a boolean attribute to the CredentialBuilder.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `boolean` |

#### Returns

[`CredentialBuilder`](CredentialBuilder.md)

#### Defined in

[entity/identity_v2/credential_builder.ts:113](https://github.com/bloock/bloock-sdk/blob/d82279b/languages/js/src/entity/identity_v2/credential_builder.ts#L113)

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

[entity/identity_v2/credential_builder.ts:124](https://github.com/bloock/bloock-sdk/blob/d82279b/languages/js/src/entity/identity_v2/credential_builder.ts#L124)

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

[entity/identity_v2/credential_builder.ts:135](https://github.com/bloock/bloock-sdk/blob/d82279b/languages/js/src/entity/identity_v2/credential_builder.ts#L135)

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

[entity/identity_v2/credential_builder.ts:102](https://github.com/bloock/bloock-sdk/blob/d82279b/languages/js/src/entity/identity_v2/credential_builder.ts#L102)

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

[entity/identity_v2/credential_builder.ts:91](https://github.com/bloock/bloock-sdk/blob/d82279b/languages/js/src/entity/identity_v2/credential_builder.ts#L91)

___

### withSigner

▸ **withSigner**(`signer`): [`CredentialBuilder`](CredentialBuilder.md)

Sets the signer for the CredentialBuilder.

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | [`Signer`](Signer.md) |

#### Returns

[`CredentialBuilder`](CredentialBuilder.md)

#### Defined in

[entity/identity_v2/credential_builder.ts:145](https://github.com/bloock/bloock-sdk/blob/d82279b/languages/js/src/entity/identity_v2/credential_builder.ts#L145)

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

[entity/identity_v2/credential_builder.ts:80](https://github.com/bloock/bloock-sdk/blob/d82279b/languages/js/src/entity/identity_v2/credential_builder.ts#L80)
