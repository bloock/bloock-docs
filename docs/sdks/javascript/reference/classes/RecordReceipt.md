[@bloock/sdk](../index.md) / RecordReceipt

# Class: RecordReceipt

Represents a receipt for a record, including anchor ID, client, record, and status information.

## Table of contents

### Constructors

- [constructor](RecordReceipt.md#constructor)

### Properties

- [anchor](RecordReceipt.md#anchor)
- [client](RecordReceipt.md#client)
- [record](RecordReceipt.md#record)
- [status](RecordReceipt.md#status)

### Methods

- [toProto](RecordReceipt.md#toproto)
- [fromProto](RecordReceipt.md#fromproto)

## Constructors

### constructor

• **new RecordReceipt**(`anchor`, `client`, `record`, `status`): [`RecordReceipt`](RecordReceipt.md)

Constructs a RecordReceipt object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `anchor` | `number` |
| `client` | `string` |
| `record` | `string` |
| `status` | `string` |

#### Returns

[`RecordReceipt`](RecordReceipt.md)

#### Defined in

[entity/integrity/record_receipt.ts:19](https://github.com/bloock/bloock-sdk/blob/34885a1/languages/js/src/entity/integrity/record_receipt.ts#L19)

## Properties

### anchor

• **anchor**: `number`

#### Defined in

[entity/integrity/record_receipt.ts:7](https://github.com/bloock/bloock-sdk/blob/34885a1/languages/js/src/entity/integrity/record_receipt.ts#L7)

___

### client

• **client**: `string`

#### Defined in

[entity/integrity/record_receipt.ts:8](https://github.com/bloock/bloock-sdk/blob/34885a1/languages/js/src/entity/integrity/record_receipt.ts#L8)

___

### record

• **record**: `string`

#### Defined in

[entity/integrity/record_receipt.ts:9](https://github.com/bloock/bloock-sdk/blob/34885a1/languages/js/src/entity/integrity/record_receipt.ts#L9)

___

### status

• **status**: `string`

#### Defined in

[entity/integrity/record_receipt.ts:10](https://github.com/bloock/bloock-sdk/blob/34885a1/languages/js/src/entity/integrity/record_receipt.ts#L10)

## Methods

### toProto

▸ **toProto**(): `RecordReceipt`

#### Returns

`RecordReceipt`

#### Defined in

[entity/integrity/record_receipt.ts:30](https://github.com/bloock/bloock-sdk/blob/34885a1/languages/js/src/entity/integrity/record_receipt.ts#L30)

___

### fromProto

▸ **fromProto**(`r`): [`RecordReceipt`](RecordReceipt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `RecordReceipt` |

#### Returns

[`RecordReceipt`](RecordReceipt.md)

#### Defined in

[entity/integrity/record_receipt.ts:26](https://github.com/bloock/bloock-sdk/blob/34885a1/languages/js/src/entity/integrity/record_receipt.ts#L26)
