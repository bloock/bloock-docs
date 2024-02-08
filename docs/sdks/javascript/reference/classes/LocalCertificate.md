[@bloock/sdk](../index.md) / LocalCertificate

# Class: LocalCertificate

Represents a local certificate along with its password.

## Table of contents

### Constructors

- [constructor](LocalCertificate.md#constructor)

### Properties

- [password](LocalCertificate.md#password)
- [pkcs12](LocalCertificate.md#pkcs12)

### Methods

- [toProto](LocalCertificate.md#toproto)
- [fromProto](LocalCertificate.md#fromproto)

## Constructors

### constructor

• **new LocalCertificate**(`pkcs12`, `password`): [`LocalCertificate`](LocalCertificate.md)

Constructs a LocalCertificate object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `pkcs12` | `Uint8Array` |
| `password` | `string` |

#### Returns

[`LocalCertificate`](LocalCertificate.md)

#### Defined in

[entity/key/local_certificate.ts:15](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/entity/key/local_certificate.ts#L15)

## Properties

### password

• **password**: `string`

#### Defined in

[entity/key/local_certificate.ts:8](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/entity/key/local_certificate.ts#L8)

___

### pkcs12

• **pkcs12**: `Uint8Array`

#### Defined in

[entity/key/local_certificate.ts:7](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/entity/key/local_certificate.ts#L7)

## Methods

### toProto

▸ **toProto**(): `LocalCertificate`

#### Returns

`LocalCertificate`

#### Defined in

[entity/key/local_certificate.ts:20](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/entity/key/local_certificate.ts#L20)

___

### fromProto

▸ **fromProto**(`r`): [`LocalCertificate`](LocalCertificate.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `LocalCertificate` |

#### Returns

[`LocalCertificate`](LocalCertificate.md)

#### Defined in

[entity/key/local_certificate.ts:27](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/entity/key/local_certificate.ts#L27)
