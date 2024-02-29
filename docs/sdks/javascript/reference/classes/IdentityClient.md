[@bloock/sdk](../index.md) / IdentityClient

# Class: IdentityClient

Represents a client for interacting with the [Bloock Identity service](https://dashboard.bloock.com/login).

## Table of contents

### Constructors

- [constructor](IdentityClient.md#constructor)

### Properties

- [bridge](IdentityClient.md#bridge)
- [configData](IdentityClient.md#configdata)

### Methods

- [buildCredential](IdentityClient.md#buildcredential)
- [buildSchema](IdentityClient.md#buildschema)
- [createHolder](IdentityClient.md#createholder)
- [createIssuer](IdentityClient.md#createissuer)
- [createVerification](IdentityClient.md#createverification)
- [forcePublishIssuerState](IdentityClient.md#forcepublishissuerstate)
- [getCredential](IdentityClient.md#getcredential)
- [getCredentialOffer](IdentityClient.md#getcredentialoffer)
- [getCredentialProof](IdentityClient.md#getcredentialproof)
- [getSchema](IdentityClient.md#getschema)
- [getVerificationStatus](IdentityClient.md#getverificationstatus)
- [importIssuer](IdentityClient.md#importissuer)
- [revokeCredential](IdentityClient.md#revokecredential)
- [waitVerification](IdentityClient.md#waitverification)

## Constructors

### constructor

• **new IdentityClient**(`configData?`): [`IdentityClient`](IdentityClient.md)

Creates a new instance of the IdentityClient with default configuration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `configData?` | `ConfigData` |

#### Returns

[`IdentityClient`](IdentityClient.md)

#### Defined in

[client/identity.ts:44](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/client/identity.ts#L44)

## Properties

### bridge

• `Private` **bridge**: `BloockBridge`

#### Defined in

[client/identity.ts:37](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/client/identity.ts#L37)

___

### configData

• `Private` **configData**: `ConfigData`

#### Defined in

[client/identity.ts:38](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/client/identity.ts#L38)

## Methods

### buildCredential

▸ **buildCredential**(`issuer`, `schemaId`, `holderDid`, `expiration`, `version`): [`CredentialBuilder`](CredentialBuilder.md)

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

[`CredentialBuilder`](CredentialBuilder.md)

#### Defined in

[client/identity.ts:196](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/client/identity.ts#L196)

___

### buildSchema

▸ **buildSchema**(`displayName`, `schemaType`, `version`, `description`): [`SchemaBuilder`](SchemaBuilder.md)

Creates a new schema builder for defining a schema on the Bloock Identity service.

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayName` | `string` |
| `schemaType` | `string` |
| `version` | `string` |
| `description` | `string` |

#### Returns

[`SchemaBuilder`](SchemaBuilder.md)

#### Defined in

[client/identity.ts:150](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/client/identity.ts#L150)

___

### createHolder

▸ **createHolder**(`holderKey`, `didMethod`): `Promise`\<[`Holder`](Holder.md)\>

Creates a new holder identity.

#### Parameters

| Name | Type |
| :------ | :------ |
| `holderKey` | [`Key`](Key.md) |
| `didMethod` | [`DidMethod`](../enums/DidMethod-1.md) |

#### Returns

`Promise`\<[`Holder`](Holder.md)\>

#### Defined in

[client/identity.ts:55](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/client/identity.ts#L55)

___

### createIssuer

▸ **createIssuer**(`issuerKey`, `publishInterval`, `didMethod`, `name?`, `description?`, `image?`): `Promise`\<[`Issuer`](Issuer.md)\>

Creates a new issuer on the Bloock Identity service.

#### Parameters

| Name | Type |
| :------ | :------ |
| `issuerKey` | [`Key`](Key.md) |
| `publishInterval` | [`PublishIntervalParams`](../enums/PublishIntervalParams-1.md) |
| `didMethod` | [`DidMethod`](../enums/DidMethod-1.md) |
| `name?` | `string` |
| `description?` | `string` |
| `image?` | `string` |

#### Returns

`Promise`\<[`Issuer`](Issuer.md)\>

#### Defined in

[client/identity.ts:86](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/client/identity.ts#L86)

___

### createVerification

▸ **createVerification**(`proofRequest`): `Promise`\<[`VerificationReceipt`](VerificationReceipt.md)\>

Creates a new verification session on the identity managed API provided.

#### Parameters

| Name | Type |
| :------ | :------ |
| `proofRequest` | `string` |

#### Returns

`Promise`\<[`VerificationReceipt`](VerificationReceipt.md)\>

#### Defined in

[client/identity.ts:344](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/client/identity.ts#L344)

___

### forcePublishIssuerState

▸ **forcePublishIssuerState**(`issuer`): `Promise`\<[`IssuerStateReceipt`](IssuerStateReceipt.md)\>

Publishes the state of an issuer on the Bloock Identity service.

#### Parameters

| Name | Type |
| :------ | :------ |
| `issuer` | [`Issuer`](Issuer.md) |

#### Returns

`Promise`\<[`IssuerStateReceipt`](IssuerStateReceipt.md)\>

#### Defined in

[client/identity.ts:265](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/client/identity.ts#L265)

___

### getCredential

▸ **getCredential**(`credentialId`): `Promise`\<[`Credential`](Credential.md)\>

Retrieves the Verifiable Credential entity based on the credential ID (UUID). (ex: 1bf0c79e-55e6-4f14-aa9d-fb55619ba0cf)

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentialId` | `string` |

#### Returns

`Promise`\<[`Credential`](Credential.md)\>

#### Defined in

[client/identity.ts:218](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/client/identity.ts#L218)

___

### getCredentialOffer

▸ **getCredentialOffer**(`issuer`, `credentialId`): `Promise`\<`string`\>

Retrieves the json raw offer based on the credential ID (UUID). (ex: 1bf0c79e-55e6-4f14-aa9d-fb55619ba0cf)

#### Parameters

| Name | Type |
| :------ | :------ |
| `issuer` | [`Issuer`](Issuer.md) |
| `credentialId` | `string` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[client/identity.ts:241](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/client/identity.ts#L241)

___

### getCredentialProof

▸ **getCredentialProof**(`issuerDid`, `credentialId`): `Promise`\<[`CredentialProof`](CredentialProof.md)\>

Gets the proof of a credential on the Bloock Identity service.

#### Parameters

| Name | Type |
| :------ | :------ |
| `issuerDid` | `string` |
| `credentialId` | `string` |

#### Returns

`Promise`\<[`CredentialProof`](CredentialProof.md)\>

#### Defined in

[client/identity.ts:291](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/client/identity.ts#L291)

___

### getSchema

▸ **getSchema**(`id`): `Promise`\<[`Schema`](Schema.md)\>

Gets a schema from the Bloock Identity service based on the schema ID (ex: Qma1t4uzbnB93E4rasNdu5UWMDh5qg3wMkPm68cnEyfnoM).

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<[`Schema`](Schema.md)\>

#### Defined in

[client/identity.ts:170](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/client/identity.ts#L170)

___

### getVerificationStatus

▸ **getVerificationStatus**(`sessionID`): `Promise`\<`boolean`\>

Gets the status of a verification session on the identity managed API provided.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionID` | `number` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[client/identity.ts:395](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/client/identity.ts#L395)

___

### importIssuer

▸ **importIssuer**(`issuerKey`, `didMethod`): `Promise`\<[`Issuer`](Issuer.md)\>

Gets the issuer based on the issuer key and DID method.

#### Parameters

| Name | Type |
| :------ | :------ |
| `issuerKey` | [`Key`](Key.md) |
| `didMethod` | [`DidMethod`](../enums/DidMethod-1.md) |

#### Returns

`Promise`\<[`Issuer`](Issuer.md)\>

#### Defined in

[client/identity.ts:121](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/client/identity.ts#L121)

___

### revokeCredential

▸ **revokeCredential**(`credential`, `issuer`): `Promise`\<`boolean`\>

Revokes a credential on the Bloock Identity service.

#### Parameters

| Name | Type |
| :------ | :------ |
| `credential` | [`Credential`](Credential.md) |
| `issuer` | [`Issuer`](Issuer.md) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[client/identity.ts:318](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/client/identity.ts#L318)

___

### waitVerification

▸ **waitVerification**(`sessionID`, `timeout?`): `Promise`\<`boolean`\>

Waits for the completion of a verification session on the identity managed API provided.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionID` | `number` |
| `timeout?` | `number` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[client/identity.ts:369](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/client/identity.ts#L369)
