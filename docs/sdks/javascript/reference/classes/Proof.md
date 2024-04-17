[@bloock/sdk](../index.md) / Proof

# Class: Proof

Represents a proof, including leaves, nodes, depth, bitmap, and anchor information.

## Table of contents

### Constructors

- [constructor](Proof.md#constructor)

### Properties

- [anchor](Proof.md#anchor)
- [bitmap](Proof.md#bitmap)
- [depth](Proof.md#depth)
- [leaves](Proof.md#leaves)
- [nodes](Proof.md#nodes)

### Methods

- [toProto](Proof.md#toproto)
- [fromProto](Proof.md#fromproto)

## Constructors

### constructor

• **new Proof**(`leaves`, `nodes`, `depth`, `bitmap`, `anchor`): [`Proof`](Proof.md)

Constructs a Proof object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `leaves` | `string`[] |
| `nodes` | `string`[] |
| `depth` | `string` |
| `bitmap` | `string` |
| `anchor` | [`ProofAnchor`](ProofAnchor.md) |

#### Returns

[`Proof`](Proof.md)

#### Defined in

[entity/integrity/proof.ts:22](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/integrity/proof.ts#L22)

## Properties

### anchor

• **anchor**: [`ProofAnchor`](ProofAnchor.md)

#### Defined in

[entity/integrity/proof.ts:12](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/integrity/proof.ts#L12)

___

### bitmap

• **bitmap**: `string`

#### Defined in

[entity/integrity/proof.ts:11](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/integrity/proof.ts#L11)

___

### depth

• **depth**: `string`

#### Defined in

[entity/integrity/proof.ts:10](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/integrity/proof.ts#L10)

___

### leaves

• **leaves**: `string`[]

#### Defined in

[entity/integrity/proof.ts:8](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/integrity/proof.ts#L8)

___

### nodes

• **nodes**: `string`[]

#### Defined in

[entity/integrity/proof.ts:9](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/integrity/proof.ts#L9)

## Methods

### toProto

▸ **toProto**(): `Proof`

#### Returns

`Proof`

#### Defined in

[entity/integrity/proof.ts:46](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/integrity/proof.ts#L46)

___

### fromProto

▸ **fromProto**(`p`): [`Proof`](Proof.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `p` | `Proof` |

#### Returns

[`Proof`](Proof.md)

#### Defined in

[entity/integrity/proof.ts:36](https://github.com/bloock/bloock-sdk/blob/10b1e90/languages/js/src/entity/integrity/proof.ts#L36)
