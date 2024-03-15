from bloock.client.record import RecordClient
from bloock.client.key import KeyClient
from bloock.client.authenticity import AuthenticityClient
from bloock.entity.key.key_protection_level import KeyProtectionLevel
from bloock.entity.key.managed_key_params import ManagedKeyParams
from bloock.entity.key.key_type import KeyType
from bloock.entity.key.managed import Managed
from bloock.entity.key.access_control_secret import AccessControlSecret
from bloock.entity.authenticity.signer import Signer

# initialize the Key Client
key_client = KeyClient()
# initialize the Authenticity Client
authenticity_client = AuthenticityClient()
# initialize the Record Client
record_client = RecordClient()
# initialize the protection key level
protection = KeyProtectionLevel.SOFTWARE

# Generate a Rsa2048 key
key_type = KeyType.Rsa2048
key = key_client.new_managed_key(ManagedKeyParams(protection, key_type))

secret = "your secret"
email = "recovery@bloock.com"

# Create a Secret-Based access control for the created key
totp = key_client.setup_secret_access_control(Managed(key), secret, email)

record = record_client.from_string("Hello world").build()

# How to sign using the Secret-Based access control
access_control = AccessControlSecret(secret)
authenticity_client.sign(record, Signer(key, None, access_control))

