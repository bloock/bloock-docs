***

# Holder

Represents a Holder identity.



* Full name: `\Bloock\Entity\Identity\Holder`



## Properties


### did



```php
private \Bloock\Entity\Identity\Did $did
```






***

### key



```php
private \Bloock\Entity\Key\Key $key
```






***

## Methods


### __construct

Returns a new instance of Holder identity for the given parameters.

```php
public __construct(string $did, \Bloock\Entity\Identity\DidType $didType, \Bloock\Entity\Key\Key $key): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$did` | **string** |  |
| `$didType` | **\Bloock\Entity\Identity\DidType** |  |
| `$key` | **\Bloock\Entity\Key\Key** |  |





***

### getDid

Gets the did object of the holder.

```php
public getDid(): \Bloock\Entity\Identity\Did
```












***

### getKey

Gets the key object of the holder.

```php
public getKey(): \Bloock\Entity\Key\Key
```












***


***
> Automatically generated on 2024-02-19