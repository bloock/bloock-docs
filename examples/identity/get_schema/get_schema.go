package main

import (
	"log"
	"os"

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

	// we need the schema id, we must have been saved when we created
	savedSchemaID := "QmadTvnNKvj2fBDgen35uAp1TfP9pSPVCNeDWw4fitqqne"

	// we can call the get schema function, and will retrieve the Schema entity
	schemaEntity, err := identityClient.GetSchema(savedSchemaID)
	if err != nil {
		log.Fatalln(err)
	}

	log.Println(schemaEntity.Cid)        // schema identifier generated from IPFS. Ex: QmadTvnNKvj2fBDgen35uAp1TfP9pSPVCNeDWw4fitqqne.
	log.Println(schemaEntity.CidJsonLd)  // schema in JSON-LD representation. Gives you extra information about the context.
	log.Println(schemaEntity.Json)       // represents the schema JSON.
	log.Println(schemaEntity.SchemaType) // the schema type defined above.
}
