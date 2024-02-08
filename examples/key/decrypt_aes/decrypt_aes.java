import com.bloock.sdk.client.EncryptionClient;
import com.bloock.sdk.client.RecordClient;
import com.bloock.sdk.entity.AesDecrypter;
import com.bloock.sdk.entity.AesEncrypter;
import com.bloock.sdk.entity.Record;
import java.nio.charset.StandardCharsets;

public class App {
  public static void main(String[] args) throws Exception {
    String payload = "This will be encrypted";

    // encryption ...

    System.out.println("Trying to decrypt with the valid password");
    RecordClient recordClient = new RecordClient();
    KeyClient keyClient = new KeyClient();

    LocalKey localKey = keyClient.newLocalKey(KeyType.Aes256);

    // To decrypt a record during the building process
    // we build a record from the encrypted record and add a decrypter
    Record decryptedRecord = recordClient.fromRecord(encryptedRecord)
        .withDecrypter(new AesDecrypter(localKey))
        .build();

    // To decrypt an already encrypted record independently
    EncryptionClient encryptionClient = new EncryptionClient();
    decryptedRecord = encryptionClient.decrypt(encryptedRecord, new AesDecrypter(localKey));

    System.out.println(
        "Decrypted payload: " + new String(decryptedRecord.retrieve(), StandardCharsets.UTF_8));

  }
}
