from bloock.client.integrity import IntegrityClient

if __name__ == "__main__":
    integrity_client = IntegrityClient()

    records = [
        # records
    ]
    proof = integrity_client.get_proof(records)

