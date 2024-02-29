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

    # an encrypted record
    encrypted_record = record_client.from_string("Hello world").build()

    print("Trying to decrypt with the valid password")

    key = key_client.new_local_key(KeyType.Rsa2048)

    # To decrypt a record during the building process
    # we build a record from the encrypted record and add a decrypter
    decrypted_record = (
        record_client.from_record(encrypted_record)
        .with_decrypter(Encrypter(key))
        .build()
    )

    # To decrypt an already encrypted record independently
    decrypted_record = encryption_client.decrypt(
        encrypted_record, Encrypter(key)
    )

    print("Decryption successful")
    print(f'Decrypted payload: "{decrypted_record.retrieve().decode()}"')

