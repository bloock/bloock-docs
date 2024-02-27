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

	// create the Baby JubJub managed key using the BLOOCK Keys product
	managedKey, err := keyClient.NewManagedKey(key.ManagedKeyParams{
		KeyType: key.Bjj,
	})
	if err != nil {
		log.Fatalln(err)
	}

	// we create the issuer, passing the Baby JubJub key and issuer information
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

	// returns an Issuer entity
	log.Println(issuer.Did.Did)       // will print the Issuer DID public identifier. Ex: did:polygonid:polygon:main:2qCU58EJgrELSJT6EzT27Rw9DhvwamAdbMLpePztYq
	log.Println(issuer.Did.DidMethod) // will return the DID method we chosed. Ex: identity.PolygonID
	log.Println(issuer.Key)           // will return the Key BJJ object associated to the Issuer.
}
