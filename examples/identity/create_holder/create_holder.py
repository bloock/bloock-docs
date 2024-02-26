import os
import bloock
from bloock.client.identity import IdentityClient
from bloock.client.key import KeyClient
from bloock.entity.key.key_type import KeyType
from bloock.entity.key.key import Key
from bloock.entity.identity.did_method import DidMethod

# we set the API key and create a client
bloock.api_key = os.environ["API_KEY"]
# we set de identity managed API host you have deployed
bloock.identity_api_host = os.environ["IDENTITY_MANAGED_API_HOST"]

# initialize the Key Client
key_client = KeyClient()
# initialize the IdentityClient
identity_client = IdentityClient()

#create the Baby JubJub local key
local_key = key_client.new_local_key(KeyType.Bjj)

# we create the holder, passing the Baby JubJub key and holder did method
holder_key = Key(local_key)
holder_did_method = DidMethod.PolygonID

holder = identity_client.create_holder(holder_key, holder_did_method)
# will print the Holder DID public identifier. Ex: did:polygonid:polygon:main:2qCU58EJgrELSJT6EzT27Rw9DhvwamAdbMLpePztYq
print(holder.did)
# will return the DID method we chosed. Ex: identity.PolygonID
print(holder.did_method)
# will return the Key BJJ object associated to the Holder.
print(holder.key)