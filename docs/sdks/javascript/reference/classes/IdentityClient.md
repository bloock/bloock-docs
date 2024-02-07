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
- [createIdentity](IdentityClient.md#createidentity)
- [createIssuer](IdentityClient.md#createissuer)
- [createVerification](IdentityClient.md#createverification)
- [getCredentialProof](IdentityClient.md#getcredentialproof)
- [getIssuerByKey](IdentityClient.md#getissuerbykey)
- [getSchema](IdentityClient.md#getschema)
- [getVerificationStatus](IdentityClient.md#getverificationstatus)
- [publishIssuerState](IdentityClient.md#publishissuerstate)
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

[client/identity_v2.ts:41](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/client/identity_v2.ts#L41)

## Properties

### bridge

• `Private` **bridge**: `BloockBridge`

#### Defined in

[client/identity_v2.ts:34](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/client/identity_v2.ts#L34)

___

### configData

• `Private` **configData**: `ConfigData`

#### Defined in

[client/identity_v2.ts:35](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/client/identity_v2.ts#L35)

## Methods

### buildCredential

▸ **buildCredential**(`schemaId`, `issuerDid`, `holderDid`, `expiration`, `version`): [`CredentialBuilder`](CredentialBuilder.md)

Creates a new credential builder for defining a credential on the Bloock Identity service.

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaId` | `string` |
| `issuerDid` | `string` |
| `holderDid` | `string` |
| `expiration` | `number` |
| `version` | `number` |

#### Returns

[`CredentialBuilder`](CredentialBuilder.md)

#### Defined in

[client/identity_v2.ts:193](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/client/identity_v2.ts#L193)

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

[client/identity_v2.ts:147](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/client/identity_v2.ts#L147)

___

### createIdentity

▸ **createIdentity**(`issuerKey`, `didParams?`): `Promise`\<`string`\>

Creates a new identity.

#### Parameters

| Name | Type |
| :------ | :------ |
| `issuerKey` | [`IdentityKey`](../interfaces/IdentityKey.md) |
| `didParams?` | [`DidParams`](DidParams.md) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[client/identity_v2.ts:52](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/client/identity_v2.ts#L52)

___

### createIssuer

▸ **createIssuer**(`issuerKey`, `publishInterval`, `issuerParams?`, `name?`, `description?`, `image?`): `Promise`\<`string`\>

Creates a new issuer on the Bloock Identity service.

#### Parameters

| Name | Type |
| :------ | :------ |
| `issuerKey` | [`IdentityKey`](../interfaces/IdentityKey.md) |
| `publishInterval` | [`PublishIntervalParams`](../enums/PublishIntervalParams-1.md) |
| `issuerParams?` | [`DidParams`](DidParams.md) |
| `name?` | `string` |
| `description?` | `string` |
| `image?` | `string` |

#### Returns

`Promise`\<`string`\>

#### Defined in

[client/identity_v2.ts:83](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/client/identity_v2.ts#L83)

___

### createVerification

▸ **createVerification**(`proofRequest`): `Promise`\<`VerificationReceipt`\>

Creates a new verification session on the identity managed API provided.

#### Parameters

| Name | Type |
| :------ | :------ |
| `proofRequest` | `string` |

#### Returns

`Promise`\<`VerificationReceipt`\>

#### Defined in

[client/identity_v2.ts:296](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/client/identity_v2.ts#L296)

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

[client/identity_v2.ts:243](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/client/identity_v2.ts#L243)

___

### getIssuerByKey

▸ **getIssuerByKey**(`issuerKey`, `issuerParams?`): `Promise`\<`string`\>

Gets the DID of an issuer based on the issuer key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `issuerKey` | [`IdentityKey`](../interfaces/IdentityKey.md) |
| `issuerParams?` | [`DidParams`](DidParams.md) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[client/identity_v2.ts:118](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/client/identity_v2.ts#L118)

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

[client/identity_v2.ts:167](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/client/identity_v2.ts#L167)

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

[client/identity_v2.ts:347](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/client/identity_v2.ts#L347)

___

### publishIssuerState

▸ **publishIssuerState**(`issuerDid`, `signer`): `Promise`\<[`IssuerStateReceipt`](IssuerStateReceipt.md)\>

Publishes the state of an issuer on the Bloock Identity service.

#### Parameters

| Name | Type |
| :------ | :------ |
| `issuerDid` | `string` |
| `signer` | [`Signer`](Signer.md) |

#### Returns

`Promise`\<[`IssuerStateReceipt`](IssuerStateReceipt.md)\>

#### Defined in

[client/identity_v2.ts:216](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/client/identity_v2.ts#L216)

___

### revokeCredential

▸ **revokeCredential**(`credential`, `signer`): `Promise`\<`boolean`\>

Revokes a credential on the Bloock Identity service.

#### Parameters

| Name | Type |
| :------ | :------ |
| `credential` | [`CredentialV2`](CredentialV2.md) |
| `signer` | [`Signer`](Signer.md) |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[client/identity_v2.ts:270](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/client/identity_v2.ts#L270)

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

[client/identity_v2.ts:321](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/client/identity_v2.ts#L321)
