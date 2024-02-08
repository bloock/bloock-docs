package main

import (
	"fmt"
	"log"

	"github.com/bloock/bloock-sdk-go/v2/client"
	"github.com/bloock/bloock-sdk-go/v2/entity"
)

func main() {
	payload := "This will be encrypted"
	encryptionClient := client.NewEncryptionClient()
	recordClient := client.NewRecordClient()
	keyClient := client.NewKeyClient()

	key, err := keyClient.NewLocalKey(key.Rsa2048)
	if err != nil {
		log.Println(err)
	}

	fmt.Printf("The following payload will be encrypted: %s", payload)

	// To encrypt a record during the building process
	encryptedRecord, err := recordClient.FromString(payload).
		WithEncrypter(entity.NewRsaEncrypter(encryption.EncrypterArgs{
			LocalKey: &key,
		})).
		Build()
	if err != nil {
		log.Println(err)
	}

	// To encrypt a record independently
	record, err := recordClient.FromString(payload).Build()
	if err != nil {
		log.Println(err)
	}
	encryptedRecord, err := encryptionClient.Encrypt(record, entity.NewRsaEncrypter(encryption.EncrypterArgs{
		LocalKey: &key,
	}))
	if err != nil {
		log.Println(err)
	}

	fmt.Println("Encryption successful")
	fmt.Println("Encrypted payload: " + string(encryptedRecord.Retrieve()))
}
