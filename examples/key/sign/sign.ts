import {
  AuthenticityClient,
  KeyClient,
  KeyType,
  RecordClient,
  Signer,
} from '@bloock/sdk';

const keyClient = new KeyClient();
const authenticityClient = new AuthenticityClient();
const recordClient = new RecordClient();

let key = await keyClient.newLocalKey(KeyType.EcP256k);

let signedRecord = await recordClient
  .fromString('Hello world')
  .withSigner(new Signer(key))
  .build();

console.log('Record was signed successfully');

// we can add another signature with a different key
key = await keyClient.newLocalKey(KeyType.EcP256k);

console.log('Adding another signature');
signedRecord = await recordClient
  .fromRecord(signedRecord)
  .withSigner(new Signer(key))
  .build();

console.log('Record was signed successfully');

console.log(`Hash: ${await signedRecord.getHash()}`);

const signatures = await authenticityClient.getSignatures(signedRecord);
signatures.forEach((signature, i) => {
  console.log(`Signature ${i + 1}: ${JSON.stringify(signature, null, 4)}`);
});
