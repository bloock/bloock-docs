<?php

require "./vendor/autoload.php";

use Bloock\Bloock;
use Bloock\Client\EncryptionClient;
use Bloock\Client\KeyClient;
use Bloock\Client\RecordClient;
use Bloock\Entity\Encryption\EncrypterArgs;
use Bloock\Entity\Encryption\RsaEncrypter;
use Bloock\Entity\Key\KeyType;

Bloock::$apiKey = getenv("API_KEY");

$keyClient = new KeyClient();

$payload = "This will be encrypted";
$key = $keyClient->newLocalKey(KeyType::Rsa2048);

$recordClient = new RecordClient();

$encryptedRecord = $recordClient->fromString($payload)
  ->withEncrypter(new RsaEncrypter(new EncrypterArgs($key)))
  ->build();

$encryptionClient = new EncryptionClient();
$record = $recordClient->fromString($payload)->build();

$encryptedRecord = $encryptionClient->encrypt($record, new RsaEncrypter(new EncrypterArgs($key)));

print "Encryption successful\n";

$encryptedPayload = $encryptedRecord->retrieve();
$cipher = implode(array_map("chr", $encryptedPayload));

print "Encrypted payload:  $cipher\n";
