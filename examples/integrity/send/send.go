package main

import (
	"log"
	"os"

	bloock "github.com/bloock/bloock-sdk-go/v2"
	"github.com/bloock/bloock-sdk-go/v2/client"
	"github.com/bloock/bloock-sdk-go/v2/entity/record"
)

func main() {
	// we set the API key and create a client
	bloock.ApiKey = os.Getenv("API_KEY")
	recordClient := client.NewRecordClient()
	integrityClient := client.NewIntegrityClient()

	// we create an array of strings which will contain
	// the hashes of the records we want to send
	r, err := recordClient.FromString("Hello world").Build()
	if err != nil {
		log.Println(err)
	}
	records := []record.Record{r}

	// finally we can send the records
	receipt, err := integrityClient.SendRecords(records)
	if err != nil {
		log.Println(err)
	}

	// we get a receipt with informationa about the transaction
	log.Printf("%+v", receipt)
}
