<?php

require "./vendor/autoload.php";

use Bloock\Bloock;
use Bloock\Client\KeyClient;
use Bloock\Client\RecordClient;
use Bloock\Entity\Encryption\Encrypter;
use Bloock\Entity\Key\KeyType;

Bloock::$apiKey = getenv("API_KEY") ?: "";

$keyClient = new KeyClient();

$payload = "This will be encrypted";
$key = $keyClient->newLocalKey(KeyType::Aes256);

$recordClient = new RecordClient();

$encryptedRecord = $recordClient->fromString($payload)
  ->withEncrypter(new Encrypter($key))
  ->build();

$encryptionClient = new \Bloock\Client\EncryptionClient();
$record = $recordClient->fromString($payload)->build();

$encryptedRecord = $encryptionClient->encrypt($record, new Encrypter($key));

print "Encryption successful\n";

$encryptedPayload = $encryptedRecord->retrieve();
$cipher = implode(array_map("chr", $encryptedPayload));

print "Encrypted payload:  $cipher\n";
