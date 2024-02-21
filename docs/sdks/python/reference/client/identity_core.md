---
sidebar_label: identity_core
title: client.identity_core
---

## IdentityCoreClient Objects

```python
class IdentityCoreClient()
```

Represents a client for interacting with the [Bloock Identity service](https://dashboard.bloock.com/login).

#### \_\_init\_\_

```python
def __init__(config_data=None) -> None
```

Creates a new instance of the IdentityCoreClient with the provided configuration.


#### build\_credential

```python
def build_credential(issuer: Issuer, display_name: str, holder_did: str,
                     expiration: int, version: int) -> CredentialCoreBuilder
```

Creates a new credential builder for defining a credential on the Bloock Identity service.


