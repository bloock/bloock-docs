import com.bloock.sdk.client.KeyClient;
import com.bloock.sdk.entity.key.ManagedCertificate;

public class LoadManagedCertificate {
    public static void main(String[] args) throws Exception {
        KeyClient keyClient = new KeyClient();

        // Load a managed certificate
        ManagedCertificate key = keyClient.loadManagedCertificate("certificate id");
    }
}