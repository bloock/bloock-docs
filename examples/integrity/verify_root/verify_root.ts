import { IntegrityClient, Network } from '@bloock/sdk';

const integrityClient = new IntegrityClient();

const root = 'root';
const _timestamp = await integrityClient.validateRoot(
  root,
  Network.ETHEREUM_MAINNET
);
