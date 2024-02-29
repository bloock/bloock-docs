package main

import (
	"io"
	"log"
	"net/http"

	"github.com/bloock/bloock-sdk-go/v2/client"
)

// SecretKey represents the client secret key associate to your webhook endpoint
const SecretKey = "NHJTAE6ikKBccSaeCSBSWGdp7NmixXy7"

func main() {
	verifyHandler := func(w http.ResponseWriter, req *http.Request) {
		enforceTolerance := false // decide if you want to set tolerance when verifying
		body, err := io.ReadAll(req.Body)
		if err != nil {
			log.Fatalf("Cannot read body request: %v", err)
		}
		bloockSignature := req.Header.Get("Bloock-Signature")

		webhookClient := client.NewWebhookClient()
		ok, err := webhookClient.VerifyWebhookSignature(body, bloockSignature, SecretKey, enforceTolerance)
		if err != nil {
			log.Fatal(err)
		}
		if !ok {
			log.Fatal("Invalid Signature!")
		}
		log.Println("Valid Signature!")
	}

	http.HandleFunc("/verify", verifyHandler)
	log.Println("Listing for requests at http://localhost:8000/verify")
	log.Fatal(http.ListenAndServe(":8000", nil))
}
