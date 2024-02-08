[@bloock/sdk](../index.md) / IdentityKeyArgs

# Class: IdentityKeyArgs

Represents arguments for configuring an issuer key.

## Table of contents

### Constructors

- [constructor](IdentityKeyArgs.md#constructor)

### Properties

- [localKey](IdentityKeyArgs.md#localkey)
- [managedKey](IdentityKeyArgs.md#managedkey)

## Constructors

### constructor

• **new IdentityKeyArgs**(`key`): [`IdentityKeyArgs`](IdentityKeyArgs.md)

Constructs an IdentityKeyArgs object with a local or managed key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`LocalKey`](LocalKey.md) \| [`ManagedKey`](ManagedKey.md) |

#### Returns

[`IdentityKeyArgs`](IdentityKeyArgs.md)

#### Defined in

[entity/identity_v2/identity_key_args.ts:14](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/entity/identity_v2/identity_key_args.ts#L14)

## Properties

### localKey

• `Optional` **localKey**: [`LocalKey`](LocalKey.md)

#### Defined in

[entity/identity_v2/identity_key_args.ts:7](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/entity/identity_v2/identity_key_args.ts#L7)

___

### managedKey

• `Optional` **managedKey**: [`ManagedKey`](ManagedKey.md)

#### Defined in

[entity/identity_v2/identity_key_args.ts:8](https://github.com/bloock/bloock-sdk/blob/6fda345/languages/js/src/entity/identity_v2/identity_key_args.ts#L8)
