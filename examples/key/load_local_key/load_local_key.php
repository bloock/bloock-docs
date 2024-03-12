<?php

require "./vendor/autoload.php";

use Bloock\Client\KeyClient;
use Bloock\Entity\Key\KeyType;

$keyClient = new KeyClient();

// Load a EcP256k key
$key = $keyClient->loadLocalKey(KeyType::EcP256k, "private key");

// Load a Rsa2048 key
$key = $keyClient->loadLocalKey(KeyType::Rsa2048, "private key");

// Load a Rsa3072 key
$key = $keyClient->loadLocalKey(KeyType::Rsa3072, "private key");

// Load a Rsa4096 key
$key = $keyClient->loadLocalKey(KeyType::Rsa4096, "private key");

// Load a Aes128 key
$key = $keyClient->loadLocalKey(KeyType::Aes128, "key");

// Load a Aes256 key
$key = $keyClient->loadLocalKey(KeyType::Aes256, "key");

// Load a BJJ key
$key = $keyClient->loadLocalKey(KeyType::Bjj, "private key");
