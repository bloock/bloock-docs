[@bloock/sdk](../index.md) / KeyClient

# Class: KeyClient

Provides functionality to interact with the [Bloock Keys service](https://dashboard.bloock.com/login).

## Table of contents

### Constructors

- [constructor](KeyClient.md#constructor)

### Properties

- [bridge](KeyClient.md#bridge)
- [configData](KeyClient.md#configdata)

### Methods

- [importManagedCertificate](KeyClient.md#importmanagedcertificate)
- [loadLocalCertificate](KeyClient.md#loadlocalcertificate)
- [loadLocalKey](KeyClient.md#loadlocalkey)
- [loadManagedCertificate](KeyClient.md#loadmanagedcertificate)
- [loadManagedKey](KeyClient.md#loadmanagedkey)
- [newLocalCertificate](KeyClient.md#newlocalcertificate)
- [newLocalKey](KeyClient.md#newlocalkey)
- [newManagedCertificate](KeyClient.md#newmanagedcertificate)
- [newManagedKey](KeyClient.md#newmanagedkey)
- [recoverTotpAccessControl](KeyClient.md#recovertotpaccesscontrol)
- [setupSecretAccessControl](KeyClient.md#setupsecretaccesscontrol)
- [setupTotpAccessControl](KeyClient.md#setuptotpaccesscontrol)

## Constructors

### constructor

• **new KeyClient**(`configData?`): [`KeyClient`](KeyClient.md)

Creates a new KeyClient with default configuration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `configData?` | `ConfigData` |

#### Returns

[`KeyClient`](KeyClient.md)

#### Defined in

[client/key.ts:41](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/client/key.ts#L41)

## Properties

### bridge

• `Private` **bridge**: `BloockBridge`

#### Defined in

[client/key.ts:34](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/client/key.ts#L34)

___

### configData

• `Private` **configData**: `ConfigData`

#### Defined in

[client/key.ts:35](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/client/key.ts#L35)

## Methods

### importManagedCertificate

▸ **importManagedCertificate**(`type`, `certificate`, `params`): `Promise`\<[`ManagedCertificate`](ManagedCertificate.md)\>

Imports a managed certificate with the specified parameters, supported types: .pem, .pfx.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`CertificateType`](../enums/CertificateType-1.md) |
| `certificate` | `Uint8Array` |
| `params` | [`ImportCertificateParams`](ImportCertificateParams.md) |

#### Returns

`Promise`\<[`ManagedCertificate`](ManagedCertificate.md)\>

#### Defined in

[client/key.ts:238](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/client/key.ts#L238)

___

### loadLocalCertificate

▸ **loadLocalCertificate**(`pkcs12`, `password`): `Promise`\<[`LocalCertificate`](LocalCertificate.md)\>

Loads a local certificate from a PKCS12 file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pkcs12` | `Uint8Array` |
| `password` | `string` |

#### Returns

`Promise`\<[`LocalCertificate`](LocalCertificate.md)\>

#### Defined in

[client/key.ts:164](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/client/key.ts#L164)

___

### loadLocalKey

▸ **loadLocalKey**(`keyType`, `key`): `Promise`\<[`LocalKey`](LocalKey.md)\>

Loads a local key of the specified type from a public key string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyType` | [`KeyType`](../enums/KeyType-1.md) |
| `key` | `string` |

#### Returns

`Promise`\<[`LocalKey`](LocalKey.md)\>

#### Defined in

[client/key.ts:73](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/client/key.ts#L73)

___

### loadManagedCertificate

▸ **loadManagedCertificate**(`id`): `Promise`\<[`ManagedCertificate`](ManagedCertificate.md)\>

Loads a managed certificate by its ID (ex: ceef5b02-af17-43d8-ae7b-31d9bdf8027f).

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<[`ManagedCertificate`](ManagedCertificate.md)\>

#### Defined in

[client/key.ts:214](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/client/key.ts#L214)

___

### loadManagedKey

▸ **loadManagedKey**(`id`): `Promise`\<[`ManagedKey`](ManagedKey.md)\>

Loads a managed key by its ID (ex: 51d22546-68f1-4340-b94b-2a80e60b8933).

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

`Promise`\<[`ManagedKey`](ManagedKey.md)\>

#### Defined in

[client/key.ts:117](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/client/key.ts#L117)

___

### newLocalCertificate

▸ **newLocalCertificate**(`params`): `Promise`\<[`LocalCertificate`](LocalCertificate.md)\>

Generates a new local certificate with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`LocalCertificateParams`](LocalCertificateParams.md) |

#### Returns

`Promise`\<[`LocalCertificate`](LocalCertificate.md)\>

#### Defined in

[client/key.ts:139](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/client/key.ts#L139)

___

### newLocalKey

▸ **newLocalKey**(`keyType`): `Promise`\<[`LocalKey`](LocalKey.md)\>

Generates a new local key of the specified type.

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyType` | [`KeyType`](../enums/KeyType-1.md) |

#### Returns

`Promise`\<[`LocalKey`](LocalKey.md)\>

#### Defined in

[client/key.ts:51](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/client/key.ts#L51)

___

### newManagedCertificate

▸ **newManagedCertificate**(`params`): `Promise`\<[`ManagedCertificate`](ManagedCertificate.md)\>

Generates a new managed certificate with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ManagedCertificateParams`](ManagedCertificateParams.md) |

#### Returns

`Promise`\<[`ManagedCertificate`](ManagedCertificate.md)\>

#### Defined in

[client/key.ts:190](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/client/key.ts#L190)

___

### newManagedKey

▸ **newManagedKey**(`params`): `Promise`\<[`ManagedKey`](ManagedKey.md)\>

Generates a new managed key with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `params` | [`ManagedKeyParams`](ManagedKeyParams.md) |

#### Returns

`Promise`\<[`ManagedKey`](ManagedKey.md)\>

#### Defined in

[client/key.ts:95](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/client/key.ts#L95)

___

### recoverTotpAccessControl

▸ **recoverTotpAccessControl**(`key`, `code`): `Promise`\<[`TotpAccessControlReceipt`](TotpAccessControlReceipt.md)\>

Recovers TOTP-based access control for the given managed key or managed certificate using a recovery code.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`Managed`](Managed.md) |
| `code` | `string` |

#### Returns

`Promise`\<[`TotpAccessControlReceipt`](TotpAccessControlReceipt.md)\>

#### Defined in

[client/key.ts:294](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/client/key.ts#L294)

___

### setupSecretAccessControl

▸ **setupSecretAccessControl**(`key`, `secret`, `email`): `Promise`\<`void`\>

Sets up secret-based access control for the given managed key or managed certificate.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`Managed`](Managed.md) |
| `secret` | `string` |
| `email` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[client/key.ts:327](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/client/key.ts#L327)

___

### setupTotpAccessControl

▸ **setupTotpAccessControl**(`key`): `Promise`\<[`TotpAccessControlReceipt`](TotpAccessControlReceipt.md)\>

Sets up TOTP-based access control for the given managed key or managed certificate.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`Managed`](Managed.md) |

#### Returns

`Promise`\<[`TotpAccessControlReceipt`](TotpAccessControlReceipt.md)\>

#### Defined in

[client/key.ts:266](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/client/key.ts#L266)
