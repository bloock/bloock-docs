[@bloock/sdk](../index.md) / RsaKeyPair

# Class: RsaKeyPair

Represents a rsa key pair, with private and public key.

## Hierarchy

- [`KeyPair`](KeyPair.md)

  ↳ **`RsaKeyPair`**

## Table of contents

### Constructors

- [constructor](RsaKeyPair.md#constructor)

### Properties

- [privateKey](RsaKeyPair.md#privatekey)
- [publicKey](RsaKeyPair.md#publickey)

### Methods

- [fromProto](RsaKeyPair.md#fromproto)

## Constructors

### constructor

• **new RsaKeyPair**(`publicKey`, `privateKey`): [`RsaKeyPair`](RsaKeyPair.md)

Constructs a KeyPair object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `string` |
| `privateKey` | `string` |

#### Returns

[`RsaKeyPair`](RsaKeyPair.md)

#### Inherited from

[KeyPair](KeyPair.md).[constructor](KeyPair.md#constructor)

#### Defined in

[entity/key/key_pair.ts:13](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/key/key_pair.ts#L13)

## Properties

### privateKey

• **privateKey**: `string`

#### Inherited from

[KeyPair](KeyPair.md).[privateKey](KeyPair.md#privatekey)

#### Defined in

[entity/key/key_pair.ts:6](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/key/key_pair.ts#L6)

___

### publicKey

• **publicKey**: `string`

#### Inherited from

[KeyPair](KeyPair.md).[publicKey](KeyPair.md#publickey)

#### Defined in

[entity/key/key_pair.ts:5](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/key/key_pair.ts#L5)

## Methods

### fromProto

▸ **fromProto**(`k`): [`KeyPair`](KeyPair.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `k` | `GenerateLocalKeyResponse` |

#### Returns

[`KeyPair`](KeyPair.md)

#### Defined in

[entity/key/rsa_key_pair.ts:8](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/key/rsa_key_pair.ts#L8)
