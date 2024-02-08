from bloock.entity.decrypter import AesDecrypter
from bloock.entity.encrypter import AesEncrypter
from bloock.client.encryption import EncryptionClient
from bloock.client.record import RecordClient

payload = "This will be encrypted"
record_client = RecordClient()
encryption_client = EncryptionClient()
key_client = KeyClient()

# encryption ...

print("Trying to decrypt with the valid password")

key = key_client.new_local_key(KeyType.Aes256)

# To decrypt a record during the building process
# we build a record from the encrypted record and add a decrypter
record_client = (
    record_client.from_record(encrypted_record)
    .with_decrypter(AesDecrypter(DecrypterArgs(key)))
    .build()
)

# To decrypt an already encrypted record independently
decrypted_record = encryption_client.decrypt(
    encrypted_record, AesDecrypter(DecrypterArgs(key))
)

print(f"Decryption successful")
print(f'Decrypted payload: "{decrypted_record.retrieve().decode()}"')