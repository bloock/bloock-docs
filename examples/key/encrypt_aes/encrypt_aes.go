package main

import (
	"fmt"
	"log"

	"github.com/bloock/bloock-sdk-go/v2/client"
	"github.com/bloock/bloock-sdk-go/v2/entity"
)

func main() {
	payload := "This will be encrypted"
	password := "a STRONG password"
	encryptionClient := client.NewEncryptionClient()
	recordClient := client.NewRecordClient()
	keyClient := client.NewKeyClient()

	fmt.Printf("The following payload will be encrypted: %s", payload)

	key, err := keyClient.NewLocalKey(key.Aes256)
	if err != nil {
		log.Println(err)
	}

	// To encrypt a record during the building process
	encryptedRecord, err := recordClient.FromString(payload).
		WithEncrypter(entity.NewAesEncrypter(encryption.EncrypterArgs{
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
	encryptedRecord, err := encryptionClient.Encrypt(record, entity.NewAesEncrypter(encryption.EncrypterArgs{
		LocalKey: &key,
	}))
	if err != nil {
		log.Println(err)
	}

	fmt.Println("Encryption successful")
	fmt.Println("Encrypted payload: " + string(encryptedRecord.Retrieve()))
}
