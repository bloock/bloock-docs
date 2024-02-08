const {
  RecordClient,
  Network,
  Bloock,
  IntegrityClient,
} = require('@bloock/sdk');

try {
  // we set the API key and create a client
  Bloock.setApiKey(process.env['API_KEY']);
  const integrityClient = new IntegrityClient();
  const recordClient = new RecordClient();

  let record = await recordClient.fromString('Hello world').build();
  let records = [record];

  let receipts = await integrityClient.sendRecords(records);
  let anchor = await integrityClient.waitAnchor(receipts[0].anchor);

  // we can optionally specify a network (if not set, default is Ethereum Mainnet)
  let timestamp = await integrityClient.verifyRecords(
    records,
    Network.ETHEREUM_MAINNET
  );
  console.log(timestamp);
} catch (e) {
  console.log(e);
}
