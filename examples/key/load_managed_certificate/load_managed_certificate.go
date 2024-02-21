package main

import "github.com/bloock/bloock-sdk-go/v2/client"

func main() {
	keyClient := client.NewKeyClient()

	// Load a managed key
	_, _ = keyClient.LoadManagedCertificate("key id")
}
