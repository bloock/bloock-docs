import com.bloock.sdk.client.EncryptionClient;
import com.bloock.sdk.client.KeyClient;
import com.bloock.sdk.client.RecordClient;
import com.bloock.sdk.entity.encryption.Encrypter;
import com.bloock.sdk.entity.key.KeyType;
import com.bloock.sdk.entity.key.LocalKey;
import com.bloock.sdk.entity.record.Record;

import java.nio.charset.StandardCharsets;

public class DecryptRsa {
        public static void main(String[] args) throws Exception {
                String payload = "This will be encrypted";

                // encryption ...
                Record encryptedRecord = null;

                RecordClient recordClient = new RecordClient();
                KeyClient keyClient = new KeyClient();

                LocalKey localKey = keyClient.newLocalKey(KeyType.Rsa2048);

                // To decrypt a record during the building process
                // we build a record from the encrypted record and add a decrypter
                Record decryptedRecord = recordClient.fromRecord(encryptedRecord)
                                .withDecrypter(new Encrypter(localKey))
                                .build();

                // To decrypt an already encrypted record independently
                EncryptionClient encryptionClient = new EncryptionClient();
                decryptedRecord = encryptionClient.decrypt(encryptedRecord, new Encrypter(localKey));

                System.out.println(
                                "Decrypted payload: " + new String(decryptedRecord.retrieve(), StandardCharsets.UTF_8));
        }
}