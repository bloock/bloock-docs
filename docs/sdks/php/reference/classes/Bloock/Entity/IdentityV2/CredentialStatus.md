***

# CredentialStatus

Represents the status information for a credential, including its ID, revocation nonce, and type.



* Full name: `\Bloock\Entity\IdentityV2\CredentialStatus`



## Properties


### id



```php
private string $id
```






***

### revocationNonce



```php
private int $revocationNonce
```






***

### type



```php
private string $type
```






***

## Methods


### __construct

Constructs an CredentialStatus object with the specified parameters.

```php
public __construct(string $id, int $revocationNonce, string $type): mixed
```








**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$id` | **string** |  |
| `$revocationNonce` | **int** |  |
| `$type` | **string** |  |





***

### fromProto



```php
public static fromProto(\Bloock\CredentialStatusV2 $res): \Bloock\Entity\IdentityV2\CredentialStatus
```



* This method is **static**.




**Parameters:**

| Parameter | Type | Description |
|-----------|------|-------------|
| `$res` | **\Bloock\CredentialStatusV2** |  |





***

### getId

Gets the ID associated with the credential.

```php
public getId(): string
```












***

### getRevocationNonce

Gets the revocation nonce associated with the credential.

```php
public getRevocationNonce(): int
```












***

### getType

Gets the type of the credential.

```php
public getType(): string
```












***

### toProto



```php
public toProto(): \Bloock\CredentialStatusV2
```












***


***
> Automatically generated on 2024-02-07