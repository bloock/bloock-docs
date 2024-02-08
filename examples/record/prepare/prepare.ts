const { RecordClient, Bloock } = require('@bloock/sdk');
const fs = require('fs');

try {
  let recordClient = new RecordClient();
  let record = await recordClient.fromString('Hello world').build();

  // we can get the hash of the record
  let hash = await record.getHash();
  console.log(hash);

  // build a record from an existing record
  let record2 = await recordClient.fromRecord(record).build();

  // we can read a file as an array of bytes
  const file = fs.readFileSync('sample.pdf');
  let record3 = await recordClient.fromFile(file).build();
} catch (e) {
  console.log(e);
}
