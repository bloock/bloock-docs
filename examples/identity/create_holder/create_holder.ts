import { Bloock, KeyClient, IdentityClient, KeyType, DidMethod, Key } from '@bloock/sdk';

try {
  // we set the API key and create a client
  Bloock.setApiKey(process.env['API_KEY'] || "");
  // we set de identity managed API host you have deployed
  Bloock.setIdentityApiHost(process.env['IDENTITY_MANAGED_API_HOST'] || "");

  // initialize the Key Client
  const keyClient = new KeyClient();
  // initialize the IdentityClient
  const identityClient = new IdentityClient();

  // create the Baby JubJub local key
  const localKey = await keyClient.newLocalKey(KeyType.Bjj);

  // we create the holder, passing the Baby JubJub key and holder did method
  const holderKey = new Key(localKey)
  const hodlerDidMethod = DidMethod.PolygonID
  
  const holder = await identityClient.createHolder(holderKey, hodlerDidMethod)

  console.log(holder.did.did) // will print the Holder DID public identifier. Ex: did:polygonid:polygon:main:2qCU58EJgrELSJT6EzT27Rw9DhvwamAdbMLpePztYq
  console.log(holder.did.didMethod) // will return the DID method we chosed. Ex: identity.PolygonID
  console.log(holder.key) // will return the Key BJJ object associated to the Holder.

} catch (e) {
  console.log(e);
}