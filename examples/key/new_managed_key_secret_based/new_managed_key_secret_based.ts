import {
  AccessControl,
  AccessControlSecret,
  AuthenticityClient,
  KeyClient,
  KeyProtectionLevel,
  KeyType,
  Managed,
  ManagedKeyParams,
  RecordClient,
  Signer,
} from '@bloock/sdk';

// initialize the Key Client
const keyClient = new KeyClient();
// initialize the Authenticity Client
const authenticityClient = new AuthenticityClient();
// initialize the Record Client
const recordClient = new RecordClient();
// initialize the protection key level
const keyProtection = KeyProtectionLevel.SOFTWARE;

// Generate a Rsa2048 key
const keyType = KeyType.Rsa2048;
const _key = await keyClient.newManagedKey(
  new ManagedKeyParams(keyProtection, keyType)
);

const secret = 'your secret';
const email = 'recovery@bloock.com'; // your email to recover your access control

// Create a Secret-Based access control for the created key
await keyClient.setupSecretAccessControl(new Managed(_key), secret, email);

const record = await recordClient.fromString('Hello world').build();

// How to sign using the Secret-Based access control
const accessCode = new AccessControlSecret(secret);
await authenticityClient.sign(
  record,
  new Signer(_key, undefined, new AccessControl(accessCode))
);
