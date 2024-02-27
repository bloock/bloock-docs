package main

import (
	"log"
	"os"
	"time"

	"github.com/bloock/bloock-sdk-go/v2"
	"github.com/bloock/bloock-sdk-go/v2/client"
	"github.com/bloock/bloock-sdk-go/v2/entity/identity"
	"github.com/bloock/bloock-sdk-go/v2/entity/key"
)

func main() {
	bloock.ApiKey = os.Getenv("API_KEY")
	bloock.IdentityApiHost = os.Getenv("IDENTITY_API_HOST")

	keyClient := client.NewKeyClient()
	identityClient := client.NewIdentityClient()

	managedKey, err := keyClient.NewManagedKey(key.ManagedKeyParams{
		KeyType: key.Bjj,
	})
	if err != nil {
		log.Fatalln(err)
	}

	issuerKey := key.Key{ManagedKey: &managedKey} // we just passed the Baby JubJub key created before. REQUIRED.
	issuerInterval := identity.Interval60         // check Issuer intervals documentation to define the best for you model. REQUIRED.
	methodDID := identity.PolygonID               // check DID methods documentation. By default we recommend the PolygonID. REQUIRED.
	name := "BLOOCK Issuer"                       // Issuer name. OPTIONAL.
	description := "this is the BLOOCK Issuer"    // Issuer description. OPTIONAL.
	encodedBase64UrlImage := ""                   // here you can pass an encoded base 64 url image string. OPTIONAL.
	issuer, err := identityClient.CreateIssuer(issuerKey, issuerInterval, methodDID, name, description, encodedBase64UrlImage)
	if err != nil {
		log.Fatalln(err)
	}

	schemaName := "Bloock Employee"                                                         // name schema. REQUIRED
	schemaType := "BloockEmployee"                                                          // we defined the schema type, basically you could use the name but in CamelCase. REQUIRED.
	schemaVersion := "1.0"                                                                  // schema version. REQUIRED. By default you can set "1.0".
	schemaDescription := "BLOOCK Employee would be the new credential for BLOOCK employees" // schema description. REQUIRED

	schema, err := identityClient.BuildSchema(schemaName, schemaType, schemaVersion, schemaDescription).
		AddIntegerAttribute("Number", "number", "indicates the employee number associated", true).
		AddDecimalAttribute("Salary", "salary", "indicates the employee salary", true).
		AddStringAttribute("NIF", "nif", "indicates the employee nif", true).
		AddBooleanAttribute("Previous Formation", "previous_formation", "indicates if the employee has or not previous formation", true).
		AddDateAttribute("Birth Date", "birth_date", "the employee birth date", true).
		AddDatetimeAttribute("Time Registered", "time_registered", "indicates the date and time the employee was registered", true).
		AddStringEnumAttribute("Country", "country", "to know if the employee is from one of the following", true, []string{"spain", "portugal", "france"}).
		AddIntegerEnumAttribute("Brother", "brother", "the employee number of brothers", true, []int64{1, 2, 3}).
		AddDecimalEnumAttribute("Heigt", "height", "the employee aprox height", true, []float64{1.50, 1.70, 1.90}).
		Build()
	if err != nil {
		log.Fatalln(err)
	}

	holderDID := "did:polygonid:polygon:main:2q544HUegzeRpwr3V2qu9eMwgrAmF5x4E1NCPzbQc4" // the DID of the Holder to whom the credential will be associated. REQUIRED.
	expiration := int64(4089852142)                                                      // unix timestamp when the credential will expire. REQUIRED.
	credentialVersion := int32(0)                                                        // credential version. By default it's set to 0. REQUIRED.

	receipt, err := identityClient.BuildCredential(issuer, schema.Cid, holderDID, expiration, credentialVersion).
		WithIntegerAttribute("number", 1).
		WithDecimalAttribute("salary", 3000.70).
		WithStringAttribute("nif", "54688188M").
		WithBooleanAttribute("previous_formation", true).
		WithDateAttribute("birth_date", time.Date(1999, time.March, 20, 0, 0, 0, 0, time.UTC)).
		WithDatetimeAttribute("time_registered", time.Now()).
		WithStringAttribute("country", "spain").
		WithIntegerAttribute("brother", 1).
		WithDecimalAttribute("height", 1.70).
		Build()
	if err != nil {
		log.Fatalln(err)
	}

	jsonOffer, err := identityClient.GetCredentialOffer(issuer, receipt.CredentialId)
	if err != nil {
		log.Fatalln(err)
	}

	log.Println(jsonOffer)

	ok, err := identityClient.RevokeCredential(receipt.Credential, issuer)
	if err != nil {
		log.Fatalln(err)
	}
	if !ok {
		log.Fatalln("unexpected result")
	}
}
