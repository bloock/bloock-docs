<?php

require "./vendor/autoload.php";

use Bloock\Client\KeyClient;
use Bloock\Entity\Key\KeyType;
use Bloock\Entity\Key\ManagedKeyParams;
use Bloock\Entity\Key\KeyProtectionLevel;

$keyClient = new KeyClient();
$keyProtection = KeyProtectionLevel::SOFTWARE;

// Generate a EcP256k key
$keyType = KeyType::EcP256k;
$key = $keyClient->newManagedKey(new ManagedKeyParams($keyProtection, $keyType));

// Generate a Rsa2048 key
$keyType = KeyType::Rsa2048;
$key = $keyClient->newManagedKey(new ManagedKeyParams($keyProtection, $keyType));

// Generate a Rsa3072 key
$keyType = KeyType::Rsa3072;
$key = $keyClient->newManagedKey(new ManagedKeyParams($keyProtection, $keyType));

// Generate a Rsa4096 key
$keyType = KeyType::Rsa4096;
$key = $keyClient->newManagedKey(new ManagedKeyParams($keyProtection, $keyType));

// Generate a Aes128 key
$keyType = KeyType::Aes128;
$key = $keyClient->newManagedKey(new ManagedKeyParams($keyProtection, $keyType));

// Generate a Aes256 key
$keyType = KeyType::Aes256;
$key = $keyClient->newManagedKey(new ManagedKeyParams($keyProtection, $keyType));

// Generate a Bjj key
$keyType = KeyType::Bjj;
$key = $keyClient->newManagedKey(new ManagedKeyParams($keyProtection, $keyType));
