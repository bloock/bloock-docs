---
sidebar_label: signature_header_jws
title: entity.authenticity.signature_header_jws
---

## SignatureHeaderJws Objects

```python
class SignatureHeaderJws()
```

Represents the header of a JSON Web Signature (JWS). [RFC 7515](https://datatracker.ietf.org/doc/html/rfc7515).

#### \_\_init\_\_

```python
def __init__(alg: str, kid: str) -> None
```

Constructs a SignatureHeaderJws object with the specified algorithm and key identifier.


