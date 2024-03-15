import com.bloock.sdk.client.AuthenticityClient;
import com.bloock.sdk.client.KeyClient;
import com.bloock.sdk.client.RecordClient;
import com.bloock.sdk.entity.authenticity.Signer;
import com.bloock.sdk.entity.key.AccessControl;
import com.bloock.sdk.entity.key.AccessControlSecret;
import com.bloock.sdk.entity.key.KeyProtectionLevel;
import com.bloock.sdk.entity.key.KeyType;
import com.bloock.sdk.entity.key.Managed;
import com.bloock.sdk.entity.key.ManagedKey;
import com.bloock.sdk.entity.key.ManagedKeyParams;
import com.bloock.sdk.entity.record.Record;

public class NewManagedKeySecretBased {
  public static void main(String[] args) throws Exception {
      // initialize the Key Client
      KeyClient keyClient = new KeyClient();
      // initialize the Authenticity Client
      AuthenticityClient authenticityClient = new AuthenticityClient();
      // initialize the Record Client
      RecordClient recordClient = new RecordClient();
      // initialize the protection key level
      KeyProtectionLevel keyProtectionLevel = KeyProtectionLevel.SOFTWARE;

      // Generate a Rsa2048 key
      KeyType keyType = KeyType.Rsa2048;
      ManagedKey key = keyClient.newManagedKey(new ManagedKeyParams(keyProtectionLevel, keyType));

      String secret = "your secret";
      String email = "recovery@bloock.com";

      // Create a Secret-Based access control for the created key
      keyClient.setupSecretAccessControl(new Managed(key), secret, email);

      Record record = recordClient.fromString("Hello world").build();

      // How to sign using the Secret-Based access control
      AccessControlSecret accessControl = new AccessControlSecret(secret);
      authenticityClient.sign(record, new Signer(key, null, new AccessControl(accessControl)));
  }
}
