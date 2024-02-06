---
sidebar_label: local_certificate_params
title: entity.key.local_certificate_params
---

## LocalCertificateParams Objects

```python
class LocalCertificateParams()
```

Represents the parameters for generating a local certificate.

#### \_\_init\_\_

```python
def __init__(key_type: KeyType,
             subject: SubjectCertificateParams,
             password: str,
             expiration: int = 0) -> None
```

Constructs an LocalCertificateParams object with the specified parameters.


