import com.bloock.sdk.client.AuthenticityClient;
import com.bloock.sdk.client.KeyClient;
import com.bloock.sdk.client.RecordClient;
import com.bloock.sdk.entity.authenticity.Signer;
import com.bloock.sdk.entity.key.AccessControl;
import com.bloock.sdk.entity.key.AccessControlTotp;
import com.bloock.sdk.entity.key.KeyProtectionLevel;
import com.bloock.sdk.entity.key.KeyType;
import com.bloock.sdk.entity.key.Managed;
import com.bloock.sdk.entity.key.ManagedKey;
import com.bloock.sdk.entity.key.ManagedKeyParams;
import com.bloock.sdk.entity.key.TotpAccessControlReceipt;
import com.bloock.sdk.entity.record.Record;

public class NewManagedKeyTotp {
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

        // Create a TOTP access control for the created key
        TotpAccessControlReceipt totp = keyClient.setupTotpAccessControl(new Managed(key));

        // base64url encoded string with the TOTP setup QRCode. You can scan this QR with your TOTP application client.
        System.out.println(totp.getSecretQr());
        // secret code that you can use instead of the QRCode to setup your TOTP application client.
        System.out.println(totp.getSecret());
        // recovery codes you need to save, so you could use in case you loose your access control.
        System.out.println(totp.getRecoveryCodes());

        Record record = recordClient.fromString("Hello world").build();

        // How to sign using the TOTP access control
        AccessControlTotp accessControl = new AccessControlTotp("code digit");
        authenticityClient.sign(record, new Signer(key, null, new AccessControl(accessControl)));

        // Recover in case you lose your access control
        TotpAccessControlReceipt totpRecovered = keyClient.recoverTotpAccessControl(new Managed(key), totp.getRecoveryCodes().get(0));
  }
}