[@bloock/sdk](../index.md) / Signature

# Class: Signature

Represents a cryptographic signature along with additional metadata.

## Table of contents

### Constructors

- [constructor](Signature.md#constructor)

### Properties

- [alg](Signature.md#alg)
- [kid](Signature.md#kid)
- [messageHash](Signature.md#messagehash)
- [signature](Signature.md#signature)
- [subject](Signature.md#subject)

### Methods

- [getAlg](Signature.md#getalg)
- [toProto](Signature.md#toproto)
- [fromProto](Signature.md#fromproto)

## Constructors

### constructor

• **new Signature**(`messageHash`, `signature`, `alg`, `kid`, `subject?`): [`Signature`](Signature.md)

Constructs a Signature object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `messageHash` | `string` |
| `signature` | `string` |
| `alg` | `string` |
| `kid` | `string` |
| `subject?` | `string` |

#### Returns

[`Signature`](Signature.md)

#### Defined in

[entity/authenticity/signature.ts:37](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/authenticity/signature.ts#L37)

## Properties

### alg

• **alg**: `string`

Is the algorithm used for the signature.

#### Defined in

[entity/authenticity/signature.ts:15](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/authenticity/signature.ts#L15)

___

### kid

• **kid**: `string`

Is the key identifier associated with the signature. (public key or key ID).

#### Defined in

[entity/authenticity/signature.ts:19](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/authenticity/signature.ts#L19)

___

### messageHash

• **messageHash**: `string`

Is the hash of the message that was signed.

#### Defined in

[entity/authenticity/signature.ts:23](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/authenticity/signature.ts#L23)

___

### signature

• **signature**: `string`

Is the cryptographic signature.

#### Defined in

[entity/authenticity/signature.ts:11](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/authenticity/signature.ts#L11)

___

### subject

• `Optional` **subject**: `string`

Is an optional field representing the subject of the signature.

#### Defined in

[entity/authenticity/signature.ts:27](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/authenticity/signature.ts#L27)

## Methods

### getAlg

▸ **getAlg**(): [`SignatureAlg`](../enums/SignatureAlg-1.md)

Returns the SignatureAlg based on the algorithm specified in the Alg field.

#### Returns

[`SignatureAlg`](../enums/SignatureAlg-1.md)

#### Defined in

[entity/authenticity/signature.ts:69](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/authenticity/signature.ts#L69)

___

### toProto

▸ **toProto**(): `Signature`

#### Returns

`Signature`

#### Defined in

[entity/authenticity/signature.ts:55](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/authenticity/signature.ts#L55)

___

### fromProto

▸ **fromProto**(`s`): [`Signature`](Signature.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `s` | `Signature` |

#### Returns

[`Signature`](Signature.md)

#### Defined in

[entity/authenticity/signature.ts:51](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/authenticity/signature.ts#L51)
