const {
  EncryptionClient,
  RecordClient,
  KeyClient,
  RsaEncrypter,
  RsaDecrypter,
} = require('@bloock/sdk');

let payload = 'This will be encrypted';
let client = new BloockClient();

// encryption ...

const recordClient = new RecordClient();
const keyClient = new KeyClient();

let key = await keyClient.newLocalKey(KeyType.Rsa2048);

// To decrypt a record during the building process
// we build a record from the encrypted record and add a decrypter
let decryptedRecord = await recordClient
  .fromRecord(encryptedRecord)
  .withDecrypter(new RsaDecrypter(key))
  .build();

// To decrypt an already encrypted record independently
const encryptionClient = new EncryptionClient();
decryptedRecord = await encryptionClient.decrypt(
  encryptedRecord,
  new RsaDecrypter(key)
);

let decryptedPayload = decryptedRecord.retrieve();
console.log(`Decryption successfully`);
console.log(`Decrypted payload: ${new TextDecoder().decode(decryptedPayload)}`);
