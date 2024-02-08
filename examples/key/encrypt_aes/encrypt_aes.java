import com.bloock.sdk.client.EncryptionClient;
import com.bloock.sdk.client.RecordClient;
import com.bloock.sdk.entity.AesEncrypter;
import com.bloock.sdk.entity.Record;
import java.nio.charset.StandardCharsets;

public class App {
  public static void main(String[] args) throws Exception {
    String payload = "This will be encrypted";

    System.out.println("The following payload will be encrypted: " + payload);
    RecordClient recordClient = new RecordClient();
    KeyClient keyClient = new KeyClient();

    LocalKey localKey = keyClient.newLocalKey(KeyType.Aes256);

    // To encrypt a record during the building process
    Record encryptedRecord = recordClient.fromString(payload)
        .withEncrypter(new AesEncrypter(localKey))
        .build();

    // To encrypt a record independently
    EncryptionClient encryptionClient = new EncryptionClient();
    Record record = recordClient.fromString(payload).build();
    encryptedRecord = encryptionClient.encrypt(record, new AesEncrypter(localKey));

    System.out.println("Encryption successful");
    System.out.println("Encrypted payload: " + new String(encryptedRecord.retrieve(), StandardCharsets.UTF_8));
  }
}