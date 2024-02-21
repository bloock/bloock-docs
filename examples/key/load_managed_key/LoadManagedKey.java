import com.bloock.sdk.client.KeyClient;
import com.bloock.sdk.entity.key.ManagedKey;

public class LoadManagedKey {
    public static void main(String[] args) throws Exception {
        KeyClient keyClient = new KeyClient();

        // Load a managed key
        ManagedKey key = keyClient.loadManagedKey("key id");
    }
}