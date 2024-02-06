---
sidebar_label: webhook
title: client.webhook
---

## WebhookClient Objects

```python
class WebhookClient()
```

Provides functionality for interacting with [Bloock webhooks](https://dashboard.bloock.com/login).

#### \_\_init\_\_

```python
def __init__(config_data=None) -> None
```

Creates a new WebhookClient with the provided configuration.


#### verify\_webhook\_signature

```python
def verify_webhook_signature(payload: bytes, header: str, secret_key: str,
                             enforce_tolerance: bool) -> int
```

Verifies the signature of a webhook payload using the provided parameters.


