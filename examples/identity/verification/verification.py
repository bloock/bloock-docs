import os
import bloock
from bloock.client.identity import IdentityClient

# we set the API key and create a client
bloock.api_key = os.environ["API_KEY"]
# we set de identity managed API host you have deployed
bloock.identity_api_host = os.environ["IDENTITY_MANAGED_API_HOST"]

# initialize the IdentityClient
identity_client = IdentityClient()

# first you will need to get the proof request, it's basically a json string, you can generate this using our Dashboard Validation Queries.
proof_request = '''{"id":1708674709,"query":{"type":"BloockEmployee","context":"https://api.bloock.com/hosting/v1/ipfs/QmadTvnNKvj2fBDgen35uAp1TfP9pSPVCNeDWw4fitqqne","allowedIssuers":["*"],"credentialSubject":{"number":{"$lt":5}},"skipClaimRevocationCheck":false},"circuitId":"credentialAtomicQuerySigV2"}'''

# we call the create verification function, using our proof request. This would create a verification process (by default with an expiration of 60min)
verification = identity_client.create_verification(proof_request)

# the session id it's the integer identifier for you verification process, you will need to save it, to then check the status
print(verification.session_id)
# the json that you need to convert to QR code, so you user could scan and be verified
print(verification.verification_request)

# we can call the wait verification function in order to paused until the verification is made (use this function to have a synchronous process)
verOK = identity_client.wait_verification(verification.session_id)
if verOK == False:
    raise Exception("Error waiting for the verification")

# finally to check the verification status and to know if the verification was success, you can call this function
verified = identity_client.get_verification_status(verification.session_id)
if verified == False:
    raise Exception("Verification failed")

print("Successfully verified")