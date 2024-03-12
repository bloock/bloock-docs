import com.bloock.sdk.client.KeyClient;
import com.bloock.sdk.entity.key.KeyType;
import com.bloock.sdk.entity.key.LocalKey;

public class LoadLocalKey {
    public static void main(String[] args) throws Exception {
        KeyClient keyClient = new KeyClient();

        // Load a EcP256k key
        LocalKey localKey = keyClient.loadLocalKey(KeyType.EcP256k, "private key");

        // Load a Rsa2048 key
        localKey = keyClient.loadLocalKey(KeyType.Rsa2048, "private key");

        // Load a Rsa3072 key
        localKey = keyClient.loadLocalKey(KeyType.Rsa3072, "private key");

        // Load a Rsa4096 key
        localKey = keyClient.loadLocalKey(KeyType.Rsa4096, "private key");

        // Load a Aes128 key
        localKey = keyClient.loadLocalKey(KeyType.Aes128, "password");

        // Load a Aes256 key
        localKey = keyClient.loadLocalKey(KeyType.Aes256, "password");

        // Load a BJJ key
        localKey = keyClient.loadLocalKey(KeyType.Bjj, "private key");
    }
}