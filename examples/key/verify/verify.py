from bloock.client.authenticity import AuthenticityClient
from bloock.client.record import RecordClient
from bloock.client.entity.signer import EcdsaSigner
from bloock.client.key import KeyClient

record_client = RecordClient()
authenticity_client = AuthenticityClient()
key_client = KeyClient()

key = key_client.new_local_key(KeyType.EcP256k)

signed_record = (
    record_client.from_string("Hello world")
    .with_signer(EcdsaSigner(SignerArgs(key, "some name")))
    .build()
)

valid = authenticity_client.verify(signed_record)
if valid == true:
    print("Signature was verified successfully")

