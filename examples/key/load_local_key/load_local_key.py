from bloock.entity.key.key_type import KeyType
from bloock.client.key import KeyClient

if __name__ == "__main__":
    key_client = KeyClient()

    # Load a EcP256k key
    local_key = key_client.load_local_key(KeyType.EcP256k, "private key")

    # Load a Rsa2048 key
    local_key = key_client.load_local_key(KeyType.Rsa2048, "private key")

    # Load a Rsa3072 key
    local_key = key_client.load_local_key(KeyType.Rsa3072, "private key")

    # Load a Rsa4096 key
    local_key = key_client.load_local_key(KeyType.Rsa4096, "private key")

    # Load a Aes128 key
    local_key = key_client.load_local_key(KeyType.Aes128, "password")

    # Load a Aes256 key
    local_key = key_client.load_local_key(KeyType.Aes256, "password")

