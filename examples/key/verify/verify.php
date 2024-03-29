<?php

require "./vendor/autoload.php";

use Bloock\Bloock;
use Bloock\Client\AuthenticityClient;
use Bloock\Client\KeyClient;
use Bloock\Client\RecordClient;
use Bloock\Entity\Authenticity\Signer;
use Bloock\Entity\Key\KeyType;

Bloock::$apiKey = getenv("API_KEY") ?: "";

$keyClient = new KeyClient();
$authenticityClient = new AuthenticityClient();
$recordClient = new RecordClient();

$keys = $keyClient->newLocalKey(KeyType::EcP256k);

$signedRecord = $recordClient->fromString("Hello world")
  ->withSigner(new Signer($keys, "some name"))
  ->build();

$valid = $authenticityClient->verify($signedRecord);
if ($valid) {
  print "Signature was verified successfully";
}
