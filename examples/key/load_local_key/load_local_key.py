key_client = KeyClient()

// Load a EcP256k key
local_key = key_client.load_local_key(KeyType.EcP256k, "public key", "private key")

// Load a Rsa2048 key
local_key = key_client.load_local_key(KeyType.Rsa2048, "public key", "private key")

// Load a Rsa3072 key
local_key = key_client.load_local_key(KeyType.Rsa3072, "public key", "private key")

// Load a Rsa4096 key
local_key = key_client.load_local_key(KeyType.Rsa4096, "public key", "private key")

// Load a Aes128 key
local_key = key_client.load_local_key(KeyType.Aes128, "key")

// Load a Aes256 key
local_key = key_client.load_local_key(KeyType.Aes256, "key")
