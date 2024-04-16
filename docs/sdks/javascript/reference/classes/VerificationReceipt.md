[@bloock/sdk](../index.md) / VerificationReceipt

# Class: VerificationReceipt

Represents a receipt for a verification session.

## Table of contents

### Constructors

- [constructor](VerificationReceipt.md#constructor)

### Properties

- [sessionID](VerificationReceipt.md#sessionid)
- [verificationRequest](VerificationReceipt.md#verificationrequest)

### Methods

- [toProto](VerificationReceipt.md#toproto)
- [fromProto](VerificationReceipt.md#fromproto)

## Constructors

### constructor

• **new VerificationReceipt**(`sessionID`, `verificationRequest`): [`VerificationReceipt`](VerificationReceipt.md)

Constructs a VerificationReceipt object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionID` | `number` |
| `verificationRequest` | `string` |

#### Returns

[`VerificationReceipt`](VerificationReceipt.md)

#### Defined in

[entity/identity/verification_receipt.ts:15](https://github.com/bloock/bloock-sdk/blob/4afdb4b/languages/js/src/entity/identity/verification_receipt.ts#L15)

## Properties

### sessionID

• **sessionID**: `number`

#### Defined in

[entity/identity/verification_receipt.ts:7](https://github.com/bloock/bloock-sdk/blob/4afdb4b/languages/js/src/entity/identity/verification_receipt.ts#L7)

___

### verificationRequest

• **verificationRequest**: `string`

#### Defined in

[entity/identity/verification_receipt.ts:8](https://github.com/bloock/bloock-sdk/blob/4afdb4b/languages/js/src/entity/identity/verification_receipt.ts#L8)

## Methods

### toProto

▸ **toProto**(): `VerificationReceipt`

#### Returns

`VerificationReceipt`

#### Defined in

[entity/identity/verification_receipt.ts:20](https://github.com/bloock/bloock-sdk/blob/4afdb4b/languages/js/src/entity/identity/verification_receipt.ts#L20)

___

### fromProto

▸ **fromProto**(`r`): [`VerificationReceipt`](VerificationReceipt.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `VerificationReceipt` |

#### Returns

[`VerificationReceipt`](VerificationReceipt.md)

#### Defined in

[entity/identity/verification_receipt.ts:27](https://github.com/bloock/bloock-sdk/blob/4afdb4b/languages/js/src/entity/identity/verification_receipt.ts#L27)
