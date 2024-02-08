import os
from bloock import bloock
from bloock.client.record import RecordClient
from bloock.client.availability import AvailabilityClient
from bloock.client.entity.publisher import HostedPublisher

bloock.api_key = os.environ["API_KEY"]

record_client = RecordClient()
availability_client = AvailabilityClient()

id = "publish uuid result"
record = record_client.from_loader(HostedLoader(id=id)).build()