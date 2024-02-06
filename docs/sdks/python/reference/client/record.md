---
sidebar_label: record
title: client.record
---

## RecordClient Objects

```python
class RecordClient()
```

Provides functionality for creating records using various data sources and to interact with the [Bloock Record service](https://dashboard.bloock.com/login).

#### \_\_init\_\_

```python
def __init__(config_data=None) -> None
```

Creates a new RecordClient with the provided configuration.


#### from\_record

```python
def from_record(record: Record) -> RecordBuilder
```

Creates a RecordBuilder from an existing record.


#### from\_loader

```python
def from_loader(loader: Loader) -> RecordBuilder
```

Creates a RecordBuilder from a data loader.


#### from\_string

```python
def from_string(string: str) -> RecordBuilder
```

Creates a RecordBuilder from a string payload.


#### from\_hex

```python
def from_hex(hex: str) -> RecordBuilder
```

Creates a RecordBuilder from a hexadecimal string payload.


#### from\_json

```python
def from_json(json: str) -> RecordBuilder
```

Creates a RecordBuilder from a JSON string payload.


#### from\_file

```python
def from_file(file: bytes) -> RecordBuilder
```

Creates a RecordBuilder from a byte slice representing a file.


#### from\_bytes

```python
def from_bytes(b: bytes) -> RecordBuilder
```

Creates a RecordBuilder from a byte slice payload.


## RecordBuilder Objects

```python
class RecordBuilder()
```

Assists in constructing records with various configurations.

#### \_\_init\_\_

```python
def __init__(payload,
             payload_type: RecordTypes.ValueType,
             config_data: ConfigData,
             signer: authenticity_entities.Signer | None = None,
             encrypter: encryption_entities.Encrypter | None = None,
             decrypter: encryption_entities.Decrypter | None = None) -> None
```

Creates a new RecordBuilder with default configuration.


#### with\_signer

```python
def with_signer(signer: Signer) -> RecordBuilder
```

Sets the signer for the RecordBuilder.


#### with\_encrypter

```python
def with_encrypter(encrypter: Encrypter) -> RecordBuilder
```

Sets the encrypter for the RecordBuilder.


#### with\_decrypter

```python
def with_decrypter(decrypter: Encrypter) -> RecordBuilder
```

Sets the decrypter for the RecordBuilder.


#### build

```python
def build() -> Record
```

Constructs a record based on the RecordBuilder&#x27;s configuration.


#### get\_details

```python
def get_details() -> RecordDetails
```

Gets details about other Bloock services (Integrity, Authenticity, Encryption, Availability) configured in the RecordBuilder.


