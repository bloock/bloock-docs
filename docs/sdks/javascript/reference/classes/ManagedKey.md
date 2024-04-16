[@bloock/sdk](../index.md) / ManagedKey

# Class: ManagedKey

Represents a managed key.

## Table of contents

### Constructors

- [constructor](ManagedKey.md#constructor)

### Properties

- [accessControlType](ManagedKey.md#accesscontroltype)
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

• **new ManagedKey**(`id`, `protection`, `keyType`, `key`, `accessControlType`, `name?`, `expiration?`): [`ManagedKey`](ManagedKey.md)

Constructs a ManagedKey object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `protection` | [`KeyProtectionLevel`](../enums/KeyProtectionLevel-1.md) |
| `keyType` | [`KeyType`](../enums/KeyType-1.md) |
| `key` | `string` |
| `accessControlType` | [`AccessControlType`](../enums/AccessControlType-1.md) |
| `name?` | `string` |
| `expiration?` | `number` |

#### Returns

[`ManagedKey`](ManagedKey.md)

#### Defined in

[entity/key/managed_key.ts:49](https://github.com/bloock/bloock-sdk/blob/4afdb4b/languages/js/src/entity/key/managed_key.ts#L49)

## Properties

### accessControlType

• **accessControlType**: [`AccessControlType`](../enums/AccessControlType-1.md)

Is the access control type for the key.

#### Defined in

[entity/key/managed_key.ts:37](https://github.com/bloock/bloock-sdk/blob/4afdb4b/languages/js/src/entity/key/managed_key.ts#L37)

___

### expiration

• `Optional` **expiration**: `number`

Is the timestamp indicating when the key expires.

#### Defined in

[entity/key/managed_key.ts:29](https://github.com/bloock/bloock-sdk/blob/4afdb4b/languages/js/src/entity/key/managed_key.ts#L29)

___

### id

• **id**: `string`

Is the unique identifier of the managed key (ex: 46c49ee7-ef44-472c-a873-ce81a2d5d764).

#### Defined in

[entity/key/managed_key.ts:13](https://github.com/bloock/bloock-sdk/blob/4afdb4b/languages/js/src/entity/key/managed_key.ts#L13)

___

### key

• **key**: `string`

Is the actual public key.

#### Defined in

[entity/key/managed_key.ts:33](https://github.com/bloock/bloock-sdk/blob/4afdb4b/languages/js/src/entity/key/managed_key.ts#L33)

___

### keyType

• **keyType**: [`KeyType`](../enums/KeyType-1.md)

Is the type of the key.

#### Defined in

[entity/key/managed_key.ts:25](https://github.com/bloock/bloock-sdk/blob/4afdb4b/languages/js/src/entity/key/managed_key.ts#L25)

___

### name

• `Optional` **name**: `string`

Is the name of the managed key.

#### Defined in

[entity/key/managed_key.ts:17](https://github.com/bloock/bloock-sdk/blob/4afdb4b/languages/js/src/entity/key/managed_key.ts#L17)

___

### protection

• **protection**: [`KeyProtectionLevel`](../enums/KeyProtectionLevel-1.md)

Is the protection level for the key.

#### Defined in

[entity/key/managed_key.ts:21](https://github.com/bloock/bloock-sdk/blob/4afdb4b/languages/js/src/entity/key/managed_key.ts#L21)

## Methods

### toProto

▸ **toProto**(): `ManagedKey`

#### Returns

`ManagedKey`

#### Defined in

[entity/key/managed_key.ts:67](https://github.com/bloock/bloock-sdk/blob/4afdb4b/languages/js/src/entity/key/managed_key.ts#L67)

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

[entity/key/managed_key.ts:79](https://github.com/bloock/bloock-sdk/blob/4afdb4b/languages/js/src/entity/key/managed_key.ts#L79)
