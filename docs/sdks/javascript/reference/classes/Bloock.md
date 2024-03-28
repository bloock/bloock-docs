[@bloock/sdk](../index.md) / Bloock

# Class: Bloock

Provides a centralized configuration for the Bloock SDK library. For information about Bloock SDK in Go, see https://bloock.com.

## Table of contents

### Constructors

- [constructor](Bloock.md#constructor)

### Properties

- [apiHost](Bloock.md#apihost)
- [apiKey](Bloock.md#apikey)
- [identityApiHost](Bloock.md#identityapihost)
- [networksConfig](Bloock.md#networksconfig)
- [instance](Bloock.md#instance)

### Methods

- [getApiHost](Bloock.md#getapihost)
- [getApiKey](Bloock.md#getapikey)
- [getIdentityApiHost](Bloock.md#getidentityapihost)
- [getNetworkConfiguration](Bloock.md#getnetworkconfiguration)
- [setApiHost](Bloock.md#setapihost)
- [setApiKey](Bloock.md#setapikey)
- [setContractAddress](Bloock.md#setcontractaddress)
- [setIdentityApiHost](Bloock.md#setidentityapihost)
- [setProvider](Bloock.md#setprovider)

## Constructors

### constructor

• **new Bloock**(): [`Bloock`](Bloock.md)

Creates a new instance of Bloock instance.

#### Returns

[`Bloock`](Bloock.md)

#### Defined in

[bloock.ts:21](https://github.com/bloock/bloock-sdk/blob/cd5373f/languages/js/src/bloock.ts#L21)

## Properties

### apiHost

• `Private` `Optional` **apiHost**: `string`

#### Defined in

[bloock.ts:13](https://github.com/bloock/bloock-sdk/blob/cd5373f/languages/js/src/bloock.ts#L13)

___

### apiKey

• `Private` `Optional` **apiKey**: `string`

#### Defined in

[bloock.ts:11](https://github.com/bloock/bloock-sdk/blob/cd5373f/languages/js/src/bloock.ts#L11)

___

### identityApiHost

• `Private` `Optional` **identityApiHost**: `string`

#### Defined in

[bloock.ts:12](https://github.com/bloock/bloock-sdk/blob/cd5373f/languages/js/src/bloock.ts#L12)

___

### networksConfig

• `Private` `Optional` **networksConfig**: `Object`

#### Index signature

▪ [key: `number`]: `NetworkConfigProto`

#### Defined in

[bloock.ts:14](https://github.com/bloock/bloock-sdk/blob/cd5373f/languages/js/src/bloock.ts#L14)

___

### instance

▪ `Static` `Private` **instance**: [`Bloock`](Bloock.md)

#### Defined in

[bloock.ts:10](https://github.com/bloock/bloock-sdk/blob/cd5373f/languages/js/src/bloock.ts#L10)

## Methods

### getApiHost

▸ **getApiHost**(): `undefined` \| `string`

Is a string variable representing the host URL used for API communication with the Bloock SDK.

#### Returns

`undefined` \| `string`

#### Defined in

[bloock.ts:75](https://github.com/bloock/bloock-sdk/blob/cd5373f/languages/js/src/bloock.ts#L75)

___

### getApiKey

▸ **getApiKey**(): `undefined` \| `string`

Is a string variable representing the API key used for authentication with the Bloock SDK, create [here](https://dashboard.bloock.com/login).

#### Returns

`undefined` \| `string`

#### Defined in

[bloock.ts:31](https://github.com/bloock/bloock-sdk/blob/cd5373f/languages/js/src/bloock.ts#L31)

___

### getIdentityApiHost

▸ **getIdentityApiHost**(): `undefined` \| `string`

Is a string variable representing the host URL used for Identity Managed API, required to be set for identity-related features of the Bloock SDK.

#### Returns

`undefined` \| `string`

#### Defined in

[bloock.ts:53](https://github.com/bloock/bloock-sdk/blob/cd5373f/languages/js/src/bloock.ts#L53)

___

### getNetworkConfiguration

▸ **getNetworkConfiguration**(): `undefined` \| \{ `[key: number]`: `NetworkConfigProto`;  }

Is a variable that holds network configurations associated with specific network IDs in the Bloock SDK.

#### Returns

`undefined` \| \{ `[key: number]`: `NetworkConfigProto`;  }

#### Defined in

[bloock.ts:97](https://github.com/bloock/bloock-sdk/blob/cd5373f/languages/js/src/bloock.ts#L97)

___

### setApiHost

▸ **setApiHost**(`host`): `void`

Sets the host used for API communication with the Bloock SDK.

#### Parameters

| Name | Type |
| :------ | :------ |
| `host` | `string` |

#### Returns

`void`

#### Defined in

[bloock.ts:86](https://github.com/bloock/bloock-sdk/blob/cd5373f/languages/js/src/bloock.ts#L86)

___

### setApiKey

▸ **setApiKey**(`apiKey`): `void`

Sets the API key used for authentication with the Bloock SDK.

#### Parameters

| Name | Type |
| :------ | :------ |
| `apiKey` | `string` |

#### Returns

`void`

#### Defined in

[bloock.ts:42](https://github.com/bloock/bloock-sdk/blob/cd5373f/languages/js/src/bloock.ts#L42)

___

### setContractAddress

▸ **setContractAddress**(`network`, `contractAddress`): `void`

Sets the contract address for the specified network in the Bloock SDK configuration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | `Network` |
| `contractAddress` | `string` |

#### Returns

`void`

#### Defined in

[bloock.ts:134](https://github.com/bloock/bloock-sdk/blob/cd5373f/languages/js/src/bloock.ts#L134)

___

### setIdentityApiHost

▸ **setIdentityApiHost**(`identityApiHost`): `void`

Sets the host URL used for Identity Managed API.

#### Parameters

| Name | Type |
| :------ | :------ |
| `identityApiHost` | `string` |

#### Returns

`void`

#### Defined in

[bloock.ts:64](https://github.com/bloock/bloock-sdk/blob/cd5373f/languages/js/src/bloock.ts#L64)

___

### setProvider

▸ **setProvider**(`network`, `provider`): `void`

Sets the HTTP provider for the specified network in the Bloock SDK configuration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `network` | `Network` |
| `provider` | `string` |

#### Returns

`void`

#### Defined in

[bloock.ts:111](https://github.com/bloock/bloock-sdk/blob/cd5373f/languages/js/src/bloock.ts#L111)
