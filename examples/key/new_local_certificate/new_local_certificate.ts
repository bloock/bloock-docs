import {
  KeyClient,
  KeyType,
  LocalCertificateParams,
  SubjectCertificateParams,
} from '@bloock/sdk';

const keyClient = new KeyClient();

// Load a managed key
const _certificate = await keyClient.newLocalCertificate(
  new LocalCertificateParams(
    KeyType.Rsa2048,
    new SubjectCertificateParams('Bloock'),
    'password',
    2
  )
);
