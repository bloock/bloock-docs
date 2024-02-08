import (
	"log"
	"os"

	"github.com/bloock/bloock-sdk-go/v2"
	"github.com/bloock/bloock-sdk-go/v2/client"
	"github.com/bloock/bloock-sdk-go/v2/client/entity"
)

func main() {
	bloock.ApiKey = os.Getenv("API_KEY")
	recordClient := client.NewRecordClient()
	integrityClient := client.NewIntegrityClient()

	var records []entity.Record

	record, err := recordClient.FromString("Hello world").Build()
	// if err != nil { ... }
	records = append(records, record)

	_, err = integrityClient.SendRecords(records)
	// if err != nil { ... }
	_, err = integrityClient.WaitAnchor(receipt[0].Anchor, entity.NewAnchorParams())
	// if err != nil { ... }

	network := entity.NewNetworkParams()
	// we can specify the network we verify against or leave the default
	network.Network = entity.ListOfNetworks().EthereumMainnet
	// we then verify the records and we will recive a timestamp
	// greater than 0 if the verification was successful
	timestamp, err := integrityClient.VerifyRecords(records, network)
	// if err != nil { ... }
	log.Println(timestamp)
}
