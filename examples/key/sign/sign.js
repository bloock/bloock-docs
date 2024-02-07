const {
  AuthenticityClient,
  EcdsaSigner,
  KeyClient,
  RecordClient,
  KeyType,
} = require('@bloock/sdk');

(async () => {
  let keyClient = new KeyClient();
  let authenticityClient = new AuthenticityClient();
  let recordClient = new RecordClient();

  let key = await keyClient.newLocalKey(KeyType.EcP256k);

  let signedRecord = await recordClient
    .fromString('Hello world')
    .withSigner(new EcdsaSigner(key))
    .build();

  console.log('Record was signed successfully');

  // we can add another signature with a different key
  key = await keyClient.newLocalKey(KeyType.EcP256k);

  console.log('Adding another signature');
  signedRecord = await recordClient
    .fromRecord(signedRecord)
    .withSigner(new EcdsaSigner(key))
    .build();

  console.log('Record was signed successfully');

  console.log(`Hash: ${await signedRecord.getHash()}`);

  let signatures = await authenticityClient.getSignatures(signedRecord);
  signatures.forEach((signature, i) => {
    console.log(`Signature ${i + 1}: ${JSON.stringify(signature, null, 4)}`);
  });
})();
