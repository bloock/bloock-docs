[@bloock/sdk](../index.md) / ManagedKey

# Class: ManagedKey

Represents a managed key.

## Table of contents

### Constructors

- [constructor](ManagedKey.md#constructor)

### Properties

- [expiration](ManagedKey.md#expiration)
- [id](ManagedKey.md#id)
- [key](ManagedKey.md#key)
- [keyType](ManagedKey.md#keytype)
- [name](ManagedKey.md#name)
- [protection](ManagedKey.md#protection)

### Methods

- [toProto](ManagedKey.md#toproto)
- [fromProto](ManagedKey.md#fromproto)

## Constructors

### constructor

• **new ManagedKey**(`id`, `protection`, `keyType`, `key`, `name?`, `expiration?`): [`ManagedKey`](ManagedKey.md)

Constructs a ManagedKey object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `protection` | [`KeyProtectionLevel`](../enums/KeyProtectionLevel-1.md) |
| `keyType` | [`KeyType`](../enums/KeyType-1.md) |
| `key` | `string` |
| `name?` | `string` |
| `expiration?` | `number` |

#### Returns

[`ManagedKey`](ManagedKey.md)

#### Defined in

[entity/key/managed_key.ts:43](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/key/managed_key.ts#L43)

## Properties

### expiration

• `Optional` **expiration**: `number`

Is the timestamp indicating when the key expires.

#### Defined in

[entity/key/managed_key.ts:28](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/key/managed_key.ts#L28)

___

### id

• **id**: `string`

Is the unique identifier of the managed key (ex: 46c49ee7-ef44-472c-a873-ce81a2d5d764).

#### Defined in

[entity/key/managed_key.ts:12](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/key/managed_key.ts#L12)

___

### key

• **key**: `string`

Is the actual public key.

#### Defined in

[entity/key/managed_key.ts:32](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/key/managed_key.ts#L32)

___

### keyType

• **keyType**: [`KeyType`](../enums/KeyType-1.md)

Is the type of the key.

#### Defined in

[entity/key/managed_key.ts:24](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/key/managed_key.ts#L24)

___

### name

• `Optional` **name**: `string`

Is the name of the managed key.

#### Defined in

[entity/key/managed_key.ts:16](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/key/managed_key.ts#L16)

___

### protection

• **protection**: [`KeyProtectionLevel`](../enums/KeyProtectionLevel-1.md)

Is the protection level for the key.

#### Defined in

[entity/key/managed_key.ts:20](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/key/managed_key.ts#L20)

## Methods

### toProto

▸ **toProto**(): `ManagedKey`

#### Returns

`ManagedKey`

#### Defined in

[entity/key/managed_key.ts:59](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/key/managed_key.ts#L59)

___

### fromProto

▸ **fromProto**(`r`): [`ManagedKey`](ManagedKey.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `ManagedKey` |

#### Returns

[`ManagedKey`](ManagedKey.md)

#### Defined in

[entity/key/managed_key.ts:70](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/key/managed_key.ts#L70)
