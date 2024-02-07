<?php

require "./vendor/autoload.php";

use Bloock\Bloock;
use Bloock\Client\AuthenticityClient;
use Bloock\Client\KeyClient;
use Bloock\Client\RecordClient;
use Bloock\Entity\Authenticity\EcdsaSigner;
use Bloock\Entity\Authenticity\SignerArgs;
use Bloock\Entity\Key\KeyType;

Bloock::$apiKey = getenv("API_KEY");

$keyClient = new KeyClient();
$authenticityClient = new AuthenticityClient();
$recordClient = new RecordClient();

$keys = $keyClient->newLocalKey(KeyType::EcP256k);

$signedRecord = $recordClient->fromString("Hello world")
  ->withSigner(new EcdsaSigner(new SignerArgs($keys)))
  ->build();

print "Record was signed successfully\n";

$keys = $keyClient->newLocalKey(KeyType::EcP256k);

print "Adding another signature\n";
$signedRecord = $recordClient->fromRecord($signedRecord)
  ->withSigner(new EcdsaSigner(new SignerArgs($keys)))
  ->build();

print "Record was signed successfully\n";

$hash = $signedRecord->getHash();
print "Hash: $hash\n";

$signatures = $authenticityClient->getSignatures($signedRecord);
