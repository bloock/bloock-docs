package main

import (
	"log"
	"os"

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

	// we need to get the credential id, we want to make the offering
	credentialID := "fdd4bf52-bac7-4f41-a743-5b0580168eb3"

	// once we have the issuer and the credential id, we can called the offering function
	jsonOffer, err := identityClient.GetCredentialOffer(importedIssuer, credentialID)
	if err != nil {
		log.Fatalln(err)
	}

	log.Println(jsonOffer) // it's the json result that we would convert to a QR code
}
