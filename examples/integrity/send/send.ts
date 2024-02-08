const { Bloock, IntegrityClient, RecordClient } = require('@bloock/sdk');

try {
  // we set the API key and create a client
  Bloock.setApiKey(process.env['API_KEY']);
  const integrityClient = new IntegrityClient();
  const recordClient = new RecordClient();

  // we create an array of strings which will contain
  // the hashes of the records we want to send
  let record = await recordClient.fromString('Hello world').build();
  let records = [record];

  // finally we can send the records
  let sendReceipts = await integrityClient.sendRecords(records);

  // we get a receipt with informationa about the transaction
  console.log(sendReceipts);
} catch (e) {
  console.log(e);
}
