---
sidebar_label: identity_v2
title: client.identity_v2
---

## IdentityClient Objects

```python
class IdentityClient()
```

Represents a client for interacting with the [Bloock Identity service](https://dashboard.bloock.com/login).

#### \_\_init\_\_

```python
def __init__(config_data=None) -> None
```

Creates a new instance of the IdentityClient with the provided configuration.


#### create\_identity

```python
def create_identity(identity_key: IdentityKey,
                    did_params: Optional[DidParams] = None) -> str
```

Creates a new identity.


#### create\_issuer

```python
def create_issuer(issuer_key: IdentityKey,
                  publish_interval: PublishIntervalParams,
                  issuer_params: Optional[DidParams] = None,
                  name: str = None,
                  description: str = None,
                  image: str = None) -> str
```

Creates a new issuer on the Bloock Identity service.


#### get\_issuer\_by\_key

```python
def get_issuer_by_key(issuer_key: IdentityKey,
                      issuer_params: Optional[DidParams] = None) -> str
```

Gets the DID of an issuer based on the issuer key.


#### build\_schema

```python
def build_schema(display_name: str, schema_type: str, version: str,
                 description: str) -> SchemaBuilder
```

Creates a new schema builder for defining a schema on the Bloock Identity service.


#### get\_schema

```python
def get_schema(schema_id: str) -> Schema
```

Gets a schema from the Bloock Identity service based on the schema ID (ex: Qma1t4uzbnB93E4rasNdu5UWMDh5qg3wMkPm68cnEyfnoM).


#### build\_credential

```python
def build_credential(display_name: str, issuer_did: str, holder_did: str,
                     expiration: int, version: int) -> CredentialBuilder
```

Creates a new credential builder for defining a credential on the Bloock Identity service.


#### publish\_issuer\_state

```python
def publish_issuer_state(issuer_did: str,
                         signer: Signer) -> IssuerStateReceipt
```

Publishes the state of an issuer on the Bloock Identity service.


#### get\_credential\_proof

```python
def get_credential_proof(issuer_did: str,
                         credential_id: str) -> CredentialProof
```

Gets the proof of a credential on the Bloock Identity service.


#### revoke\_credential

```python
def revoke_credential(credential: Credential, signer: Signer) -> bool
```

Revokes a credential on the Bloock Identity service.


#### create\_verification

```python
def create_verification(proof_request: str) -> VerificationReceipt
```

Creates a new verification session on the identity managed API provided.


#### wait\_verification

```python
def wait_verification(session_id: int, timeout=120000) -> bool
```

Waits for the completion of a verification session on the identity managed API provided.


#### get\_verification\_status

```python
def get_verification_status(session_id: int) -> bool
```

Gets the status of a verification session on the identity managed API provided.


