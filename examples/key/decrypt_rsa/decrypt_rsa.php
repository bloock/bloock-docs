<?php

require "./vendor/autoload.php";

use Bloock\Bloock;
use Bloock\Client\EncryptionClient;
use Bloock\Client\KeyClient;
use Bloock\Client\RecordClient;
use Bloock\Entity\Encryption\DecrypterArgs;
use Bloock\Entity\Encryption\RsaDecrypter;
use Bloock\Entity\Key\KeyType;

Bloock::$apiKey = getenv("API_KEY");

$keyClient = new KeyClient();

$payload = "This will be encrypted";
$key = $keyClient->newLocalKey(KeyType::Rsa2048);

// encryption ...

$recordClient = new RecordClient();

$decryptedRecord = $recordClient->fromRecord($encryptedRecord)
  ->withDecrypter(new RsaDecrypter(new DecrypterArgs($key)))
  ->build();

$encryptionClient = new EncryptionClient();
$decryptedRecord = $encryptionClient->decrypt($encryptedRecord, new RsaDecrypter(new DecrypterArgs($key)));

$decryptedPayload = $decryptedRecord->retrieve();
print "Decryption successfully\n";

$decrypted = implode(array_map("chr", $decryptedPayload));
print "Decrypted payload: $decrypted";
