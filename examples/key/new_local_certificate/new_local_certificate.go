package main

import (
	"github.com/bloock/bloock-sdk-go/v2/client"
	"github.com/bloock/bloock-sdk-go/v2/entity/key"
)

func main() {
	keyClient := client.NewKeyClient()

	_, _ = keyClient.NewLocalCertificate(key.LocalCertificateParams{
		KeyType:  key.Rsa2048,
		Password: "a password",
		Subject: key.SubjectCertificateParams{
			CommonName: "BLOOCK",
		},
		ExpirationMonths: 12,
	})

}
