package main

import (
	"log"

	"github.com/bloock/bloock-sdk-go/v2/client"
	"github.com/bloock/bloock-sdk-go/v2/entity/authenticity"
	"github.com/bloock/bloock-sdk-go/v2/entity/key"
)

func main() {
	// initialize the Key Client
	keyClient := client.NewKeyClient()
	// initialize the Authenticity Client
	authenticityClient := client.NewAuthenticityClient()
	// initialize the Record Client
	recordClient := client.NewRecordClient()
	// initialize the protection key level
	keyProtection := key.KEY_PROTECTION_SOFTWARE

	// Generate a Rsa2048 key
	keyType := key.Rsa2048
	_key, err := keyClient.NewManagedKey(key.ManagedKeyParams{
		KeyType:    keyType,
		Protection: keyProtection,
	})
	if err != nil {
		log.Fatalln(err)
	}

	secret := "your secret"
	email := "recovery@bloock.com"

	// Create a Secret-Based access control for the created key
	err = keyClient.SetupSecretAccessControl(key.Managed{ManagedKey: &_key}, secret, email)
	if err != nil {
		log.Fatalln(err)
	}

	record, err := recordClient.FromString("Hello world").Build()
	if err != nil {
		log.Fatalln(err)
	}

	// How to sign using the Secret-Based access control
	accessControl := key.NewAccessControlSecret(secret)
	_, err = authenticityClient.Sign(record, authenticity.NewSignerWithManagedKey(_key, nil, &key.AccessControl{AccessControlSecret: accessControl}))
	if err != nil {
		log.Fatalln(err)
	}
}
