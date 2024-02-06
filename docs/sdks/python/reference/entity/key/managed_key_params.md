---
sidebar_label: managed_key_params
title: entity.key.managed_key_params
---

## ManagedKeyParams Objects

```python
class ManagedKeyParams()
```

Represents the parameters for creating a managed key.

#### \_\_init\_\_

```python
def __init__(protection: KeyProtectionLevel,
             key_type: KeyType,
             name: str = "",
             expiration: int = 0) -> None
```

Constructs a ManagedKeyParams object with the specified parameters.


