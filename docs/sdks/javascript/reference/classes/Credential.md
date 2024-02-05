[@bloock/sdk](../index.md) / Credential

# Class: Credential

## Table of contents

### Constructors

- [constructor](Credential.md#constructor)

### Properties

- [context](Credential.md#context)
- [credentialSchema](Credential.md#credentialschema)
- [credentialStatus](Credential.md#credentialstatus)
- [credentialSubject](Credential.md#credentialsubject)
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

• **new Credential**(`context`, `id`, `type`, `issuanceDate`, `credentialSubject`, `credentialStatus`, `issuer`, `credentialSchema`, `proof`): [`Credential`](Credential.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `context` | `string`[] |
| `id` | `string` |
| `type` | `string`[] |
| `issuanceDate` | `string` |
| `credentialSubject` | `any` |
| `credentialStatus` | `CredentialStatus` |
| `issuer` | `string` |
| `credentialSchema` | `CredentialSchema` |
| `proof` | `CredentialProof` |

#### Returns

[`Credential`](Credential.md)

#### Defined in

[entity/identity/credential.ts:23](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity/credential.ts#L23)

## Properties

### context

• **context**: `string`[]

#### Defined in

[entity/identity/credential.ts:13](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity/credential.ts#L13)

___

### credentialSchema

• **credentialSchema**: `CredentialSchema`

#### Defined in

[entity/identity/credential.ts:20](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity/credential.ts#L20)

___

### credentialStatus

• **credentialStatus**: `CredentialStatus`

#### Defined in

[entity/identity/credential.ts:18](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity/credential.ts#L18)

___

### credentialSubject

• **credentialSubject**: `any`

#### Defined in

[entity/identity/credential.ts:17](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity/credential.ts#L17)

___

### id

• **id**: `string`

#### Defined in

[entity/identity/credential.ts:14](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity/credential.ts#L14)

___

### issuanceDate

• **issuanceDate**: `string`

#### Defined in

[entity/identity/credential.ts:16](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity/credential.ts#L16)

___

### issuer

• **issuer**: `string`

#### Defined in

[entity/identity/credential.ts:19](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity/credential.ts#L19)

___

### proof

• **proof**: `CredentialProof`

#### Defined in

[entity/identity/credential.ts:21](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity/credential.ts#L21)

___

### type

• **type**: `string`[]

#### Defined in

[entity/identity/credential.ts:15](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity/credential.ts#L15)

## Methods

### toJson

▸ **toJson**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

[entity/identity/credential.ts:73](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity/credential.ts#L73)

___

### toProto

▸ **toProto**(): `Credential`

#### Returns

`Credential`

#### Defined in

[entity/identity/credential.ts:45](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity/credential.ts#L45)

___

### fromJson

▸ **fromJson**(`json`): `Promise`\<[`Credential`](Credential.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `string` |

#### Returns

`Promise`\<[`Credential`](Credential.md)\>

#### Defined in

[entity/identity/credential.ts:92](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity/credential.ts#L92)

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

[entity/identity/credential.ts:59](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity/credential.ts#L59)
