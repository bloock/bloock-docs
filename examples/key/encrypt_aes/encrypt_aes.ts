import {
  Encrypter,
  EncryptionClient,
  KeyClient,
  KeyType,
  RecordClient,
} from '@bloock/sdk';

const payload = 'This will be encrypted';
console.log(`The following payload will be encrypted: ${payload}`);

const recordClient = new RecordClient();
const keyClient = new KeyClient();

const key = await keyClient.newLocalKey(KeyType.Aes256);

// To encrypt a record during the building process
let encryptedRecord = await recordClient
  .fromString(payload)
  .withEncrypter(new Encrypter(key))
  .build();

// To encrypt a record independently
const encryptionClient = new EncryptionClient();
const record = await recordClient.fromString(payload).build();
encryptedRecord = await encryptionClient.encrypt(record, new Encrypter(key));

console.log(`Encryption successfully`);

const encryptedPayload = encryptedRecord.retrieve();
console.log(`Encrypted payload: ${new TextDecoder().decode(encryptedPayload)}`);
