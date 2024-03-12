package main

import (
	"github.com/bloock/bloock-sdk-go/v2/client"
	"github.com/bloock/bloock-sdk-go/v2/entity/key"
)

func main() {
	keyClient := client.NewKeyClient()
	protection := key.KEY_PROTECTION_SOFTWARE

	// Generate a EcP256k key
	keyType := key.EcP256k
	_, _ = keyClient.NewManagedKey(key.ManagedKeyParams{
		Protection: protection,
		KeyType:    keyType,
	})

	// Generate a Rsa2048 key
	keyType = key.Rsa2048
	_, _ = keyClient.NewManagedKey(key.ManagedKeyParams{
		Protection: protection,
		KeyType:    keyType,
	})

	// Generate a Rsa3072 key
	keyType = key.Rsa3072
	_, _ = keyClient.NewManagedKey(key.ManagedKeyParams{
		Protection: protection,
		KeyType:    keyType,
	})
	// Generate a Rsa4096 key
	keyType = key.Rsa4096
	_, _ = keyClient.NewManagedKey(key.ManagedKeyParams{
		Protection: protection,
		KeyType:    keyType,
	})

	// Generate a Aes128 key
	keyType = key.Aes128
	_, _ = keyClient.NewManagedKey(key.ManagedKeyParams{
		Protection: protection,
		KeyType:    keyType,
	})

	// Generate a Aes256 key
	keyType = key.Aes256
	_, _ = keyClient.NewManagedKey(key.ManagedKeyParams{
		Protection: protection,
		KeyType:    keyType,
	})

	// Generate a BJJ key
	keyType = key.Bjj
	_, _ = keyClient.NewManagedKey(key.ManagedKeyParams{
		Protection: protection,
		KeyType:    keyType,
	})
}
