const {
  EncryptionClient,
  RecordClient,
  KeyClient,
  RsaEncrypter,
} = require('@bloock/sdk');

let payload = 'This will be encrypted';

console.log(`The following payload will be encrypted: ${payload}`);

const encryptionClient = new EncryptionClient();
const keyClient = new KeyClient();
const recordClient = new RecordClient();

let key = await keyClient.newLocalKey(KeyType.Rsa2048);

// To encrypt a record during the building process
let encryptedRecord = await recordClient
  .fromString(payload)
  .withEncrypter(new RsaEncrypter(key))
  .build();

// To encrypt a record independently
let record = await recordClient.fromString(payload).build();
encryptedRecord = await encryptionClient.encrypt(record, new RsaEncrypter(key));

console.log(`Encryption successfully`);

let encryptedPayload = encryptedRecord.retrieve();
console.log(`Encrypted payload: ${new TextDecoder().decode(encryptedPayload)}`);
