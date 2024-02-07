from bloock.client.authenticity import AuthenticityClient
from bloock.client.record import RecordClient
from bloock.client.entity.signer import EcdsaSigner
from bloock.client.key import KeyClient

authenticity_client = AuthenticityClient()
record_client = RecordClient()
key_client = KeyClient()

key = key_client.new_local_key(KeyType.EcP256k)

signed_record = (
record_client.from_string("Hello world")
.with_signer(EcdsaSigner(SignerArgs(key)))
.build()
)

print("Record was signed sucessfully")

# we can add another signature with a different key

key = key_client.new_local_key(KeyType.EcP256k)

print("Adding another signature")
signed_record = (
record_client.from_record(signed_record)
.with_signer(EcdsaSigner(SignerArgs(key)))
.build()
)

print("Record was signed sucessfully")

hash = signed_record.get_hash()

print(f"Hash: {hash}")

signatures = authenticity_client.get_signatures(signed_record)

for i, signature in enumerate(signatures):
print(f"Signature {i + 1}: {signature.**dict**}")
