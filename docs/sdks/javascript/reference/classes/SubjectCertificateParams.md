[@bloock/sdk](../index.md) / SubjectCertificateParams

# Class: SubjectCertificateParams

Represents parameters for generating a subject certificate.

## Table of contents

### Constructors

- [constructor](SubjectCertificateParams.md#constructor)

### Properties

- [commonName](SubjectCertificateParams.md#commonname)
- [country](SubjectCertificateParams.md#country)
- [location](SubjectCertificateParams.md#location)
- [organization](SubjectCertificateParams.md#organization)
- [organizationUnit](SubjectCertificateParams.md#organizationunit)
- [state](SubjectCertificateParams.md#state)

### Methods

- [toProto](SubjectCertificateParams.md#toproto)

## Constructors

### constructor

• **new SubjectCertificateParams**(`commonName`, `organization?`, `organizationUnit?`, `location?`, `state?`, `country?`): [`SubjectCertificateParams`](SubjectCertificateParams.md)

Constructs a SubjectCertificateParams object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `commonName` | `string` |
| `organization?` | `string` |
| `organizationUnit?` | `string` |
| `location?` | `string` |
| `state?` | `string` |
| `country?` | `string` |

#### Returns

[`SubjectCertificateParams`](SubjectCertificateParams.md)

#### Defined in

[entity/key/subject_certificate_params.ts:41](https://github.com/bloock/bloock-sdk/blob/cd5373f/languages/js/src/entity/key/subject_certificate_params.ts#L41)

## Properties

### commonName

• **commonName**: `string`

Is the common name (CN) for the certificate. Required.

#### Defined in

[entity/key/subject_certificate_params.ts:10](https://github.com/bloock/bloock-sdk/blob/cd5373f/languages/js/src/entity/key/subject_certificate_params.ts#L10)

___

### country

• `Optional` **country**: `string`

Is the country (C) for the certificate. (Optional)

#### Defined in

[entity/key/subject_certificate_params.ts:30](https://github.com/bloock/bloock-sdk/blob/cd5373f/languages/js/src/entity/key/subject_certificate_params.ts#L30)

___

### location

• `Optional` **location**: `string`

Is the location (L) for the certificate. (Optional)

#### Defined in

[entity/key/subject_certificate_params.ts:22](https://github.com/bloock/bloock-sdk/blob/cd5373f/languages/js/src/entity/key/subject_certificate_params.ts#L22)

___

### organization

• `Optional` **organization**: `string`

Is the organization (O) for the certificate. (Optional)

#### Defined in

[entity/key/subject_certificate_params.ts:14](https://github.com/bloock/bloock-sdk/blob/cd5373f/languages/js/src/entity/key/subject_certificate_params.ts#L14)

___

### organizationUnit

• `Optional` **organizationUnit**: `string`

Is the organizational unit (OU) for the certificate. (Optional)

#### Defined in

[entity/key/subject_certificate_params.ts:18](https://github.com/bloock/bloock-sdk/blob/cd5373f/languages/js/src/entity/key/subject_certificate_params.ts#L18)

___

### state

• `Optional` **state**: `string`

Is the state or province (ST) for the certificate. (Optional)

#### Defined in

[entity/key/subject_certificate_params.ts:26](https://github.com/bloock/bloock-sdk/blob/cd5373f/languages/js/src/entity/key/subject_certificate_params.ts#L26)

## Methods

### toProto

▸ **toProto**(): `CertificateSubject`

#### Returns

`CertificateSubject`

#### Defined in

[entity/key/subject_certificate_params.ts:57](https://github.com/bloock/bloock-sdk/blob/cd5373f/languages/js/src/entity/key/subject_certificate_params.ts#L57)
