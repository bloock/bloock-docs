package main

import (
	"os"

	bloock "github.com/bloock/bloock-sdk-go/v2"
)

func main() {
	bloock.ApiKey = os.Getenv("API_KEY")
}
