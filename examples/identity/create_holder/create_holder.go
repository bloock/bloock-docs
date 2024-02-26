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

	// create the Baby JubJub local key
	localKey, err := keyClient.NewLocalKey(key.Bjj)
	if err != nil {
		log.Fatalln(err)
	}

	// we create the holder, passing the Baby JubJub key and holder did method
	holderKey := key.Key{LocalKey: &localKey}
	holderDidMethod := identity.PolygonID

	holder, err := identityClient.CreateHolder(holderKey, holderDidMethod)
	if err != nil {
		log.Fatalln(err)
	}

	log.Println(holder.Did.Did)       // will print the Holder DID public identifier. Ex: did:polygonid:polygon:main:2qCU58EJgrELSJT6EzT27Rw9DhvwamAdbMLpePztYq
	log.Println(holder.Did.DidMethod) // will return the DID method we chosed. Ex: identity.PolygonID
	log.Println(holder.Key)           // will return the Key BJJ object associated to the Holder.
}
