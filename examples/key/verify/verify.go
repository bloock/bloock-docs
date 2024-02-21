package main

import (
	"fmt"
	"log"

	"github.com/bloock/bloock-sdk-go/v2/client"
	"github.com/bloock/bloock-sdk-go/v2/entity/authenticity"
	"github.com/bloock/bloock-sdk-go/v2/entity/key"
)

func main() {
	recordClient := client.NewRecordClient()
	authenticityClient := client.NewAuthenticityClient()
	keyClient := client.NewKeyClient()

	key, err := keyClient.NewLocalKey(key.EcP256k)
	if err != nil {
		log.Println(err)
	}

	signedRecord, err := recordClient.FromString("Hello world").
		WithSigner(authenticity.NewSignerWithLocalKey(key, nil)).
		Build()
	if err != nil {
		log.Println(err)
	}

	valid, err := authenticityClient.Verify(signedRecord)
	if err != nil {
		log.Println(err)
	}

	if valid {
		fmt.Println("Signature was verified successfully")
	}
}
