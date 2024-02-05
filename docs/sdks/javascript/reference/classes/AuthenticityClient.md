[@bloock/sdk](../index.md) / AuthenticityClient

# Class: AuthenticityClient

Represents a client for interacting with the [Bloock Authenticity service](https://dashboard.bloock.com/login).

## Table of contents

### Constructors

- [constructor](AuthenticityClient.md#constructor)

### Properties

- [bridge](AuthenticityClient.md#bridge)
- [configData](AuthenticityClient.md#configdata)

### Methods

- [generateEcdsaKeyPair](AuthenticityClient.md#generateecdsakeypair)
- [getSignatures](AuthenticityClient.md#getsignatures)
- [sign](AuthenticityClient.md#sign)
- [verify](AuthenticityClient.md#verify)

## Constructors

### constructor

• **new AuthenticityClient**(`configData?`): [`AuthenticityClient`](AuthenticityClient.md)

Creates a new instance of the AuthenticityClient with default configuration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `configData?` | `ConfigData` |

#### Returns

[`AuthenticityClient`](AuthenticityClient.md)

#### Defined in

[client/authenticity.ts:27](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/client/authenticity.ts#L27)

## Properties

### bridge

• `Private` **bridge**: `BloockBridge`

#### Defined in

[client/authenticity.ts:20](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/client/authenticity.ts#L20)

___

### configData

• `Private` **configData**: `ConfigData`

#### Defined in

[client/authenticity.ts:21](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/client/authenticity.ts#L21)

## Methods

### generateEcdsaKeyPair

▸ **generateEcdsaKeyPair**(): `Promise`\<[`KeyPair`](KeyPair.md)\>

Generates ECDSA key pair for signing records.

#### Returns

`Promise`\<[`KeyPair`](KeyPair.md)\>

An object containing both the public and the private key

**`Deprecated`**

Will be deleted in future versions. Use KeyClient.newLocalKey function instead.

#### Defined in

[client/authenticity.ts:37](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/client/authenticity.ts#L37)

___

### getSignatures

▸ **getSignatures**(`record`): `Promise`\<[`Signature`](Signature.md)[]\>

Gets the signatures associated with a Bloock record.

#### Parameters

| Name | Type |
| :------ | :------ |
| `record` | [`Record`](Record.md) |

#### Returns

`Promise`\<[`Signature`](Signature.md)[]\>

#### Defined in

[client/authenticity.ts:105](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/client/authenticity.ts#L105)

___

### sign

▸ **sign**(`record`, `signer`): `Promise`\<[`Signature`](Signature.md)\>

Signs a Bloock record using the specified signer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `record` | [`Record`](Record.md) |
| `signer` | [`Signer`](Signer.md) |

#### Returns

`Promise`\<[`Signature`](Signature.md)\>

#### Defined in

[client/authenticity.ts:60](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/client/authenticity.ts#L60)

___

### verify

▸ **verify**(`record`): `Promise`\<`boolean`\>

Verifies the authenticity of a Bloock record.

#### Parameters

| Name | Type |
| :------ | :------ |
| `record` | [`Record`](Record.md) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[client/authenticity.ts:83](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/client/authenticity.ts#L83)
