from bloock.client.record import RecordClient
from bloock.client.key import KeyClient
from bloock.client.authenticity import AuthenticityClient
from bloock.entity.key.key_protection_level import KeyProtectionLevel
from bloock.entity.key.managed_key_params import ManagedKeyParams
from bloock.entity.key.key_type import KeyType
from bloock.entity.key.managed import Managed
from bloock.entity.key.access_control_totp import AccessControlTotp
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

# Create a TOTP access control for the created key
totp = key_client.setup_totp_access_control(Managed(key))

# base64url encoded string with the TOTP setup QRCode.
# You can scan this QR with your TOTP application client.
print(totp.secret_qr)
# secret code that you can use instead of the QRCode to setup your TOTP application client.
print(totp.secret)
# recovery codes you need to save, so you could use in case you loose your access control.
print(totp.recovery_codes)

record = record_client.from_string("Hello world").build()

# How to sign using the TOTP access control
access_control = AccessControlTotp("code digit")
authenticity_client.sign(record, Signer(key, None, access_control))

# Recover in case you lose your access control
totpRecovered = key_client.recover_totp_access_control(Managed(key), totp.recovery_codes[0])

