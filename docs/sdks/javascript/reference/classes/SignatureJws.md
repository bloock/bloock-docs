[@bloock/sdk](../index.md) / SignatureJws

# Class: SignatureJws

Represents a JSON Web Signature (JWS). [RFC 7515](https://datatracker.ietf.org/doc/html/rfc7515).

## Table of contents

### Constructors

- [constructor](SignatureJws.md#constructor)

### Properties

- [header](SignatureJws.md#header)
- [messageHash](SignatureJws.md#messagehash)
- [protected](SignatureJws.md#protected)
- [signature](SignatureJws.md#signature)

### Methods

- [getAlg](SignatureJws.md#getalg)
- [toProto](SignatureJws.md#toproto)
- [fromProto](SignatureJws.md#fromproto)

## Constructors

### constructor

• **new SignatureJws**(`messageHash`, `signature`, `prot`, `header`): [`SignatureJws`](SignatureJws.md)

Constructs a SignatureJws object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageHash` | `string` |
| `signature` | `string` |
| `prot` | `string` |
| `header` | [`SignatureHeaderJws`](SignatureHeaderJws.md) |

#### Returns

[`SignatureJws`](SignatureJws.md)

#### Defined in

[entity/authenticity/signature_jws.ts:21](https://github.com/bloock/bloock-sdk/blob/4afdb4b/languages/js/src/entity/authenticity/signature_jws.ts#L21)

## Properties

### header

• **header**: [`SignatureHeaderJws`](SignatureHeaderJws.md)

#### Defined in

[entity/authenticity/signature_jws.ts:11](https://github.com/bloock/bloock-sdk/blob/4afdb4b/languages/js/src/entity/authenticity/signature_jws.ts#L11)

___

### messageHash

• **messageHash**: `string`

#### Defined in

[entity/authenticity/signature_jws.ts:12](https://github.com/bloock/bloock-sdk/blob/4afdb4b/languages/js/src/entity/authenticity/signature_jws.ts#L12)

___

### protected

• **protected**: `string`

#### Defined in

[entity/authenticity/signature_jws.ts:10](https://github.com/bloock/bloock-sdk/blob/4afdb4b/languages/js/src/entity/authenticity/signature_jws.ts#L10)

___

### signature

• **signature**: `string`

#### Defined in

[entity/authenticity/signature_jws.ts:9](https://github.com/bloock/bloock-sdk/blob/4afdb4b/languages/js/src/entity/authenticity/signature_jws.ts#L9)

## Methods

### getAlg

▸ **getAlg**(): [`SignatureAlg`](../enums/SignatureAlg-1.md)

#### Returns

[`SignatureAlg`](../enums/SignatureAlg-1.md)

#### Defined in

[entity/authenticity/signature_jws.ts:51](https://github.com/bloock/bloock-sdk/blob/4afdb4b/languages/js/src/entity/authenticity/signature_jws.ts#L51)

___

### toProto

▸ **toProto**(): `SignatureJWS`

#### Returns

`SignatureJWS`

#### Defined in

[entity/authenticity/signature_jws.ts:42](https://github.com/bloock/bloock-sdk/blob/4afdb4b/languages/js/src/entity/authenticity/signature_jws.ts#L42)

___

### fromProto

▸ **fromProto**(`s`): [`SignatureJws`](SignatureJws.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `SignatureJWS` |

#### Returns

[`SignatureJws`](SignatureJws.md)

#### Defined in

[entity/authenticity/signature_jws.ts:33](https://github.com/bloock/bloock-sdk/blob/4afdb4b/languages/js/src/entity/authenticity/signature_jws.ts#L33)
