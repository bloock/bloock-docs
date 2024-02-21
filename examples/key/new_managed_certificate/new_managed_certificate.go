package main

import (
	"github.com/bloock/bloock-sdk-go/v2/client"
	"github.com/bloock/bloock-sdk-go/v2/entity/key"
)

func main() {
	keyClient := client.NewKeyClient()

	_, _ = keyClient.NewManagedCertificate(key.ManagedCertificateParams{
		KeyType: key.Rsa2048,
		Subject: key.SubjectCertificateParams{
			CommonName: "BLOOCK",
		},
		ExpirationMonths: 12,
	})
}
