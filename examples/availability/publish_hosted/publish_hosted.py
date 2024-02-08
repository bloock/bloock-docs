import os
from bloock import bloock
from bloock.client.record import RecordClient
from bloock.client.availability import AvailabilityClient
from bloock.entity.loader import HostedLoader
from bloock.entity.publisher import HostedPublisher

bloock.api_key = os.environ["API_KEY"]

record_client = RecordClient()
availability_client = AvailabilityClient()

record = record_client.from_string("Hello world").build()

id = availability_client.publish(record, HostedPublisher())

print("Record was published sucessfully")