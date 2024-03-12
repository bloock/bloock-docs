<?php

require "./vendor/autoload.php";

use Bloock\Client\KeyClient;
use Bloock\Entity\Key\KeyType;
use Bloock\Entity\Key\SubjectCertificateParams;
use Bloock\Entity\Key\LocalCertificateArgs;

$keyClient = new KeyClient();

$keyType = KeyType::Bjj;
$subjectParams = new SubjectCertificateParams(
  "Common Name",
  "Organization",
  "Organization Unit",
  "Location",
  "State",
  "US"
);

$params = new LocalCertificateArgs($keyType, $subjectParams, "password", 2);
$certificate = $keyClient->newLocalCertificate($params);
