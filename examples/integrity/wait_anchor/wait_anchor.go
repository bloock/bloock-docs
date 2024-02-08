import (
	"log"
	"os"

	"github.com/bloock/bloock-sdk-go/v2"
	"github.com/bloock/bloock-sdk-go/v2/client"
	"github.com/bloock/bloock-sdk-go/v2/entity"
)

func main() {
	bloock.ApiKey = os.Getenv("API_KEY")
	recordClient := client.NewRecordClient()
	integrityClient := client.NewIntegrityClient()

	var records []entity.Record

	record, err := recordClient.FromString("Hello world").Build()
	// if err != nil { ... }
	records = append(records, record)
	receipt, err := bloockClient.SendRecords(records)
	// if err != nil { ... }

	params := entity.NewAnchorParams()
	// we can leve the params as default or we can specify a timeout
	params.Timeout = 120000 // default is 120000

	// Once we sent a record, we can wait for it's anochor
	log.Println("Waiting for anchor...")
	_, err = integrityClient.WaitAnchor(receipt[0].Anchor, params)
	// if err != nil { ... }
	log.Println("Done!")
}
