import { Bloock, HostedLoader, RecordClient } from '@bloock/sdk';

Bloock.setApiKey(process.env['API_KEY']);

const recordClient = new RecordClient();

const id = 'publish uuid result';
const _record = await recordClient.fromLoader(new HostedLoader(id)).build();
