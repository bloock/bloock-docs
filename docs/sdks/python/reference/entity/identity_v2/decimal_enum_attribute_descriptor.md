---
sidebar_label: decimal_enum_attribute_descriptor
title: entity.identity_v2.decimal_enum_attribute_descriptor
---

## DecimalEnumAttributeDescriptor Objects

```python
class DecimalEnumAttributeDescriptor(AttributeDescriptor)
```

Represents a descriptor for an attribute with a decimal enum value.

#### \_\_init\_\_

```python
def __init__(display_name: str, technical_name: str, description: str,
             required: bool, enumeration: List[float]) -> None
```

Constructs an DecimalEnumAttributeDescriptor object with the specified parameters.


