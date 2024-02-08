import os
import bloock
from bloock.client.integrity import IntegrityClient
from bloock.client.record import RecordClient
from bloock.entity.network import Network

# we set the API key and create a client
bloock.api_key = os.environ["API_KEY"]
record_client = RecordClient()
integrity_client = IntegrityClient()

record = record_client.from_string("Hello world").build()
records = [record]

send_receipts = integrity_client.send_records(records)
anchor = integrity_client.wait_anchor(send_receipts[0].anchor, timeout=60000)

# we can optionally specify a network (if not set, default is Ethereum Mainnet)
timestamp = integrity_client.verify_records(records, Network.ETHEREUM_MAINNET)
print(timestamp)

