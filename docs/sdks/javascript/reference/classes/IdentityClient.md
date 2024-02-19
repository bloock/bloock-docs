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

[client/identity.ts:42](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/client/identity.ts#L42)

## Properties

### bridge

• `Private` **bridge**: `BloockBridge`

#### Defined in

[client/identity.ts:35](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/client/identity.ts#L35)

___

### configData

• `Private` **configData**: `ConfigData`

#### Defined in

[client/identity.ts:36](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/client/identity.ts#L36)

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

[client/identity.ts:194](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/client/identity.ts#L194)

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

[client/identity.ts:148](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/client/identity.ts#L148)

___

### createHolder

▸ **createHolder**(`holderKey`, `didType?`): `Promise`\<[`Holder`](Holder.md)\>

Creates a new holder identity.

#### Parameters

| Name | Type |
| :------ | :------ |
| `holderKey` | [`Key`](Key.md) |
| `didType?` | [`DidType`](DidType.md) |

#### Returns

`Promise`\<[`Holder`](Holder.md)\>

#### Defined in

[client/identity.ts:53](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/client/identity.ts#L53)

___

### createIssuer

▸ **createIssuer**(`issuerKey`, `publishInterval`, `didType?`, `name?`, `description?`, `image?`): `Promise`\<[`Issuer`](Issuer.md)\>

Creates a new issuer on the Bloock Identity service.

#### Parameters

| Name | Type |
| :------ | :------ |
| `issuerKey` | [`Key`](Key.md) |
| `publishInterval` | [`PublishIntervalParams`](../enums/PublishIntervalParams-1.md) |
| `didType?` | [`DidType`](DidType.md) |
| `name?` | `string` |
| `description?` | `string` |
| `image?` | `string` |

#### Returns

`Promise`\<[`Issuer`](Issuer.md)\>

#### Defined in

[client/identity.ts:84](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/client/identity.ts#L84)

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

[client/identity.ts:296](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/client/identity.ts#L296)

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

[client/identity.ts:217](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/client/identity.ts#L217)

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

[client/identity.ts:243](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/client/identity.ts#L243)

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

[client/identity.ts:168](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/client/identity.ts#L168)

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

[client/identity.ts:347](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/client/identity.ts#L347)

___

### importIssuer

▸ **importIssuer**(`issuerKey`, `didType?`): `Promise`\<[`Issuer`](Issuer.md)\>

Gets the issuer based on the issuer key and DID type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `issuerKey` | [`Key`](Key.md) |
| `didType?` | [`DidType`](DidType.md) |

#### Returns

`Promise`\<[`Issuer`](Issuer.md)\>

#### Defined in

[client/identity.ts:119](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/client/identity.ts#L119)

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

[client/identity.ts:270](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/client/identity.ts#L270)

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

[client/identity.ts:321](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/client/identity.ts#L321)
