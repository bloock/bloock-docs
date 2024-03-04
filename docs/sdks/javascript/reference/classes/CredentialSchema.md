[@bloock/sdk](../index.md) / CredentialSchema

# Class: CredentialSchema

Represents the schema information for a credential, including its ID and type.

## Table of contents

### Constructors

- [constructor](CredentialSchema.md#constructor)

### Properties

- [id](CredentialSchema.md#id)
- [type](CredentialSchema.md#type)

### Methods

- [toProto](CredentialSchema.md#toproto)
- [fromProto](CredentialSchema.md#fromproto)

## Constructors

### constructor

• **new CredentialSchema**(`id`, `type`): [`CredentialSchema`](CredentialSchema.md)

Constructs an CredentialSchema object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `type` | `string` |

#### Returns

[`CredentialSchema`](CredentialSchema.md)

#### Defined in

[entity/identity/credential_schema.ts:15](https://github.com/bloock/bloock-sdk/blob/cf3411f/languages/js/src/entity/identity/credential_schema.ts#L15)

## Properties

### id

• **id**: `string`

#### Defined in

[entity/identity/credential_schema.ts:7](https://github.com/bloock/bloock-sdk/blob/cf3411f/languages/js/src/entity/identity/credential_schema.ts#L7)

___

### type

• **type**: `string`

#### Defined in

[entity/identity/credential_schema.ts:8](https://github.com/bloock/bloock-sdk/blob/cf3411f/languages/js/src/entity/identity/credential_schema.ts#L8)

## Methods

### toProto

▸ **toProto**(): `CredentialSchema`

#### Returns

`CredentialSchema`

#### Defined in

[entity/identity/credential_schema.ts:20](https://github.com/bloock/bloock-sdk/blob/cf3411f/languages/js/src/entity/identity/credential_schema.ts#L20)

___

### fromProto

▸ **fromProto**(`r`): [`CredentialSchema`](CredentialSchema.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `CredentialSchema` |

#### Returns

[`CredentialSchema`](CredentialSchema.md)

#### Defined in

[entity/identity/credential_schema.ts:27](https://github.com/bloock/bloock-sdk/blob/cf3411f/languages/js/src/entity/identity/credential_schema.ts#L27)
