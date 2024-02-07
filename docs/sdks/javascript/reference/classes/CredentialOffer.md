[@bloock/sdk](../index.md) / CredentialOffer

# Class: CredentialOffer

## Table of contents

### Constructors

- [constructor](CredentialOffer.md#constructor)

### Properties

- [body](CredentialOffer.md#body)
- [from](CredentialOffer.md#from)
- [thid](CredentialOffer.md#thid)
- [to](CredentialOffer.md#to)

### Methods

- [toJson](CredentialOffer.md#tojson)
- [toProto](CredentialOffer.md#toproto)
- [fromJson](CredentialOffer.md#fromjson)
- [fromProto](CredentialOffer.md#fromproto)

## Constructors

### constructor

• **new CredentialOffer**(`thid`, `body`, `from`, `to`): [`CredentialOffer`](CredentialOffer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `thid` | `string` |
| `body` | `CredentialOfferBody` |
| `from` | `string` |
| `to` | `string` |

#### Returns

[`CredentialOffer`](CredentialOffer.md)

#### Defined in

[entity/identity/credential_offer.ts:16](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/entity/identity/credential_offer.ts#L16)

## Properties

### body

• **body**: `CredentialOfferBody`

#### Defined in

[entity/identity/credential_offer.ts:12](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/entity/identity/credential_offer.ts#L12)

___

### from

• **from**: `string`

#### Defined in

[entity/identity/credential_offer.ts:13](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/entity/identity/credential_offer.ts#L13)

___

### thid

• **thid**: `string`

#### Defined in

[entity/identity/credential_offer.ts:11](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/entity/identity/credential_offer.ts#L11)

___

### to

• **to**: `string`

#### Defined in

[entity/identity/credential_offer.ts:14](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/entity/identity/credential_offer.ts#L14)

## Methods

### toJson

▸ **toJson**(): `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

#### Defined in

[entity/identity/credential_offer.ts:46](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/entity/identity/credential_offer.ts#L46)

___

### toProto

▸ **toProto**(): `CredentialOffer`

#### Returns

`CredentialOffer`

#### Defined in

[entity/identity/credential_offer.ts:28](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/entity/identity/credential_offer.ts#L28)

___

### fromJson

▸ **fromJson**(`json`): `Promise`\<[`CredentialOffer`](CredentialOffer.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `string` |

#### Returns

`Promise`\<[`CredentialOffer`](CredentialOffer.md)\>

#### Defined in

[entity/identity/credential_offer.ts:65](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/entity/identity/credential_offer.ts#L65)

___

### fromProto

▸ **fromProto**(`r`): [`CredentialOffer`](CredentialOffer.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `CredentialOffer` |

#### Returns

[`CredentialOffer`](CredentialOffer.md)

#### Defined in

[entity/identity/credential_offer.ts:37](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/entity/identity/credential_offer.ts#L37)
