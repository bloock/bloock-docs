[@bloock/sdk](../index.md) / WebhookClient

# Class: WebhookClient

Provides functionality for interacting with [Bloock Webhook service](https://dashboard.bloock.com/login).

## Table of contents

### Constructors

- [constructor](WebhookClient.md#constructor)

### Properties

- [bridge](WebhookClient.md#bridge)
- [configData](WebhookClient.md#configdata)

### Methods

- [verifyWebhookSignature](WebhookClient.md#verifywebhooksignature)

## Constructors

### constructor

• **new WebhookClient**(`configData?`): [`WebhookClient`](WebhookClient.md)

Creates a new WebhookClient with default configuration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `configData?` | `ConfigData` |

#### Returns

[`WebhookClient`](WebhookClient.md)

#### Defined in

[client/webhook.ts:17](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/client/webhook.ts#L17)

## Properties

### bridge

• `Private` **bridge**: `BloockBridge`

#### Defined in

[client/webhook.ts:10](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/client/webhook.ts#L10)

___

### configData

• `Private` **configData**: `undefined` \| `ConfigData`

#### Defined in

[client/webhook.ts:11](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/client/webhook.ts#L11)

## Methods

### verifyWebhookSignature

▸ **verifyWebhookSignature**(`payload`, `header`, `secretKey`, `enforceTolerance`): `Promise`\<`boolean`\>

Verifies the signature of a webhook payload using the provided parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `payload` | `Uint8Array` |
| `header` | `string` |
| `secretKey` | `string` |
| `enforceTolerance` | `boolean` |

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[client/webhook.ts:30](https://github.com/bloock/bloock-sdk/blob/edef30d6/languages/js/src/client/webhook.ts#L30)
