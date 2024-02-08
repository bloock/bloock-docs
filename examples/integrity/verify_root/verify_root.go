integrityClient := client.NewIntegrityClient()
network := entity.NewNetworkParams()
// we can specify the network we verify against or leave the default
network.Network = entity.ListOfNetworks().EthereumMainnet
timestamp, err := integrityClient.ValidateRoot(root, network)
// if err != nil { ... }
log.Println(timestamp)
