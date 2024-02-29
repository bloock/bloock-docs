import os
import bloock
from bloock.client.identity import IdentityClient

# we set the API key and create a client
bloock.api_key = os.environ["API_KEY"]
# we set de identity managed API host you have deployed
bloock.identity_api_host = os.environ["IDENTITY_MANAGED_API_HOST"]

# initialize the IdentityClient
identity_client = IdentityClient()

# we create the Schema, passing Schema information

# name Schema. REQUIRED
schema_name = "Bloock Employee"
# we defined the Schema type, basically you could use the name but in CamelCase. REQUIRED.
schema_type = "BloockEmployee"
# Schema version. REQUIRED. By default you can set "1.0".
schema_version = "1.0"
# Schema description. REQUIRED.
schema_desc = "BLOOCK Employee would be the new credential for BLOOCK employees"

schema = identity_client.build_schema(schema_name, schema_type, schema_version, schema_desc) \
    .add_integer_attribute("Number", "number",
                           "indicates the employee number associated", True) \
    .add_decimal_attribute("Salary", "salary",
                           "indicates the employee salary", True) \
    .add_string_attribute("NIF", "nif",
                          "indicates the employee nif", True) \
    .add_boolean_attribute("Previous Formation", "previous_formation",
                           "indicates if the employee has or not previous formation", True) \
    .add_date_attribute("Birth Date", "birth_date",
                        "the employee birth date", True) \
    .add_datetime_attribute("Time Registered", "time_registered",
                            "indicates the date and time the employee was registered", True) \
    .add_string_enum_attribute("Country", "country",
                               "to know if the employee is from one of the following", True,
                               ["spain", "portugal", "france"]) \
    .add_integer_enum_attribute("Brother", "brother",
                                "the employee number of brothers", True, [1, 2, 3]) \
    .add_decimal_enum_attribute("Heigt", "height",
                                "the employee aprox height", True, [1.50, 1.70, 1.90]) \
    .build()

# returns a Schema entity

# Schema identifier generated from IPFS. Ex: QmadTvnNKvj2fBDgen35uAp1TfP9pSPVCNeDWw4fitqqne.
print(schema.cid)
# Schema in JSON-LD representation. Gives you extra information about the context.
print(schema.cid_json_ld)
# represents the Schema JSON.
print(schema.json)
# the Schema type defined above.
print(schema.schema_type)

