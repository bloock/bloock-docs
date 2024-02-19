---
sidebar_label: identity
title: client.identity
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


#### create\_holder

```python
def create_holder(holder_key: Key,
                  did_type: Optional[DidType] = None) -> Holder
```

Creates a new holder identity.


#### create\_issuer

```python
def create_issuer(issuer_key: Key,
                  publish_interval: PublishIntervalParams,
                  did_type: Optional[DidType] = None,
                  name: str = None,
                  description: str = None,
                  image: str = None) -> Issuer
```

Creates a new issuer on the Bloock Identity service.


#### import\_issuer

```python
def import_issuer(issuer_key: Key,
                  did_type: Optional[DidType] = None) -> Issuer
```

Retrieves the issuer based on the issuer key and DID type.


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
def build_credential(issuer: Issuer, display_name: str, holder_did: str,
                     expiration: int, version: int) -> CredentialBuilder
```

Creates a new credential builder for defining a credential on the Bloock Identity service.


#### force\_publish\_issuer\_state

```python
def force_publish_issuer_state(issuer: Issuer) -> IssuerStateReceipt
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
def revoke_credential(credential: Credential, issuer: Issuer) -> bool
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


