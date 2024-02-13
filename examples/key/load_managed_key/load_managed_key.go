keyClient := NewKeyClient()

// Load a managed key
managedKey, err := keyClient.LoadManagedKey("key id")
