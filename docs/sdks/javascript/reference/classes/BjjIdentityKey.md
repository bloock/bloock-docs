[@bloock/sdk](../index.md) / BjjIdentityKey

# Class: BjjIdentityKey

Represents an identity BJJ key used.

## Implements

- [`IdentityKey`](../interfaces/IdentityKey.md)

## Table of contents

### Constructors

- [constructor](BjjIdentityKey.md#constructor)

### Properties

- [args](BjjIdentityKey.md#args)

### Methods

- [toProto](BjjIdentityKey.md#toproto)

## Constructors

### constructor

• **new BjjIdentityKey**(`key`): [`BjjIdentityKey`](BjjIdentityKey.md)

Creates a new BjjIdentityKey instance with the provided issuer key arguments.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`LocalKey`](LocalKey.md) \| [`ManagedKey`](ManagedKey.md) |

#### Returns

[`BjjIdentityKey`](BjjIdentityKey.md)

#### Defined in

[entity/identity_v2/bjj_identity_key.ts:16](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/entity/identity_v2/bjj_identity_key.ts#L16)

## Properties

### args

• **args**: [`IdentityKeyArgs`](IdentityKeyArgs.md)

#### Defined in

[entity/identity_v2/bjj_identity_key.ts:10](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/entity/identity_v2/bjj_identity_key.ts#L10)

## Methods

### toProto

▸ **toProto**(): `IdentityKey`

#### Returns

`IdentityKey`

#### Implementation of

[IdentityKey](../interfaces/IdentityKey.md).[toProto](../interfaces/IdentityKey.md#toproto)

#### Defined in

[entity/identity_v2/bjj_identity_key.ts:20](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/entity/identity_v2/bjj_identity_key.ts#L20)
