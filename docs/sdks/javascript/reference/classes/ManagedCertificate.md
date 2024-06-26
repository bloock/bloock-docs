[@bloock/sdk](../index.md) / ManagedCertificate

# Class: ManagedCertificate

Represents a managed certificate with its details.

## Table of contents

### Constructors

- [constructor](ManagedCertificate.md#constructor)

### Properties

- [accessControlType](ManagedCertificate.md#accesscontroltype)
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

• **new ManagedCertificate**(`id`, `protection`, `keyType`, `key`, `accessControlType`, `expiration?`): [`ManagedCertificate`](ManagedCertificate.md)

Constructs a ManagedCertificate object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `protection` | [`KeyProtectionLevel`](../enums/KeyProtectionLevel-1.md) |
| `keyType` | [`KeyType`](../enums/KeyType-1.md) |
| `key` | `string` |
| `accessControlType` | [`AccessControlType`](../enums/AccessControlType-1.md) |
| `expiration?` | `number` |

#### Returns

[`ManagedCertificate`](ManagedCertificate.md)

#### Defined in

[entity/key/managed_certificate.ts:44](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/key/managed_certificate.ts#L44)

## Properties

### accessControlType

• **accessControlType**: [`AccessControlType`](../enums/AccessControlType-1.md)

Is the access control type for the certificate.

#### Defined in

[entity/key/managed_certificate.ts:33](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/key/managed_certificate.ts#L33)

___

### expiration

• `Optional` **expiration**: `number`

Is the timestamp indicating when the certificate expires.

#### Defined in

[entity/key/managed_certificate.ts:25](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/key/managed_certificate.ts#L25)

___

### id

• **id**: `string`

Is the identifier of the managed certificate (ex: 2abae00b-f3d9-410c-abdf-1ea391d633aa).

#### Defined in

[entity/key/managed_certificate.ts:13](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/key/managed_certificate.ts#L13)

___

### key

• **key**: `string`

Is the certificate public key.

#### Defined in

[entity/key/managed_certificate.ts:29](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/key/managed_certificate.ts#L29)

___

### keyType

• **keyType**: [`KeyType`](../enums/KeyType-1.md)

Is the type of the key.

#### Defined in

[entity/key/managed_certificate.ts:21](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/key/managed_certificate.ts#L21)

___

### protection

• **protection**: [`KeyProtectionLevel`](../enums/KeyProtectionLevel-1.md)

Is the protection level for the key.

#### Defined in

[entity/key/managed_certificate.ts:17](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/key/managed_certificate.ts#L17)

## Methods

### toProto

▸ **toProto**(): `ManagedCertificate`

#### Returns

`ManagedCertificate`

#### Defined in

[entity/key/managed_certificate.ts:60](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/key/managed_certificate.ts#L60)

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

[entity/key/managed_certificate.ts:71](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/key/managed_certificate.ts#L71)
