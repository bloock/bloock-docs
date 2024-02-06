---
sidebar_label: integer_enum_attribute_descriptor
title: entity.identity_v2.integer_enum_attribute_descriptor
---

## IntegerEnumAttributeDescriptor Objects

```python
class IntegerEnumAttributeDescriptor(AttributeDescriptor)
```

Represents a descriptor for an attribute with an integer enum value.

#### \_\_init\_\_

```python
def __init__(display_name: str, technical_name: str, description: str,
             required: bool, enumeration: List[int]) -> None
```

Constructs an IntegerEnumAttributeDescriptor object with the specified parameters.


