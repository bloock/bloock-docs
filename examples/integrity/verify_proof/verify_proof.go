integrityClient := client.NewIntegrityClient()
root, err := integrityClient.VerifyProof(proof)
// if err != nil { ... }
