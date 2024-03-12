<?php

require "./vendor/autoload.php";

use Bloock\Client\KeyClient;
use Bloock\Entity\Key\KeyType;
use Bloock\Entity\Key\SubjectCertificateParams;
use Bloock\Entity\Key\ManagedCertificateParams;

$keyClient = new KeyClient();

$key = $keyClient->newManagedCertificate(new ManagedCertificateParams(KeyType::Rsa2048, new SubjectCertificateParams("Bloock"), 2));
