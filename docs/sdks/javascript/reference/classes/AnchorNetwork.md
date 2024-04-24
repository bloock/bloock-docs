[@bloock/sdk](../index.md) / AnchorNetwork

# Class: AnchorNetwork

Represents information about an anchor network.

## Table of contents

### Constructors

- [constructor](AnchorNetwork.md#constructor)

### Properties

- [name](AnchorNetwork.md#name)
- [root](AnchorNetwork.md#root)
- [state](AnchorNetwork.md#state)
- [txHash](AnchorNetwork.md#txhash)

### Methods

- [toProto](AnchorNetwork.md#toproto)
- [fromProto](AnchorNetwork.md#fromproto)

## Constructors

### constructor

• **new AnchorNetwork**(`name`, `state`, `txHash`, `root?`): [`AnchorNetwork`](AnchorNetwork.md)

Constructs an AnchorNetwork object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `state` | `string` |
| `txHash` | `string` |
| `root?` | `string` |

#### Returns

[`AnchorNetwork`](AnchorNetwork.md)

#### Defined in

[entity/integrity/anchor_network.ts:19](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/integrity/anchor_network.ts#L19)

## Properties

### name

• **name**: `string`

#### Defined in

[entity/integrity/anchor_network.ts:7](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/integrity/anchor_network.ts#L7)

___

### root

• `Optional` **root**: `string`

#### Defined in

[entity/integrity/anchor_network.ts:10](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/integrity/anchor_network.ts#L10)

___

### state

• **state**: `string`

#### Defined in

[entity/integrity/anchor_network.ts:8](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/integrity/anchor_network.ts#L8)

___

### txHash

• **txHash**: `string`

#### Defined in

[entity/integrity/anchor_network.ts:9](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/integrity/anchor_network.ts#L9)

## Methods

### toProto

▸ **toProto**(): `AnchorNetwork`

#### Returns

`AnchorNetwork`

#### Defined in

[entity/integrity/anchor_network.ts:30](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/integrity/anchor_network.ts#L30)

___

### fromProto

▸ **fromProto**(`a`): [`AnchorNetwork`](AnchorNetwork.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `AnchorNetwork` |

#### Returns

[`AnchorNetwork`](AnchorNetwork.md)

#### Defined in

[entity/integrity/anchor_network.ts:26](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/integrity/anchor_network.ts#L26)
