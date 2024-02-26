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
	// we set the API key and create a client
	bloock.ApiKey = os.Getenv("API_KEY")
	// we set de identity managed API host you have deployed
	bloock.IdentityApiHost = os.Getenv("IDENTITY_MANAGED_API_HOST")

	// initialize the Key Client
	keyClient := client.NewKeyClient()
	// initialize the IdentityClient
	identityClient := client.NewIdentityClient()

	// we must have our Issuer Baby JubJub key identifier. Ex: 6f36448d-49f3-4b0e-aa72-6e55863302e8
	savedIssuerKey := "6f36448d-49f3-4b0e-aa72-6e55863302e8"
	loadedManagedKey, err := keyClient.LoadManagedKey(savedIssuerKey)
	if err != nil {
		log.Fatalln(err)
	}

	// if we don't have our Issuer entity, here you can import you Issuer from the key
	importedIssuerKey := key.Key{ManagedKey: &loadedManagedKey}
	issuerMethodDID := identity.PolygonID

	importedIssuer, err := identityClient.ImportIssuer(importedIssuerKey, issuerMethodDID)
	if err != nil {
		log.Fatalln(err)
	}

	// we create the credential, passing credential information
	schemaCID := "QmadTvnNKvj2fBDgen35uAp1TfP9pSPVCNeDWw4fitqqne"                        // schema identifier created before. Ex: QmadTvnNKvj2fBDgen35uAp1TfP9pSPVCNeDWw4fitqqne. REQUIRED.
	holderDID := "did:polygonid:polygon:main:2q544HUegzeRpwr3V2qu9eMwgrAmF5x4E1NCPzbQc4" // the DID of the Holder to whom the credential will be associated. REQUIRED.
	expiration := int64(4089852142)                                                      // unix timestamp when the credential will expire. REQUIRED.
	credentialVersion := int32(0)                                                        // credential version. By default it's set to 0. REQUIRED.

	receipt, err := identityClient.BuildCredential(importedIssuer, schemaCID, holderDID, expiration, credentialVersion).
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

	// returns a Credential entity
	log.Println(receipt.CredentialId)   // Credential identifier. It's an UUID. Ex: f1cae203-6b54-4d71-a6e4-00e73e0c45a5
	log.Println(receipt.Credential)     // Verifiable Credential, the credential entity.
	log.Println(receipt.CredentialType) // the credential schema type associated.
}
