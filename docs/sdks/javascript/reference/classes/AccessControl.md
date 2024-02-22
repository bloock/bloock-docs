[@bloock/sdk](../index.md) / AccessControl

# Class: AccessControl

Represents access control information, including Time-based One-Time Password (TOTP) and secret-based access.

## Table of contents

### Constructors

- [constructor](AccessControl.md#constructor)

### Properties

- [accessControlSecret](AccessControl.md#accesscontrolsecret)
- [accessControlTotp](AccessControl.md#accesscontroltotp)

### Methods

- [toProto](AccessControl.md#toproto)

## Constructors

### constructor

• **new AccessControl**(`accessControl`): [`AccessControl`](AccessControl.md)

Constructs AccessControl object from an AccessControlTotp or AccessControlSecret object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessControl` | [`AccessControlSecret`](AccessControlSecret.md) \| [`AccessControlTotp`](AccessControlTotp.md) |

#### Returns

[`AccessControl`](AccessControl.md)

#### Defined in

[entity/key/access_control.ts:16](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/key/access_control.ts#L16)

## Properties

### accessControlSecret

• `Optional` **accessControlSecret**: [`AccessControlSecret`](AccessControlSecret.md)

#### Defined in

[entity/key/access_control.ts:10](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/key/access_control.ts#L10)

___

### accessControlTotp

• `Optional` **accessControlTotp**: [`AccessControlTotp`](AccessControlTotp.md)

#### Defined in

[entity/key/access_control.ts:9](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/key/access_control.ts#L9)

## Methods

### toProto

▸ **toProto**(): `AccessControl`

#### Returns

`AccessControl`

#### Defined in

[entity/key/access_control.ts:28](https://github.com/bloock/bloock-sdk/blob/cf2e115/languages/js/src/entity/key/access_control.ts#L28)
