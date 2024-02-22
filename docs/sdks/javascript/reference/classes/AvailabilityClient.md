[@bloock/sdk](../index.md) / AvailabilityClient

# Class: AvailabilityClient

Represents a client for interacting with the [Bloock Availability service](https://dashboard.bloock.com/login).

## Table of contents

### Constructors

- [constructor](AvailabilityClient.md#constructor)

### Properties

- [bridge](AvailabilityClient.md#bridge)
- [configData](AvailabilityClient.md#configdata)

### Methods

- [publish](AvailabilityClient.md#publish)
- [retrieve](AvailabilityClient.md#retrieve)

## Constructors

### constructor

• **new AvailabilityClient**(`configData?`): [`AvailabilityClient`](AvailabilityClient.md)

Creates a new instance of the AvailabilityClient with default configuration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `configData?` | `ConfigData` |

#### Returns

[`AvailabilityClient`](AvailabilityClient.md)

#### Defined in

[client/availability.ts:19](https://github.com/bloock/bloock-sdk/blob/82af4b7/languages/js/src/client/availability.ts#L19)

## Properties

### bridge

• `Private` **bridge**: `BloockBridge`

#### Defined in

[client/availability.ts:12](https://github.com/bloock/bloock-sdk/blob/82af4b7/languages/js/src/client/availability.ts#L12)

___

### configData

• `Private` **configData**: `ConfigData`

#### Defined in

[client/availability.ts:13](https://github.com/bloock/bloock-sdk/blob/82af4b7/languages/js/src/client/availability.ts#L13)

## Methods

### publish

▸ **publish**(`record`, `publisher`): `Promise`\<`string`\>

Publishes a Bloock record to the Availability service using the specified publisher.

#### Parameters

| Name | Type |
| :------ | :------ |
| `record` | [`Record`](Record.md) |
| `publisher` | [`Publisher`](../interfaces/Publisher.md) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[client/availability.ts:30](https://github.com/bloock/bloock-sdk/blob/82af4b7/languages/js/src/client/availability.ts#L30)

___

### retrieve

▸ **retrieve**(`loader`): `Promise`\<[`Record`](Record.md)\>

Gets a Bloock record from the Availability service using the specified loader.

#### Parameters

| Name | Type |
| :------ | :------ |
| `loader` | [`Loader`](../interfaces/Loader.md) |

#### Returns

`Promise`\<[`Record`](Record.md)\>

#### Defined in

[client/availability.ts:52](https://github.com/bloock/bloock-sdk/blob/82af4b7/languages/js/src/client/availability.ts#L52)
