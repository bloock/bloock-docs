import com.bloock.sdk.client.KeyClient;
import com.bloock.sdk.entity.key.*;

public class NewManagedCertificate {
    public static void main(String[] args) throws Exception {
        KeyClient keyClient = new KeyClient();

        // Load a managed key
        ManagedCertificate key = keyClient.newManagedCertificate(new ManagedCertificateParams(
                KeyType.Rsa2048,
                new SubjectCertificateParams(
                        "BLOOCK",
                        "Organization",
                        "Organization Unit",
                        "Location",
                        "State",
                        "Country"),
                12));
    }
}