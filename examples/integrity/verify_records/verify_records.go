package main

import (
	"log"
	"os"

	bloock "github.com/bloock/bloock-sdk-go/v2"
	"github.com/bloock/bloock-sdk-go/v2/client"
	"github.com/bloock/bloock-sdk-go/v2/entity/integrity"
	"github.com/bloock/bloock-sdk-go/v2/entity/record"
)

func main() {
	bloock.ApiKey = os.Getenv("API_KEY")
	recordClient := client.NewRecordClient()
	integrityClient := client.NewIntegrityClient()

	var records []record.Record

	record, _ := recordClient.FromString("Hello world").Build()
	// if err != nil { ... }
	records = append(records, record)

	receipt, _ := integrityClient.SendRecords(records)
	// if err != nil { ... }
	_, _ = integrityClient.WaitAnchor(receipt[0].Anchor, integrity.NewAnchorParams())
	// if err != nil { ... }

	network := integrity.NewNetworkParams()
	// we can specify the network we verify against or leave the default
	network.Network = integrity.ListOfNetworks().EthereumMainnet
	// we then verify the records and we will recive a timestamp
	// greater than 0 if the verification was successful
	timestamp, _ := integrityClient.VerifyRecords(records, network)
	// if err != nil { ... }
	log.Println(timestamp)
}
