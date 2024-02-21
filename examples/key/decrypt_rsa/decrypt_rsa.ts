import {
  Encrypter,
  EncryptionClient,
  KeyClient,
  KeyType,
  Record,
  RecordClient,
} from '@bloock/sdk';

// encryption ...

const recordClient = new RecordClient();
const keyClient = new KeyClient();

const key = await keyClient.newLocalKey(KeyType.Rsa2048);

// encryption ...
let encryptedRecord: Record;

// To decrypt a record during the building process
// we build a record from the encrypted record and add a decrypter
let decryptedRecord = await recordClient
  .fromRecord(encryptedRecord)
  .withDecrypter(new Encrypter(key))
  .build();

// To decrypt an already encrypted record independently
const encryptionClient = new EncryptionClient();
decryptedRecord = await encryptionClient.decrypt(
  encryptedRecord,
  new Encrypter(key)
);

const decryptedPayload = decryptedRecord.retrieve();
console.log(`Decryption successfully`);
console.log(`Decrypted payload: ${new TextDecoder().decode(decryptedPayload)}`);
