import { RecordClient } from '@bloock/sdk';
import fs from 'fs';

try {
  const recordClient = new RecordClient();
  const record = await recordClient.fromString('Hello world').build();

  // we can get the hash of the record
  const hash = await record.getHash();
  console.log(hash);

  // build a record from an existing record
  const _record2 = await recordClient.fromRecord(record).build();

  // we can read a file as an array of bytes
  const file = fs.readFileSync('sample.pdf');
  const _record3 = await recordClient.fromFile(file).build();
} catch (e) {
  console.log(e);
}
