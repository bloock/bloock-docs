package main

import (
	"log"
	"os"

	"github.com/bloock/bloock-sdk-go/v2/client"
)

func main() {
	keyClient := client.NewKeyClient()

	cert, err := os.ReadFile("certificate.p12")
	if err != nil {
		log.Println(err)
	}

	_, _ = keyClient.LoadLocalCertificate(cert, "password")
}
