---
sidebar_label: managed_key
title: entity.key.managed_key
---

## ManagedKey Objects

```python
class ManagedKey()
```

Represents a managed key.

#### \_\_init\_\_

```python
def __init__(id: str, name: str, protection: KeyProtectionLevel,
             key_type: KeyType, expiration: int, key: str,
             access_control_type: AccessControlType) -> None
```

Constructs a ManagedKey object with the specified parameters.


