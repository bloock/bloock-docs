from bloock.client.authenticity import AuthenticityClient
from bloock.client.record import RecordClient
from bloock.client.key import KeyClient
from bloock.entity.key.key_type import KeyType
from bloock.entity.authenticity.signer import Signer

if __name__ == "__main__":
    record_client = RecordClient()
    authenticity_client = AuthenticityClient()
    key_client = KeyClient()

    key = key_client.new_local_key(KeyType.EcP256k)

    signed_record = (
        record_client.from_string("Hello world")
        .with_signer(Signer(key))
        .build()
    )

    valid = authenticity_client.verify(signed_record)
    if valid:
        print("Signature was verified successfully")

