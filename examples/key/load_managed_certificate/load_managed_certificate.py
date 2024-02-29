from bloock.client.key import KeyClient

if __name__ == "__main__":
    key_client = KeyClient()

    local_certificate = key_client.load_managed_certificate("certificate id")
