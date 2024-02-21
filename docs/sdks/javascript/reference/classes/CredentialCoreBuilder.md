[@bloock/sdk](../index.md) / CredentialCoreBuilder

# Class: CredentialCoreBuilder

Helps construct credentials by specifying various attributes.

## Table of contents

### Constructors

- [constructor](CredentialCoreBuilder.md#constructor)

### Properties

- [booleanAttributes](CredentialCoreBuilder.md#booleanattributes)
- [configData](CredentialCoreBuilder.md#configdata)
- [dateAttributes](CredentialCoreBuilder.md#dateattributes)
- [dateTimeAttributes](CredentialCoreBuilder.md#datetimeattributes)
- [decimalAttributes](CredentialCoreBuilder.md#decimalattributes)
- [expiration](CredentialCoreBuilder.md#expiration)
- [holderDid](CredentialCoreBuilder.md#holderdid)
- [integerAttributes](CredentialCoreBuilder.md#integerattributes)
- [issuerDid](CredentialCoreBuilder.md#issuerdid)
- [key](CredentialCoreBuilder.md#key)
- [schemaId](CredentialCoreBuilder.md#schemaid)
- [stringAttributes](CredentialCoreBuilder.md#stringattributes)
- [version](CredentialCoreBuilder.md#version)

### Methods

- [build](CredentialCoreBuilder.md#build)
- [withBoleanAttribute](CredentialCoreBuilder.md#withboleanattribute)
- [withDateAttribute](CredentialCoreBuilder.md#withdateattribute)
- [withDateTimeAttribute](CredentialCoreBuilder.md#withdatetimeattribute)
- [withDecimalAttribute](CredentialCoreBuilder.md#withdecimalattribute)
- [withIntegerAttribute](CredentialCoreBuilder.md#withintegerattribute)
- [withStringAttribute](CredentialCoreBuilder.md#withstringattribute)

## Constructors

### constructor

• **new CredentialCoreBuilder**(`issuer`, `schemaId`, `holderDid`, `expiration`, `version`, `configData`): [`CredentialCoreBuilder`](CredentialCoreBuilder.md)

Creates a new CredentialCoreBuilder instance with the specified parameters.

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

[`CredentialCoreBuilder`](CredentialCoreBuilder.md)

#### Defined in

[entity/identity/credential_core_builder.ts:50](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/credential_core_builder.ts#L50)

## Properties

### booleanAttributes

• **booleanAttributes**: `BooleanAttribute`[]

#### Defined in

[entity/identity/credential_core_builder.ts:37](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/credential_core_builder.ts#L37)

___

### configData

• **configData**: `ConfigData`

#### Defined in

[entity/identity/credential_core_builder.ts:32](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/credential_core_builder.ts#L32)

___

### dateAttributes

• **dateAttributes**: `DateAttribute`[]

#### Defined in

[entity/identity/credential_core_builder.ts:38](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/credential_core_builder.ts#L38)

___

### dateTimeAttributes

• **dateTimeAttributes**: `DateTimeAttribute`[]

#### Defined in

[entity/identity/credential_core_builder.ts:39](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/credential_core_builder.ts#L39)

___

### decimalAttributes

• **decimalAttributes**: `DecimalAttribute`[]

#### Defined in

[entity/identity/credential_core_builder.ts:36](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/credential_core_builder.ts#L36)

___

### expiration

• **expiration**: `number`

#### Defined in

[entity/identity/credential_core_builder.ts:29](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/credential_core_builder.ts#L29)

___

### holderDid

• **holderDid**: `string`

#### Defined in

[entity/identity/credential_core_builder.ts:28](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/credential_core_builder.ts#L28)

___

### integerAttributes

• **integerAttributes**: `IntegerAttribute`[]

#### Defined in

[entity/identity/credential_core_builder.ts:35](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/credential_core_builder.ts#L35)

___

### issuerDid

• **issuerDid**: `string`

#### Defined in

[entity/identity/credential_core_builder.ts:27](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/credential_core_builder.ts#L27)

___

### key

• `Optional` **key**: `Key`

#### Defined in

[entity/identity/credential_core_builder.ts:31](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/credential_core_builder.ts#L31)

___

### schemaId

• **schemaId**: `string`

#### Defined in

[entity/identity/credential_core_builder.ts:26](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/credential_core_builder.ts#L26)

___

### stringAttributes

• **stringAttributes**: `StringAttribute`[]

#### Defined in

[entity/identity/credential_core_builder.ts:34](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/credential_core_builder.ts#L34)

___

### version

• **version**: `number`

#### Defined in

[entity/identity/credential_core_builder.ts:30](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/credential_core_builder.ts#L30)

## Methods

### build

▸ **build**(): `Promise`\<[`CredentialReceipt`](CredentialReceipt.md)\>

Creates and returns a Credential using the specified attributes.

#### Returns

`Promise`\<[`CredentialReceipt`](CredentialReceipt.md)\>

#### Defined in

[entity/identity/credential_core_builder.ts:144](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/credential_core_builder.ts#L144)

___

### withBoleanAttribute

▸ **withBoleanAttribute**(`key`, `value`): [`CredentialCoreBuilder`](CredentialCoreBuilder.md)

Adds a boolean attribute to the CredentialCoreBuilder.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `boolean` |

#### Returns

[`CredentialCoreBuilder`](CredentialCoreBuilder.md)

#### Defined in

[entity/identity/credential_core_builder.ts:113](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/credential_core_builder.ts#L113)

___

### withDateAttribute

▸ **withDateAttribute**(`key`, `value`): [`CredentialCoreBuilder`](CredentialCoreBuilder.md)

Adds a date attribute to the CredentialCoreBuilder.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `Date` |

#### Returns

[`CredentialCoreBuilder`](CredentialCoreBuilder.md)

#### Defined in

[entity/identity/credential_core_builder.ts:124](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/credential_core_builder.ts#L124)

___

### withDateTimeAttribute

▸ **withDateTimeAttribute**(`key`, `value`): [`CredentialCoreBuilder`](CredentialCoreBuilder.md)

Adds a datetime attribute to the CredentialCoreBuilder.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `Date` |

#### Returns

[`CredentialCoreBuilder`](CredentialCoreBuilder.md)

#### Defined in

[entity/identity/credential_core_builder.ts:135](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/credential_core_builder.ts#L135)

___

### withDecimalAttribute

▸ **withDecimalAttribute**(`key`, `value`): [`CredentialCoreBuilder`](CredentialCoreBuilder.md)

Adds a decimal attribute to the CredentialCoreBuilder.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `number` |

#### Returns

[`CredentialCoreBuilder`](CredentialCoreBuilder.md)

#### Defined in

[entity/identity/credential_core_builder.ts:102](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/credential_core_builder.ts#L102)

___

### withIntegerAttribute

▸ **withIntegerAttribute**(`key`, `value`): [`CredentialCoreBuilder`](CredentialCoreBuilder.md)

Adds an integer attribute to the CredentialCoreBuilder.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `number` |

#### Returns

[`CredentialCoreBuilder`](CredentialCoreBuilder.md)

#### Defined in

[entity/identity/credential_core_builder.ts:91](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/credential_core_builder.ts#L91)

___

### withStringAttribute

▸ **withStringAttribute**(`key`, `value`): [`CredentialCoreBuilder`](CredentialCoreBuilder.md)

Adds a string attribute to the CredentialCoreBuilder.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `string` |

#### Returns

[`CredentialCoreBuilder`](CredentialCoreBuilder.md)

#### Defined in

[entity/identity/credential_core_builder.ts:80](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/credential_core_builder.ts#L80)
