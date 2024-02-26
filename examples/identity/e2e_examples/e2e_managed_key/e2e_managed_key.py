import datetime
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


bloock.api_key = os.environ["API_KEY"]
bloock.identity_api_host = os.environ["IDENTITY_MANAGED_API_HOST"]

key_client = KeyClient()
identity_client = IdentityClient()

protection = KeyProtectionLevel.SOFTWARE
key_type = KeyType.Bjj
params = ManagedKeyParams(protection, key_type)
managed_key = key_client.new_managed_key(params)

managed_key = key_client.new_managed_key(params)

# we just passed the Baby JubJub key created before. REQUIRED.
issuer_key = Key(managed_key)
# check Issuer intervals documentation to define the best for you model. REQUIRED.
issuer_interval = PublishIntervalParams.Interval60
# check DID methods documentation. By default we recommend the PolygonID. REQUIRED.
method_did = DidMethod.PolygonID
# Issuer name. OPTIONAL.
name = "BLOOCK Issuer"
# Issuer desccription. OPTIONAL.
description = "this is the BLOOCK Issuer"
# here you can pass an encoded base 64 url image string. OPTIONAL.
encoded_base64_url_image = ""

issuer = identity_client.create_issuer(
    issuer_key, issuer_interval, method_did, name, description)

# name Schema. REQUIRED
schema_name = "Bloock Employee"
# we defined the Schema type, basically you could use the name but in CamelCase. REQUIRED.
schema_type = "BloockEmployee"
# Schema version. REQUIRED. By default you can set "1.0".
schema_version = "1.0"
#  Schema description. REQUIRED.
schema_description = "BLOOCK Employee would be the new credential for BLOOCK employees"

schema = identity_client.build_schema(schema_name, schema_type, schema_version, schema_description) \
    .add_integer_attribute("Number", "number", "indicates the employee number associated", true) \
    .add_decimal_attribute("Salary", "salary", "indicates the employee salary", true) \
    .add_string_attribute("NIF", "nif", "indicates the employee nif", true) \
    .add_boolean_attribute("Previous Formation", "previous_formation", "indicates if the employee has or not previous formation", true) \
    .add_date_attribute("Birth Date", "birth_date", "the employee birth date", true) \
    .add_datetime_attribute("Time Registered", "time_registered", "indicates the date and time the employee was registered", true) \
    .add_string_enum_attribute("Country", "country", "to know if the employee is from one of the following", true, ["spain", "portugal", "france"]) \
    .add_integer_enum_attribute("Brother", "brother", "the employee number of brothers", true, [1, 2, 3]) \
    .add_decimal_enum_attribute("Heigt", "height", "the employee aprox height", true, [1.50, 1.70, 1.90]) \
    .build()

# the DID of the Holder to whom the credential will be associated. REQUIRED.
holder_did = "did:polygonid:polygon:main:2q544HUegzeRpwr3V2qu9eMwgrAmF5x4E1NCPzbQc4"
# unix timestamp when the credential will expire. REQUIRED.
expiration = 4089852142
# credential version. By default it's set to 0. REQUIRED.
credential_version = 0

receipt = identity_client.build_credential(issuer, schema.cid, holder_did, expiration, credential_version) \
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

json_offer = identity_client.get_credential_offer(
    issuer, receipt.credential_id)

# it's the json result that we would convert to a QR code
print(json_offer)

ok = identity_client.revoke_credential(receipt.credential, issuer)
if ok == False:
    raise Exception("Unexpected result")