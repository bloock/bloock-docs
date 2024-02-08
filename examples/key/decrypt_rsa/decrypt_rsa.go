package main

import (
	"fmt"
	"log"

	"github.com/bloock/bloock-sdk-go/v2/client"
	"github.com/bloock/bloock-sdk-go/v2/entity"
)

func main() {
	payload := "This will be encrypted"
	recordClient := client.NewRecordClient()
	encryptionClient := client.NewEncryptionClient()
	keyClient := client.NewKeyClient()

	key, err := keyClient.NewLocalKey(key.Rsa2048)
	if err != nil {
		log.Println(err)
	}

	// encryption ...

	fmt.Println("Trying to decrypt with the valid password")

	// To decrypt a record during the building process
	// we build a record from the encrypted record and add a decrypter
	decryptedRecord, err := recordClient.FromRecord(encryptedRecord).
		WithDecrypter(entity.NewRsaDecrypter(encryption.DecrypterArgs{
			LocalKey: &key,
		})).
		Build()
	if err != nil {
		log.Println(err)
	}

	// To decrypt an already encrypted record independently
	decryptedRecord, err = encryptionClient.Decrypt(encryptedRecord, entity.NewRsaDecrypter(encryption.DecrypterArgs{
		LocalKey: &key,
	}))
	if err != nil {
		log.Println(err)
	}

	fmt.Println("Decryption successful")
	fmt.Println("Decrypted payload: " + string(decryptedRecord.Retrieve()))
}
