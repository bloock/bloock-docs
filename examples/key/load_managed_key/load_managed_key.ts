import { KeyClient } from '@bloock/sdk';

const keyClient = new KeyClient();

// Load a managed key
const _key = await keyClient.loadManagedKey('key id');
