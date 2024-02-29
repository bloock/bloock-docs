from typing import List

from bloock.client.integrity import IntegrityClient
from bloock.entity.record.record import Record

if __name__ == "__main__":
    integrity_client = IntegrityClient()

    records: List[Record] = [
        # records
    ]
    # a proof
    proof = integrity_client.get_proof(records)

    root = integrity_client.verify_proof(proof)

