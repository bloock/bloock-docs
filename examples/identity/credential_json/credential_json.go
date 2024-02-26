package main

import (
	"log"
	"os"

	"github.com/bloock/bloock-sdk-go/v2"
	"github.com/bloock/bloock-sdk-go/v2/client"
	"github.com/bloock/bloock-sdk-go/v2/entity/identity"
)

func main() {
	// we set the API key and create a client
	bloock.ApiKey = os.Getenv("API_KEY")
	// we set de identity managed API host you have deployed
	bloock.IdentityApiHost = os.Getenv("IDENTITY_MANAGED_API_HOST")

	// initialize the IdentityClient
	identityClient := client.NewIdentityClient()

	// we need the credential id, we must have been saved when we created
	savedCredentialID := "fdd4bf52-bac7-4f41-a743-5b0580168eb3"

	// we can call the get credential function, and will retrieve the Credential entity
	credentialEntity, err := identityClient.GetCredential(savedCredentialID)
	if err != nil {
		log.Fatalln(err)
	}

	// now we can convert the Credential entity to an string JSON
	credentialRawJSON, err := credentialEntity.ToJson()
	if err != nil {
		log.Fatalln(err)
	}

	log.Println(credentialRawJSON)

	// and we can do the opposite step, convert a JSON credential into a Credential entity
	credentialEntity, err = identity.NewCredentialFromJson(credentialRawJSON)
	if err != nil {
		log.Fatalln(err)
	}

	log.Println(credentialEntity)
}
