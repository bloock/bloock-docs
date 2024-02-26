import { Bloock, IdentityClient } from '@bloock/sdk';

try {
  // we set the API key and create a client
  Bloock.setApiKey(process.env['API_KEY'] || "");
  // we set de identity managed API host you have deployed
  Bloock.setIdentityApiHost(process.env['IDENTITY_MANAGED_API_HOST'] || "");

  // initialize the IdentityClient
  const identityClient = new IdentityClient();

  // first you will need to get the proof request, it's basically a json string, you can generate this using our Dashboard Validation Queries.
  const proofRequest = `{"id":1708674709,"query":{"type":"BloockEmployee","context":"https://api.bloock.com/hosting/v1/ipfs/QmadTvnNKvj2fBDgen35uAp1TfP9pSPVCNeDWw4fitqqne","allowedIssuers":["*"],"credentialSubject":{"number":{"$lt":5}},"skipClaimRevocationCheck":false},"circuitId":"credentialAtomicQuerySigV2"}`;

  // we call the create verification function, using our proof request. This would create a verification process (by default with an expiration of 60min)
  const verification = await identityClient.createVerification(proofRequest);

  console.log(verification.sessionID) // the session id it's the integer identifier for you verification process, you will need to save it, to then check the status
  console.log(verification.verificationRequest) // // the json that you need to convert to QR code, so you user could scan and be verified

  // we can call the wait verification function in order to paused until the verification is made (use this function to have a synchronous process)
  const verOK = await identityClient.waitVerification(verification.sessionID); // By default 120000 seconds, you can customize
  if (!verOK) {
      throw new Error("Error waiting for the verification");
  }
  
  // finally to check the verification status and to know if the verification was success, you can call this function
  const verified = await identityClient.getVerificationStatus(verification.sessionID);
  if (!verified) {
       throw new Error("Verification failed");
  }

  console.log("Successfully verified")

} catch (e) {
  console.log(e);
}