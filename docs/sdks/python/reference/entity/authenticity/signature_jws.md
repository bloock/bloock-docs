---
sidebar_label: signature_jws
title: entity.authenticity.signature_jws
---

## SignatureJws Objects

```python
class SignatureJws()
```

Represents a JSON Web Signature (JWS). [RFC 7515](https://datatracker.ietf.org/doc/html/rfc7515).

#### \_\_init\_\_

```python
def __init__(message_hash: str, signature: str, protected: str,
             header: SignatureHeaderJws) -> None
```

Constructs a SignatureJws object with the specified parameters.


#### get\_alg

```python
def get_alg() -> SignatureAlg
```

Gets the algorithm used for the JWS signature.


