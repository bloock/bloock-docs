<?php

require "./vendor/autoload.php";

use Bloock\Client\KeyClient;

$keyClient = new KeyClient();

// Load a managed key
$key = $keyClient->loadManagedKey("key id");
