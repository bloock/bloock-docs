package main

import (
	"fmt"
	"log"
	"os"

	bloock "github.com/bloock/bloock-sdk-go/v2"
	"github.com/bloock/bloock-sdk-go/v2/client"
	"github.com/bloock/bloock-sdk-go/v2/entity/availability"
)

func main() {
	bloock.ApiKey = os.Getenv("API_KEY")

	recordClient := client.NewRecordClient()
	availabilityClient := client.NewAvailabilityClient()

	record, err := recordClient.FromString("Hello world").Build()
	if err != nil {
		log.Fatalln(err)
	}

	_, err = availabilityClient.Publish(record, availability.NewHostedPublisher())
	if err != nil {
		log.Fatalln(err)
	}

	fmt.Println("Record was published successfully")
}
