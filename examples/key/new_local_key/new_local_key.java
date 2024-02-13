KeyClient keyClient = new KeyClient();

// Generate a EcP256k key
LocalKey localKey = keyClient.newLocalKey(KeyType.EcP256k);

// Generate a Rsa2048 key
LocalKey localKey = keyClient.newLocalKey(KeyType.Rsa2048);

// Generate a Rsa3072 key
LocalKey localKey = keyClient.newLocalKey(KeyType.Rsa3072);

// Generate a Rsa4096 key
LocalKey localKey = keyClient.newLocalKey(KeyType.Rsa4096);

// Generate a Aes128 key
LocalKey localKey = keyClient.newLocalKey(KeyType.Aes128);

// Generate a Aes256 key
LocalKey localKey = keyClient.newLocalKey(KeyType.Aes256);
