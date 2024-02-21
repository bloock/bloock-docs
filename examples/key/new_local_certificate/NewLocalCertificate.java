import com.bloock.sdk.client.KeyClient;
import com.bloock.sdk.entity.key.*;

public class NewLocalCertificate {
    public static void main(String[] args) throws Exception {
        KeyClient keyClient = new KeyClient();

        // Create a local certificate
        LocalCertificate certificate = keyClient.newLocalCertificate(new LocalCertificateParams(
                KeyType.Rsa2048,
                new SubjectCertificateParams(
                        "BLOOCK",
                        "Organization",
                        "Organization Unit",
                        "Location",
                        "State",
                        "Country"),
                "password",
                12));
    }
}