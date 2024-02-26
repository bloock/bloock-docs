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

// we need the credential id, we must have been saved when we created
$savedCredentialEntity = "fdd4bf52-bac7-4f41-a743-5b0580168eb3";

// we can call the get credential function, and will retrieve the Credential entity
$credentialEntity = $identityClient->getCredential($savedCredentialEntity);