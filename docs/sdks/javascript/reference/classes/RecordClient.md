[@bloock/sdk](../index.md) / RecordClient

# Class: RecordClient

Provides functionality for creating records using various data sources and to interact with the [Bloock Record service](https://dashboard.bloock.com/login).

## Table of contents

### Constructors

- [constructor](RecordClient.md#constructor)

### Properties

- [configData](RecordClient.md#configdata)

### Methods

- [fromBytes](RecordClient.md#frombytes)
- [fromFile](RecordClient.md#fromfile)
- [fromHex](RecordClient.md#fromhex)
- [fromJson](RecordClient.md#fromjson)
- [fromLoader](RecordClient.md#fromloader)
- [fromRecord](RecordClient.md#fromrecord)
- [fromString](RecordClient.md#fromstring)

## Constructors

### constructor

• **new RecordClient**(`configData?`): [`RecordClient`](RecordClient.md)

Creates a new RecordClient with default configuration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `configData?` | `ConfigData` |

#### Returns

[`RecordClient`](RecordClient.md)

#### Defined in

[client/record.ts:33](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/client/record.ts#L33)

## Properties

### configData

• `Private` **configData**: `ConfigData`

#### Defined in

[client/record.ts:27](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/client/record.ts#L27)

## Methods

### fromBytes

▸ **fromBytes**(`bytes`): [`RecordBuilder`](RecordBuilder.md)

Creates a RecordBuilder from a byte slice payload.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

[`RecordBuilder`](RecordBuilder.md)

#### Defined in

[client/record.ts:73](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/client/record.ts#L73)

___

### fromFile

▸ **fromFile**(`bytes`): [`RecordBuilder`](RecordBuilder.md)

Creates a RecordBuilder from a byte slice representing a file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | `Uint8Array` |

#### Returns

[`RecordBuilder`](RecordBuilder.md)

#### Defined in

[client/record.ts:82](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/client/record.ts#L82)

___

### fromHex

▸ **fromHex**(`hex`): [`RecordBuilder`](RecordBuilder.md)

Creates a RecordBuilder from a hexadecimal string payload.

#### Parameters

| Name | Type |
| :------ | :------ |
| `hex` | `string` |

#### Returns

[`RecordBuilder`](RecordBuilder.md)

#### Defined in

[client/record.ts:64](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/client/record.ts#L64)

___

### fromJson

▸ **fromJson**(`json`): [`RecordBuilder`](RecordBuilder.md)

Creates a RecordBuilder from a JSON string payload.

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `any` |

#### Returns

[`RecordBuilder`](RecordBuilder.md)

#### Defined in

[client/record.ts:51](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/client/record.ts#L51)

___

### fromLoader

▸ **fromLoader**(`loader`): [`RecordBuilder`](RecordBuilder.md)

Creates a RecordBuilder from a data loader.

#### Parameters

| Name | Type |
| :------ | :------ |
| `loader` | [`Loader`](../interfaces/Loader.md) |

#### Returns

[`RecordBuilder`](RecordBuilder.md)

#### Defined in

[client/record.ts:100](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/client/record.ts#L100)

___

### fromRecord

▸ **fromRecord**(`bytes`): [`RecordBuilder`](RecordBuilder.md)

Creates a RecordBuilder from an existing record.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bytes` | [`Record`](Record.md) |

#### Returns

[`RecordBuilder`](RecordBuilder.md)

#### Defined in

[client/record.ts:91](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/client/record.ts#L91)

___

### fromString

▸ **fromString**(`str`): [`RecordBuilder`](RecordBuilder.md)

Creates a RecordBuilder from a string payload.

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

[`RecordBuilder`](RecordBuilder.md)

#### Defined in

[client/record.ts:42](https://github.com/bloock/bloock-sdk/blob/bcb68de/languages/js/src/client/record.ts#L42)
