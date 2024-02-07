[@bloock/sdk](../index.md) / Schema

# Class: Schema

Represents a schema with its attributes.

## Table of contents

### Constructors

- [constructor](Schema.md#constructor)

### Properties

- [cid](Schema.md#cid)
- [cidJsonLd](Schema.md#cidjsonld)
- [json](Schema.md#json)
- [schemaType](Schema.md#schematype)

### Methods

- [toProto](Schema.md#toproto)
- [fromProto](Schema.md#fromproto)

## Constructors

### constructor

• **new Schema**(`cid`, `cidJsonLd`, `schemaType`, `json`): [`Schema`](Schema.md)

Constructs a Schema object with the specified parameters.

#### Parameters

| Name | Type |
| :------ | :------ |
| `cid` | `string` |
| `cidJsonLd` | `string` |
| `schemaType` | `string` |
| `json` | `string` |

#### Returns

[`Schema`](Schema.md)

#### Defined in

[entity/identity_v2/schema.ts:19](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/entity/identity_v2/schema.ts#L19)

## Properties

### cid

• **cid**: `string`

#### Defined in

[entity/identity_v2/schema.ts:7](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/entity/identity_v2/schema.ts#L7)

___

### cidJsonLd

• **cidJsonLd**: `string`

#### Defined in

[entity/identity_v2/schema.ts:8](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/entity/identity_v2/schema.ts#L8)

___

### json

• **json**: `string`

#### Defined in

[entity/identity_v2/schema.ts:10](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/entity/identity_v2/schema.ts#L10)

___

### schemaType

• **schemaType**: `string`

#### Defined in

[entity/identity_v2/schema.ts:9](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/entity/identity_v2/schema.ts#L9)

## Methods

### toProto

▸ **toProto**(): `SchemaV2`

#### Returns

`SchemaV2`

#### Defined in

[entity/identity_v2/schema.ts:31](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/entity/identity_v2/schema.ts#L31)

___

### fromProto

▸ **fromProto**(`r`): [`Schema`](Schema.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `r` | `SchemaV2` |

#### Returns

[`Schema`](Schema.md)

#### Defined in

[entity/identity_v2/schema.ts:40](https://github.com/bloock/bloock-sdk/blob/587f793/languages/js/src/entity/identity_v2/schema.ts#L40)