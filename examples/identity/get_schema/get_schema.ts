import { Bloock, IdentityClient } from '@bloock/sdk';

try {
  // we set the API key and create a client
  Bloock.setApiKey(process.env['API_KEY'] || "");
  // we set de identity managed API host you have deployed
  Bloock.setIdentityApiHost(process.env['IDENTITY_MANAGED_API_HOST'] || "");

  // initialize the IdentityClient
  const identityClient = new IdentityClient();

  // we need the schema id, we must have been saved when we created
  const savedSchemaID = "QmadTvnNKvj2fBDgen35uAp1TfP9pSPVCNeDWw4fitqqne"

  // we can call the get schema function, and will retrieve the Schema entity
  const schemaEntity = await identityClient.getSchema(savedSchemaID)

  console.log(schemaEntity.cid) // Schema identifier generated from IPFS. Ex: QmadTvnNKvj2fBDgen35uAp1TfP9pSPVCNeDWw4fitqqne.
  console.log(schemaEntity.cidJsonLd) // Schema in JSON-LD representation. Gives you extra information about the context.
  console.log(schemaEntity.json) // represents the Schema JSON.
  console.log(schemaEntity.schemaType) // the Schema type defined above.

} catch (e) {
  console.log(e);
}