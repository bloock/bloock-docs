import { Bloock, KeyClient, IdentityClient, DidMethod, Key } from '@bloock/sdk';

try {
  // we set the API key and create a client
  Bloock.setApiKey(process.env['API_KEY'] || "");
  // we set de identity managed API host you have deployed
  Bloock.setIdentityApiHost(process.env['IDENTITY_MANAGED_API_HOST'] || "");

  // initialize the Key Client
  const keyClient = new KeyClient();
  // initialize the IdentityClient
  const identityClient = new IdentityClient();

  // we must have our Issuer Baby JubJub key identifier. Ex: 6f36448d-49f3-4b0e-aa72-6e55863302e8
  const savedIssuerKey = "6f36448d-49f3-4b0e-aa72-6e55863302e8"
  const loadedManagedKey = await keyClient.loadManagedKey(savedIssuerKey)

  // if we don't have our Issuer entity, here you can import you Issuer from the key
  const importedIssuerKey = new Key(loadedManagedKey);
  const issuerMethodDID = DidMethod.PolygonID

  const importedIssuer = await identityClient.importIssuer(importedIssuerKey, issuerMethodDID)

  // we create the credential, passing credential information
  const schemaCID = "QmadTvnNKvj2fBDgen35uAp1TfP9pSPVCNeDWw4fitqqne"; // schema identifier created before. Ex: QmadTvnNKvj2fBDgen35uAp1TfP9pSPVCNeDWw4fitqqne. REQUIRED.
  const holderDID = "did:polygonid:polygon:main:2q544HUegzeRpwr3V2qu9eMwgrAmF5x4E1NCPzbQc4"; // the DID of the Holder to whom the credential will be associated. REQUIRED.
  const expiration = 4089852142; // unix timestamp when the credential will expire. REQUIRED.
  const credentialVersion = 0; // credential version. By default it's set to 0. REQUIRED.

  const receipt = await identityClient
      .buildCredential(importedIssuer, schemaCID, holderDID, expiration, credentialVersion)
      .withIntegerAttribute("number", 1)
      .withDecimalAttribute("salary", 3000.70)
      .withStringAttribute("nif", "54688188M")
      .withBoleanAttribute("previous_formation", true)
      .withDateAttribute("birth_date", new Date(1999, 3, 20))
      .withDateTimeAttribute("time_registered", new Date(Date.now()))
      .withStringAttribute("country", "spain")
      .withIntegerAttribute("brother", 1)
      .withDecimalAttribute("height", 1.70)
      .build();

  // returns a Credential entity
  console.log(receipt.credentialId) // Credential identifier. It's an UUID. Ex: f1cae203-6b54-4d71-a6e4-00e73e0c45a5
  console.log(receipt.credential) // Verifiable Credential, the credential entity.
  console.log(receipt.credentialType) // the credential schema type associated.

} catch (e) {
  console.log(e);
}