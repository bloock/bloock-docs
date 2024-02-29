import os
from bloock import bloock
from bloock.client.record import RecordClient
from bloock.entity.availability.ipfs_loader import IpfsLoader

if __name__ == "__main__":
    bloock.api_key = os.environ["API_KEY"]

    record_client = RecordClient()

    pid = "publish uuid result"
    record = record_client.from_loader(IpfsLoader(pid)).build()

