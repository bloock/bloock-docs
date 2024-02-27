<?php

use Bloock\Bloock;
use Bloock\Client\KeyClient;
use Bloock\Client\IdentityClient;
use Bloock\Entity\Key\Key;
use Bloock\Entity\Identity\DidMethod;

require "./vendor/autoload.php";

// we set the API key and create a client
Bloock::$apiKey = getenv("API_KEY") ?: "";
// we set de identity managed API host you have deployed
Bloock::$identityApiHost = getenv("IDENTITY_MANAGED_API_HOST") ?: "";

// initialize the Key Client
$keyClient = new KeyClient();
// initialize the IdentityClient
$identityClient = new IdentityClient();

// we must have our Issuer Baby JubJub key identifier. Ex: 6f36448d-49f3-4b0e-aa72-6e55863302e8
$savedIssuerKey = "6f36448d-49f3-4b0e-aa72-6e55863302e8";
$loadedManagedKey = $keyClient->loadManagedKey($savedIssuerKey);

// if we don't have our Issuer entity, here you can import you Issuer from the key
$importedIssuerKey = new Key($loadedManagedKey);
$issuerMethodDID = DidMethod::PolygonID;

$importedIssuer = $identityClient->importIssuer($importedIssuerKey, $issuerMethodDID);

// we create the credential, passing credential information
$schemaCID = "QmadTvnNKvj2fBDgen35uAp1TfP9pSPVCNeDWw4fitqqne"; // schema identifier created before. Ex: QmadTvnNKvj2fBDgen35uAp1TfP9pSPVCNeDWw4fitqqne. REQUIRED.
$holderDID = "did:polygonid:polygon:main:2q544HUegzeRpwr3V2qu9eMwgrAmF5x4E1NCPzbQc4"; // the DID of the Holder to whom the credential will be associated. REQUIRED.
$expiration = 4089852142; // unix timestamp when the credential will expire. REQUIRED.
$credentialVersion = 0; // credential version. By default it's set to 0. REQUIRED.

$receipt = $identityClient->buildCredential($importedIssuer, $schemaCID, $holderDID, $expiration, $credentialVersion)
  ->withIntegerAttribute("number", 1)
  ->withDecimalAttribute("salary", 3000.70)
  ->withStringAttribute("nif", "54688188M")
  ->withBooleanAttribute("previous_formation", true)
  ->withDateAttribute("birth_date", new DateTime("1999-03-20"))
  ->withDatetimeAttribute("time_registered", new DateTime)
  ->withStringAttribute("country", "spain")
  ->withIntegerAttribute("brother", 1)
  ->withDecimalAttribute("height", 1.70)
  ->build();

// returns a Credential entity
$receiptCredentialID = $receipt->getCredentialId(); // Credential identifier. It's an UUID. Ex: f1cae203-6b54-4d71-a6e4-00e73e0c45a5
$receiptCredential = $receipt->getCredential(); // Verifiable Credential, the credential entity.
$receiptCredentialType = $receipt->getCredentialType(); // the credential schema type associated.