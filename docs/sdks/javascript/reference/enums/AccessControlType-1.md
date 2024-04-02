[@bloock/sdk](../index.md) / AccessControlType

# Enumeration: AccessControlType

Represents the access control type a cryptographic key.

## Table of contents

### Enumeration Members

- [NONE](AccessControlType-1.md#none)
- [SECRET](AccessControlType-1.md#secret)
- [TOTP](AccessControlType-1.md#totp)

## Enumeration Members

### NONE

• **NONE** = ``0``

Indicates that the key is not protected by access control.

#### Defined in

[entity/key/access_control_type.ts:10](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/key/access_control_type.ts#L10)

___

### SECRET

• **SECRET** = ``2``

Indicates that the key is protected by a Secret-based access control.

#### Defined in

[entity/key/access_control_type.ts:18](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/key/access_control_type.ts#L18)

___

### TOTP

• **TOTP** = ``1``

Indicates that the key is protected by a TOTP-based access control.

#### Defined in

[entity/key/access_control_type.ts:14](https://github.com/bloock/bloock-sdk/blob/61770ea/languages/js/src/entity/key/access_control_type.ts#L14)
