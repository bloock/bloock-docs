[@bloock/sdk](../index.md) / Identity

# Class: Identity

## Table of contents

### Constructors

- [constructor](Identity.md#constructor)

### Properties

- [key](Identity.md#key)
- [mnemonic](Identity.md#mnemonic)
- [privateKey](Identity.md#privatekey)

### Methods

- [toProto](Identity.md#toproto)
- [fromProto](Identity.md#fromproto)

## Constructors

### constructor

• **new Identity**(`mnemonic`, `key`, `privateKey`): [`Identity`](Identity.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `mnemonic` | `string` |
| `key` | `string` |
| `privateKey` | `string` |

#### Returns

[`Identity`](Identity.md)

#### Defined in

[entity/identity/identity.ts:8](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity/identity.ts#L8)

## Properties

### key

• **key**: `string`

#### Defined in

[entity/identity/identity.ts:5](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity/identity.ts#L5)

___

### mnemonic

• **mnemonic**: `string`

#### Defined in

[entity/identity/identity.ts:4](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity/identity.ts#L4)

___

### privateKey

• **privateKey**: `string`

#### Defined in

[entity/identity/identity.ts:6](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity/identity.ts#L6)

## Methods

### toProto

▸ **toProto**(): `Identity`

#### Returns

`Identity`

#### Defined in

[entity/identity/identity.ts:14](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity/identity.ts#L14)

___

### fromProto

▸ **fromProto**(`r`): [`Identity`](Identity.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `Identity` |

#### Returns

[`Identity`](Identity.md)

#### Defined in

[entity/identity/identity.ts:22](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity/identity.ts#L22)
