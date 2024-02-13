keyClient := NewKeyClient()

// Load a EcP256k key
localKey, err := keyClient.LoadLocalKey(key.EcP256k, "public key", "private key")

// Load a Rsa2048 key
localKey, err := keyClient.LoadLocalKey(key.Rsa2048, "public key", "private key")

// Load a Rsa3072 key
localKey, err := keyClient.LoadLocalKey(key.Rsa3072, "public key", "private key")

// Load a Rsa4096 key
localKey, err := keyClient.LoadLocalKey(key.Rsa4096, "public key", "private key")

// Load a Aes128 key
localKey, err := keyClient.LoadLocalKey(key.Aes128, "public key", nil)

// Load a Aes256 key
localKey, err := keyClient.LoadLocalKey(key.Aes256, "public key", nil)
