import (
	"log"
	"os"

	"github.com/bloock/bloock-sdk-go/v2"
	"github.com/bloock/bloock-sdk-go/v2/client"
)

func main() {
	recordClient := client.NewRecordClient()
	record, err := recordClient.FromString("Hello world").Build()
	if err != nil {
		log.Println(err)
	}

	// we can get the hash of the record
	hash, err := record.GetHash()
	if err != nil {
		log.Println(err)
	}
	log.Println(hash)

	// build a record from an existing record
	record2, err := recordClient.FromRecord(record).Build()
	if err != nil {
		log.Println(err)
	}

	// we can read a file as an array of bytes
	file, err := os.ReadFile("sample.pdf")
	if err != nil {
		log.Println(err)
	}

	// and build a record from it
	record3, err := recordClient.FromFile(file).Build()
	if err != nil {
		log.Println(err)
	}
}
