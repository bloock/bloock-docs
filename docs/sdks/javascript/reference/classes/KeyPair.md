[@bloock/sdk](../index.md) / KeyPair

# Class: KeyPair

Represents a pair of public and private keys.

## Hierarchy

- **`KeyPair`**

  ↳ [`EcdsaKeyPair`](EcdsaKeyPair.md)

  ↳ [`RsaKeyPair`](RsaKeyPair.md)

## Table of contents

### Constructors

- [constructor](KeyPair.md#constructor)

### Properties

- [privateKey](KeyPair.md#privatekey)
- [publicKey](KeyPair.md#publickey)

## Constructors

### constructor

• **new KeyPair**(`publicKey`, `privateKey`): [`KeyPair`](KeyPair.md)

Constructs a KeyPair object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `publicKey` | `string` |
| `privateKey` | `string` |

#### Returns

[`KeyPair`](KeyPair.md)

#### Defined in

[entity/key/key_pair.ts:13](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/entity/key/key_pair.ts#L13)

## Properties

### privateKey

• **privateKey**: `string`

#### Defined in

[entity/key/key_pair.ts:6](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/entity/key/key_pair.ts#L6)

___

### publicKey

• **publicKey**: `string`

#### Defined in

[entity/key/key_pair.ts:5](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/entity/key/key_pair.ts#L5)
