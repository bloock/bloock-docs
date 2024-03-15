package main

import (
	"log"

	"github.com/bloock/bloock-sdk-go/v2/client"
	"github.com/bloock/bloock-sdk-go/v2/entity/authenticity"
	"github.com/bloock/bloock-sdk-go/v2/entity/key"
)

func main() {
	// initialize the Key Client
	keyClient := client.NewKeyClient()
	// initialize the Authenticity Client
	authenticityClient := client.NewAuthenticityClient()
	// initialize the Record Client
	recordClient := client.NewRecordClient()
	// initialize the protection key level
	keyProtection := key.KEY_PROTECTION_SOFTWARE

	// Generate a Rsa2048 key
	keyType := key.Rsa2048
	_key, err := keyClient.NewManagedKey(key.ManagedKeyParams{
		KeyType:    keyType,
		Protection: keyProtection,
	})
	if err != nil {
		log.Fatalln(err)
	}

	// Create a TOTP access control for the created key
	totp, err := keyClient.SetupTotpAccessControl(key.Managed{ManagedKey: &_key})
	if err != nil {
		log.Fatalln(err)
	}

	log.Println(totp.SecretQr)      // base64url encoded string with the TOTP setup QRCode. You can scan this QR with your TOTP application client.
	log.Println(totp.Secret)        // secret code that you can use instead of the QRCode to setup your TOTP application client.
	log.Println(totp.RecoveryCodes) // recovery codes you need to save, so you could use in case you loose your access control.

	record, err := recordClient.FromString("Hello world").Build()
	if err != nil {
		log.Fatalln(err)
	}

	// How to sign using the TOTP access control
	accessControl := key.NewAccessControlTotp("code digit") // get the code from your TOTP application (Google Authenticator). Ej: 731 049
	_, err = authenticityClient.Sign(record, authenticity.NewSignerWithManagedKey(_key, nil, &key.AccessControl{AccessControlTotp: accessControl}))
	if err != nil {
		log.Fatalln(err)
	}

	// Recover in case you lose your access control
	_, err = keyClient.RecoverTotpAccessControl(key.Managed{ManagedKey: &_key}, totp.RecoveryCodes[0]) // recovery code you saved previously
	if err != nil {
		log.Fatalln(err)
	}
}
