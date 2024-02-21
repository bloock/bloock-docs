package main

import (
	"log"
	"os"

	bloock "github.com/bloock/bloock-sdk-go/v2"
	"github.com/bloock/bloock-sdk-go/v2/client"
	"github.com/bloock/bloock-sdk-go/v2/entity/availability"
)

func main() {
	bloock.ApiKey = os.Getenv("API_KEY")

	recordClient := client.NewRecordClient()

	id := "publish uuid result"
	_, err := recordClient.FromLoader(availability.NewIpfsLoader(id)).Build()
	if err != nil {
		log.Println(err)
	}
}
