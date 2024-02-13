keyClient := NewKeyClient()
protection := key.KEY_PROTECTION_SOFTWARE

// Generate a EcP256k key
keyType := key.EcP256k
managedKey, err := keyClient.NewManagedKey(key.ManagedKeyParams{
	Protection: protection,
	KeyType:    keyType,
})

// Generate a Rsa2048 key
keyType := key.Rsa2048
managedKey, err := keyClient.NewManagedKey(key.ManagedKeyParams{
	Protection: protection,
	KeyType:    keyType,
})

// Generate a Rsa3072 key
keyType := key.Rsa3072
managedKey, err := keyClient.NewManagedKey(key.ManagedKeyParams{
	Protection: protection,
	KeyType:    keyType,
})
// Generate a Rsa4096 key
keyType := key.Rsa4096
managedKey, err := keyClient.NewManagedKey(key.ManagedKeyParams{
	Protection: protection,
	KeyType:    keyType,
})

// Generate a Aes128 key
keyType := key.Aes128
managedKey, err := keyClient.NewManagedKey(key.ManagedKeyParams{
	Protection: protection,
	KeyType:    keyType,
})

// Generate a Aes256 key
keyType := key.Aes256
managedKey, err := keyClient.NewManagedKey(key.ManagedKeyParams{
	Protection: protection,
	KeyType:    keyType,
})
