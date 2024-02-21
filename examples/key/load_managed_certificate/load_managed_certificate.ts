import { KeyClient } from '@bloock/sdk';

const keyClient = new KeyClient();

// Load a managed certificate
const _certificate = await keyClient.loadManagedCertificate('certificate id');
