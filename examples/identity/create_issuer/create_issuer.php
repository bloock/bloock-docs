<?php

use Bloock\Bloock;
use Bloock\Client\KeyClient;
use Bloock\Client\IdentityClient;
use Bloock\Entity\Key\KeyProtectionLevel;
use Bloock\Entity\Key\KeyType;
use Bloock\Entity\Key\ManagedKeyParams;
use Bloock\Entity\Identity\PublishIntervalParams;
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

// create the Baby JubJub managed key using the BLOOCK Keys product
$keyProtection = KeyProtectionLevel::SOFTWARE;
$keyType = KeyType::Bjj;
$params = new ManagedKeyParams($keyProtection, $keyType);

$managedKey = $keyClient->newManagedKey($params);

// we create the issuer, passing the Baby JubJub key and issuer information
$issuerKey = new Key($managedKey); // we just passed the Baby JubJub key created before. REQUIRED.
$issuerInterval = PublishIntervalParams::Interval60; // check Issuer intervals documentation to define the best for you model. REQUIRED.
$methodDID = DidMethod::PolygonID; // check DID methods documentation. By default we recommend the PolygonID. REQUIRED.
$name = "BLOOCK Issuer"; // Issuer name. OPTIONAL.
$description = "this is the BLOOCK Issuer"; // Issuer description. OPTIONAL.
$encodedBase64UrlImage = ""; // here you can pass an encoded base 64 url image string. OPTIONAL.

$issuer = $identityClient->createIssuer($issuerKey, $issuerInterval, $methodDID, $name, $description);

// returns an Issuer entity
$createdIssuerDid = $issuer->getDid()->getDid(); // will print the Issuer DID public identifier. Ex: did:polygonid:polygon:main:2qCU58EJgrELSJT6EzT27Rw9DhvwamAdbMLpePztYq
$createdIssuerDidMethod = $issuer->getDid()->getDidMethod(); // will return the DID method we chosed. Ex: identity.PolygonID
$createdIssuerKey = $issuer->getKey(); // will return the Key BJJ object associated to the Issuer.