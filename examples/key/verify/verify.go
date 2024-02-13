import (
	"fmt"
	"log"

	"github.com/bloock/bloock-sdk-go/v2/client"
	"github.com/bloock/bloock-sdk-go/v2/entity"
)

func main() {
	recordClient := client.NewRecordClient()
	authenticityClient := client.NewAuthenticityClient()
	keyClient := client.NewKeyClient()

	key, err := keyClient.NewLocalKey(key.EcP256k)
	if err != nil {
		log.Println(err)
	}

	name := "a name"
	signedRecord, err := recordClient.FromString("Hello world").
		WithSigner(entity.NewEcdsaSigner(entity.SignerArgs{
			LocalKey:   &key,
			CommonName: &name,
		})).
		Build()
	if err != nil {
		log.Println(err)
	}

	valid, err := authenticityClient.Verify(record)
	if err != nil {
		log.Println(err)
	}

	if valid == true {
		fmt.Println("Signature was verified successfully")
	}
}
