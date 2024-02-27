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

// first you will need to get the proof request, it's basically a json string, you can generate this using our Dashboard Validation Queries.
$proofRequest = "{\"id\":1708674709,\"query\":{\"type\":\"BloockEmployee\",\"context\":\"https://api.bloock.com/hosting/v1/ipfs/QmadTvnNKvj2fBDgen35uAp1TfP9pSPVCNeDWw4fitqqne\",\"allowedIssuers\":[\"*\"],\"credentialSubject\":{\"number\":{\"\$lt\":5}},\"skipClaimRevocationCheck\":false},\"circuitId\":\"credentialAtomicQuerySigV2\"}";

// we call the create verification function, using our proof request. This would create a verification process (by default with an expiration of 60min)
$verification = $identityClient->createVerification($proofRequest);

$verificationSessionID = $verification->getSessionID(); // the session id it's the integer identifier for you verification process, you will need to save it, to then check the status
$verificationRequest = $verification->getVerificationRequest(); // the json that you need to convert to QR code, so you user could scan and be verified

// we can call the wait verification function in order to paused until the verification is made (use this function to have a synchronous process)
$verOk = $identityClient->waitVerification($verification->getSessionID()); //By default 120000 seconds, you can customize
if (!$verOk) {
  throw new Exception("Error waiting for the verification", 1);
}

// finally to check the verification status and to know if the verification was success, you can call this function
$verified = $identityClient->getVerificationStatus($verification->getSessionID());
if (!$verified) {
  throw new Exception("Verification failed", 1);
}
