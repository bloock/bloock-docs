import os
from bloock import bloock
from bloock.client.record import RecordClient
from bloock.client.availability import AvailabilityClient
from bloock.client.entity.loader import IpfsLoader

bloock.api_key = os.environ["API_KEY"]

record_client = RecordClient()
availability_client = AvailabilityClient()

id = "publish uuid result"
record = record_client.from_loader(IpfsLoader(id=id)).build()