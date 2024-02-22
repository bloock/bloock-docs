[@bloock/sdk](../index.md) / Signer

# Class: Signer

Represents a signer with various key types and additional configurations.

## Table of contents

### Constructors

- [constructor](Signer.md#constructor)

### Properties

- [accessControl](Signer.md#accesscontrol)
- [hashAlg](Signer.md#hashalg)
- [localCertificate](Signer.md#localcertificate)
- [localKey](Signer.md#localkey)
- [managedCertificate](Signer.md#managedcertificate)
- [managedKey](Signer.md#managedkey)

### Methods

- [toProto](Signer.md#toproto)

## Constructors

### constructor

• **new Signer**(`key`, `hashAlg?`, `accessControl?`): [`Signer`](Signer.md)

Creates a Signer instance with a local key, managed key, local certificate or managed certificate.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` \| [`LocalKey`](LocalKey.md) \| [`ManagedKey`](ManagedKey.md) \| [`ManagedCertificate`](ManagedCertificate.md) \| [`LocalCertificate`](LocalCertificate.md) |
| `hashAlg?` | [`HashAlg`](../enums/HashAlg-1.md) |
| `accessControl?` | [`AccessControl`](AccessControl.md) |

#### Returns

[`Signer`](Signer.md)

#### Defined in

[entity/authenticity/signer.ts:30](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/authenticity/signer.ts#L30)

## Properties

### accessControl

• `Optional` **accessControl**: [`AccessControl`](AccessControl.md)

#### Defined in

[entity/authenticity/signer.ts:22](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/authenticity/signer.ts#L22)

___

### hashAlg

• `Optional` **hashAlg**: [`HashAlg`](../enums/HashAlg-1.md)

#### Defined in

[entity/authenticity/signer.ts:21](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/authenticity/signer.ts#L21)

___

### localCertificate

• `Optional` **localCertificate**: [`LocalCertificate`](LocalCertificate.md)

#### Defined in

[entity/authenticity/signer.ts:19](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/authenticity/signer.ts#L19)

___

### localKey

• `Optional` **localKey**: [`LocalKey`](LocalKey.md)

#### Defined in

[entity/authenticity/signer.ts:16](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/authenticity/signer.ts#L16)

___

### managedCertificate

• `Optional` **managedCertificate**: [`ManagedCertificate`](ManagedCertificate.md)

#### Defined in

[entity/authenticity/signer.ts:18](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/authenticity/signer.ts#L18)

___

### managedKey

• `Optional` **managedKey**: [`ManagedKey`](ManagedKey.md)

#### Defined in

[entity/authenticity/signer.ts:17](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/authenticity/signer.ts#L17)

## Methods

### toProto

▸ **toProto**(): `Signer`

#### Returns

`Signer`

#### Defined in

[entity/authenticity/signer.ts:55](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/authenticity/signer.ts#L55)
