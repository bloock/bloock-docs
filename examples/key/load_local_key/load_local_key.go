package main

import (
	"github.com/bloock/bloock-sdk-go/v2/client"
	"github.com/bloock/bloock-sdk-go/v2/entity/key"
)

func main() {
	keyClient := client.NewKeyClient()

	// Load a EcP256k key
	_, _ = keyClient.LoadLocalKey(key.EcP256k, "private key")

	// Load a Rsa2048 key
	_, _ = keyClient.LoadLocalKey(key.Rsa2048, "private key")

	// Load a Rsa3072 key
	_, _ = keyClient.LoadLocalKey(key.Rsa3072, "private key")

	// Load a Rsa4096 key
	_, _ = keyClient.LoadLocalKey(key.Rsa4096, "private key")

	// Load a Aes128 key
	_, _ = keyClient.LoadLocalKey(key.Aes128, "password")

	// Load a Aes256 key
	_, _ = keyClient.LoadLocalKey(key.Aes256, "password")

	// Load a BJJ key
	_, _ = keyClient.LoadLocalKey(key.Bjj, "private key")
}
