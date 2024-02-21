import { Bloock, IntegrityClient, Network, RecordClient } from '@bloock/sdk';

try {
  // we set the API key and create a client
  Bloock.setApiKey(process.env['API_KEY']);
  const integrityClient = new IntegrityClient();
  const recordClient = new RecordClient();

  const record = await recordClient.fromString('Hello world').build();
  const records = [record];

  const receipts = await integrityClient.sendRecords(records);
  const _anchor = await integrityClient.waitAnchor(receipts[0].anchor);

  // we can optionally specify a network (if not set, default is Ethereum Mainnet)
  const timestamp = await integrityClient.verifyRecords(
    records,
    Network.ETHEREUM_MAINNET
  );
  console.log(timestamp);
} catch (e) {
  console.log(e);
}
