[@bloock/sdk](../index.md) / ManagedKeyParams

# Class: ManagedKeyParams

Represents the parameters for creating a managed key.

## Table of contents

### Constructors

- [constructor](ManagedKeyParams.md#constructor)

### Properties

- [expiration](ManagedKeyParams.md#expiration)
- [keyType](ManagedKeyParams.md#keytype)
- [name](ManagedKeyParams.md#name)
- [protection](ManagedKeyParams.md#protection)

### Methods

- [toProto](ManagedKeyParams.md#toproto)

## Constructors

### constructor

• **new ManagedKeyParams**(`protection`, `keyType`, `name?`, `expiration?`): [`ManagedKeyParams`](ManagedKeyParams.md)

Constructs a ManagedKeyParams object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `protection` | [`KeyProtectionLevel`](../enums/KeyProtectionLevel-1.md) |
| `keyType` | [`KeyType`](../enums/KeyType-1.md) |
| `name?` | `string` |
| `expiration?` | `number` |

#### Returns

[`ManagedKeyParams`](ManagedKeyParams.md)

#### Defined in

[entity/key/managed_key_params.ts:33](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/entity/key/managed_key_params.ts#L33)

## Properties

### expiration

• `Optional` **expiration**: `number`

Is the timestamp indicating when the key expires.

#### Defined in

[entity/key/managed_key_params.ts:24](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/entity/key/managed_key_params.ts#L24)

___

### keyType

• **keyType**: [`KeyType`](../enums/KeyType-1.md)

Is the type of the key.

#### Defined in

[entity/key/managed_key_params.ts:20](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/entity/key/managed_key_params.ts#L20)

___

### name

• `Optional` **name**: `string`

Is the name of the managed key.

#### Defined in

[entity/key/managed_key_params.ts:12](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/entity/key/managed_key_params.ts#L12)

___

### protection

• **protection**: [`KeyProtectionLevel`](../enums/KeyProtectionLevel-1.md)

Is the protection level for the key.

#### Defined in

[entity/key/managed_key_params.ts:16](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/entity/key/managed_key_params.ts#L16)

## Methods

### toProto

▸ **toProto**(): `ManagedKeyParams`

#### Returns

`ManagedKeyParams`

#### Defined in

[entity/key/managed_key_params.ts:45](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/entity/key/managed_key_params.ts#L45)
