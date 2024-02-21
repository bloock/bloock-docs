import { Bloock, IpfsLoader, RecordClient } from '@bloock/sdk';

Bloock.setApiKey(process.env['API_KEY']);

const recordClient = new RecordClient();

const id = 'publish uuid result';
const _record = await recordClient.fromLoader(new IpfsLoader(id)).build();
