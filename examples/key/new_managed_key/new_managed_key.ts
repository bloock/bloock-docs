import {
  KeyClient,
  KeyProtectionLevel,
  KeyType,
  ManagedKeyParams,
} from '@bloock/sdk';

const keyClient = new KeyClient();
const keyProtection = KeyProtectionLevel.SOFTWARE;

// Generate a EcP256k key
let keyType = KeyType.EcP256k;
let _key = await keyClient.newManagedKey(
  new ManagedKeyParams(keyProtection, keyType)
);

// Generate a Rsa2048 key
keyType = KeyType.Rsa2048;
_key = await keyClient.newManagedKey(
  new ManagedKeyParams(keyProtection, keyType)
);

// Generate a Rsa3072 key
keyType = KeyType.Rsa3072;
_key = await keyClient.newManagedKey(
  new ManagedKeyParams(keyProtection, keyType)
);

// Generate a Rsa4096 key
keyType = KeyType.Rsa4096;
_key = await keyClient.newManagedKey(
  new ManagedKeyParams(keyProtection, keyType)
);

// Generate a Aes128 key
keyType = KeyType.Aes128;
_key = await keyClient.newManagedKey(
  new ManagedKeyParams(keyProtection, keyType)
);

// Generate a Aes256 key
keyType = KeyType.Aes256;
_key = await keyClient.newManagedKey(
  new ManagedKeyParams(keyProtection, keyType)
);

// Generate a Bjj key
keyType = KeyType.Bjj;
_key = await keyClient.newManagedKey(
  new ManagedKeyParams(keyProtection, keyType)
);
