---
sidebar_label: key
title: client.key
---

## KeyClient Objects

```python
class KeyClient()
```

Provides functionality to interact with the [Bloock Keys service](https://dashboard.bloock.com/login)

#### \_\_init\_\_

```python
def __init__(config_data=None) -> None
```

Creates a new KeyClient with the given configuration.


#### new\_local\_key

```python
def new_local_key(key_type: KeyType) -> LocalKey
```

Generates a new local key of the specified type.


#### load\_local\_key

```python
def load_local_key(key_type: KeyType, key: str) -> LocalKey
```

Loads a local key of the specified type from a public key string.


#### new\_managed\_key

```python
def new_managed_key(params: ManagedKeyParams) -> ManagedKey
```

Generates a new managed key with the specified parameters.


#### load\_managed\_key

```python
def load_managed_key(id: str) -> ManagedKey
```

Loads a managed key by its ID (ex: 51d22546-68f1-4340-b94b-2a80e60b8933).


#### new\_local\_certificate

```python
def new_local_certificate(params: LocalCertificateParams) -> LocalCertificate
```

Generates a new local certificate with the specified parameters.


#### load\_local\_certificate

```python
def load_local_certificate(pkcs12: bytes, password: str) -> LocalCertificate
```

Loads a local certificate from a PKCS12 file.


#### new\_managed\_certificate

```python
def new_managed_certificate(
        params: ManagedCertificateParams) -> ManagedCertificate
```

Generates a new managed certificate with the specified parameters.


#### load\_managed\_certificate

```python
def load_managed_certificate(id: str) -> ManagedCertificate
```

Loads a managed certificate by its ID (ex: ceef5b02-af17-43d8-ae7b-31d9bdf8027f).


#### import\_managed\_certificate

```python
def import_managed_certificate(
        _type: CertificateType, certificate: bytes,
        params: ImportCertificateParams) -> ManagedCertificate
```

Imports a managed certificate with the specified parameters, supported types: .pem, .pfx.


#### setup\_totp\_access\_control

```python
def setup_totp_access_control(key: Managed) -> TotpAccessControlReceipt
```

Sets up TOTP-based access control for the given managed key or managed certificate.


#### recover\_totp\_access\_control

```python
def recover_totp_access_control(key: Managed,
                                code: str) -> TotpAccessControlReceipt
```

Recovers TOTP-based access control for the given managed key or managed certificate using a recovery code.


#### setup\_secret\_access\_control

```python
def setup_secret_access_control(key: Managed, secret: str, email: str)
```

Sets up secret-based access control for the given managed key or managed certificate.


