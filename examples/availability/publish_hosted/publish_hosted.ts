import {
  Bloock,
  AvailabilityClient,
  RecordClient,
  HostedPublisher,
} from '@bloock/sdk';

Bloock.setApiKey(process.env['API_KEY']);

const recordClient = new RecordClient();
const availabilityClient = new AvailabilityClient();

let record = await recordClient.fromString('Hello world').build();

let id = await availabilityClient.publish(record, new HostedPublisher());
// it returns an uuid to further retrieve it

console.log('Record was published successfully');
