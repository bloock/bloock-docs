---
sidebar_label: access_control_type
title: entity.key.access_control_type
---

## AccessControlType Objects

```python
class AccessControlType(Enum)
```

Indicates that the key is not protected by access control.

#### NONE

Indicates that the key is protected by a TOTP-based access control.

#### TOTP

Indicates that the key is protected by a Secret-based access control.

#### SECRET

Indicates that the key is protected by a Hardware Security Module (HSM).

