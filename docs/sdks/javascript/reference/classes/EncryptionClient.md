[@bloock/sdk](../index.md) / EncryptionClient

# Class: EncryptionClient

Represents a client for interacting with the [Bloock Encryption service](https://dashboard.bloock.com/login).

## Table of contents

### Constructors

- [constructor](EncryptionClient.md#constructor)

### Properties

- [bridge](EncryptionClient.md#bridge)
- [configData](EncryptionClient.md#configdata)

### Methods

- [decrypt](EncryptionClient.md#decrypt)
- [encrypt](EncryptionClient.md#encrypt)
- [generateRsaKeyPair](EncryptionClient.md#generatersakeypair)
- [getEncryptionAlg](EncryptionClient.md#getencryptionalg)

## Constructors

### constructor

• **new EncryptionClient**(`configData?`): [`EncryptionClient`](EncryptionClient.md)

Creates a new instance of the EncryptionClient with default configuration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `configData?` | `ConfigData` |

#### Returns

[`EncryptionClient`](EncryptionClient.md)

#### Defined in

[client/encryption.ts:26](https://github.com/bloock/bloock-sdk/blob/cd5373f/languages/js/src/client/encryption.ts#L26)

## Properties

### bridge

• `Private` **bridge**: `BloockBridge`

#### Defined in

[client/encryption.ts:19](https://github.com/bloock/bloock-sdk/blob/cd5373f/languages/js/src/client/encryption.ts#L19)

___

### configData

• `Private` **configData**: `ConfigData`

#### Defined in

[client/encryption.ts:20](https://github.com/bloock/bloock-sdk/blob/cd5373f/languages/js/src/client/encryption.ts#L20)

## Methods

### decrypt

▸ **decrypt**(`record`, `decrypter`): `Promise`\<[`Record`](Record.md)\>

Decrypts a Bloock record using the specified decrypter.

#### Parameters

| Name | Type |
| :------ | :------ |
| `record` | [`Record`](Record.md) |
| `decrypter` | [`Encrypter`](Encrypter.md) |

#### Returns

`Promise`\<[`Record`](Record.md)\>

#### Defined in

[client/encryption.ts:83](https://github.com/bloock/bloock-sdk/blob/cd5373f/languages/js/src/client/encryption.ts#L83)

___

### encrypt

▸ **encrypt**(`record`, `encrypter`): `Promise`\<[`Record`](Record.md)\>

Encrypts a Bloock record using the specified encrypter.

#### Parameters

| Name | Type |
| :------ | :------ |
| `record` | [`Record`](Record.md) |
| `encrypter` | [`Encrypter`](Encrypter.md) |

#### Returns

`Promise`\<[`Record`](Record.md)\>

#### Defined in

[client/encryption.ts:59](https://github.com/bloock/bloock-sdk/blob/cd5373f/languages/js/src/client/encryption.ts#L59)

___

### generateRsaKeyPair

▸ **generateRsaKeyPair**(): `Promise`\<[`KeyPair`](KeyPair.md)\>

GenerateRsaKeyPair generates an RSA key pair for encryption.

#### Returns

`Promise`\<[`KeyPair`](KeyPair.md)\>

An object containing both the public and the private key

**`Deprecated`**

Will be deleted in future versions. Use KeyClient.newLocalKey function instead.

#### Defined in

[client/encryption.ts:36](https://github.com/bloock/bloock-sdk/blob/cd5373f/languages/js/src/client/encryption.ts#L36)

___

### getEncryptionAlg

▸ **getEncryptionAlg**(`record`): `Promise`\<[`EncryptionAlg`](../enums/EncryptionAlg-1.md)\>

Gets the encryption algorithm used for a Bloock record.

#### Parameters

| Name | Type |
| :------ | :------ |
| `record` | [`Record`](Record.md) |

#### Returns

`Promise`\<[`EncryptionAlg`](../enums/EncryptionAlg-1.md)\>

#### Defined in

[client/encryption.ts:106](https://github.com/bloock/bloock-sdk/blob/cd5373f/languages/js/src/client/encryption.ts#L106)
