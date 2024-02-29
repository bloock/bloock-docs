[@bloock/sdk](../index.md) / LocalKey

# Class: LocalKey

Represents a local key with its public and private components.

## Table of contents

### Constructors

- [constructor](LocalKey.md#constructor)

### Properties

- [key](LocalKey.md#key)
- [keyType](LocalKey.md#keytype)
- [privateKey](LocalKey.md#privatekey)

### Methods

- [toProto](LocalKey.md#toproto)
- [fromProto](LocalKey.md#fromproto)

## Constructors

### constructor

• **new LocalKey**(`key`, `keyType`, `privateKey?`): [`LocalKey`](LocalKey.md)

Constructs a LocalKey object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `keyType` | [`KeyType`](../enums/KeyType-1.md) |
| `privateKey?` | `string` |

#### Returns

[`LocalKey`](LocalKey.md)

#### Defined in

[entity/key/local_key.ts:27](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/entity/key/local_key.ts#L27)

## Properties

### key

• **key**: `string`

Is the public key.

#### Defined in

[entity/key/local_key.ts:11](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/entity/key/local_key.ts#L11)

___

### keyType

• **keyType**: [`KeyType`](../enums/KeyType-1.md)

Is the type of the key.

#### Defined in

[entity/key/local_key.ts:19](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/entity/key/local_key.ts#L19)

___

### privateKey

• `Optional` **privateKey**: `string`

Is the private key.

#### Defined in

[entity/key/local_key.ts:15](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/entity/key/local_key.ts#L15)

## Methods

### toProto

▸ **toProto**(): `LocalKey`

#### Returns

`LocalKey`

#### Defined in

[entity/key/local_key.ts:33](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/entity/key/local_key.ts#L33)

___

### fromProto

▸ **fromProto**(`r`): [`LocalKey`](LocalKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `LocalKey` |

#### Returns

[`LocalKey`](LocalKey.md)

#### Defined in

[entity/key/local_key.ts:41](https://github.com/bloock/bloock-sdk/blob/b0d86bb/languages/js/src/entity/key/local_key.ts#L41)
