import { Bloock, KeyClient, IdentityClient, KeyProtectionLevel, KeyType, ManagedKeyParams, DidMethod, Key, PublishIntervalParams } from '@bloock/sdk';

try {
  // we set the API key and create a client
  Bloock.setApiKey(process.env['API_KEY'] || "");
  // we set de identity managed API host you have deployed
  Bloock.setIdentityApiHost(process.env['IDENTITY_MANAGED_API_HOST'] || "");

  // initialize the Key Client
  const keyClient = new KeyClient();
  // initialize the IdentityClient
  const identityClient = new IdentityClient();

  // create the Baby JubJub managed key using the BLOOCK Keys product
  const keyProtection = KeyProtectionLevel.SOFTWARE;
  const keyType = KeyType.Bjj;
  const managedKey = await keyClient.newManagedKey(
      new ManagedKeyParams(keyProtection, keyType)
  );

  // we create the issuer, passing the Baby JubJub key and issuer information
  const issuerKey = new Key(managedKey); // we just passed the Baby JubJub key created before. REQUIRED.
  const issuerInterval = PublishIntervalParams.Interval60; // check Issuer intervals documentation to define the best for you model. REQUIRED.
  const methodDID = DidMethod.PolygonID; // check DID methods documentation. By default we recommend the PolygonID. REQUIRED.
  const name = "BLOOCK Issuer"; // Issuer name. OPTIONAL.
  const description = "this is the BLOOCK Issuer"; // Issuer description. OPTIONAL.
  const encodedBase64UrlImage = ""; // here you can pass an encoded base 64 url image string. OPTIONAL.

  const issuer = await identityClient.createIssuer(
    issuerKey,
    issuerInterval,
    methodDID,
    name,
    description,
    encodedBase64UrlImage
  );

  // returns an Issuer entity
  console.log(issuer.did.did) // will print the Issuer DID public identifier. Ex: did:polygonid:polygon:main:2qCU58EJgrELSJT6EzT27Rw9DhvwamAdbMLpePztYq
  console.log(issuer.did.didMethod) // will return the DID method we chosed. Ex: identity.PolygonID
  console.log(issuer.key) // will return the Key BJJ object associated to the Issuer.

} catch (e) {
  console.log(e);
}