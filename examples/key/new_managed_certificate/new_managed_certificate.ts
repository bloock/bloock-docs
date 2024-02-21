import {
  KeyClient,
  KeyType,
  ManagedCertificateParams,
  SubjectCertificateParams,
} from '@bloock/sdk';

const keyClient = new KeyClient();

// Load a managed key
const _certificate = await keyClient.newManagedCertificate(
  new ManagedCertificateParams(
    KeyType.Rsa2048,
    new SubjectCertificateParams('Bloock'),
    2
  )
);
