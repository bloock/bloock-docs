[@bloock/sdk](../index.md) / DidType

# Class: DidType

Represents parameters used for generating DIDs.

## Table of contents

### Constructors

- [constructor](DidType.md#constructor)

### Properties

- [blockchain](DidType.md#blockchain)
- [method](DidType.md#method)
- [network](DidType.md#network)

### Methods

- [toProto](DidType.md#toproto)

## Constructors

### constructor

• **new DidType**(`method`, `blockchain`, `network`): [`DidType`](DidType.md)

Constructs a DidType object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `method` | [`Method`](../enums/Method-1.md) |
| `blockchain` | [`Blockchain`](../enums/Blockchain-1.md) |
| `network` | [`NetworkId`](../enums/NetworkId-1.md) |

#### Returns

[`DidType`](DidType.md)

#### Defined in

[entity/identity/did_type.ts:20](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/did_type.ts#L20)

## Properties

### blockchain

• **blockchain**: [`Blockchain`](../enums/Blockchain-1.md)

#### Defined in

[entity/identity/did_type.ts:11](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/did_type.ts#L11)

___

### method

• **method**: [`Method`](../enums/Method-1.md)

#### Defined in

[entity/identity/did_type.ts:10](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/did_type.ts#L10)

___

### network

• **network**: [`NetworkId`](../enums/NetworkId-1.md)

#### Defined in

[entity/identity/did_type.ts:12](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/did_type.ts#L12)

## Methods

### toProto

▸ **toProto**(): `DidType`

#### Returns

`DidType`

#### Defined in

[entity/identity/did_type.ts:26](https://github.com/bloock/bloock-sdk/blob/9affaa1/languages/js/src/entity/identity/did_type.ts#L26)
