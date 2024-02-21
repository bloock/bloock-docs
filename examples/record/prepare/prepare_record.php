<?php

require "./vendor/autoload.php";

use Bloock\Client\RecordClient;

$recordClient = new RecordClient();
$record = $recordClient->fromString("Hello world")->build();

$hash = $record->getHash();

$record2 = $recordClient->fromRecord($record)->build();

$file = file_get_contents('./fills.pdf') ?: "";
$record3 = $recordClient->fromFile(unpack('C*', $file) ?: [])->build();
