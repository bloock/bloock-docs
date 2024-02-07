[@bloock/sdk](../index.md) / Bloock

# Class: Bloock

Provides a centralized configuration for the Bloock SDK library. For information about Bloock SDK in Go, see https://bloock.com.

## Table of contents

### Constructors

- [constructor](Bloock.md#constructor)

### Properties

- [apiHost](Bloock.md#apihost)
- [apiKey](Bloock.md#apikey)
- [disableAnalytics](Bloock.md#disableanalytics)
- [forceEnv](Bloock.md#forceenv)
- [identityApiHost](Bloock.md#identityapihost)
- [networksConfig](Bloock.md#networksconfig)
- [instance](Bloock.md#instance)

### Methods

- [getApiHost](Bloock.md#getapihost)
- [getApiKey](Bloock.md#getapikey)
- [getDisableAnalytics](Bloock.md#getdisableanalytics)
- [getForceEnv](Bloock.md#getforceenv)
- [getIdentityApiHost](Bloock.md#getidentityapihost)
- [getNetworkConfiguration](Bloock.md#getnetworkconfiguration)
- [setApiHost](Bloock.md#setapihost)
- [setApiKey](Bloock.md#setapikey)
- [setContractAddress](Bloock.md#setcontractaddress)
- [setDisableAnalytics](Bloock.md#setdisableanalytics)
- [setForceEnv](Bloock.md#setforceenv)
- [setIdentityApiHost](Bloock.md#setidentityapihost)
- [setProvider](Bloock.md#setprovider)

## Constructors

### constructor

• **new Bloock**(): [`Bloock`](Bloock.md)

Creates a new instance of Bloock instance.

#### Returns

[`Bloock`](Bloock.md)

#### Defined in

[bloock.ts:23](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/bloock.ts#L23)

## Properties

### apiHost

• `Private` `Optional` **apiHost**: `string`

#### Defined in

[bloock.ts:14](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/bloock.ts#L14)

___

### apiKey

• `Private` `Optional` **apiKey**: `string`

#### Defined in

[bloock.ts:11](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/bloock.ts#L11)

___

### disableAnalytics

• `Private` **disableAnalytics**: `boolean` = `false`

#### Defined in

[bloock.ts:15](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/bloock.ts#L15)

___

### forceEnv

• `Private` `Optional` **forceEnv**: `string`

#### Defined in

[bloock.ts:12](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/bloock.ts#L12)

___

### identityApiHost

• `Private` `Optional` **identityApiHost**: `string`

#### Defined in

[bloock.ts:13](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/bloock.ts#L13)

___

### networksConfig

• `Private` `Optional` **networksConfig**: `Object`

#### Index signature

▪ [key: `number`]: `NetworkConfigProto`

#### Defined in

[bloock.ts:16](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/bloock.ts#L16)

___

### instance

▪ `Static` `Private` **instance**: [`Bloock`](Bloock.md)

#### Defined in

[bloock.ts:10](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/bloock.ts#L10)

## Methods

### getApiHost

▸ **getApiHost**(): `undefined` \| `string`

Is a string variable representing the host URL used for API communication with the Bloock SDK.

#### Returns

`undefined` \| `string`

#### Defined in

[bloock.ts:99](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/bloock.ts#L99)

___

### getApiKey

▸ **getApiKey**(): `undefined` \| `string`

Is a string variable representing the API key used for authentication with the Bloock SDK, create [here](https://dashboard.bloock.com/login).

#### Returns

`undefined` \| `string`

#### Defined in

[bloock.ts:33](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/bloock.ts#L33)

___

### getDisableAnalytics

▸ **getDisableAnalytics**(): `boolean`

Is a boolean variable that, when set to true, disables the analytics feature in the Bloock SDK.

#### Returns

`boolean`

#### Defined in

[bloock.ts:121](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/bloock.ts#L121)

___

### getForceEnv

▸ **getForceEnv**(): `undefined` \| `string`

Is a string variable used to force a specific environment configuration, it allows developers to set a predefined environment for the Bloock SDK.

#### Returns

`undefined` \| `string`

#### Defined in

[bloock.ts:55](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/bloock.ts#L55)

___

### getIdentityApiHost

▸ **getIdentityApiHost**(): `undefined` \| `string`

Is a string variable representing the host URL used for Identity Managed API, required to be set for identity-related features of the Bloock SDK.

#### Returns

`undefined` \| `string`

#### Defined in

[bloock.ts:77](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/bloock.ts#L77)

___

### getNetworkConfiguration

▸ **getNetworkConfiguration**(): `undefined` \| \{ `[key: number]`: `NetworkConfigProto`;  }

Is a variable that holds network configurations associated with specific network IDs in the Bloock SDK.

#### Returns

`undefined` \| \{ `[key: number]`: `NetworkConfigProto`;  }

#### Defined in

[bloock.ts:143](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/bloock.ts#L143)

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

[bloock.ts:110](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/bloock.ts#L110)

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

[bloock.ts:44](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/bloock.ts#L44)

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

[bloock.ts:180](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/bloock.ts#L180)

___

### setDisableAnalytics

▸ **setDisableAnalytics**(`disableAnalytics`): `void`

Sets the boolean variable that disables the analytics feature in the Bloock SDK.

#### Parameters

| Name | Type |
| :------ | :------ |
| `disableAnalytics` | `boolean` |

#### Returns

`void`

#### Defined in

[bloock.ts:132](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/bloock.ts#L132)

___

### setForceEnv

▸ **setForceEnv**(`forceEnv`): `void`

Sets the environment used for the Bloock SDK.

#### Parameters

| Name | Type |
| :------ | :------ |
| `forceEnv` | `string` |

#### Returns

`void`

#### Defined in

[bloock.ts:66](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/bloock.ts#L66)

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

[bloock.ts:88](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/bloock.ts#L88)

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

[bloock.ts:157](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/bloock.ts#L157)
