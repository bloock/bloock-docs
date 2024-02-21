<?php

require "./vendor/autoload.php";

use Bloock\Bloock;
use Bloock\Client\AvailabilityClient;
use Bloock\Client\RecordClient;
use Bloock\Entity\Availability\HostedLoader;

Bloock::$apiKey = getenv("API_KEY") ?: "";

$recordClient = new RecordClient();
$availabilityClient = new AvailabilityClient();

$id = "publish uuid result";
$record = $recordClient->fromLoader(new HostedLoader($id))->build();
