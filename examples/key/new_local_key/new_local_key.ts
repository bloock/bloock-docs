import { KeyClient, KeyType } from '@bloock/sdk';

const keyClient = new KeyClient();

// Generate a EcP256k key
let _key = await keyClient.newLocalKey(KeyType.EcP256k);

// Generate a Rsa2048 key
_key = await keyClient.newLocalKey(KeyType.Rsa2048);

// Generate a Rsa3072 key
_key = await keyClient.newLocalKey(KeyType.Rsa3072);

// Generate a Rsa4096 key
_key = await keyClient.newLocalKey(KeyType.Rsa4096);

// Generate a Aes128 key
_key = await keyClient.newLocalKey(KeyType.Aes128);

// Generate a Aes256 key
_key = await keyClient.newLocalKey(KeyType.Aes256);

// Generate a BJJ key
_key = await keyClient.newLocalKey(KeyType.Bjj);
