import os
from bloock import bloock
from bloock.client.record import RecordClient
from bloock.client.availability import AvailabilityClient
from bloock.entity.availability.hosted_publisher import HostedPublisher

if __name__ == "__main__":
    bloock.api_key = os.environ["API_KEY"]

    record_client = RecordClient()
    availability_client = AvailabilityClient()

    record = record_client.from_string("Hello world").build()

    id = availability_client.publish(record, HostedPublisher())

    print("Record was published successfully")

