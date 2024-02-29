import os

from bloock.client.key import KeyClient

if __name__ == "__main__":
    key_client = KeyClient()

    current_directory = os.getcwd()
    file_path = current_directory + "certificate.p12"
    with open(file_path, 'rb') as file:
        file_bytes = file.read()

    local_certificate = key_client.load_local_certificate(file_bytes, "password")

