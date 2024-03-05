[@bloock/sdk](../index.md) / EcdsaKeyPair

# Class: EcdsaKeyPair

Represents an ecdsa key pair, with private and public key.

## Hierarchy

- [`KeyPair`](KeyPair.md)

  ↳ **`EcdsaKeyPair`**

## Table of contents

### Constructors

- [constructor](EcdsaKeyPair.md#constructor)

### Properties

- [privateKey](EcdsaKeyPair.md#privatekey)
- [publicKey](EcdsaKeyPair.md#publickey)

### Methods

- [fromProto](EcdsaKeyPair.md#fromproto)

## Constructors

### constructor

• **new EcdsaKeyPair**(`publicKey`, `privateKey`): [`EcdsaKeyPair`](EcdsaKeyPair.md)

Constructs a KeyPair object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `string` |
| `privateKey` | `string` |

#### Returns

[`EcdsaKeyPair`](EcdsaKeyPair.md)

#### Inherited from

[KeyPair](KeyPair.md).[constructor](KeyPair.md#constructor)

#### Defined in

[entity/key/key_pair.ts:13](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/entity/key/key_pair.ts#L13)

## Properties

### privateKey

• **privateKey**: `string`

#### Inherited from

[KeyPair](KeyPair.md).[privateKey](KeyPair.md#privatekey)

#### Defined in

[entity/key/key_pair.ts:6](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/entity/key/key_pair.ts#L6)

___

### publicKey

• **publicKey**: `string`

#### Inherited from

[KeyPair](KeyPair.md).[publicKey](KeyPair.md#publickey)

#### Defined in

[entity/key/key_pair.ts:5](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/entity/key/key_pair.ts#L5)

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

[entity/key/ecdsa_key_pair.ts:8](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/entity/key/ecdsa_key_pair.ts#L8)
