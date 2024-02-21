package main

import (
	"log"

	"github.com/bloock/bloock-sdk-go/v2/client"
	"github.com/bloock/bloock-sdk-go/v2/entity/record"
)

func main() {
	records := []record.Record{ /* some records */ }

	// we give GetProof an array with the hashes of the records
	integrityClient := client.NewIntegrityClient()
	proof, _ := integrityClient.GetProof(records)
	log.Printf("proof: %+v", proof)
}
