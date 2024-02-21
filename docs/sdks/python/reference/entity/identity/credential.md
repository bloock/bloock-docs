---
sidebar_label: credential
title: entity.identity.credential
---

## Credential Objects

```python
class Credential()
```

Represents a verifiable credential with its associated information. [Verifiable Credentials Data Model v2.0](https://www.w3.org/TR/vc-data-model-2.0/).

#### \_\_init\_\_

```python
def __init__(context: List[str], id: str, type: List[str], issuance_date: str,
             expiration: str, credential_subject: str,
             credential_status: CredentialStatus, issuer: str,
             credential_schema: CredentialSchema,
             proof: CredentialProof) -> None
```

Creates a new Credential instance with the provided details.


#### from\_json

```python
@staticmethod
def from_json(json: str) -> proto.Credential
```

Creates a Credential instance from a JSON string representation.


#### to\_json

```python
def to_json() -> str
```

Converts the Credential instance to its JSON string representation.


