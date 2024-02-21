<?php

require "./vendor/autoload.php";

use Bloock\Bloock;
use Bloock\Client\EncryptionClient;
use Bloock\Client\KeyClient;
use Bloock\Client\RecordClient;
use Bloock\Entity\Encryption\Encrypter;
use Bloock\Entity\Key\KeyType;

Bloock::$apiKey = getenv("API_KEY") ?: "";

$keyClient = new KeyClient();
$recordClient = new RecordClient();

$payload = "This will be encrypted";
$key = $keyClient->newLocalKey(KeyType::Aes256);

// encryption ...
$encryptedRecord = $recordClient->fromString($payload)
  ->withEncrypter(new Encrypter($key))
  ->build();

$decryptedRecord = $recordClient->fromRecord($encryptedRecord)
  ->withDecrypter(new Encrypter($key))
  ->build();

$encryptionClient = new EncryptionClient();
$decryptedRecord = $encryptionClient->decrypt($encryptedRecord, new Encrypter($key));

$decryptedPayload = $decryptedRecord->retrieve();
print "Decryption successfully\n";

$decrypted = implode(array_map("chr", $decryptedPayload));
print "Decrypted payload: $decrypted";
