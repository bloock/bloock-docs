[@bloock/sdk](../index.md) / IdentityCoreClient

# Class: IdentityCoreClient

Represents a client for interacting with the [Bloock Identity service](https://dashboard.bloock.com/login).

## Table of contents

### Constructors

- [constructor](IdentityCoreClient.md#constructor)

### Properties

- [configData](IdentityCoreClient.md#configdata)

### Methods

- [buildCredential](IdentityCoreClient.md#buildcredential)

## Constructors

### constructor

• **new IdentityCoreClient**(`configData?`): [`IdentityCoreClient`](IdentityCoreClient.md)

Creates a new instance of the IdentityCoreClient with default configuration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `configData?` | `ConfigData` |

#### Returns

[`IdentityCoreClient`](IdentityCoreClient.md)

#### Defined in

[client/identity_core.ts:15](https://github.com/bloock/bloock-sdk/blob/82af4b7/languages/js/src/client/identity_core.ts#L15)

## Properties

### configData

• `Private` **configData**: `ConfigData`

#### Defined in

[client/identity_core.ts:9](https://github.com/bloock/bloock-sdk/blob/82af4b7/languages/js/src/client/identity_core.ts#L9)

## Methods

### buildCredential

▸ **buildCredential**(`issuer`, `schemaId`, `holderDid`, `expiration`, `version`): [`CredentialCoreBuilder`](CredentialCoreBuilder.md)

Creates a new credential builder for defining a credential on the Bloock Identity service.

#### Parameters

| Name | Type |
| :------ | :------ |
| `issuer` | [`Issuer`](Issuer.md) |
| `schemaId` | `string` |
| `holderDid` | `string` |
| `expiration` | `number` |
| `version` | `number` |

#### Returns

[`CredentialCoreBuilder`](CredentialCoreBuilder.md)

#### Defined in

[client/identity_core.ts:28](https://github.com/bloock/bloock-sdk/blob/82af4b7/languages/js/src/client/identity_core.ts#L28)
