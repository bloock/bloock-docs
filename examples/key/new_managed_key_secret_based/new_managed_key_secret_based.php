<?php

use Bloock\Client\AuthenticityClient;
use Bloock\Client\KeyClient;
use Bloock\Client\RecordClient;
use Bloock\Entity\Authenticity\Signer;
use Bloock\Entity\Key\AccessControl;
use Bloock\Entity\Key\AccessControlSecret;
use Bloock\Entity\Key\KeyProtectionLevel;
use Bloock\Entity\Key\KeyType;
use Bloock\Entity\Key\Managed;
use Bloock\Entity\Key\ManagedKeyParams;

require 'vendor/autoload.php';

// initialize the Key Client
$keyClient = new KeyClient();
// initialize the Authenticity Client
$authenticityClient = new AuthenticityClient();
// initialize the Record Client
$recordClient = new RecordClient();
// initialize the protection key level
$keyProtection = KeyProtectionLevel::SOFTWARE;

// Generate a Rsa2048 key
$key = $keyClient->newManagedKey(new ManagedKeyParams($keyProtection, KeyType::Rsa2048));

$secret = "yout secret";
$email = "recovery@bloock.com";

// Create a Secret-Based access control for the created key
$keyClient->setupSecretAccessControl(new Managed($key), $secret, $email);

$record = $recordClient->fromString("Hello world")->build();

// How to sign using the Secret-Based access control
$accessControl = new AccessControlSecret($secret);
$authenticityClient->sign($record, new Signer($key, null, new AccessControl($accessControl)));
