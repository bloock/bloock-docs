package main

import (
	"github.com/bloock/bloock-sdk-go/v2/client"
	"github.com/bloock/bloock-sdk-go/v2/entity/key"
)

func main() {
	keyClient := client.NewKeyClient()

	// Generate a EcP256k key
	_, _ = keyClient.NewLocalKey(key.EcP256k)

	// Generate a Rsa2048 key
	_, _ = keyClient.NewLocalKey(key.Rsa2048)

	// Generate a Rsa3072 key
	_, _ = keyClient.NewLocalKey(key.Rsa3072)

	// Generate a Rsa4096 key
	_, _ = keyClient.NewLocalKey(key.Rsa4096)

	// Generate a Aes128 key
	_, _ = keyClient.NewLocalKey(key.Aes128)

	// Generate a Aes256 key
	_, _ = keyClient.NewLocalKey(key.Aes256)
}
