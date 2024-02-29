[@bloock/sdk](../index.md) / LocalCertificateParams

# Class: LocalCertificateParams

Represents the parameters for generating a local certificate.

## Table of contents

### Constructors

- [constructor](LocalCertificateParams.md#constructor)

### Properties

- [expiration](LocalCertificateParams.md#expiration)
- [keyType](LocalCertificateParams.md#keytype)
- [password](LocalCertificateParams.md#password)
- [subject](LocalCertificateParams.md#subject)

### Methods

- [toProto](LocalCertificateParams.md#toproto)

## Constructors

### constructor

• **new LocalCertificateParams**(`keyType`, `subject`, `password`, `expiration`): [`LocalCertificateParams`](LocalCertificateParams.md)

Constructs an LocalCertificateParams object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyType` | [`KeyType`](../enums/KeyType-1.md) |
| `subject` | [`SubjectCertificateParams`](SubjectCertificateParams.md) |
| `password` | `string` |
| `expiration` | `number` |

#### Returns

[`LocalCertificateParams`](LocalCertificateParams.md)

#### Defined in

[entity/key/local_certificate_args.ts:21](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/entity/key/local_certificate_args.ts#L21)

## Properties

### expiration

• **expiration**: `number`

#### Defined in

[entity/key/local_certificate_args.ts:12](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/entity/key/local_certificate_args.ts#L12)

___

### keyType

• **keyType**: [`KeyType`](../enums/KeyType-1.md)

#### Defined in

[entity/key/local_certificate_args.ts:9](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/entity/key/local_certificate_args.ts#L9)

___

### password

• **password**: `string`

#### Defined in

[entity/key/local_certificate_args.ts:11](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/entity/key/local_certificate_args.ts#L11)

___

### subject

• **subject**: [`SubjectCertificateParams`](SubjectCertificateParams.md)

#### Defined in

[entity/key/local_certificate_args.ts:10](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/entity/key/local_certificate_args.ts#L10)

## Methods

### toProto

▸ **toProto**(): `LocalCertificateParams`

#### Returns

`LocalCertificateParams`

#### Defined in

[entity/key/local_certificate_args.ts:33](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/entity/key/local_certificate_args.ts#L33)
