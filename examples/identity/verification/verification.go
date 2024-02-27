package main

import (
	"log"
	"os"

	"github.com/bloock/bloock-sdk-go/v2"
	"github.com/bloock/bloock-sdk-go/v2/client"
)

func main() {
	// we set the API key and create a client
	bloock.ApiKey = os.Getenv("API_KEY")
	// we set de identity managed API host you have deployed
	bloock.IdentityApiHost = os.Getenv("IDENTITY_MANAGED_API_HOST")

	// initialize the IdentityClient
	identityClient := client.NewIdentityClient()

	// first you will need to get the proof request, it's basically a json string, you can generate this using our Dashboard Validation Queries.
	proofRequest := `{"id":1708674709,"query":{"type":"BloockEmployee","context":"https://api.bloock.com/hosting/v1/ipfs/QmadTvnNKvj2fBDgen35uAp1TfP9pSPVCNeDWw4fitqqne","allowedIssuers":["*"],"credentialSubject":{"number":{"$lt":5}},"skipClaimRevocationCheck":false},"circuitId":"credentialAtomicQuerySigV2"}`

	// we call the create verification function, using our proof request. This would create a verification process (by default with an expiration of 60min)
	verification, err := identityClient.CreateVerification(proofRequest)
	if err != nil {
		log.Fatalln(err)
	}

	log.Println(verification.SessionID)           // the session id it's the integer identifier for you verification process, you will need to save it, to then check the status
	log.Println(verification.VerificationRequest) // the json that you need to convert to QR code, so you user could scan and be verified

	// we can call the wait verification function in order to paused until the verification is made (use this function to have a synchronous process)
	verOK, err := identityClient.WaitVerification(verification.SessionID, identity.NewVerificationParams()) // By default 120000 seconds, you can customize
	if err != nil {
		log.Fatalln(err)
	}
	if !verOK {
		log.Fatalln("error waiting for the verification")
	}

	// finally to check the verification status and to know if the verification was success, you can call this function
	verified, err := identityClient.GetVerificationStatus(verification.SessionID)
	if err != nil {
		log.Fatalln(err)
	}
	if !verified {
		log.Fatalln("verification failed")
	}

	log.Println("successfully verified")
}
