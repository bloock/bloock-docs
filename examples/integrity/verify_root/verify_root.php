<?php

require "./vendor/autoload.php";

use Bloock\Client\IntegrityClient;
use Bloock\Entity\Integrity\Network;

$integrityClient = new IntegrityClient();

$root = "root";
$proof = $integrityClient->validateRoot($root, Network::ETHEREUM_MAINNET);
