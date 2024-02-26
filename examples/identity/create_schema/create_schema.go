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

	// we create the Schema, passing Schema information
	schemaName := "Bloock Employee"                                                         // name Schema. REQUIRED,
	schemaType := "BloockEmployee"                                                          // we defined the Schema type, basically you could use the name but in CamelCase. REQUIRED.
	schemaVersion := "1.0"                                                                  // Schema version. REQUIRED. By default you can set "1.0".
	schemaDescription := "BLOOCK Employee would be the new credential for BLOOCK employees" // Schema description. REQUIRED.

	schema, err := identityClient.BuildSchema(schemaName, schemaType, schemaVersion, schemaDescription).
		AddIntegerAttribute("Number", "number", "indicates the employee number associated", true).
		AddDecimalAttribute("Salary", "salary", "indicates the employee salary", true).
		AddStringAttribute("NIF", "nif", "indicates the employee nif", true).
		AddBooleanAttribute("Previous Formation", "previous_formation", "indicates if the employee has or not previous formation", true).
		AddDateAttribute("Birth Date", "birth_date", "the employee birth date", true).
		AddDatetimeAttribute("Time Registered", "time_registered", "indicates the date and time the employee was registered", true).
		AddStringEnumAttribute("Country", "country", "to know if the employee is from one of the following", true, []string{"spain", "portugal", "france"}).
		AddIntegerEnumAttribute("Brother", "brother", "the employee number of brothers", true, []int64{1, 2, 3}).
		AddDecimalEnumAttribute("Heigt", "height", "the employee aprox height", true, []float64{1.50, 1.70, 1.90}).
		Build()
	if err != nil {
		log.Fatalln(err)
	}

	// returns a Schema entity
	log.Println(schema.Cid)        // Schema identifier generated from IPFS. Ex: QmadTvnNKvj2fBDgen35uAp1TfP9pSPVCNeDWw4fitqqne.
	log.Println(schema.CidJsonLd)  // Schema in JSON-LD representation. Gives you extra information about the context.
	log.Panicln(schema.Json)       // represents the Schema JSON.
	log.Println(schema.SchemaType) // the Schema type defined above.
}
