from bloock.entity.encryption.encrypter import Encrypter
from bloock.entity.key.key_type import KeyType
from bloock.client.encryption import EncryptionClient
from bloock.client.record import RecordClient
from bloock.client.key import KeyClient

if __name__ == "__main__":
    payload = "This will be encrypted"
    record_client = RecordClient()
    encryption_client = EncryptionClient()
    key_client = KeyClient()

    print(f'The following payload will be encrypted: "{payload}"')

    key = key_client.new_local_key(KeyType.Aes256)

    # To encrypt a record during the building process
    encrypted_record = (
        record_client.from_string(payload)
        .with_encrypter(Encrypter(key))
        .build()
    )
    print("Encryption successful")
    print(f"Encrypted payload: {encrypted_record.retrieve().decode()}")

    # To encrypt a record independently
    record = record_client.from_string(payload).build()
    encrypted_record = encryption_client.encrypt(record, Encrypter(key))

    print("Encryption successful")
    print(f"Encrypted payload: {encrypted_record.retrieve().decode()}")

