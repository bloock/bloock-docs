import os
import bloock
from bloock.client.identity import IdentityClient
# from bloock.entity.identity.credential import Credential

# we set the API key and create a client
bloock.api_key = os.environ["API_KEY"]
# we set de identity managed API host you have deployed
bloock.identity_api_host = os.environ["IDENTITY_MANAGED_API_HOST"]

# initialize the IdentityClient
identity_client = IdentityClient()

# we need the credential id, we must have been saved when we created
saved_credential_id = "fdd4bf52-bac7-4f41-a743-5b0580168eb3"

# we can call the get credential function, and will retrieve the Credential entity
credential_entity = identity_client.get_credential(saved_credential_id)

# now we can convert the Credential entity to an string JSON
credential_raw_json = credential_entity.to_json()

print(credential_raw_json)

# and we can do the opposite step, convert a JSON credential into a Credential entity
# credential_entity = Credential.from_json(credential_raw_json)

print(credential_entity)

