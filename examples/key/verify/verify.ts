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

const key = await keyClient.newLocalKey(KeyType.EcP256k);

const signedRecord = await recordClient
  .fromString('Hello world')
  .withSigner(new Signer(key))
  .build();

const valid = await authenticityClient.verify(signedRecord);
if (valid) {
  console.log('Signature was verified successfully');
}
