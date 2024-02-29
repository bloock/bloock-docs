from bloock.client.key import KeyClient

if __name__ == "__main__":
    key_client = KeyClient()

    # Load a managed key
    key = key_client.load_managed_key("key id")

