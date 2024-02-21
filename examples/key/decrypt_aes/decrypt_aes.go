package main

import (
	"fmt"
	"log"

	"github.com/bloock/bloock-sdk-go/v2/client"
	"github.com/bloock/bloock-sdk-go/v2/entity/encryption"
	"github.com/bloock/bloock-sdk-go/v2/entity/key"
	"github.com/bloock/bloock-sdk-go/v2/entity/record"
)

func main() {
	recordClient := client.NewRecordClient()
	encryptionClient := client.NewEncryptionClient()
	keyClient := client.NewKeyClient()

	key, err := keyClient.NewLocalKey(key.Aes256)
	if err != nil {
		log.Println(err)
	}

	// encryption ...
	var encryptedRecord record.Record

	fmt.Println("Trying to decrypt with the valid password")

	// To decrypt a record during the building process
	// we build a record from the encrypted record and add a decrypter
	decryptedRecord, err := recordClient.FromRecord(encryptedRecord).
		WithDecrypter(encryption.NewEncrypterWithLocalKey(key)).
		Build()
	if err != nil {
		log.Println(err)
	}

	// To decrypt an already encrypted record independently
	decryptedRecord, err = encryptionClient.Decrypt(encryptedRecord, encryption.NewEncrypterWithLocalKey(key))
	if err != nil {
		log.Println(err)
	}

	fmt.Println("Decryption successful")
	fmt.Println("Decrypted payload: " + string(decryptedRecord.Retrieve()))
}
