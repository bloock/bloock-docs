[@bloock/sdk](../index.md) / Encrypter

# Class: Encrypter

Represents an encryption configuration with various key types and access control.

## Table of contents

### Constructors

- [constructor](Encrypter.md#constructor)

### Properties

- [accessControl](Encrypter.md#accesscontrol)
- [localCertificate](Encrypter.md#localcertificate)
- [localKey](Encrypter.md#localkey)
- [managedCertificate](Encrypter.md#managedcertificate)
- [managedKey](Encrypter.md#managedkey)

### Methods

- [toProto](Encrypter.md#toproto)

## Constructors

### constructor

• **new Encrypter**(`key`, `accessControl?`): [`Encrypter`](Encrypter.md)

Creates a new Encrypter instance with a local encryption key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`LocalKey`](LocalKey.md) \| [`ManagedKey`](ManagedKey.md) \| [`ManagedCertificate`](ManagedCertificate.md) \| [`LocalCertificate`](LocalCertificate.md) |
| `accessControl?` | [`AccessControl`](AccessControl.md) |

#### Returns

[`Encrypter`](Encrypter.md)

#### Defined in

[entity/encryption/encrypter.ts:25](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/encryption/encrypter.ts#L25)

## Properties

### accessControl

• `Optional` **accessControl**: [`AccessControl`](AccessControl.md)

#### Defined in

[entity/encryption/encrypter.ts:18](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/encryption/encrypter.ts#L18)

___

### localCertificate

• `Optional` **localCertificate**: [`LocalCertificate`](LocalCertificate.md)

#### Defined in

[entity/encryption/encrypter.ts:17](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/encryption/encrypter.ts#L17)

___

### localKey

• `Optional` **localKey**: [`LocalKey`](LocalKey.md)

#### Defined in

[entity/encryption/encrypter.ts:14](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/encryption/encrypter.ts#L14)

___

### managedCertificate

• `Optional` **managedCertificate**: [`ManagedCertificate`](ManagedCertificate.md)

#### Defined in

[entity/encryption/encrypter.ts:16](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/encryption/encrypter.ts#L16)

___

### managedKey

• `Optional` **managedKey**: [`ManagedKey`](ManagedKey.md)

#### Defined in

[entity/encryption/encrypter.ts:15](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/encryption/encrypter.ts#L15)

## Methods

### toProto

▸ **toProto**(): `Encrypter`

#### Returns

`Encrypter`

#### Defined in

[entity/encryption/encrypter.ts:46](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/encryption/encrypter.ts#L46)
