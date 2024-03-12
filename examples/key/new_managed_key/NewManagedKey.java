import com.bloock.sdk.client.KeyClient;
import com.bloock.sdk.entity.key.KeyProtectionLevel;
import com.bloock.sdk.entity.key.KeyType;
import com.bloock.sdk.entity.key.ManagedKey;
import com.bloock.sdk.entity.key.ManagedKeyParams;

public class NewManagedKey {
        public static void main(String[] args) throws Exception {
                KeyClient keyClient = new KeyClient();
                KeyProtectionLevel keyProtectionLevel = KeyProtectionLevel.SOFTWARE;

                // Generate a EcP256k key
                KeyType keyType = KeyType.EcP256k;
                ManagedKey managedKey = keyClient.newManagedKey(
                                new ManagedKeyParams(keyProtectionLevel, keyType));

                // Generate a Rsa2048 key
                keyType = KeyType.Rsa2048;
                managedKey = keyClient.newManagedKey(
                                new ManagedKeyParams(keyProtectionLevel, keyType));

                // Generate a Rsa3072 key
                keyType = KeyType.Rsa3072;
                managedKey = keyClient.newManagedKey(
                                new ManagedKeyParams(keyProtectionLevel, keyType));

                // Generate a Rsa4096 key
                keyType = KeyType.Rsa4096;
                managedKey = keyClient.newManagedKey(
                                new ManagedKeyParams(keyProtectionLevel, keyType));

                // Generate a Aes128 key
                keyType = KeyType.Aes128;
                managedKey = keyClient.newManagedKey(
                                new ManagedKeyParams(keyProtectionLevel, keyType));

                // Generate a Aes256 key
                keyType = KeyType.Aes256;
                managedKey = keyClient.newManagedKey(
                                new ManagedKeyParams(keyProtectionLevel, keyType));

                // Generate a BJJ key
                keyType = KeyType.Bjj;
                managedKey = keyClient.newManagedKey(
                                new ManagedKeyParams(keyProtectionLevel, keyType));
        }
}