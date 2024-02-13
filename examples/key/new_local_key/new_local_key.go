keyClient := NewKeyClient()

// Generate a EcP256k key
localKey, err := keyClient.NewLocalKey(key.EcP256k)

// Generate a Rsa2048 key
localKey, err := keyClient.NewLocalKey(key.Rsa2048)

// Generate a Rsa3072 key
localKey, err := keyClient.NewLocalKey(key.Rsa3072)

// Generate a Rsa4096 key
localKey, err := keyClient.NewLocalKey(key.Rsa4096)

// Generate a Aes128 key
localKey, err := keyClient.NewLocalKey(key.Aes128)

// Generate a Aes256 key
localKey, err := keyClient.NewLocalKey(key.Aes256)
