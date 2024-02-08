const integrityClient = new IntegrityClient();
const timestamp = await integrityClient.validateRoot(
  root,
  Network.ETHEREUM_MAINNET
);
