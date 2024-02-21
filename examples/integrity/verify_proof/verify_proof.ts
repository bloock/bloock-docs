import { IntegrityClient, Proof } from '@bloock/sdk';

const integrityClient = new IntegrityClient();

let proof: Proof;
const _root = await integrityClient.verifyProof(proof);
