import java.util.List;

import com.bloock.sdk.client.AuthenticityClient;
import com.bloock.sdk.client.KeyClient;
import com.bloock.sdk.client.RecordClient;
import com.bloock.sdk.entity.authenticity.Signer;
import com.bloock.sdk.entity.key.KeyType;
import com.bloock.sdk.entity.key.LocalKey;
import com.bloock.sdk.entity.record.Record;

public class Verify {
    public static void main(String[] args) throws Exception {
        RecordClient recordClient = new RecordClient();
        AuthenticityClient authenticityClient = new AuthenticityClient();
        KeyClient keyClient = new KeyClient();

        LocalKey localKey = keyClient.newLocalKey(KeyType.EcP256k);

        Record signedRecord = recordClient
                .fromString("Hello world")
                .withSigner(new Signer(localKey))
                .build();

        boolean valid = authenticityClient.verify(signedRecord);
        if (valid) {
            System.out.println("Signature was verified successfully");
        }
    }
}
