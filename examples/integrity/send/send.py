import os
import bloock
from bloock.client.record import RecordClient

# we set the API key and create a client
bloock.api_key = os.environ["API_KEY"]
record_client = RecordClient()
integrity_client = IntegrityClient()

# we create an array of records which will contain
# the records we want to send
record = record_client.from_string("Hello world").build()
records = [record]

# finally we can send the records
send_receipts = integrity_client.send_records(records)

# we get a receipt with informationa about the transaction
print(list(map(lambda x: x.__dict__, send_receipts))) # pretty print receipts
