[@bloock/sdk](../index.md) / CredentialV2

# Class: CredentialV2

Represents a verifiable credential with its associated information. [Verifiable Credentials Data Model v2.0](https://www.w3.org/TR/vc-data-model-2.0/).

## Table of contents

### Constructors

- [constructor](CredentialV2.md#constructor)

### Properties

- [context](CredentialV2.md#context)
- [credentialSchema](CredentialV2.md#credentialschema)
- [credentialStatus](CredentialV2.md#credentialstatus)
- [credentialSubject](CredentialV2.md#credentialsubject)
- [expiration](CredentialV2.md#expiration)
- [id](CredentialV2.md#id)
- [issuanceDate](CredentialV2.md#issuancedate)
- [issuer](CredentialV2.md#issuer)
- [proof](CredentialV2.md#proof)
- [type](CredentialV2.md#type)

### Methods

- [toJson](CredentialV2.md#tojson)
- [toProto](CredentialV2.md#toproto)
- [fromJson](CredentialV2.md#fromjson)
- [fromProto](CredentialV2.md#fromproto)

## Constructors

### constructor

• **new CredentialV2**(`context`, `id`, `type`, `issuanceDate`, `expiration`, `credentialSubject`, `credentialStatus`, `issuer`, `credentialSchema`, `proof`): [`CredentialV2`](CredentialV2.md)

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

[`CredentialV2`](CredentialV2.md)

#### Defined in

[entity/identity_v2/credential.ts:40](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/entity/identity_v2/credential.ts#L40)

## Properties

### context

• **context**: `string`[]

#### Defined in

[entity/identity_v2/credential.ts:16](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/entity/identity_v2/credential.ts#L16)

___

### credentialSchema

• **credentialSchema**: [`CredentialSchema`](CredentialSchema.md)

#### Defined in

[entity/identity_v2/credential.ts:24](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/entity/identity_v2/credential.ts#L24)

___

### credentialStatus

• **credentialStatus**: [`CredentialStatus`](CredentialStatus.md)

#### Defined in

[entity/identity_v2/credential.ts:22](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/entity/identity_v2/credential.ts#L22)

___

### credentialSubject

• **credentialSubject**: `any`

#### Defined in

[entity/identity_v2/credential.ts:21](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/entity/identity_v2/credential.ts#L21)

___

### expiration

• **expiration**: `string`

#### Defined in

[entity/identity_v2/credential.ts:20](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/entity/identity_v2/credential.ts#L20)

___

### id

• **id**: `string`

#### Defined in

[entity/identity_v2/credential.ts:17](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/entity/identity_v2/credential.ts#L17)

___

### issuanceDate

• **issuanceDate**: `string`

#### Defined in

[entity/identity_v2/credential.ts:19](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/entity/identity_v2/credential.ts#L19)

___

### issuer

• **issuer**: `string`

#### Defined in

[entity/identity_v2/credential.ts:23](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/entity/identity_v2/credential.ts#L23)

___

### proof

• **proof**: [`CredentialProof`](CredentialProof.md)

#### Defined in

[entity/identity_v2/credential.ts:25](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/entity/identity_v2/credential.ts#L25)

___

### type

• **type**: `string`[]

#### Defined in

[entity/identity_v2/credential.ts:18](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/entity/identity_v2/credential.ts#L18)

## Methods

### toJson

▸ **toJson**(): `Promise`\<`string`\>

Converts the Credential instance to its JSON string representation.

#### Returns

`Promise`\<`string`\>

#### Defined in

[entity/identity_v2/credential.ts:98](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/entity/identity_v2/credential.ts#L98)

___

### toProto

▸ **toProto**(): `CredentialV2`

#### Returns

`CredentialV2`

#### Defined in

[entity/identity_v2/credential.ts:64](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/entity/identity_v2/credential.ts#L64)

___

### fromJson

▸ **fromJson**(`json`): `Promise`\<[`CredentialV2`](CredentialV2.md)\>

Creates a Credential instance from a JSON string representation.

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `string` |

#### Returns

`Promise`\<[`CredentialV2`](CredentialV2.md)\>

#### Defined in

[entity/identity_v2/credential.ts:122](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/entity/identity_v2/credential.ts#L122)

___

### fromProto

▸ **fromProto**(`r`): [`CredentialV2`](CredentialV2.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `CredentialV2` |

#### Returns

[`CredentialV2`](CredentialV2.md)

#### Defined in

[entity/identity_v2/credential.ts:79](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/entity/identity_v2/credential.ts#L79)
