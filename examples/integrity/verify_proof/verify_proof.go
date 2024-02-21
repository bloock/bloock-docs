package main

import (
	"github.com/bloock/bloock-sdk-go/v2/client"
	"github.com/bloock/bloock-sdk-go/v2/entity/integrity"
)

func main() {
	integrityClient := client.NewIntegrityClient()

	var proof integrity.Proof
	_, _ = integrityClient.VerifyProof(proof)
	// if err != nil { ... }
}
