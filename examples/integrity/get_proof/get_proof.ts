import { IntegrityClient, Record } from '@bloock/sdk';

const integrityClient = new IntegrityClient();

const records: Record[] = [
  /* records */
];
const _proof = await integrityClient.getProof(records);
