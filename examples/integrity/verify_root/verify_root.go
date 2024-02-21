package main

import (
	"log"

	"github.com/bloock/bloock-sdk-go/v2/client"
	"github.com/bloock/bloock-sdk-go/v2/entity/integrity"
)

func main() {
	integrityClient := client.NewIntegrityClient()
	network := integrity.NewNetworkParams()
	// we can specify the network we verify against or leave the default
	network.Network = integrity.ListOfNetworks().EthereumMainnet
	// previously retrieved root
	var root string
	timestamp, _ := integrityClient.ValidateRoot(root, network)
	// if err != nil { ... }
	log.Println(timestamp)

}
