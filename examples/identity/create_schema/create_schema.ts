import { Bloock, IdentityClient } from '@bloock/sdk';

try {
  // we set the API key and create a client
  Bloock.setApiKey(process.env['API_KEY'] || "");
  // we set de identity managed API host you have deployed
  Bloock.setIdentityApiHost(process.env['IDENTITY_MANAGED_API_HOST'] || "");

  // initialize the IdentityClient
  const identityClient = new IdentityClient();

  // we create the Schema, passing Schema information
  const schemaName = "Bloock Employee"; // name Schema. REQUIRED.
  const schemaType = "BloockEmployee"; // we defined the Schema type, basically you could use the name but in CamelCase. REQUIRED. 
  const schemaVersion = "1.0"; // Schema version. REQUIRED. By default you can set "1.0".
  const schemaDescription = "BLOOCK Employee would be the new credential for BLOOCK employees"; // Schema description. REQUIRED.

  const schema = await identityClient
      .buildSchema(schemaName, schemaType, schemaVersion, schemaDescription)
      .addIntegerAttribute("Number", "number", "indicates the employee number associated", true)
      .addDecimalAttribute("Salary", "salary", "indicates the employee salary", true)
      .addStringAttribute("NIF", "nif", "indicates the employee nif", true)
      .addBooleanAttribute("Previous Formation", "previous_formation", "indicates if the employee has or not previous formation", true)
      .addDateAttribute("Birth Date", "birth_date", "the employee birth date", true)
      .addDateTimeAttribute("Time Registered", "time_registered", "indicates the date and time the employee was registered", true)
      .addStringEnumAttribute("Country", "country", "to know if the employee is from one of the following", true, ["spain", "portugal", "france"])
      .addIntegerEnumAttribute("Brother", "brother", "the employee number of brothers", true, [1, 2, 3])
      .addDecimalEnumAttribute("Heigt", "height", "the employee aprox height", true, [1.50, 1.70, 1.90])
      .build();

  // returns a Schema entity
  console.log(schema.cid) // Schema identifier generated from IPFS. Ex: QmadTvnNKvj2fBDgen35uAp1TfP9pSPVCNeDWw4fitqqne.
  console.log(schema.cidJsonLd) // Schema in JSON-LD representation. Gives you extra information about the context.
  console.log(schema.json) // represents the Schema JSON.
  console.log(schema.schemaType) // the Schema type defined above.

} catch (e) {
  console.log(e);
}