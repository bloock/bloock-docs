---
sidebar_label: string_enum_attribute_descriptor
title: entity.identity.string_enum_attribute_descriptor
---

## StringEnumAttributeDescriptor Objects

```python
class StringEnumAttributeDescriptor(AttributeDescriptor)
```

Represents a descriptor for an attribute with a string enum value.

#### \_\_init\_\_

```python
def __init__(display_name: str, technical_name: str, description: str,
             required: bool, enumeration: List[str]) -> None
```

Constructs an StringEnumAttributeDescriptor object with the specified parameters.


