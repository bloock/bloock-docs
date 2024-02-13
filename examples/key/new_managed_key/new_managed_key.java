KeyClient keyClient = new KeyClient();
KeyProtectionLevel keyProtectionLevel = KeyProtectionLevel.SOFTWARE;

// Generate a EcP256k key
KeyType keyType = KeyType.EcP256k;
ManagedKey managedKey = keyClient.newManagedKey(
    new ManagedKeyParams(keyProtectionLevel, keyType)
);

// Generate a Rsa2048 key
KeyType keyType = KeyType.Rsa2048;
ManagedKey managedKey = keyClient.newManagedKey(
    new ManagedKeyParams(keyProtectionLevel, keyType)
);

// Generate a Rsa3072 key
KeyType keyType = KeyType.Rsa3072;
ManagedKey managedKey = keyClient.newManagedKey(
    new ManagedKeyParams(keyProtectionLevel, keyType)
);

// Generate a Rsa4096 key
KeyType keyType = KeyType.Rsa4096;
ManagedKey managedKey = keyClient.newManagedKey(
    new ManagedKeyParams(keyProtectionLevel, keyType)
);

// Generate a Aes128 key
KeyType keyType = KeyType.Aes128;
ManagedKey managedKey = keyClient.newManagedKey(
    new ManagedKeyParams(keyProtectionLevel, keyType)
);

// Generate a Aes256 key
KeyType keyType = KeyType.Aes256;
ManagedKey managedKey = keyClient.newManagedKey(
    new ManagedKeyParams(keyProtectionLevel, keyType)
);
