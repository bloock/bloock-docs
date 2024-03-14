[@bloock/sdk](../index.md) / ProofAnchor

# Class: ProofAnchor

Represents a proof anchor.

## Table of contents

### Constructors

- [constructor](ProofAnchor.md#constructor)

### Properties

- [anchorID](ProofAnchor.md#anchorid)
- [networks](ProofAnchor.md#networks)
- [root](ProofAnchor.md#root)
- [status](ProofAnchor.md#status)

### Methods

- [toProto](ProofAnchor.md#toproto)
- [fromProto](ProofAnchor.md#fromproto)

## Constructors

### constructor

• **new ProofAnchor**(`anchorID`, `networks`, `root`, `status`): [`ProofAnchor`](ProofAnchor.md)

Constructs a ProofAnchor object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `anchorID` | `number` |
| `networks` | [`AnchorNetwork`](AnchorNetwork.md)[] |
| `root` | `string` |
| `status` | `string` |

#### Returns

[`ProofAnchor`](ProofAnchor.md)

#### Defined in

[entity/integrity/proof_anchor.ts:20](https://github.com/bloock/bloock-sdk/blob/46978bc/languages/js/src/entity/integrity/proof_anchor.ts#L20)

## Properties

### anchorID

• **anchorID**: `number`

#### Defined in

[entity/integrity/proof_anchor.ts:8](https://github.com/bloock/bloock-sdk/blob/46978bc/languages/js/src/entity/integrity/proof_anchor.ts#L8)

___

### networks

• **networks**: [`AnchorNetwork`](AnchorNetwork.md)[]

#### Defined in

[entity/integrity/proof_anchor.ts:9](https://github.com/bloock/bloock-sdk/blob/46978bc/languages/js/src/entity/integrity/proof_anchor.ts#L9)

___

### root

• **root**: `string`

#### Defined in

[entity/integrity/proof_anchor.ts:10](https://github.com/bloock/bloock-sdk/blob/46978bc/languages/js/src/entity/integrity/proof_anchor.ts#L10)

___

### status

• **status**: `string`

#### Defined in

[entity/integrity/proof_anchor.ts:11](https://github.com/bloock/bloock-sdk/blob/46978bc/languages/js/src/entity/integrity/proof_anchor.ts#L11)

## Methods

### toProto

▸ **toProto**(): `ProofAnchor`

#### Returns

`ProofAnchor`

#### Defined in

[entity/integrity/proof_anchor.ts:41](https://github.com/bloock/bloock-sdk/blob/46978bc/languages/js/src/entity/integrity/proof_anchor.ts#L41)

___

### fromProto

▸ **fromProto**(`p`): [`ProofAnchor`](ProofAnchor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `ProofAnchor` |

#### Returns

[`ProofAnchor`](ProofAnchor.md)

#### Defined in

[entity/integrity/proof_anchor.ts:32](https://github.com/bloock/bloock-sdk/blob/46978bc/languages/js/src/entity/integrity/proof_anchor.ts#L32)
