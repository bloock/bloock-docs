import (
	"os"

	"github.com/bloock/bloock-sdk-go/v2"
	"github.com/bloock/bloock-sdk-go/v2/builder"
	"github.com/bloock/bloock-sdk-go/v2/client/entity"
)

func main() {
	bloock.ApiKey = os.Getenv("API_KEY")

	recordClient := client.NewRecordClient()
	availabilityClient := client.NewAvailabilityClient()

	id := "publish uuid result"
	record, err = recordClient.FromLoader(entity.NewIpfsLoader(id)).Build()
	if err != nil {
		log.Prinln(err)
	}
}