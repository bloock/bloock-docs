[@bloock/sdk](../index.md) / SignatureHeaderJws

# Class: SignatureHeaderJws

Represents the header of a JSON Web Signature (JWS). [RFC 7515](https://datatracker.ietf.org/doc/html/rfc7515).

## Table of contents

### Constructors

- [constructor](SignatureHeaderJws.md#constructor)

### Properties

- [alg](SignatureHeaderJws.md#alg)
- [kid](SignatureHeaderJws.md#kid)

### Methods

- [toProto](SignatureHeaderJws.md#toproto)
- [fromProto](SignatureHeaderJws.md#fromproto)

## Constructors

### constructor

• **new SignatureHeaderJws**(`alg`, `kid`): [`SignatureHeaderJws`](SignatureHeaderJws.md)

Constructs a SignatureHeaderJws object with the specified algorithm and key identifier.

#### Parameters

| Name | Type |
| :------ | :------ |
| `alg` | `string` |
| `kid` | `string` |

#### Returns

[`SignatureHeaderJws`](SignatureHeaderJws.md)

#### Defined in

[entity/authenticity/signature_header_jws.ts:15](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/authenticity/signature_header_jws.ts#L15)

## Properties

### alg

• **alg**: `string`

#### Defined in

[entity/authenticity/signature_header_jws.ts:7](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/authenticity/signature_header_jws.ts#L7)

___

### kid

• **kid**: `string`

#### Defined in

[entity/authenticity/signature_header_jws.ts:8](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/authenticity/signature_header_jws.ts#L8)

## Methods

### toProto

▸ **toProto**(): `SignatureHeaderJWS`

#### Returns

`SignatureHeaderJWS`

#### Defined in

[entity/authenticity/signature_header_jws.ts:24](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/authenticity/signature_header_jws.ts#L24)

___

### fromProto

▸ **fromProto**(`s`): [`SignatureHeaderJws`](SignatureHeaderJws.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `SignatureHeaderJWS` |

#### Returns

[`SignatureHeaderJws`](SignatureHeaderJws.md)

#### Defined in

[entity/authenticity/signature_header_jws.ts:20](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/authenticity/signature_header_jws.ts#L20)
