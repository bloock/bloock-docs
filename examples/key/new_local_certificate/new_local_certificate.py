from bloock.client.key import KeyClient
from bloock.entity.key.key_type import KeyType
from bloock.entity.key.local_certificate_params import LocalCertificateParams
from bloock.entity.key.subject_certificate_params import SubjectCertificateParams

if __name__ == "__main__":
    key_client = KeyClient()

    key_type = KeyType.Rsa2048
    subject_params = SubjectCertificateParams(
        "Common name",
        "Organization",
        "Organization Unit",
        "Location",
        "State",
        "US"
    )
    params = LocalCertificateParams(key_type, subject_params, "password", 2)
    local_certificate = key_client.new_local_certificate(params)

