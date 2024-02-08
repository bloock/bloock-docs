<?php

require "./vendor/autoload.php";

use Bloock\Bloock;
use Bloock\Client\IntegrityClient;
use Bloock\Client\RecordClient;

Bloock::$apiKey = getenv("API_KEY");

$integrityClient = new IntegrityClient();
$recordClient = new RecordClient();

$record = $recordClient->fromString("Hello world")->build();

$sendReceipts = $integrityClient->sendRecords([$record]);

$anchor = $integrityClient->waitAnchor($sendReceipts[0]->getAnchor());
