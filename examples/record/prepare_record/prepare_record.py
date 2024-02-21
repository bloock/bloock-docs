import os
import bloock
from bloock.client.record import RecordClient

record_client = RecordClient()
record = record_client.from_string("Hello world").build()
# we can get the hash of the record
hash = record.get_hash()

# build a record from an existing record
record2 = record_client.from_record(record).build()

# we can read a file as an array of bytes
with open("sample.pdf", "rb") as file:
    data = bytes(file.read())
    # and build a record from it
    record3 = record_client.from_file(data).build()
    