<?php

require "./vendor/autoload.php";

use Bloock\Bloock;
use Bloock\Client\IntegrityClient;
use Bloock\Client\RecordClient;
use Bloock\Entity\Integrity\Network;

Bloock::$apiKey = getenv("API_KEY") ?: "";

$integrityClient = new IntegrityClient();
$recordClient = new RecordClient();

$record = $recordClient->fromString("Hello world")->build();
$records = [$record];

$sendReceipts = $integrityClient->sendRecords($records);
$anchor = $integrityClient->waitAnchor($sendReceipts[0]->getAnchor());

$timestamp = $integrityClient->verifyRecords($records, Network::ETHEREUM_MAINNET);
