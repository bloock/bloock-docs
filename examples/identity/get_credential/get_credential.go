package main

import (
	"log"
	"os"
	"time"

	"github.com/bloock/bloock-sdk-go/v2"
	"github.com/bloock/bloock-sdk-go/v2/client"
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

	log.Println(credentialEntity) 
}
