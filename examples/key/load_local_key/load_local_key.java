KeyClient keyClient = new KeyClient();

// Load a EcP256k key
LocalKey localKey = keyClient.loadLocalKey(KeyType.EcP256k, "public key", "private key");

// Load a Rsa2048 key
LocalKey localKey = keyClient.loadLocalKey(KeyType.Rsa2048, "public key", "private key");

// Load a Rsa3072 key
LocalKey localKey = keyClient.loadLocalKey(KeyType.Rsa3072, "public key", "private key");

// Load a Rsa4096 key
LocalKey localKey = keyClient.loadLocalKey(KeyType.Rsa4096, "public key", "private key");

// Load a Aes128 key
LocalKey localKey = keyClient.loadLocalKey(KeyType.Aes128, "key", "");

// Load a Aes256 key
LocalKey localKey = keyClient.loadLocalKey(KeyType.Aes256, "key", "");
