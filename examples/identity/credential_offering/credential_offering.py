import os
import bloock
from bloock.client.identity import IdentityClient
from bloock.client.key import KeyClient
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

# we must have our Issuer Baby JubJub key identifier. Ex: 6f36448d-49f3-4b0e-aa72-6e55863302e8
saved_issuer_key = "6f36448d-49f3-4b0e-aa72-6e55863302e8"
loaded_managed_key = key_client.load_managed_key(saved_issuer_key)

# if we don't have our Issuer entity, here you can import you Issuer from the key
imported_issuer_key = Key(loaded_managed_key)
issuer_method_did = DidMethod.PolygonID

imported_issuer = identity_client.import_issuer(
    imported_issuer_key, issuer_method_did)

# we need to get the credential id, we want to make the offering
credential_id = "fdd4bf52-bac7-4f41-a743-5b0580168eb3"

# once we have the issuer and the credential id, we can called the offering function
json_offer = identity_client.get_credential_offer(
    imported_issuer, credential_id)

# it's the json result that we would convert to a QR code
print(json_offer) 