$keyClient = new KeyClient();

// Generate a EcP256k key
$key = $keyClient->newLocalKey(KeyType::EcP256k);

// Generate a Rsa2048 key
$key = $keyClient->newLocalKey(KeyType::Rsa2048);

// Generate a Rsa3072 key
$key = $keyClient->newLocalKey(KeyType::Rsa3072);

// Generate a Rsa4096 key
$key = $keyClient->newLocalKey(KeyType::Rsa4096);

// Generate a Aes128 key
$key = $keyClient->newLocalKey(KeyType::Aes128);

// Generate a Aes256 key
$key = $keyClient->newLocalKey(KeyType::Aes256);