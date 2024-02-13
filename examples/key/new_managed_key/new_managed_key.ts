let keyClient = new KeyClient();
let keyProtection = KeyProtectionLevel.SOFTWARE;

// Generate a EcP256k key
let keyType = KeyType.EcP256k;
let key = await keyClient.newManagedKey(
  new ManagedKeyParams(keyProtection, keyType)
);

// Generate a Rsa2048 key
let keyType = KeyType.Rsa2048;
let key = await keyClient.newManagedKey(
  new ManagedKeyParams(keyProtection, keyType)
);

// Generate a Rsa3072 key
let keyType = KeyType.Rsa3072;
let key = await keyClient.newManagedKey(
  new ManagedKeyParams(keyProtection, keyType)
);

// Generate a Rsa4096 key
let keyType = KeyType.Rsa4096;
let key = await keyClient.newManagedKey(
  new ManagedKeyParams(keyProtection, keyType)
);

// Generate a Aes128 key
let keyType = KeyType.Aes128;
let key = await keyClient.newManagedKey(
  new ManagedKeyParams(keyProtection, keyType)
);

// Generate a Aes256 key
let keyType = KeyType.Aes256;
let key = await keyClient.newManagedKey(
  new ManagedKeyParams(keyProtection, keyType)
);
