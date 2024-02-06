---
sidebar_label: signature_alg
title: entity.authenticity.signature_alg
---

## SignatureAlg Objects

```python
class SignatureAlg(Enum)
```

Represents different signature algorithms.

#### ECDSA

Represents the ECDSA signature algorithm with the &quot;ES256K&quot; name.

#### ENS

Represents the ENS (Ethereum Name Service) signature algorithm.

#### BJJ

Represents the BJJ signature algorithm with the &quot;BJJ&quot; name.

#### UNRECOGNIZED

Represents an unrecognized signature algorithm.

#### from\_str

```python
@staticmethod
def from_str(alg: str) -> SignatureAlg
```

Converts a string representation of an algorithm to the corresponding SignatureAlg enum.


