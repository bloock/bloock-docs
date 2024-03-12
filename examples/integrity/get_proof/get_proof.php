<?php

require "./vendor/autoload.php";

use Bloock\Client\IntegrityClient;

$integrityClient = new IntegrityClient();

$records = array(/* some records */);

$proof = $integrityClient->getProof($records);
