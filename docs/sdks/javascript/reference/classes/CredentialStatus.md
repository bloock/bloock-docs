[@bloock/sdk](../index.md) / CredentialStatus

# Class: CredentialStatus

Represents the status information for a credential, including its ID, revocation nonce, and type.

## Table of contents

### Constructors

- [constructor](CredentialStatus.md#constructor)

### Properties

- [id](CredentialStatus.md#id)
- [revocationNonce](CredentialStatus.md#revocationnonce)
- [type](CredentialStatus.md#type)

### Methods

- [toProto](CredentialStatus.md#toproto)
- [fromProto](CredentialStatus.md#fromproto)

## Constructors

### constructor

• **new CredentialStatus**(`id`, `revocationNonce`, `type`): [`CredentialStatus`](CredentialStatus.md)

Constructs an CredentialStatus object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `revocationNonce` | `number` |
| `type` | `string` |

#### Returns

[`CredentialStatus`](CredentialStatus.md)

#### Defined in

[entity/identity/credential_status.ts:17](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/identity/credential_status.ts#L17)

## Properties

### id

• **id**: `string`

#### Defined in

[entity/identity/credential_status.ts:7](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/identity/credential_status.ts#L7)

___

### revocationNonce

• **revocationNonce**: `number`

#### Defined in

[entity/identity/credential_status.ts:8](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/identity/credential_status.ts#L8)

___

### type

• **type**: `string`

#### Defined in

[entity/identity/credential_status.ts:9](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/identity/credential_status.ts#L9)

## Methods

### toProto

▸ **toProto**(): `CredentialStatus`

#### Returns

`CredentialStatus`

#### Defined in

[entity/identity/credential_status.ts:23](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/identity/credential_status.ts#L23)

___

### fromProto

▸ **fromProto**(`r`): [`CredentialStatus`](CredentialStatus.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `CredentialStatus` |

#### Returns

[`CredentialStatus`](CredentialStatus.md)

#### Defined in

[entity/identity/credential_status.ts:31](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/identity/credential_status.ts#L31)
