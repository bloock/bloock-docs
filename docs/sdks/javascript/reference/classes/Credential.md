[@bloock/sdk](../index.md) / Credential

# Class: Credential

Represents a verifiable credential with its associated information. [Verifiable Credentials Data Model v2.0](https://www.w3.org/TR/vc-data-model-2.0/).

## Table of contents

### Constructors

- [constructor](Credential.md#constructor)

### Properties

- [context](Credential.md#context)
- [credentialSchema](Credential.md#credentialschema)
- [credentialStatus](Credential.md#credentialstatus)
- [credentialSubject](Credential.md#credentialsubject)
- [expiration](Credential.md#expiration)
- [id](Credential.md#id)
- [issuanceDate](Credential.md#issuancedate)
- [issuer](Credential.md#issuer)
- [proof](Credential.md#proof)
- [type](Credential.md#type)

### Methods

- [toJson](Credential.md#tojson)
- [toProto](Credential.md#toproto)
- [fromJson](Credential.md#fromjson)
- [fromProto](Credential.md#fromproto)

## Constructors

### constructor

• **new Credential**(`context`, `id`, `type`, `issuanceDate`, `expiration`, `credentialSubject`, `credentialStatus`, `issuer`, `credentialSchema`, `proof`): [`Credential`](Credential.md)

Creates a new Credential instance with the provided details.

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `string`[] |
| `id` | `string` |
| `type` | `string`[] |
| `issuanceDate` | `string` |
| `expiration` | `string` |
| `credentialSubject` | `any` |
| `credentialStatus` | [`CredentialStatus`](CredentialStatus.md) |
| `issuer` | `string` |
| `credentialSchema` | [`CredentialSchema`](CredentialSchema.md) |
| `proof` | [`CredentialProof`](CredentialProof.md) |

#### Returns

[`Credential`](Credential.md)

#### Defined in

[entity/identity/credential.ts:40](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/entity/identity/credential.ts#L40)

## Properties

### context

• **context**: `string`[]

#### Defined in

[entity/identity/credential.ts:16](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/entity/identity/credential.ts#L16)

___

### credentialSchema

• **credentialSchema**: [`CredentialSchema`](CredentialSchema.md)

#### Defined in

[entity/identity/credential.ts:24](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/entity/identity/credential.ts#L24)

___

### credentialStatus

• **credentialStatus**: [`CredentialStatus`](CredentialStatus.md)

#### Defined in

[entity/identity/credential.ts:22](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/entity/identity/credential.ts#L22)

___

### credentialSubject

• **credentialSubject**: `any`

#### Defined in

[entity/identity/credential.ts:21](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/entity/identity/credential.ts#L21)

___

### expiration

• **expiration**: `string`

#### Defined in

[entity/identity/credential.ts:20](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/entity/identity/credential.ts#L20)

___

### id

• **id**: `string`

#### Defined in

[entity/identity/credential.ts:17](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/entity/identity/credential.ts#L17)

___

### issuanceDate

• **issuanceDate**: `string`

#### Defined in

[entity/identity/credential.ts:19](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/entity/identity/credential.ts#L19)

___

### issuer

• **issuer**: `string`

#### Defined in

[entity/identity/credential.ts:23](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/entity/identity/credential.ts#L23)

___

### proof

• **proof**: [`CredentialProof`](CredentialProof.md)

#### Defined in

[entity/identity/credential.ts:25](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/entity/identity/credential.ts#L25)

___

### type

• **type**: `string`[]

#### Defined in

[entity/identity/credential.ts:18](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/entity/identity/credential.ts#L18)

## Methods

### toJson

▸ **toJson**(): `Promise`\<`string`\>

Converts the Credential instance to its JSON string representation.

#### Returns

`Promise`\<`string`\>

#### Defined in

[entity/identity/credential.ts:98](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/entity/identity/credential.ts#L98)

___

### toProto

▸ **toProto**(): `Credential`

#### Returns

`Credential`

#### Defined in

[entity/identity/credential.ts:64](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/entity/identity/credential.ts#L64)

___

### fromJson

▸ **fromJson**(`json`): `Promise`\<[`Credential`](Credential.md)\>

Creates a Credential instance from a JSON string representation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `string` |

#### Returns

`Promise`\<[`Credential`](Credential.md)\>

#### Defined in

[entity/identity/credential.ts:122](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/entity/identity/credential.ts#L122)

___

### fromProto

▸ **fromProto**(`r`): [`Credential`](Credential.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `Credential` |

#### Returns

[`Credential`](Credential.md)

#### Defined in

[entity/identity/credential.ts:79](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/entity/identity/credential.ts#L79)
