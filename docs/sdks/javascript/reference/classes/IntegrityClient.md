[@bloock/sdk](../index.md) / IntegrityClient

# Class: IntegrityClient

Provides functionality to interact with the [Bloock Integrity service](https://dashboard.bloock.com/login).

## Table of contents

### Constructors

- [constructor](IntegrityClient.md#constructor)

### Properties

- [bridge](IntegrityClient.md#bridge)
- [configData](IntegrityClient.md#configdata)

### Methods

- [getAnchor](IntegrityClient.md#getanchor)
- [getProof](IntegrityClient.md#getproof)
- [sendRecords](IntegrityClient.md#sendrecords)
- [validateRoot](IntegrityClient.md#validateroot)
- [verifyProof](IntegrityClient.md#verifyproof)
- [verifyRecords](IntegrityClient.md#verifyrecords)
- [waitAnchor](IntegrityClient.md#waitanchor)

## Constructors

### constructor

• **new IntegrityClient**(`configData?`): [`IntegrityClient`](IntegrityClient.md)

Creates a new IntegrityClient with default configuration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `configData?` | `ConfigData` |

#### Returns

[`IntegrityClient`](IntegrityClient.md)

#### Defined in

[client/integrity.ts:29](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/client/integrity.ts#L29)

## Properties

### bridge

• `Private` **bridge**: `BloockBridge`

#### Defined in

[client/integrity.ts:22](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/client/integrity.ts#L22)

___

### configData

• `Private` **configData**: `undefined` \| `ConfigData`

#### Defined in

[client/integrity.ts:23](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/client/integrity.ts#L23)

## Methods

### getAnchor

▸ **getAnchor**(`anchorId`): `Promise`\<[`Anchor`](Anchor.md)\>

Gets an anchor by its ID from the Bloock Integrity service.

#### Parameters

| Name | Type |
| :------ | :------ |
| `anchorId` | `number` |

#### Returns

`Promise`\<[`Anchor`](Anchor.md)\>

#### Defined in

[client/integrity.ts:61](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/client/integrity.ts#L61)

___

### getProof

▸ **getProof**(`records`): `Promise`\<[`Proof`](Proof.md)\>

Gets a proof for a set of records from the Bloock Integrity service.

#### Parameters

| Name | Type |
| :------ | :------ |
| `records` | [`Record`](Record.md)[] |

#### Returns

`Promise`\<[`Proof`](Proof.md)\>

#### Defined in

[client/integrity.ts:107](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/client/integrity.ts#L107)

___

### sendRecords

▸ **sendRecords**(`records`): `Promise`\<[`RecordReceipt`](RecordReceipt.md)[]\>

Sends records to the Bloock Integrity service for certification.

#### Parameters

| Name | Type |
| :------ | :------ |
| `records` | [`Record`](Record.md)[] |

#### Returns

`Promise`\<[`RecordReceipt`](RecordReceipt.md)[]\>

#### Defined in

[client/integrity.ts:39](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/client/integrity.ts#L39)

___

### validateRoot

▸ **validateRoot**(`root`, `network`): `Promise`\<`number`\>

Validates the integrity of a merkle root proof on blockchain.

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | `string` |
| `network` | `Network` |

#### Returns

`Promise`\<`number`\>

#### Defined in

[client/integrity.ts:130](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/client/integrity.ts#L130)

___

### verifyProof

▸ **verifyProof**(`proof`): `Promise`\<`string`\>

Verifies the integrity of a proof.

#### Parameters

| Name | Type |
| :------ | :------ |
| `proof` | [`Proof`](Proof.md) |

#### Returns

`Promise`\<`string`\>

#### Defined in

[client/integrity.ts:153](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/client/integrity.ts#L153)

___

### verifyRecords

▸ **verifyRecords**(`records`, `network?`): `Promise`\<`number`\>

Verifies the integrity of a set of records.

#### Parameters

| Name | Type |
| :------ | :------ |
| `records` | [`Record`](Record.md)[] |
| `network?` | `Network` |

#### Returns

`Promise`\<`number`\>

#### Defined in

[client/integrity.ts:176](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/client/integrity.ts#L176)

___

### waitAnchor

▸ **waitAnchor**(`anchorId`, `timeout?`): `Promise`\<[`Anchor`](Anchor.md)\>

Waits for the completion of an anchor on the Bloock Integrity service.

#### Parameters

| Name | Type |
| :------ | :------ |
| `anchorId` | `number` |
| `timeout?` | `number` |

#### Returns

`Promise`\<[`Anchor`](Anchor.md)\>

#### Defined in

[client/integrity.ts:84](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/client/integrity.ts#L84)
