const {
  AesDecrypter,
  AesEncrypter,
  KeyClient,
  EncryptionClient,
  RecordClient,
} = require('@bloock/sdk');

let payload = 'This will be encrypted';

// encryption ...

const recordClient = new RecordClient();
const keyClient = new KeyClient();

let key = await keyClient.newLocalKey(KeyType.Aes256);

// To decrypt a record during the building process
// we build a record from the encrypted record and add a decrypter
let decryptedRecord = await recordClient
  .fromRecord(encryptedRecord)
  .withDecrypter(new AesDecrypter(key))
  .build();

// To decrypt an already encrypted record independently
const encryptionClient = new EncryptionClient();
decryptedRecord = await encryptionClient.decrypt(
  encryptedRecord,
  new AesDecrypter(key)
);

let decryptedPayload = decryptedRecord.retrieve();
console.log(`Decryption successfully`);
console.log(`Decrypted payload: ${new TextDecoder().decode(decryptedPayload)}`);
