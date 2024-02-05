[@bloock/sdk](../index.md) / HostedLoader

# Class: HostedLoader

Represents a loader for hosted data availability.

## Implements

- [`Loader`](../interfaces/Loader.md)

## Table of contents

### Constructors

- [constructor](HostedLoader.md#constructor)

### Properties

- [args](HostedLoader.md#args)
- [type](HostedLoader.md#type)

### Methods

- [toProto](HostedLoader.md#toproto)

## Constructors

### constructor

• **new HostedLoader**(`id`): [`HostedLoader`](HostedLoader.md)

Constructs a HostedLoader object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`HostedLoader`](HostedLoader.md)

#### Defined in

[entity/availability/hosted_loader.ts:16](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/availability/hosted_loader.ts#L16)

## Properties

### args

• **args**: [`LoaderArgs`](LoaderArgs.md)

#### Implementation of

[Loader](../interfaces/Loader.md).[args](../interfaces/Loader.md#args)

#### Defined in

[entity/availability/hosted_loader.ts:10](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/availability/hosted_loader.ts#L10)

___

### type

• **type**: `DataAvailabilityType`

#### Implementation of

[Loader](../interfaces/Loader.md).[type](../interfaces/Loader.md#type)

#### Defined in

[entity/availability/hosted_loader.ts:9](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/availability/hosted_loader.ts#L9)

## Methods

### toProto

▸ **toProto**(): `Loader`

#### Returns

`Loader`

#### Implementation of

[Loader](../interfaces/Loader.md).[toProto](../interfaces/Loader.md#toproto)

#### Defined in

[entity/availability/hosted_loader.ts:21](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/entity/availability/hosted_loader.ts#L21)
