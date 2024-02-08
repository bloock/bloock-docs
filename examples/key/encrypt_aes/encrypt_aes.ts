const {
  EncryptionClient,
  KeyClient,
  RecordClient,
  AesEncrypter,
} = require('@bloock/sdk');

let payload = 'This will be encrypted';
console.log(`The following payload will be encrypted: ${payload}`);

const recordClient = new RecordClient();
const keyClient = new KeyClient();

let key = await keyClient.newLocalKey(KeyType.Aes256);

// To encrypt a record during the building process
let encryptedRecord = await recordClient
  .fromString(payload)
  .withEncrypter(new AesEncrypter(key))
  .build();

// To encrypt a record independently
const encryptionClient = new EncryptionClient();
let record = await recordClient.fromString(payload).build();
encryptedRecord = await encryptionClient.encrypt(record, new AesEncrypter(key));

console.log(`Encryption successfully`);

let encryptedPayload = encryptedRecord.retrieve();
console.log(`Encrypted payload: ${new TextDecoder().decode(encryptedPayload)}`);
