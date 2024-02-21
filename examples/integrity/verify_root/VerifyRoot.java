import com.bloock.sdk.client.IntegrityClient;
import com.bloock.sdk.entity.integrity.Network;

public class VerifyRoot {
    public static void main(String[] args) throws Exception {
        IntegrityClient integrityClient = new IntegrityClient();

        String root = "root";
        long timestamp = integrityClient.validateRoot(root, Network.ETHEREUM_MAINNET);
    }
}