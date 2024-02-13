key_client = KeyClient()

// Generate a EcP256k key
local_key = key_client.new_local_key(KeyType.EcP256k)

// Generate a Rsa2048 key
local_key = key_client.new_local_key(KeyType.Rsa2048)

// Generate a Rsa3072 key
local_key = key_client.new_local_key(KeyType.Rsa3072)

// Generate a Rsa4096 key
local_key = key_client.new_local_key(KeyType.Rsa4096)

// Generate a Aes128 key
local_key = key_client.new_local_key(KeyType.Aes128)

// Generate a Aes256 key
local_key = key_client.new_local_key(KeyType.Aes256)
