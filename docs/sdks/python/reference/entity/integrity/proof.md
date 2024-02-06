---
sidebar_label: proof
title: entity.integrity.proof
---

## Proof Objects

```python
class Proof()
```

Represents a proof, including leaves, nodes, depth, bitmap, and anchor information.

#### \_\_init\_\_

```python
def __init__(leaves: List[str], nodes: List[str], depth: str, bitmap: str,
             anchor: ProofAnchor) -> None
```

Constructs a Proof object with the specified parameters.


