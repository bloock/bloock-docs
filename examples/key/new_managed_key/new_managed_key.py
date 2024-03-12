from bloock.entity.key.key_type import KeyType
from bloock.client.key import KeyClient
from bloock.entity.key.key_protection_level import KeyProtectionLevel
from bloock.entity.key.managed_key_params import ManagedKeyParams

if __name__ == "__main__":
    key_client = KeyClient()
    protection = KeyProtectionLevel.SOFTWARE

    # Generate a EcP256k key
    key_type = KeyType.EcP256k
    managed_key = key_client.new_managed_key(ManagedKeyParams(protection, key_type))

    # Generate a Rsa2048 key
    key_type = KeyType.Rsa2048
    managed_key = key_client.new_managed_key(ManagedKeyParams(protection, key_type))

    # Generate a Rsa3072 key
    key_type = KeyType.Rsa3072
    managed_key = key_client.new_managed_key(ManagedKeyParams(protection, key_type))

    # Generate a Rsa4096 key
    key_type = KeyType.Rsa4096
    managed_key = key_client.new_managed_key(ManagedKeyParams(protection, key_type))

    # Generate a Aes128 key
    key_type = KeyType.Aes128
    managed_key = key_client.new_managed_key(ManagedKeyParams(protection, key_type))

    # Generate a Aes256 key
    key_type = KeyType.Aes256
    managed_key = key_client.new_managed_key(ManagedKeyParams(protection, key_type))

    # Generate a Bjj key
    key_type = KeyType.Bjj
    managed_key = key_client.new_managed_key(ManagedKeyParams(protection, key_type))

