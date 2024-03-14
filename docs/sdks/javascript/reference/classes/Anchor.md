[@bloock/sdk](../index.md) / Anchor

# Class: Anchor

Represents information about an anchor.

## Table of contents

### Constructors

- [constructor](Anchor.md#constructor)

### Properties

- [blockRoots](Anchor.md#blockroots)
- [id](Anchor.md#id)
- [networks](Anchor.md#networks)
- [root](Anchor.md#root)
- [status](Anchor.md#status)

### Methods

- [fromProto](Anchor.md#fromproto)

## Constructors

### constructor

• **new Anchor**(`id`, `blockRoots`, `networks`, `root`, `status`): [`Anchor`](Anchor.md)

Constructs an Anchor object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `number` |
| `blockRoots` | `string`[] |
| `networks` | [`AnchorNetwork`](AnchorNetwork.md)[] |
| `root` | `string` |
| `status` | `string` |

#### Returns

[`Anchor`](Anchor.md)

#### Defined in

[entity/integrity/anchor.ts:22](https://github.com/bloock/bloock-sdk/blob/46978bc/languages/js/src/entity/integrity/anchor.ts#L22)

## Properties

### blockRoots

• **blockRoots**: `string`[]

#### Defined in

[entity/integrity/anchor.ts:9](https://github.com/bloock/bloock-sdk/blob/46978bc/languages/js/src/entity/integrity/anchor.ts#L9)

___

### id

• **id**: `number`

#### Defined in

[entity/integrity/anchor.ts:8](https://github.com/bloock/bloock-sdk/blob/46978bc/languages/js/src/entity/integrity/anchor.ts#L8)

___

### networks

• **networks**: [`AnchorNetwork`](AnchorNetwork.md)[]

#### Defined in

[entity/integrity/anchor.ts:10](https://github.com/bloock/bloock-sdk/blob/46978bc/languages/js/src/entity/integrity/anchor.ts#L10)

___

### root

• **root**: `string`

#### Defined in

[entity/integrity/anchor.ts:11](https://github.com/bloock/bloock-sdk/blob/46978bc/languages/js/src/entity/integrity/anchor.ts#L11)

___

### status

• **status**: `string`

#### Defined in

[entity/integrity/anchor.ts:12](https://github.com/bloock/bloock-sdk/blob/46978bc/languages/js/src/entity/integrity/anchor.ts#L12)

## Methods

### fromProto

▸ **fromProto**(`a`): [`Anchor`](Anchor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `Anchor` |

#### Returns

[`Anchor`](Anchor.md)

#### Defined in

[entity/integrity/anchor.ts:36](https://github.com/bloock/bloock-sdk/blob/46978bc/languages/js/src/entity/integrity/anchor.ts#L36)
