import { Bloock, DidMethod, IdentityClient, Key, KeyClient } from '@bloock/sdk';

try {
  // we set the API key and create a client
  Bloock.setApiKey(process.env['API_KEY'] || '');
  // we set de identity managed API host you have deployed
  Bloock.setIdentityApiHost(process.env['IDENTITY_MANAGED_API_HOST'] || '');

  // initialize the Key Client
  const keyClient = new KeyClient();
  // initialize the IdentityClient
  const identityClient = new IdentityClient();

  // we must have our Issuer Baby JubJub key identifier. Ex: 6f36448d-49f3-4b0e-aa72-6e55863302e8
  const savedIssuerKey = '6f36448d-49f3-4b0e-aa72-6e55863302e8';
  const loadedManagedKey = await keyClient.loadManagedKey(savedIssuerKey);

  // if we don't have our Issuer entity, here you can import you Issuer from the key
  const importedIssuerKey = new Key(loadedManagedKey);
  const issuerMethodDID = DidMethod.PolygonID;

  const importedIssuer = await identityClient.importIssuer(
    importedIssuerKey,
    issuerMethodDID
  );

  // we need to get the credential id, we want to make the offering
  const credentialID = 'fdd4bf52-bac7-4f41-a743-5b0580168eb3';

  // once we have the issuer and the credential id, we can called the offering function
  const jsonOffer = await identityClient.getCredentialOffer(
    importedIssuer,
    credentialID
  );

  console.log(jsonOffer); // it's the json result that we would convert to a QR code
} catch (e) {
  console.log(e);
}
