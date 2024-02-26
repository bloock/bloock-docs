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

// we need to get the credential id, we want to make the offering
$credentialID = "fdd4bf52-bac7-4f41-a743-5b0580168eb3";

// once we have the issuer and the credential id, we can called the offering function
$jsonOffer = $identityClient->getCredentialOffer($importedIssuer, $credentialID);


$jsonOffering = $jsonOffer; // it's the json result that we would convert to a QR code