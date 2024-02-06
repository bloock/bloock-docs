---
sidebar_label: signature
title: entity.authenticity.signature
---

## Signature Objects

```python
class Signature()
```

Represents a cryptographic signature along with additional metadata.

#### \_\_init\_\_

```python
def __init__(signature: str, alg: str, kid: str, message_hash: str,
             subject: str) -> None
```

Constructs a Signature object with the specified parameters.


