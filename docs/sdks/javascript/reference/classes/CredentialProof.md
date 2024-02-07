[@bloock/sdk](../index.md) / CredentialProof

# Class: CredentialProof

Represents the proof associated with a credential, including signature and sparse merkle tree proof.

## Table of contents

### Constructors

- [constructor](CredentialProof.md#constructor)

### Properties

- [signatureProof](CredentialProof.md#signatureproof)
- [sparseMtProof](CredentialProof.md#sparsemtproof)

### Methods

- [toProto](CredentialProof.md#toproto)
- [fromProto](CredentialProof.md#fromproto)

## Constructors

### constructor

• **new CredentialProof**(`signatureProof`, `sparseMtProof?`): [`CredentialProof`](CredentialProof.md)

Constructs an CredentialProof object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `signatureProof` | `string` |
| `sparseMtProof?` | `string` |

#### Returns

[`CredentialProof`](CredentialProof.md)

#### Defined in

[entity/identity_v2/credential_proof.ts:15](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/entity/identity_v2/credential_proof.ts#L15)

## Properties

### signatureProof

• **signatureProof**: `string`

#### Defined in

[entity/identity_v2/credential_proof.ts:7](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/entity/identity_v2/credential_proof.ts#L7)

___

### sparseMtProof

• `Optional` **sparseMtProof**: `string`

#### Defined in

[entity/identity_v2/credential_proof.ts:8](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/entity/identity_v2/credential_proof.ts#L8)

## Methods

### toProto

▸ **toProto**(): `CredentialProofV2`

#### Returns

`CredentialProofV2`

#### Defined in

[entity/identity_v2/credential_proof.ts:20](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/entity/identity_v2/credential_proof.ts#L20)

___

### fromProto

▸ **fromProto**(`r`): [`CredentialProof`](CredentialProof.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `CredentialProofV2` |

#### Returns

[`CredentialProof`](CredentialProof.md)

#### Defined in

[entity/identity_v2/credential_proof.ts:27](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/entity/identity_v2/credential_proof.ts#L27)
