[@bloock/sdk](../index.md) / ManagedCertificateParams

# Class: ManagedCertificateParams

Represents parameters for creating a managed certificate.

## Table of contents

### Constructors

- [constructor](ManagedCertificateParams.md#constructor)

### Properties

- [expiration](ManagedCertificateParams.md#expiration)
- [keyType](ManagedCertificateParams.md#keytype)
- [subject](ManagedCertificateParams.md#subject)

### Methods

- [toProto](ManagedCertificateParams.md#toproto)

## Constructors

### constructor

• **new ManagedCertificateParams**(`keyType`, `subject`, `expiration`): [`ManagedCertificateParams`](ManagedCertificateParams.md)

Constructs a ManagedCertificateParams object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyType` | [`KeyType`](../enums/KeyType-1.md) |
| `subject` | [`SubjectCertificateParams`](SubjectCertificateParams.md) |
| `expiration` | `number` |

#### Returns

[`ManagedCertificateParams`](ManagedCertificateParams.md)

#### Defined in

[entity/key/managed_certificate_params.ts:28](https://github.com/bloock/bloock-sdk/blob/8d532d6/languages/js/src/entity/key/managed_certificate_params.ts#L28)

## Properties

### expiration

• **expiration**: `number`

Is the number of months until the certificate expiration.

#### Defined in

[entity/key/managed_certificate_params.ts:20](https://github.com/bloock/bloock-sdk/blob/8d532d6/languages/js/src/entity/key/managed_certificate_params.ts#L20)

___

### keyType

• **keyType**: [`KeyType`](../enums/KeyType-1.md)

Is the type of the key.

#### Defined in

[entity/key/managed_certificate_params.ts:12](https://github.com/bloock/bloock-sdk/blob/8d532d6/languages/js/src/entity/key/managed_certificate_params.ts#L12)

___

### subject

• **subject**: [`SubjectCertificateParams`](SubjectCertificateParams.md)

Represents the subject details of the certificate.

#### Defined in

[entity/key/managed_certificate_params.ts:16](https://github.com/bloock/bloock-sdk/blob/8d532d6/languages/js/src/entity/key/managed_certificate_params.ts#L16)

## Methods

### toProto

▸ **toProto**(): `ManagedCertificateParams`

#### Returns

`ManagedCertificateParams`

#### Defined in

[entity/key/managed_certificate_params.ts:38](https://github.com/bloock/bloock-sdk/blob/8d532d6/languages/js/src/entity/key/managed_certificate_params.ts#L38)
