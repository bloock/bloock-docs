import os
import bloock
from bloock.client.integrity import IntegrityClient
from bloock.client.record import RecordClient

# we set the API key and create a client
bloock.api_key = os.environ["API_KEY"]
record_client = RecordClient()
integrity_client = IntegrityClient()

record = record_client.from_string("Hello world").build()

hash = record.get_hash()
records = [hash]

send_receipts = integrity_client.send_records(records)
# Once we sent a record, we can wait for it's anochor
print("Waiting for anchor...")
# we can optionally specify a timeout (if not set, default is 120000) 
anchor = integrity_client.wait_anchor(send_receipts[0].anchor, timeout=120000)
print("Done!")
