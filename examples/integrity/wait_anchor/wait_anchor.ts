import { Bloock, IntegrityClient, RecordClient } from '@bloock/sdk';

try {
  // we set the API key and create a client
  Bloock.setApiKey(process.env['API_KEY']);
  const recordClient = new RecordClient();
  const integrityClient = new IntegrityClient();

  const record = await recordClient.fromString('Hello world').build();
  const records = [record];

  const sendReceipts = await integrityClient.sendRecords(records);
  // Once we sent a record, we can wait for it's anochor
  console.log('Waiting for anchor...');
  // we can optionally specify a timeout (if not set, default is 120000)
  const _anchor = await integrityClient.waitAnchor(
    sendReceipts[0].anchor,
    120000
  );
  console.log('Done!');
} catch (e) {
  console.log(e);
}
