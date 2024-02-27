<?php

use Bloock\Bloock;
use Bloock\Client\IdentityClient;

require "./vendor/autoload.php";

// we set the API key and create a client
Bloock::$apiKey = getenv("API_KEY") ?: "";
// we set de identity managed API host you have deployed
Bloock::$identityApiHost = getenv("IDENTITY_MANAGED_API_HOST") ?: "";

// initialize the IdentityClient
$identityClient = new IdentityClient();

// we need the schema id, we must have been saved when we created
$savedSchemaID = "QmadTvnNKvj2fBDgen35uAp1TfP9pSPVCNeDWw4fitqqne";

// we can call the get schema function, and will retrieve the Schema entity
$schemaEntity = $identityClient->getSchema($savedSchemaID);

$schemaEntityCID = $schemaEntity->getCid(); // Schema identifier generated from IPFS. Ex: QmadTvnNKvj2fBDgen35uAp1TfP9pSPVCNeDWw4fitqqne.
$schemaEntityJsonLD = $schemaEntity->getCidJsonLd(); // Schema in JSON-LD representation. Gives you extra information about the context.
$schemaEntityJson = $schemaEntity->getJson(); // represents the Schema JSON.
$schemaEntityType = $schemaEntity->getSchemaType(); // the Schema type defined above.