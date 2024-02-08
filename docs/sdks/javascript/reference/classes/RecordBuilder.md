[@bloock/sdk](../index.md) / RecordBuilder

# Class: RecordBuilder

Assists in constructing records with various configurations.

## Table of contents

### Constructors

- [constructor](RecordBuilder.md#constructor)

### Properties

- [configData](RecordBuilder.md#configdata)
- [decrypter](RecordBuilder.md#decrypter)
- [encrypter](RecordBuilder.md#encrypter)
- [payload](RecordBuilder.md#payload)
- [payloadType](RecordBuilder.md#payloadtype)
- [signer](RecordBuilder.md#signer)

### Methods

- [build](RecordBuilder.md#build)
- [getDetails](RecordBuilder.md#getdetails)
- [withDecrypter](RecordBuilder.md#withdecrypter)
- [withEncrypter](RecordBuilder.md#withencrypter)
- [withSigner](RecordBuilder.md#withsigner)

## Constructors

### constructor

• **new RecordBuilder**(`payload`, `payloadType`, `configData`): [`RecordBuilder`](RecordBuilder.md)

Creates a new RecordBuilder with default configuration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `any` |
| `payloadType` | `RecordTypes` |
| `configData` | `ConfigData` |

#### Returns

[`RecordBuilder`](RecordBuilder.md)

#### Defined in

[client/record.ts:123](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/client/record.ts#L123)

## Properties

### configData

• **configData**: `ConfigData`

#### Defined in

[client/record.ts:115](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/client/record.ts#L115)

___

### decrypter

• **decrypter**: `undefined` \| `Encrypter`

#### Defined in

[client/record.ts:113](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/client/record.ts#L113)

___

### encrypter

• **encrypter**: `undefined` \| `Encrypter`

#### Defined in

[client/record.ts:112](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/client/record.ts#L112)

___

### payload

• **payload**: `any`

#### Defined in

[client/record.ts:109](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/client/record.ts#L109)

___

### payloadType

• **payloadType**: `RecordTypes`

#### Defined in

[client/record.ts:110](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/client/record.ts#L110)

___

### signer

• **signer**: `undefined` \| `Signer`

#### Defined in

[client/record.ts:111](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/client/record.ts#L111)

## Methods

### build

▸ **build**(): `Promise`\<[`Record`](Record.md)\>

Constructs a record based on the RecordBuilder's configuration.

#### Returns

`Promise`\<[`Record`](Record.md)\>

#### Defined in

[client/record.ts:163](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/client/record.ts#L163)

___

### getDetails

▸ **getDetails**(): `Promise`\<`RecordDetails`\>

Gets details about other Bloock services (Integrity, Authenticity, Encryption, Availability) configured in the RecordBuilder.

#### Returns

`Promise`\<`RecordDetails`\>

#### Defined in

[client/record.ts:307](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/client/record.ts#L307)

___

### withDecrypter

▸ **withDecrypter**(`decrypter`): [`RecordBuilder`](RecordBuilder.md)

Sets the decrypter for the RecordBuilder.

#### Parameters

| Name | Type |
| :------ | :------ |
| `decrypter` | [`Encrypter`](Encrypter.md) |

#### Returns

[`RecordBuilder`](RecordBuilder.md)

#### Defined in

[client/record.ts:154](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/client/record.ts#L154)

___

### withEncrypter

▸ **withEncrypter**(`encrypter`): [`RecordBuilder`](RecordBuilder.md)

Sets the encrypter for the RecordBuilder.

#### Parameters

| Name | Type |
| :------ | :------ |
| `encrypter` | [`Encrypter`](Encrypter.md) |

#### Returns

[`RecordBuilder`](RecordBuilder.md)

#### Defined in

[client/record.ts:144](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/client/record.ts#L144)

___

### withSigner

▸ **withSigner**(`signer`): [`RecordBuilder`](RecordBuilder.md)

Sets the signer for the RecordBuilder.

#### Parameters

| Name | Type |
| :------ | :------ |
| `signer` | [`Signer`](Signer.md) |

#### Returns

[`RecordBuilder`](RecordBuilder.md)

#### Defined in

[client/record.ts:134](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/client/record.ts#L134)
