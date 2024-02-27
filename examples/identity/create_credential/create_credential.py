import os
import datetime
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

# we create the credential, passing credential information

# schema identifier created before. Ex: QmadTvnNKvj2fBDgen35uAp1TfP9pSPVCNeDWw4fitqqne. REQUIRED.
schema_cid = "QmadTvnNKvj2fBDgen35uAp1TfP9pSPVCNeDWw4fitqqne"
# the DID of the Holder to whom the credential will be associated. REQUIRED.
holder_did = "did:polygonid:polygon:main:2q544HUegzeRpwr3V2qu9eMwgrAmF5x4E1NCPzbQc4"
# unix timestamp when the credential will expire. REQUIRED.
expiration = 4089852142
# credential version. By default it's set to 0. REQUIRED.
credential_version = 0

receipt = identity_client.build_credential(imported_issuer, schema_cid, holder_did, expiration, credential_version) \
    .with_integer_attribute("number", 1) \
    .with_decimal_attribute("salary", 3000.70) \
    .with_string_attribute("nif", "54688188M") \
    .with_boolean_attribute("previous_formation", True) \
    .with_date_attribute("birth_date", datetime.date(1999, 3, 20)) \
    .with_datetime_attribute("time_registered", datetime.datetime.now()) \
    .with_string_attribute("country", "spain") \
    .with_integer_attribute("brother", 1) \
    .with_decimal_attribute("height", 1.70) \
    .build()

# returns a Credential entity

# Credential identifier. It's an UUID. Ex: f1cae203-6b54-4d71-a6e4-00e73e0c45a5
print(receipt.credential_id)
# Verifiable Credential, the credential entity.
print(receipt.credential)
# the credential schema type associated.
print(receipt.credential_type)