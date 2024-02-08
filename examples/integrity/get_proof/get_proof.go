// we give GetProof an array with the hashes of the records
integrityClient := client.NewIntegrityClient()
proof, err := integrityClient.GetProof(records)
// if err != nil { ... }
log.Printf("proof: %+v", proof)
