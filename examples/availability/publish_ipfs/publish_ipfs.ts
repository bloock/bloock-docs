import {
  AvailabilityClient,
  Bloock,
  IpfsPublisher,
  RecordClient,
} from '@bloock/sdk';

async function main() {
  Bloock.setApiKey(process.env['API_KEY']);

  const recordClient = new RecordClient();
  const availabilityClient = new AvailabilityClient();

  const record = await recordClient.fromString('Hello world').build();

  const _id = await availabilityClient.publish(record, new IpfsPublisher());
  // it returns an uuid to further retrieve it

  console.log('Record was published successfully');
}

main();
