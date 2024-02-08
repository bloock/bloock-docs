<?php

require "./vendor/autoload.php";

use Bloock\Bloock;
use Bloock\Client\AvailabilityClient;
use Bloock\Client\RecordClient;
use Bloock\Entity\Availability\IpfsPublisher;

Bloock::$apiKey = getenv("API_KEY");

$recordClient = new RecordClient();
$availabilityClient = new AvailabilityClient();

$record = $recordClient->fromString("Hello world")->build();

$id = $availabilityClient->publish($record, new IpfsPublisher());

print "Record was published successfully\n";
