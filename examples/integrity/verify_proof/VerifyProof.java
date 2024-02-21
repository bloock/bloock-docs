import com.bloock.sdk.client.IntegrityClient;
import com.bloock.sdk.entity.integrity.Proof;

public class VerifyProof {
    public static void main(String[] args) throws Exception {
        IntegrityClient integrityClient = new IntegrityClient();

        // Proof obtained previously
        Proof proof = null;

        String root = integrityClient.verifyProof(proof);
    }
}