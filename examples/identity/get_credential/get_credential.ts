import { Bloock, IdentityClient } from '@bloock/sdk';

try {
  // we set the API key and create a client
  Bloock.setApiKey(process.env['API_KEY'] || "");
  // we set de identity managed API host you have deployed
  Bloock.setIdentityApiHost(process.env['IDENTITY_MANAGED_API_HOST'] || "");

  // initialize the IdentityClient
  const identityClient = new IdentityClient();

  // we need the credential id, we must have been saved when we created
  const savedCredentialID = "fdd4bf52-bac7-4f41-a743-5b0580168eb3"

  // we can call the get credential function, and will retrieve the Credential entity
  const credentialEntity = await identityClient.getCredential(savedCredentialID)

  console.log(credentialEntity)

} catch (e) {
  console.log(e);
}