import {
  Bloock,
  KeyClient,
  IdentityClient,
  KeyProtectionLevel,
  KeyType,
  ManagedKeyParams,
  DidMethod,
  Key,
  PublishIntervalParams,
} from '@bloock/sdk';

try {
  Bloock.setApiKey(process.env['API_KEY'] || '');
  Bloock.setIdentityApiHost(process.env['IDENTITY_MANAGED_API_HOST'] || '');

  const keyClient = new KeyClient();
  const identityClient = new IdentityClient();

  const keyProtection = KeyProtectionLevel.SOFTWARE;
  const keyType = KeyType.Bjj;
  const managedKey = await keyClient.newManagedKey(
    new ManagedKeyParams(keyProtection, keyType)
  );

  const issuerKey = new Key(managedKey); // we just passed the Baby JubJub key created before. REQUIRED.
  const issuerInterval = PublishIntervalParams.Interval60; // check Issuer intervals documentation to define the best for you model. REQUIRED.
  const methodDID = DidMethod.PolygonID; // check DID methods documentation. By default we recommend the PolygonID. REQUIRED.
  const name = 'BLOOCK Issuer'; // Issuer name. OPTIONAL.
  const description = 'this is the BLOOCK Issuer'; // Issuer desccription. OPTIONAL.
  const encodedBase64UrlImage = ''; // here you can pass an encoded base 64 url image string. OPTIONAL.

  const issuer = await identityClient.createIssuer(
    issuerKey,
    issuerInterval,
    methodDID,
    name,
    description,
    encodedBase64UrlImage
  );

  const schemaName = 'Bloock Employee'; // name Schema. REQUIRED.
  const schemaType = 'BloockEmployee'; // we defined the Schema type, basically you could use the name but in CamelCase. REQUIRED.
  const schemaVersion = '1.0'; // Schema version. REQUIRED. By default you can set "1.0".
  const schemaDescription =
    'BLOOCK Employee would be the new credential for BLOOCK employees'; // Schema description. REQUIRED.

  const schema = await identityClient
    .buildSchema(schemaName, schemaType, schemaVersion, schemaDescription)
    .addIntegerAttribute(
      'Number',
      'number',
      'indicates the employee number associated',
      true
    )
    .addDecimalAttribute(
      'Salary',
      'salary',
      'indicates the employee salary',
      true
    )
    .addStringAttribute('NIF', 'nif', 'indicates the employee nif', true)
    .addBooleanAttribute(
      'Previous Formation',
      'previous_formation',
      'indicates if the employee has or not previous formation',
      true
    )
    .addDateAttribute(
      'Birth Date',
      'birth_date',
      'the employee birth date',
      true
    )
    .addDateTimeAttribute(
      'Time Registered',
      'time_registered',
      'indicates the date and time the employee was registered',
      true
    )
    .addStringEnumAttribute(
      'Country',
      'country',
      'to know if the employee is from one of the following',
      true,
      ['spain', 'portugal', 'france']
    )
    .addIntegerEnumAttribute(
      'Brother',
      'brother',
      'the employee number of brothers',
      true,
      [1, 2, 3]
    )
    .addDecimalEnumAttribute(
      'Heigt',
      'height',
      'the employee aprox height',
      true,
      [1.5, 1.7, 1.9]
    )
    .build();

  const holderDID =
    'did:polygonid:polygon:main:2q544HUegzeRpwr3V2qu9eMwgrAmF5x4E1NCPzbQc4'; // the DID of the Holder to whom the credential will be associated. REQUIRED.
  const expiration = 4089852142; // unix timestamp when the credential will expire. REQUIRED.
  const credentialVersion = 0; // credential version. By default it's set to 0. REQUIRED.

  const receipt = await identityClient
    .buildCredential(
      issuer,
      schema.cid,
      holderDID,
      expiration,
      credentialVersion
    )
    .withIntegerAttribute('number', 1)
    .withDecimalAttribute('salary', 3000.7)
    .withStringAttribute('nif', '54688188M')
    .withBooleanAttribute('previous_formation', true)
    .withDateAttribute('birth_date', new Date(1999, 3, 20))
    .withDateTimeAttribute('time_registered', new Date(Date.now()))
    .withStringAttribute('country', 'spain')
    .withIntegerAttribute('brother', 1)
    .withDecimalAttribute('height', 1.7)
    .build();

  const jsonOffer = await identityClient.getCredentialOffer(
    issuer,
    receipt.credentialId
  );

  console.log(jsonOffer); // it's the json result that we would convert to a QR code

  const ok = await identityClient.revokeCredential(receipt.credential, issuer);
  if (!ok) {
    throw new Error('Unexpected result');
  }
} catch (e) {
  console.log(e);
}
