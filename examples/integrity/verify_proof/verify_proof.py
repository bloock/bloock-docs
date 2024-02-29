from bloock.client.integrity import IntegrityClient
from bloock.entity.integrity.proof import Proof

if __name__ == "__main__":
    integrity_client = IntegrityClient()

    # a proof
    proof: Proof

    root = integrity_client.verify_proof(proof)

