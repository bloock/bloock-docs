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
    .withSigner(new EcdsaSigner(key, { commonName: 'some name' }))
    .build();

  let valid = await authenticityClient.verify(signedRecord);
  if (valid) {
    console.log('Signature was verified successfully');
  }
})();
