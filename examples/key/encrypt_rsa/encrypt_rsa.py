from bloock.entity.encrypter import RsaEncrypter
from bloock.client.encryption import EncryptionClient
from bloock.client.record import RecordClient

payload = "This will be encrypted"
record_client = RecordClient()
encryption_client = EncryptionClient()
key_client = KeyClient()

print(f'The following payload will be encrypted: "{payload}"')

key = key_client.new_local_key(KeyType.Rsa2048)

# To encrypt a record during the building process
encrypted_record = (
    record_client.from_string(payload)
    .with_encrypter(RsaEncrypter(EncrypterArgs(key)))
    .build()
)

# To encrypt a record independently
record = record_client.from_string(payload).build()
encrypted_record = encryption_client.encrypt(record, RsaEncrypter(EncrypterArgs(key)))

print("Encryption successful")
print(f"Encrypted payload: {encrypted_record.retrieve().decode()}")