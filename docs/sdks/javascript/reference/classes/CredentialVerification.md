[@bloock/sdk](../index.md) / CredentialVerification

# Class: CredentialVerification

## Table of contents

### Constructors

- [constructor](CredentialVerification.md#constructor)

### Properties

- [issuer](CredentialVerification.md#issuer)
- [revocation](CredentialVerification.md#revocation)
- [timestamp](CredentialVerification.md#timestamp)

### Methods

- [toProto](CredentialVerification.md#toproto)
- [fromProto](CredentialVerification.md#fromproto)

## Constructors

### constructor

• **new CredentialVerification**(`timestamp`, `issuer`, `revocation`): [`CredentialVerification`](CredentialVerification.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `timestamp` | `number` |
| `issuer` | `string` |
| `revocation` | `number` |

#### Returns

[`CredentialVerification`](CredentialVerification.md)

#### Defined in

[entity/identity/credential_verification.ts:8](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity/credential_verification.ts#L8)

## Properties

### issuer

• **issuer**: `string`

#### Defined in

[entity/identity/credential_verification.ts:5](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity/credential_verification.ts#L5)

___

### revocation

• **revocation**: `number`

#### Defined in

[entity/identity/credential_verification.ts:6](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity/credential_verification.ts#L6)

___

### timestamp

• **timestamp**: `number`

#### Defined in

[entity/identity/credential_verification.ts:4](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity/credential_verification.ts#L4)

## Methods

### toProto

▸ **toProto**(): `CredentialVerification`

#### Returns

`CredentialVerification`

#### Defined in

[entity/identity/credential_verification.ts:14](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity/credential_verification.ts#L14)

___

### fromProto

▸ **fromProto**(`r`): [`CredentialVerification`](CredentialVerification.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `CredentialVerification` |

#### Returns

[`CredentialVerification`](CredentialVerification.md)

#### Defined in

[entity/identity/credential_verification.ts:22](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity/credential_verification.ts#L22)
