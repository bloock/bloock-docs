---
sidebar_label: authenticity
title: client.authenticity
---

## AuthenticityClient Objects

```python
class AuthenticityClient()
```

Represents a client for interacting with the [Bloock Authenticity service dashboard](https://dashboard.bloock.com/login).

#### \_\_init\_\_

```python
def __init__(config_data=None) -> None
```

Creates a new instance of the AuthenticityClient with default configuration.


#### generate\_ecdsa\_keys

```python
def generate_ecdsa_keys() -> KeyPair
```

Generates ECDSA key pair for signing records.

Will be deleted in future versions.
...deprecated:: 2.8.0
    Use KeyClient.newLocalKey function instead.


#### sign

```python
def sign(record: Record, signer: Signer) -> Signature
```

Signs a Bloock record using the specified signer.


#### verify

```python
def verify(record: Record) -> bool
```

Verifies the authenticity of a Bloock record.


#### get\_signatures

```python
def get_signatures(record: Record) -> List[Signature]
```

Gets the signatures associated with a Bloock record.


