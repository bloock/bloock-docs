import { KeyClient, KeyType } from '@bloock/sdk';

const keyClient = new KeyClient();

// Load a EcP256k key
let _key = await keyClient.loadLocalKey(KeyType.EcP256k, 'private key');

// Load a Rsa2048 key
_key = await keyClient.loadLocalKey(KeyType.Rsa2048, 'private key');

// Load a Rsa3072 key
_key = await keyClient.loadLocalKey(KeyType.Rsa3072, 'private key');

// Load a Rsa4096 key
_key = await keyClient.loadLocalKey(KeyType.Rsa4096, 'private key');

// Load a Aes128 key
_key = await keyClient.loadLocalKey(KeyType.Aes128, 'password');

// Load a Aes256 key
_key = await keyClient.loadLocalKey(KeyType.Aes256, 'password');
