const {
  Bloock,
  AvailabilityClient,
  RecordClient,
  IpfsLoader,
} = require('@bloock/sdk');

Bloock.setApiKey(process.env['API_KEY']);

const recordClient = new RecordClient();
const availabilityClient = new AvailabilityClient();

const id = 'publish uuid result';
const record = await recordClient.fromLoader(new IpfsLoader(id)).build();
