import { KeyClient } from '@bloock/sdk';
import * as fs from 'fs';
import path from 'path';

const keyClient = new KeyClient();

// Load a local certificate
const dirPath = path.join(__dirname, '/certificate.p12');
const buffer = fs.readFileSync(dirPath);

const uint8 = new Uint8Array(buffer);

const _certificate = await keyClient.loadLocalCertificate(uint8, 'password');
