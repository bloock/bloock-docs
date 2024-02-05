[@bloock/sdk](../index.md) / DidParams

# Class: DidParams

Represents parameters used for generating DIDs.

## Table of contents

### Constructors

- [constructor](DidParams.md#constructor)

### Properties

- [blockchain](DidParams.md#blockchain)
- [method](DidParams.md#method)
- [network](DidParams.md#network)

### Methods

- [toProto](DidParams.md#toproto)

## Constructors

### constructor

• **new DidParams**(`method`, `blockchain`, `network`): [`DidParams`](DidParams.md)

Constructs a DidParams object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | [`Method`](../enums/Method-1.md) |
| `blockchain` | [`Blockchain`](../enums/Blockchain-1.md) |
| `network` | [`NetworkId`](../enums/NetworkId-1.md) |

#### Returns

[`DidParams`](DidParams.md)

#### Defined in

[entity/identity_v2/did_params.ts:20](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity_v2/did_params.ts#L20)

## Properties

### blockchain

• **blockchain**: [`Blockchain`](../enums/Blockchain-1.md)

#### Defined in

[entity/identity_v2/did_params.ts:11](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity_v2/did_params.ts#L11)

___

### method

• **method**: [`Method`](../enums/Method-1.md)

#### Defined in

[entity/identity_v2/did_params.ts:10](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity_v2/did_params.ts#L10)

___

### network

• **network**: [`NetworkId`](../enums/NetworkId-1.md)

#### Defined in

[entity/identity_v2/did_params.ts:12](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity_v2/did_params.ts#L12)

## Methods

### toProto

▸ **toProto**(): `DidParams`

#### Returns

`DidParams`

#### Defined in

[entity/identity_v2/did_params.ts:26](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/identity_v2/did_params.ts#L26)
