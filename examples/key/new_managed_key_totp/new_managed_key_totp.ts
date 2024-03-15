import {
  AccessControl,
  AccessControlTotp,
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

// Create a TOTP access control for the created key
const totp = await keyClient.setupTotpAccessControl(new Managed(_key));

console.log(totp.secretQr); // base64url encoded string with the TOTP setup QRCode. You can scan this QR with your TOTP application client.
console.log(totp.secret); // secret code that you can use instead of the QRCode to setup your TOTP application client.
console.log(totp.recoveryCodes); // recovery codes you need to save, so you could use in case you loose your access control.

const record = await recordClient.fromString('Hello world').build();

// How to sign using the TOTP access control
const accessCode = new AccessControlTotp('code digit'); // get the code from your TOTP application (Google Authenticator). Ej: 731 049
await authenticityClient.sign(
  record,
  new Signer(_key, undefined, new AccessControl(accessCode))
);

// Recover in case you lose your access control
const _totpRecovered = await keyClient.recoverTotpAccessControl(
  new Managed(_key),
  totp.recoveryCodes[0] // recovery code you saved previously
);
