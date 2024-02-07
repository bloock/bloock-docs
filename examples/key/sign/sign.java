import com.bloock.sdk.client.AuthenticityClient;
import com.bloock.sdk.client.RecordClient;
import com.bloock.sdk.entity.EcdsaSigner;
import com.bloock.sdk.entity.EcdsaKeyPair;
import com.bloock.sdk.entity.Record;

public class App {
  public static void main(String[] args) throws Exception {
    RecordClient recordClient = new RecordClient();
    AuthenticityClient authenticityClient = new AuthenticityClient();
    KeyClient keyClient = new KeyClient();

    LocalKey localKey = keyClient.newLocalKey(KeyType.EcP256k);

    Record signedRecord = recordClient
        .fromString("Hello world")
        .withSigner(new SignerArgs(localKey))
        .build();

    System.out.println("Record was signed successfully");

    // we can add another signature with a different key
    System.out.println("Adding another signature");
    localKey = keyClient.newLocalKey(KeyType.EcP256k);

    signedRecord = recordClient.fromRecord(signedRecord)
        .withSigner(new EcdsaSigner(new SignerArgs(localKey)))
        .build();

    System.out.println("Record was signed successfully");

    System.out.println("Hash: " + signedRecord.getHash());

    authenticityClient
        .getSignatures(signedRecord)
        .stream()
        .forEach(signature -> {
          System.out.println("Signature " + signature.getSignature());
        });
  }

}
