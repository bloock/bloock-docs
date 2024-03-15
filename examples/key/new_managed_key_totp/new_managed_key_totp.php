<?php

use Bloock\Client\AuthenticityClient;
use Bloock\Client\KeyClient;
use Bloock\Client\RecordClient;
use Bloock\Entity\Authenticity\Signer;
use Bloock\Entity\Key\AccessControl;
use Bloock\Entity\Key\AccessControlTotp;
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

// Create a TOTP access control for the created key
$totp = $keyClient->setupTotpAccessControl(new Managed($key));

$varSecretQR = $totp->getSecretQr(); // base64url encoded string with the TOTP setup QRCode. You can scan this QR with your TOTP application client.
$varSecret = $totp->getSecret(); // secret code that you can use instead of the QRCode to setup your TOTP application client.
$varRecoveryCodes = $totp->getRecoveryCodes(); // recovery codes you need to save, so you could use in case you loose your access control.

$record = $recordClient->fromString("Hello world")->build();

// How to sign using the TOTP access control
$accessControl = new AccessControlTotp("code digit"); // get the code from your TOTP application (Google Authenticator). Ej: 731 049
$authenticityClient->sign($record, new Signer($key, null, new AccessControl($accessControl)));

// Recover in case you lose your access control
$totpRecovered = $keyClient->recoverTotpAccessControl(new Managed($key), "recovery code"); // recovery code you saved previously