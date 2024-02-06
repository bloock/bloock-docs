---
sidebar_label: credential_proof
title: entity.identity_v2.credential_proof
---

## CredentialProof Objects

```python
class CredentialProof()
```

Represents the proof associated with a credential, including signature and sparse merkle tree proof.

#### \_\_init\_\_

```python
def __init__(signature_proof: str, sparse_mt_proof: str | None) -> None
```

Constructs an CredentialProof object with the specified parameters.


