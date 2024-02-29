from bloock.client.authenticity import AuthenticityClient
from bloock.client.record import RecordClient
from bloock.client.key import KeyClient
from bloock.entity.key.key_type import KeyType
from bloock.entity.authenticity.signer import Signer

if __name__ == "__main__":
    authenticity_client = AuthenticityClient()
    record_client = RecordClient()
    key_client = KeyClient()

    key = key_client.new_local_key(KeyType.EcP256k)

    signed_record = (
        record_client.from_string("Hello world").with_signer(Signer(key)).build()
    )

    print("Record was signed successfully")

    # we can add another signature with a different key

    key = key_client.new_local_key(KeyType.EcP256k)

    print("Adding another signature")
    signed_record = (
        record_client.from_record(signed_record).with_signer(Signer(key)).build()
    )

    print("Record was signed successfully")

    record_hash = signed_record.get_hash()

    print(f"Hash: {record_hash}")

    signatures = authenticity_client.get_signatures(signed_record)

    for i, signature in enumerate(signatures):
        print(f"Signature {i + 1}: {signature}")

