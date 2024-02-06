---
sidebar_label: availability
title: client.availability
---

## AvailabilityClient Objects

```python
class AvailabilityClient()
```

Represents a client for interacting with the [Bloock Availability service](https://dashboard.bloock.com/login).

#### \_\_init\_\_

```python
def __init__(config_data=None) -> None
```

Creates a new instance of the AvailabilityClient with the provided configuration.


#### publish

```python
def publish(record: Record, publisher: Publisher) -> str
```

Publishes a Bloock record to the Availability service using the specified publisher.


#### retrieve

```python
def retrieve(loader: Loader) -> Record
```

Gets a Bloock record from the Availability service using the specified loader.


