[@bloock/sdk](../index.md) / Record

# Class: Record

Represents a record with payload, hash, and configuration data.

## Table of contents

### Constructors

- [constructor](Record.md#constructor)

### Properties

- [configData](Record.md#configdata)
- [hash](Record.md#hash)
- [payload](Record.md#payload)

### Methods

- [getHash](Record.md#gethash)
- [getPayload](Record.md#getpayload)
- [retrieve](Record.md#retrieve)
- [setProof](Record.md#setproof)
- [toProto](Record.md#toproto)
- [fromProto](Record.md#fromproto)

## Constructors

### constructor

• **new Record**(`payload`, `hash`, `configData`): [`Record`](Record.md)

Constructs a Record object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `Uint8Array` |
| `hash` | `string` |
| `configData` | `ConfigData` |

#### Returns

[`Record`](Record.md)

#### Defined in

[entity/record/record.ts:25](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/record/record.ts#L25)

## Properties

### configData

• **configData**: `ConfigData`

#### Defined in

[entity/record/record.ts:17](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/record/record.ts#L17)

___

### hash

• **hash**: `string`

#### Defined in

[entity/record/record.ts:16](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/record/record.ts#L16)

___

### payload

• **payload**: `Uint8Array`

#### Defined in

[entity/record/record.ts:15](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/record/record.ts#L15)

## Methods

### getHash

▸ **getHash**(): `Promise`\<`string`\>

Retrieves the hash of the record.

#### Returns

`Promise`\<`string`\>

#### Defined in

[entity/record/record.ts:47](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/record/record.ts#L47)

___

### getPayload

▸ **getPayload**(): `Promise`\<`Uint8Array`\>

Retrieves the payload of the record.

#### Returns

`Promise`\<`Uint8Array`\>

#### Defined in

[entity/record/record.ts:69](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/record/record.ts#L69)

___

### retrieve

▸ **retrieve**(): `Uint8Array`

Returns the payload of the record.

#### Returns

`Uint8Array`

#### Defined in

[entity/record/record.ts:91](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/record/record.ts#L91)

___

### setProof

▸ **setProof**(`proof`): `Promise`\<`void`\>

Sets the proof for a record.

#### Parameters

| Name | Type |
| :------ | :------ |
| `proof` | [`Proof`](Proof.md) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[entity/record/record.ts:100](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/record/record.ts#L100)

___

### toProto

▸ **toProto**(): `Record`

#### Returns

`Record`

#### Defined in

[entity/record/record.ts:35](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/record/record.ts#L35)

___

### fromProto

▸ **fromProto**(`r`, `configData`): [`Record`](Record.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `Record` |
| `configData` | `ConfigData` |

#### Returns

[`Record`](Record.md)

#### Defined in

[entity/record/record.ts:31](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/record/record.ts#L31)
