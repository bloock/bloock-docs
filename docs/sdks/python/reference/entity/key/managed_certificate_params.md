---
sidebar_label: managed_certificate_params
title: entity.key.managed_certificate_params
---

## ManagedCertificateParams Objects

```python
class ManagedCertificateParams()
```

Represents parameters for creating a managed certificate.

#### \_\_init\_\_

```python
def __init__(key_type: KeyType,
             subject: SubjectCertificateParams,
             expiration: int = 0) -> None
```

Constructs a ManagedCertificateParams object with the specified parameters.


