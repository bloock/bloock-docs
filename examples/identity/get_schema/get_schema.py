import os
import bloock
from bloock.client.identity import IdentityClient

# we set the API key and create a client
bloock.api_key = os.environ["API_KEY"]
# we set de identity managed API host you have deployed
bloock.identity_api_host = os.environ["IDENTITY_MANAGED_API_HOST"]

# initialize the IdentityClient
identity_client = IdentityClient()

# we need the schema id, we must have been saved when we created
saved_schema_id = "QmadTvnNKvj2fBDgen35uAp1TfP9pSPVCNeDWw4fitqqne"

# we can call the get schema function, and will retrieve the Schema entity
schema_entity = identity_client.get_schema(saved_schema_id)

# Schema identifier generated from IPFS. Ex: QmadTvnNKvj2fBDgen35uAp1TfP9pSPVCNeDWw4fitqqne.
print(schema_entity.cid)
# Schema in JSON-LD representation. Gives you extra information about the context.
print(schema_entity.cid_json_ld)
# represents the Schema JSON.
print(schema_entity.json)
# the Schema type defined above.
print(schema_entity.schema_type)