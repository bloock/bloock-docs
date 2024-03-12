<?php

require "./vendor/autoload.php";

use Bloock\Client\KeyClient;

$keyClient = new KeyClient();

$currentDirectory = getcwd();
$fileContents = file_get_contents($currentDirectory . "certificate.p12");
if ($fileContents !== false) {
  $byteArray = unpack('C*', $fileContents);

  if ($byteArray !== false) {
    $certificate = $keyClient->loadLocalCertificate($byteArray, "password");
  }
}
