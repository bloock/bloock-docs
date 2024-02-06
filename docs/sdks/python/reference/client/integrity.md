---
sidebar_label: integrity
title: client.integrity
---

## IntegrityClient Objects

```python
class IntegrityClient()
```

Provides functionality to interact with the [Bloock Integrity service](https://dashboard.bloock.com/login).

#### \_\_init\_\_

```python
def __init__(config_data=None) -> None
```

Creates a new IntegrityClient with the given configuration.


#### send\_records

```python
def send_records(records: List[Record]) -> List[RecordReceipt]
```

Sends records to the Bloock Integrity service for certification.


#### get\_anchor

```python
def get_anchor(anchor_id: int) -> Anchor
```

Gets an anchor by its ID from the Bloock Integrity service.


#### wait\_anchor

```python
def wait_anchor(anchor_id: int, timeout=120000) -> Anchor
```

Waits for the completion of an anchor on the Bloock Integrity service.


#### get\_proof

```python
def get_proof(records: List[Record]) -> Proof
```

Waits for the completion of an anchor on the Bloock Integrity service.


#### verify\_proof

```python
def verify_proof(proof: Proof) -> str
```

Gets a proof for a set of records from the Bloock Integrity service.


#### verify\_records

```python
def verify_records(records: List[Record],
                   network: Optional[Network] = None) -> int
```

Verifies the integrity of a set of records.


#### validate\_root

```python
def validate_root(root: str, network: Network) -> int
```

Validates the integrity of a merkle root proof on blockchain.


