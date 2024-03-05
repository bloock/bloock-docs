[@bloock/sdk](../index.md) / CredentialReceipt

# Class: CredentialReceipt

Represents a receipt for a credential, including the credential itself, its ID, and type.

## Table of contents

### Constructors

- [constructor](CredentialReceipt.md#constructor)

### Properties

- [credential](CredentialReceipt.md#credential)
- [credentialId](CredentialReceipt.md#credentialid)
- [credentialType](CredentialReceipt.md#credentialtype)

### Methods

- [toProto](CredentialReceipt.md#toproto)
- [fromProto](CredentialReceipt.md#fromproto)

## Constructors

### constructor

• **new CredentialReceipt**(`credential`, `credentialId`, `credentialType`): [`CredentialReceipt`](CredentialReceipt.md)

Constructs an CredentialReceipt object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `credential` | [`Credential`](Credential.md) |
| `credentialId` | `string` |
| `credentialType` | `string` |

#### Returns

[`CredentialReceipt`](CredentialReceipt.md)

#### Defined in

[entity/identity/credential_receipt.ts:18](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/entity/identity/credential_receipt.ts#L18)

## Properties

### credential

• **credential**: [`Credential`](Credential.md)

#### Defined in

[entity/identity/credential_receipt.ts:8](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/entity/identity/credential_receipt.ts#L8)

___

### credentialId

• **credentialId**: `string`

#### Defined in

[entity/identity/credential_receipt.ts:9](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/entity/identity/credential_receipt.ts#L9)

___

### credentialType

• **credentialType**: `string`

#### Defined in

[entity/identity/credential_receipt.ts:10](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/entity/identity/credential_receipt.ts#L10)

## Methods

### toProto

▸ **toProto**(): `CredentialReceipt`

#### Returns

`CredentialReceipt`

#### Defined in

[entity/identity/credential_receipt.ts:28](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/entity/identity/credential_receipt.ts#L28)

___

### fromProto

▸ **fromProto**(`r`): [`CredentialReceipt`](CredentialReceipt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `CredentialReceipt` |

#### Returns

[`CredentialReceipt`](CredentialReceipt.md)

#### Defined in

[entity/identity/credential_receipt.ts:36](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/entity/identity/credential_receipt.ts#L36)
