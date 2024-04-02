[@bloock/sdk](../index.md) / TotpAccessControlReceipt

# Class: TotpAccessControlReceipt

Represents a receipt for a Time-based One-Time Password (TOTP) access control.

## Table of contents

### Constructors

- [constructor](TotpAccessControlReceipt.md#constructor)

### Properties

- [recoveryCodes](TotpAccessControlReceipt.md#recoverycodes)
- [secret](TotpAccessControlReceipt.md#secret)
- [secretQr](TotpAccessControlReceipt.md#secretqr)

## Constructors

### constructor

• **new TotpAccessControlReceipt**(`secret`, `secretQr`, `recoveryCodes`): [`TotpAccessControlReceipt`](TotpAccessControlReceipt.md)

Creates a new TotpAccessControlReceipt with the provided secret, secret QR code, and recovery codes.

#### Parameters

| Name | Type |
| :------ | :------ |
| `secret` | `string` |
| `secretQr` | `string` |
| `recoveryCodes` | `string`[] |

#### Returns

[`TotpAccessControlReceipt`](TotpAccessControlReceipt.md)

#### Defined in

[entity/key/totp_access_control_receipt.ts:15](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/key/totp_access_control_receipt.ts#L15)

## Properties

### recoveryCodes

• **recoveryCodes**: `string`[]

#### Defined in

[entity/key/totp_access_control_receipt.ts:7](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/key/totp_access_control_receipt.ts#L7)

___

### secret

• **secret**: `string`

#### Defined in

[entity/key/totp_access_control_receipt.ts:5](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/key/totp_access_control_receipt.ts#L5)

___

### secretQr

• **secretQr**: `string`

#### Defined in

[entity/key/totp_access_control_receipt.ts:6](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/key/totp_access_control_receipt.ts#L6)
