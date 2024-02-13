key_client = KeyClient()
protection = KeyProtectionLevel.SOFTWARE

// Generate a EcP256k key
key_type = KeyType.EcP256k
managed_key = key_client.new_managed_key(ManagedKeyParams(protection, key_type))

// Generate a Rsa2048 key
key_type = KeyType.Rsa2048
managed_key = key_client.new_managed_key(ManagedKeyParams(protection, key_type))

// Generate a Rsa3072 key
key_type = KeyType.Rsa3072
managed_key = key_client.new_managed_key(ManagedKeyParams(protection, key_type))

// Generate a Rsa4096 key
key_type = KeyType.Rsa4096
managed_key = key_client.new_managed_key(ManagedKeyParams(protection, key_type))

// Generate a Aes128 key
key_type = KeyType.Aes128
managed_key = key_client.new_managed_key(ManagedKeyParams(protection, key_type))

// Generate a Aes256 key
key_type = KeyType.Aes256
managed_key = key_client.new_managed_key(ManagedKeyParams(protection, key_type))
