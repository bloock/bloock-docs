import os
import bloock
from bloock.client.identity import IdentityClient

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

print(credential_entity)