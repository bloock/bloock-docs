package main

import (
	"encoding/json"
	"fmt"
	"log"

	"github.com/bloock/bloock-sdk-go/v2/client"
	"github.com/bloock/bloock-sdk-go/v2/entity/authenticity"
	"github.com/bloock/bloock-sdk-go/v2/entity/key"
)

func main() {
	keyClient := client.NewKeyClient()
	recordClient := client.NewRecordClient()
	authenticityClient := client.NewAuthenticityClient()

	localKey, err := keyClient.NewLocalKey(key.EcP256k)
	if err != nil {
		log.Println(err)
	}

	signedRecord, err := recordClient.FromString("Hello world").
		WithSigner(authenticity.NewSignerWithLocalKey(localKey, nil)).
		Build()
	if err != nil {
		log.Println(err)
	}
	fmt.Println("Record was signed successfully")

	// we can add another signature with a different key
	localKey, err = keyClient.NewLocalKey(key.EcP256k)
	if err != nil {
		log.Println(err)
	}

	fmt.Println("Adding another signature")
	signedRecord, err = recordClient.FromRecord(signedRecord).
		WithSigner(authenticity.NewSignerWithLocalKey(localKey, nil)).
		Build()
	if err != nil {
		log.Println(err)
	}
	fmt.Println("Record was signed successfully")

	hash, err := signedRecord.GetHash()
	if err != nil {
		log.Println(err)
	}
	fmt.Printf("Hash: %+v", hash)

	signatures, err := authenticityClient.GetSignatures(signedRecord)
	if err != nil {
		log.Println(err)
	}

	for i, signature := range signatures {
		prettySignature, _ := json.MarshalIndent(signature, "", "    ")
		fmt.Printf("Signature %d: %s\n", i+1, string(prettySignature))
	}
}
