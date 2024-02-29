from bloock.client.integrity import IntegrityClient
from bloock.entity.integrity.network import Network

if __name__ == "__main__":
    integrity_client = IntegrityClient()

    root = "root"
    timestamp = integrity_client.validate_root(root, Network.ETHEREUM_MAINNET)

