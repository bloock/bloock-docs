import os
import bloock
from bloock.client.identity import IdentityClient
from bloock.client.key import KeyClient
from bloock.entity.identity.publish_interval_params import PublishIntervalParams
from bloock.entity.key.key_protection_level import KeyProtectionLevel
from bloock.entity.key.key_type import KeyType
from bloock.entity.key.key import Key
from bloock.entity.key.managed_key_params import ManagedKeyParams
from bloock.entity.identity.did_method import DidMethod

# we set the API key and create a client
bloock.api_key = os.environ["API_KEY"]
# we set de identity managed API host you have deployed
bloock.identity_api_host = os.environ["IDENTITY_MANAGED_API_HOST"]

# initialize the Key Client
key_client = KeyClient()
# initialize the IdentityClient
identity_client = IdentityClient()

#create the Baby JubJub managed key using the BLOOCK Keys product
protection = KeyProtectionLevel.SOFTWARE
key_type = KeyType.Bjj
params = ManagedKeyParams(protection, key_type)
managed_key = key_client.new_managed_key(params)

managed_key = key_client.new_managed_key(params)

# we create the issuer, passing the Baby JubJub key and issuer information

# we just passed the Baby JubJub key created before. REQUIRED.
issuer_key = Key(managed_key)
# check Issuer intervals documentation to define the best for you model. REQUIRED.
issuer_interval = PublishIntervalParams.Interval60
# check DID methods documentation. By default we recommend the PolygonID. REQUIRED.
method_did = DidMethod.PolygonID
# Issuer name. OPTIONAL.
name = "BLOOCK Issuer"
# Issuer description. OPTIONAL.
description = "this is the BLOOCK Issuer"
# here you can pass an encoded base 64 url image string. OPTIONAL.
encoded_base64_url_image = ""

issuer = identity_client.create_issuer(
    issuer_key, issuer_interval, method_did, name, description)

# returns an Issuer entity

# will print the Issuer DID public identifier. Ex: did:polygonid:polygon:main:2qCU58EJgrELSJT6EzT27Rw9DhvwamAdbMLpePztYq
print(issuer.did)
# will return the DID method we chosed. Ex: identity.PolygonID
print(issuer.did_method)
# will return the Key BJJ object associated to the Issuer.
print(issuer.key)