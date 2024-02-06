---
sidebar_label: encryption
title: client.encryption
---

## EncryptionClient Objects

```python
class EncryptionClient()
```

Represents a client for interacting with the [Bloock Encryption service](https://dashboard.bloock.com/login).

#### \_\_init\_\_

```python
def __init__(config_data=None) -> None
```

Creates a new instance of the EncryptionClient with the provided configuration.


#### generate\_rsa\_keypair

```python
def generate_rsa_keypair() -> KeyPair
```

GenerateRsaKeyPair generates an RSA key pair for encryption.

Will be deleted in future versions.
...deprecated:: 2.8.0
    Use KeyClient.newLocalKey function instead.


#### encrypt

```python
def encrypt(record: Record, encrypter: Encrypter) -> Record
```

Encrypts a Bloock record using the specified encrypter.


#### decrypt

```python
def decrypt(record: Record, decrypter: Encrypter) -> Record
```

Decrypts a Bloock record using the specified decrypter.


#### get\_encryption\_alg

```python
def get_encryption_alg(record: Record) -> EncryptionAlg
```

Gets the encryption algorithm used for a Bloock record.


