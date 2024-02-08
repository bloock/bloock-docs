import (
	"os"

	"github.com/bloock/bloock-sdk-go/v2"
	"github.com/bloock/bloock-sdk-go/v2/client"
	"github.com/bloock/bloock-sdk-go/v2/entity"
)

func main() {
	bloock.ApiKey = os.Getenv("API_KEY")

	recordClient := client.NewRecordClient()
	availabilityClient := client.NewAvailabilityClient()

	id := "publish uuid result"
	record, err = recordClient.FromLoader(entity.NewHostedLoader(id)).Build()
	if err != nil {
		log.Prinln(err)
	}
}