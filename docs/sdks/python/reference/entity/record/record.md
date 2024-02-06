---
sidebar_label: record
title: entity.record.record
---

## Record Objects

```python
class Record()
```

Represents a record with payload, hash, and configuration data.

#### \_\_init\_\_

```python
def __init__(payload: bytes, hash: str, config_data: ConfigData) -> None
```

Constructs a Record object with the specified parameters.


#### get\_hash

```python
def get_hash() -> str
```

Retrieves the hash of the record.


#### get\_payload

```python
def get_payload() -> bytes
```

Retrieves the payload of the record.


#### retrieve

```python
def retrieve() -> bytes
```

Returns the payload of the record.


#### set\_proof

```python
def set_proof(proof: Proof)
```

Sets the proof for a record.


