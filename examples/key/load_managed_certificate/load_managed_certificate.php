<?php

require "./vendor/autoload.php";

use Bloock\Client\KeyClient;

$keyClient = new KeyClient();

$local_certificate = $keyClient->loadManagedCertificate("certificate id");
