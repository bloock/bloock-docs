[@bloock/sdk](../index.md) / Key

# Class: Key

Represents a key entity that can be either a LocalKey or a ManagedKey.

## Table of contents

### Constructors

- [constructor](Key.md#constructor)

### Properties

- [localKey](Key.md#localkey)
- [managedKey](Key.md#managedkey)

### Methods

- [toProto](Key.md#toproto)

## Constructors

### constructor

• **new Key**(`key`): [`Key`](Key.md)

Constructs a Key object for a given managed or local key object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`LocalKey`](LocalKey.md) \| [`ManagedKey`](ManagedKey.md) |

#### Returns

[`Key`](Key.md)

#### Defined in

[entity/key/key.ts:16](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/key/key.ts#L16)

## Properties

### localKey

• `Optional` **localKey**: [`LocalKey`](LocalKey.md)

#### Defined in

[entity/key/key.ts:9](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/key/key.ts#L9)

___

### managedKey

• `Optional` **managedKey**: [`ManagedKey`](ManagedKey.md)

#### Defined in

[entity/key/key.ts:10](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/key/key.ts#L10)

## Methods

### toProto

▸ **toProto**(): `Key`

#### Returns

`Key`

#### Defined in

[entity/key/key.ts:26](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/key/key.ts#L26)
