---
sidebar_label: credential_core_builder
title: entity.identity.credential_core_builder
---

## CredentialCoreBuilder Objects

```python
class CredentialCoreBuilder()
```

Helps construct credentials by specifying various attributes.

#### \_\_init\_\_

```python
def __init__(issuer: Issuer, schema_id: str, holder_did: str, expiration: int,
             version: int, config_data: ConfigData) -> None
```

Creates a new CredentialCoreBuilder instance with the specified parameters.


#### with\_string\_attribute

```python
def with_string_attribute(key: str, value: str) -> CredentialCoreBuilder
```

Adds a string attribute to the CredentialCoreBuilder.


#### with\_integer\_attribute

```python
def with_integer_attribute(key: str, value: int) -> CredentialCoreBuilder
```

Adds an integer attribute to the CredentialCoreBuilder.


#### with\_decimal\_attribute

```python
def with_decimal_attribute(key: str, value: float) -> CredentialCoreBuilder
```

Adds a decimal attribute to the CredentialCoreBuilder.


#### with\_boolean\_attribute

```python
def with_boolean_attribute(key: str, value: bool) -> CredentialCoreBuilder
```

Adds a boolean attribute to the CredentialCoreBuilder.


#### with\_date\_attribute

```python
def with_date_attribute(key: str,
                        value: datetime.date) -> CredentialCoreBuilder
```

Adds a date attribute to the CredentialCoreBuilder.


#### with\_datetime\_attribute

```python
def with_datetime_attribute(key: str,
                            value: datetime.datetime) -> CredentialCoreBuilder
```

Adds a datetime attribute to the CredentialCoreBuilder.


#### build

```python
def build() -> CredentialReceipt
```

Creates and returns a Credential using the specified attributes.


