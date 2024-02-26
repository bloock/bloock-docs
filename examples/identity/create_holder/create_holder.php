<?php

use Bloock\Bloock;
use Bloock\Client\KeyClient;
use Bloock\Client\IdentityClient;
use Bloock\Entity\Key\KeyType;
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

// create the Baby JubJub local
$localKey = $keyClient->newLocalKey(KeyType::Bjj);

// we create the holder, passing the Baby JubJub key and holder did method
$holderKey = new Key($localKey);
$holderDidMethod = DidMethod::PolygonID;

$holder = $identityClient->createHolder($holderKey, $holderDidMethod);

$createdHolderDid = $holder->getDid()->getDid(); // will print the Holder DID public identifier. Ex: did:polygonid:polygon:main:2qCU58EJgrELSJT6EzT27Rw9DhvwamAdbMLpePztYq
$createdHolderDidMethod = $holder->getDid()->getDidMethod(); // will return the DID method we chosed. Ex: identity.PolygonID
$createdHolderKey = $holder->getKey(); // will return the Key BJJ object associated to the Holder.