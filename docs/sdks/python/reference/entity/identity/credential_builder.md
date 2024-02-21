---
sidebar_label: credential_builder
title: entity.identity.credential_builder
---

## CredentialBuilder Objects

```python
class CredentialBuilder()
```

Helps construct credentials by specifying various attributes.

#### \_\_init\_\_

```python
def __init__(issuer: Issuer, schema_id: str, holder_did: str, expiration: int,
             version: int, config_data: ConfigData) -> None
```

Creates a new CredentialBuilder instance with the specified parameters.


#### with\_string\_attribute

```python
def with_string_attribute(key: str, value: str) -> CredentialBuilder
```

Adds a string attribute to the CredentialBuilder.


#### with\_integer\_attribute

```python
def with_integer_attribute(key: str, value: int) -> CredentialBuilder
```

Adds an integer attribute to the CredentialBuilder.


#### with\_decimal\_attribute

```python
def with_decimal_attribute(key: str, value: float) -> CredentialBuilder
```

Adds a decimal attribute to the CredentialBuilder.


#### with\_boolean\_attribute

```python
def with_boolean_attribute(key: str, value: bool) -> CredentialBuilder
```

Adds a boolean attribute to the CredentialBuilder.


#### with\_date\_attribute

```python
def with_date_attribute(key: str, value: datetime.date) -> CredentialBuilder
```

Adds a date attribute to the CredentialBuilder.


#### with\_datetime\_attribute

```python
def with_datetime_attribute(key: str,
                            value: datetime.datetime) -> CredentialBuilder
```

Adds a datetime attribute to the CredentialBuilder.


#### build

```python
def build() -> CredentialReceipt
```

Creates and returns a Credential using the specified attributes.


