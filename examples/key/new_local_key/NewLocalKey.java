import com.bloock.sdk.client.KeyClient;
import com.bloock.sdk.entity.key.KeyType;
import com.bloock.sdk.entity.key.LocalKey;

public class NewLocalKey {
    public static void main(String[] args) throws Exception {
        KeyClient keyClient = new KeyClient();

        // Generate a EcP256k key
        LocalKey localKey = keyClient.newLocalKey(KeyType.EcP256k);

        // Generate a Rsa2048 key
        localKey = keyClient.newLocalKey(KeyType.Rsa2048);

        // Generate a Rsa3072 key
        localKey = keyClient.newLocalKey(KeyType.Rsa3072);

        // Generate a Rsa4096 key
        localKey = keyClient.newLocalKey(KeyType.Rsa4096);

        // Generate a Aes128 key
        localKey = keyClient.newLocalKey(KeyType.Aes128);

        // Generate a Aes256 key
        localKey = keyClient.newLocalKey(KeyType.Aes256);

        // Generate a BJJ key
        localKey = keyClient.newLocalKey(KeyType.Bjj);
    }
}