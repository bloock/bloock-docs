[@bloock/sdk](../index.md) / IdentityLegacyClient

# Class: IdentityLegacyClient

## Table of contents

### Constructors

- [constructor](IdentityLegacyClient.md#constructor)

### Properties

- [bridge](IdentityLegacyClient.md#bridge)
- [configData](IdentityLegacyClient.md#configdata)

### Methods

- [buildCredential](IdentityLegacyClient.md#buildcredential)
- [buildSchema](IdentityLegacyClient.md#buildschema)
- [createIdentity](IdentityLegacyClient.md#createidentity)
- [getOffer](IdentityLegacyClient.md#getoffer)
- [getSchema](IdentityLegacyClient.md#getschema)
- [loadIdentity](IdentityLegacyClient.md#loadidentity)
- [redeemOffer](IdentityLegacyClient.md#redeemoffer)
- [revokeCredential](IdentityLegacyClient.md#revokecredential)
- [verifyCredential](IdentityLegacyClient.md#verifycredential)
- [waitOffer](IdentityLegacyClient.md#waitoffer)

## Constructors

### constructor

• **new IdentityLegacyClient**(`configData?`): [`IdentityLegacyClient`](IdentityLegacyClient.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `configData?` | `ConfigData` |

#### Returns

[`IdentityLegacyClient`](IdentityLegacyClient.md)

**`Deprecated`**

Will be deleted in future versions. Use IdentityV2Client function instead.

#### Defined in

[client/identity.ts:28](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/client/identity.ts#L28)

## Properties

### bridge

• `Private` **bridge**: `BloockBridge`

#### Defined in

[client/identity.ts:22](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/client/identity.ts#L22)

___

### configData

• `Private` **configData**: `ConfigData`

#### Defined in

[client/identity.ts:23](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/client/identity.ts#L23)

## Methods

### buildCredential

▸ **buildCredential**(`schemaId`, `holderKey`): `CredentialBuilder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `schemaId` | `string` |
| `holderKey` | `string` |

#### Returns

`CredentialBuilder`

**`Deprecated`**

Will be deleted in future versions. Use IdentityV2Client function instead.

#### Defined in

[client/identity.ts:105](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/client/identity.ts#L105)

___

### buildSchema

▸ **buildSchema**(`displayName`, `technicalName`): `SchemaBuilder`

#### Parameters

| Name | Type |
| :------ | :------ |
| `displayName` | `string` |
| `technicalName` | `string` |

#### Returns

`SchemaBuilder`

**`Deprecated`**

Will be deleted in future versions. Use IdentityV2Client function instead.

#### Defined in

[client/identity.ts:75](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/client/identity.ts#L75)

___

### createIdentity

▸ **createIdentity**(): `Promise`\<[`Identity`](Identity.md)\>

#### Returns

`Promise`\<[`Identity`](Identity.md)\>

**`Deprecated`**

Will be deleted in future versions. Use IdentityV2Client function instead.

#### Defined in

[client/identity.ts:36](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/client/identity.ts#L36)

___

### getOffer

▸ **getOffer**(`id`): `Promise`\<[`CredentialOffer`](CredentialOffer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<[`CredentialOffer`](CredentialOffer.md)\>

**`Deprecated`**

Will be deleted in future versions. Use IdentityV2Client function instead.

#### Defined in

[client/identity.ts:115](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/client/identity.ts#L115)

___

### getSchema

▸ **getSchema**(`id`): `Promise`\<`Schema`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<`Schema`\>

**`Deprecated`**

Will be deleted in future versions. Use IdentityV2Client function instead.

#### Defined in

[client/identity.ts:85](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/client/identity.ts#L85)

___

### loadIdentity

▸ **loadIdentity**(`mnemonic`): `Promise`\<[`Identity`](Identity.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `mnemonic` | `string` |

#### Returns

`Promise`\<[`Identity`](Identity.md)\>

**`Deprecated`**

Will be deleted in future versions. Use IdentityV2Client function instead.

#### Defined in

[client/identity.ts:55](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/client/identity.ts#L55)

___

### redeemOffer

▸ **redeemOffer**(`credentialOffer`, `holderPrivateKey`): `Promise`\<[`Credential`](Credential.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credentialOffer` | [`CredentialOffer`](CredentialOffer.md) |
| `holderPrivateKey` | `string` |

#### Returns

`Promise`\<[`Credential`](Credential.md)\>

**`Deprecated`**

Will be deleted in future versions. Use IdentityV2Client function instead.

#### Defined in

[client/identity.ts:155](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/client/identity.ts#L155)

___

### revokeCredential

▸ **revokeCredential**(`credential`): `Promise`\<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credential` | [`Credential`](Credential.md) |

#### Returns

`Promise`\<`boolean`\>

**`Deprecated`**

Will be deleted in future versions. Use IdentityV2Client function instead.

#### Defined in

[client/identity.ts:201](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/client/identity.ts#L201)

___

### verifyCredential

▸ **verifyCredential**(`credential`): `Promise`\<[`CredentialVerification`](CredentialVerification.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credential` | [`Credential`](Credential.md) |

#### Returns

`Promise`\<[`CredentialVerification`](CredentialVerification.md)\>

**`Deprecated`**

Will be deleted in future versions. Use IdentityV2Client function instead.

#### Defined in

[client/identity.ts:179](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/client/identity.ts#L179)

___

### waitOffer

▸ **waitOffer**(`offerId`): `Promise`\<[`CredentialOffer`](CredentialOffer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `offerId` | `string` |

#### Returns

`Promise`\<[`CredentialOffer`](CredentialOffer.md)\>

**`Deprecated`**

Will be deleted in future versions. Use IdentityV2Client function instead.

#### Defined in

[client/identity.ts:135](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/client/identity.ts#L135)
