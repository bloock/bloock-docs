[@bloock/sdk](../index.md) / ManagedCertificate

# Class: ManagedCertificate

Represents a managed certificate with its details.

## Table of contents

### Constructors

- [constructor](ManagedCertificate.md#constructor)

### Properties

- [expiration](ManagedCertificate.md#expiration)
- [id](ManagedCertificate.md#id)
- [key](ManagedCertificate.md#key)
- [keyType](ManagedCertificate.md#keytype)
- [protection](ManagedCertificate.md#protection)

### Methods

- [toProto](ManagedCertificate.md#toproto)
- [fromProto](ManagedCertificate.md#fromproto)

## Constructors

### constructor

• **new ManagedCertificate**(`id`, `protection`, `keyType`, `key`, `expiration?`): [`ManagedCertificate`](ManagedCertificate.md)

Constructs a ManagedCertificate object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `protection` | [`KeyProtectionLevel`](../enums/KeyProtectionLevel-1.md) |
| `keyType` | [`KeyType`](../enums/KeyType-1.md) |
| `key` | `string` |
| `expiration?` | `number` |

#### Returns

[`ManagedCertificate`](ManagedCertificate.md)

#### Defined in

[entity/key/managed_certificate.ts:38](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/entity/key/managed_certificate.ts#L38)

## Properties

### expiration

• `Optional` **expiration**: `number`

Is the timestamp indicating when the certificate expires.

#### Defined in

[entity/key/managed_certificate.ts:24](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/entity/key/managed_certificate.ts#L24)

___

### id

• **id**: `string`

Is the identifier of the managed certificate (ex: 2abae00b-f3d9-410c-abdf-1ea391d633aa).

#### Defined in

[entity/key/managed_certificate.ts:12](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/entity/key/managed_certificate.ts#L12)

___

### key

• **key**: `string`

Is the certificate public key.

#### Defined in

[entity/key/managed_certificate.ts:28](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/entity/key/managed_certificate.ts#L28)

___

### keyType

• **keyType**: [`KeyType`](../enums/KeyType-1.md)

Is the type of the key.

#### Defined in

[entity/key/managed_certificate.ts:20](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/entity/key/managed_certificate.ts#L20)

___

### protection

• **protection**: [`KeyProtectionLevel`](../enums/KeyProtectionLevel-1.md)

Is the protection level for the key.

#### Defined in

[entity/key/managed_certificate.ts:16](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/entity/key/managed_certificate.ts#L16)

## Methods

### toProto

▸ **toProto**(): `ManagedCertificate`

#### Returns

`ManagedCertificate`

#### Defined in

[entity/key/managed_certificate.ts:52](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/entity/key/managed_certificate.ts#L52)

___

### fromProto

▸ **fromProto**(`r`): [`ManagedCertificate`](ManagedCertificate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `ManagedCertificate` |

#### Returns

[`ManagedCertificate`](ManagedCertificate.md)

#### Defined in

[entity/key/managed_certificate.ts:62](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/entity/key/managed_certificate.ts#L62)
