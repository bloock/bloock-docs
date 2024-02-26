<?php

use Bloock\Bloock;
use Bloock\Client\KeyClient;
use Bloock\Client\IdentityClient;
use Bloock\Entity\Key\KeyProtectionLevel;
use Bloock\Entity\Key\KeyType;
use Bloock\Entity\Key\ManagedKeyParams;
use Bloock\Entity\Identity\PublishIntervalParams;
use Bloock\Entity\Key\Key;
use Bloock\Entity\Identity\DidMethod;

require 'vendor/autoload.php';


try {
  Bloock::$apiKey = getenv("API_KEY") ?: "";
  Bloock::$identityApiHost = getenv("IDENTITY_MANAGED_API_HOST") ?: "";

  $keyClient = new KeyClient();
  $identityClient = new IdentityClient();

  $keyProtection = KeyProtectionLevel::SOFTWARE;
  $keyType = KeyType::Bjj;

  $params = new ManagedKeyParams($keyProtection, $keyType);
  $managedKey = $keyClient->newManagedKey($params);

  $issuerKey = new Key($managedKey); // we just passed the Baby JubJub key created before. REQUIRED.
  $issuerInterval = PublishIntervalParams::Interval60; // check Issuer intervals documentation to define the best for you model. REQUIRED.
  $methodDID = DidMethod::PolygonID; // check DID methods documentation. By default we recommend the PolygonID. REQUIRED.
  $name = "BLOOCK Issuer"; // Issuer name. OPTIONAL.
  $description = "this is the BLOOCK Issuer"; // Issuer desccription. OPTIONAL.
  $encodedBase64UrlImage = ""; // here you can pass an encoded base 64 url image string. OPTIONAL.

  $issuer = $identityClient->createIssuer($issuerKey, $issuerInterval, $methodDID, $name, $description);

  // name Schema. REQUIRED
  $schemaName = "Bloock Employee";
  // we defined the Schema type, basically you could use the name but in CamelCase. REQUIRED. 
  $schemaType = "BloockEmployee";
  // Schema version. REQUIRED. By default you can set "1.0".
  $schemaVersion = "1.0";
  // Schema description. REQUIRED
  $schemaDescription = "BLOOCK Employee would be the new credential for BLOOCK employees";

  $schema = $identityClient->buildSchema($schemaName, $schemaType, $schemaVersion, $schemaDescription)
    ->addIntegerAttribute("Number", "number", "indicates the employee number associated", true)
    ->addDecimalAttribute("Salary", "salary", "indicates the employee salary", true)
    ->addStringAttribute("NIF", "nif", "indicates the employee nif", true)
    ->addBooleanAttribute("Previous Formation", "previous_formation", "indicates if the employee has or not previous formation", true)
    ->addDateAttribute("Birth Date", "birth_date", "the employee birth date", true)
    ->addDateTimeAttribute("Time Registered", "time_registered", "indicates the date and time the employee was registered", true)
    ->addStringEnumAttribute("Country", "country", "to know if the employee is from one of the following", true, ["spain", "portugal", "france"])
    ->addIntegerEnumAttribute("Brother", "brother", "the employee number of brothers", true, [1, 2, 3])
    ->addDecimalEnumAttribute("Heigt", "height", "the employee aprox height", true, [1.50, 1.70, 1.90])
    ->build();

  $holderDID = "did:polygonid:polygon:main:2q544HUegzeRpwr3V2qu9eMwgrAmF5x4E1NCPzbQc4"; // the DID of the Holder to whom the credential will be associated. REQUIRED.
  $expiration = 4089852142; // unix timestamp when the credential will expire. REQUIRED.
  $credentialVersion = 0; // credential version. By default it's set to 0. REQUIRED.

  $receipt = $identityClient->buildCredential($issuer, $schema->getCid(), $holderDID, $expiration, $credentialVersion)
    ->withIntegerAttribute("number", 1)
    ->withDecimalAttribute("salary", 3000.70)
    ->withStringAttribute("nif", "54688188M")
    ->withBooleanAttribute("previous_formation", true)
    ->withDateAttribute("birth_date", new DateTime("1999-03-20"))
    ->withDatetimeAttribute("time_registered", new DateTime)
    ->withStringAttribute("country", "spain")
    ->withIntegerAttribute("brother", 1)
    ->withDecimalAttribute("height", 1.70)
    ->build();

  $jsonOffer = $identityClient->getCredentialOffer($issuer, $receipt->getCredentialId());

  $jsonOffering = $jsonOffer;

  $ok = $identityClient->revokeCredential($receipt->getCredential(), $issuer);
  if (!$ok) {
    throw new Exception("Unexpected result", 1);
  }
} catch (Exception $e) {
  echo "Error: $e\n";
}
