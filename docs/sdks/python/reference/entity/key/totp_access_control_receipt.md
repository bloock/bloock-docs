---
sidebar_label: totp_access_control_receipt
title: entity.key.totp_access_control_receipt
---

## TotpAccessControlReceipt Objects

```python
class TotpAccessControlReceipt()
```

Represents a receipt for a Time-based One-Time Password (TOTP) access control.

#### \_\_init\_\_

```python
def __init__(secret: str, secret_qr: str, recovery_codes: List[str]) -> None
```

Creates a new TotpAccessControlReceipt with the provided secret, secret QR code, and recovery codes.


