---
sidebar_label: record_details
title: entity.record.record_details
---

## IntegrityDetails Objects

```python
class IntegrityDetails()
```

Represents details related to the integrity of a record, including hash and proof.

#### \_\_init\_\_

```python
def __init__(hash: str, proof: Proof | None) -> None
```

Constructs a IntegrityDetails object with the specified parameters.


## AuthenticityDetails Objects

```python
class AuthenticityDetails()
```

Represents details related to the authenticity of a record, including signatures.

#### \_\_init\_\_

```python
def __init__(signatures: List[Signature]) -> None
```

Constructs a AuthenticityDetails object with the specified parameters.


## EncryptionDetails Objects

```python
class EncryptionDetails()
```

Represents details related to the encryption of a record, including algorithm, key, and subject.

#### \_\_init\_\_

```python
def __init__(alg: str | None, key: str | None, subject: str | None) -> None
```

Constructs a EncryptionDetails object with the specified parameters.


## AvailabilityDetails Objects

```python
class AvailabilityDetails()
```

Represents details related to the availability of a record, including content type and size.

#### \_\_init\_\_

```python
def __init__(type: str | None, size: int) -> None
```

Constructs a AvailabilityDetails object with the specified parameters.


