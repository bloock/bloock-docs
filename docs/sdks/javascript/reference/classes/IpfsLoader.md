[@bloock/sdk](../index.md) / IpfsLoader

# Class: IpfsLoader

Represents a loader for IPFS data availability.

## Implements

- [`Loader`](../interfaces/Loader.md)

## Table of contents

### Constructors

- [constructor](IpfsLoader.md#constructor)

### Properties

- [args](IpfsLoader.md#args)
- [type](IpfsLoader.md#type)

### Methods

- [toProto](IpfsLoader.md#toproto)

## Constructors

### constructor

• **new IpfsLoader**(`id`): [`IpfsLoader`](IpfsLoader.md)

Constructs a IpfsLoader object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`IpfsLoader`](IpfsLoader.md)

#### Defined in

[entity/availability/ipfs_loader.ts:16](https://github.com/bloock/bloock-sdk/blob/8d532d6/languages/js/src/entity/availability/ipfs_loader.ts#L16)

## Properties

### args

• **args**: [`LoaderArgs`](LoaderArgs.md)

#### Implementation of

[Loader](../interfaces/Loader.md).[args](../interfaces/Loader.md#args)

#### Defined in

[entity/availability/ipfs_loader.ts:10](https://github.com/bloock/bloock-sdk/blob/8d532d6/languages/js/src/entity/availability/ipfs_loader.ts#L10)

___

### type

• **type**: `DataAvailabilityType`

#### Implementation of

[Loader](../interfaces/Loader.md).[type](../interfaces/Loader.md#type)

#### Defined in

[entity/availability/ipfs_loader.ts:9](https://github.com/bloock/bloock-sdk/blob/8d532d6/languages/js/src/entity/availability/ipfs_loader.ts#L9)

## Methods

### toProto

▸ **toProto**(): `Loader`

#### Returns

`Loader`

#### Implementation of

[Loader](../interfaces/Loader.md).[toProto](../interfaces/Loader.md#toproto)

#### Defined in

[entity/availability/ipfs_loader.ts:21](https://github.com/bloock/bloock-sdk/blob/8d532d6/languages/js/src/entity/availability/ipfs_loader.ts#L21)
