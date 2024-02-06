---
sidebar_label: schema_builder
title: entity.identity_v2.schema_builder
---

## SchemaBuilder Objects

```python
class SchemaBuilder()
```

Is a builder pattern for constructing schema instances.

#### \_\_init\_\_

```python
def __init__(display_name: str, schema_type: str, version: str,
             description: str, config_data: ConfigData) -> None
```

Creates a new instance of SchemaBuilder with initial values.


#### add\_string\_attribute

```python
def add_string_attribute(name: str, technical_name: str, description: str,
                         required: bool) -> SchemaBuilder
```

Adds a string attribute descriptor to the schema builder.


#### add\_integer\_attribute

```python
def add_integer_attribute(name: str, technical_name: str, description: str,
                          required: bool) -> SchemaBuilder
```

Adds an integer attribute descriptor to the schema builder.


#### add\_decimal\_attribute

```python
def add_decimal_attribute(name: str, technical_name: str, description: str,
                          required: bool) -> SchemaBuilder
```

Adds a decimal attribute descriptor to the schema builder.


#### add\_boolean\_attribute

```python
def add_boolean_attribute(name: str, technical_name: str, description: str,
                          required: bool) -> SchemaBuilder
```

Adds a boolean attribute descriptor to the schema builder.


#### add\_date\_attribute

```python
def add_date_attribute(name: str, technical_name: str, description: str,
                       required: bool) -> SchemaBuilder
```

Adds a date attribute descriptor to the schema builder.


#### add\_string\_enum\_attribute

```python
def add_string_enum_attribute(name: str, technical_name: str, description: str,
                              required: bool,
                              enumeration: List[str]) -> SchemaBuilder
```

Adds a string enum attribute descriptor to the schema builder.


#### add\_integer\_enum\_attribute

```python
def add_integer_enum_attribute(name: str, technical_name: str,
                               description: str, required: bool,
                               enumeration: List[int]) -> SchemaBuilder
```

Adds an integer enum attribute descriptor to the schema builder.


#### add\_decimal\_enum\_attribute

```python
def add_decimal_enum_attribute(name: str, technical_name: str,
                               description: str, required: bool,
                               enumeration: List[float]) -> SchemaBuilder
```

Adds a decimal enum attribute descriptor to the schema builder.


#### add\_datetime\_attribute

```python
def add_datetime_attribute(name: str, technical_name: str, description: str,
                           required: bool) -> SchemaBuilder
```

Adds a datetime attribute descriptor to the schema builder.


#### build

```python
def build() -> Schema
```

Creates a schema using the configured attributes.


