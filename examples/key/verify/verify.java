import java.util.List;

import com.bloock.sdk.client.AuthenticityClient;
import com.bloock.sdk.client.RecordClient;
import com.bloock.sdk.entity.EcdsaSigner;
import com.bloock.sdk.entity.EcdsaKeyPair;
import com.bloock.sdk.entity.Record;
import com.bloock.sdk.entity.Signature;
import com.bloock.sdk.entity.SignerArgs;

public class App {
    public static void main(String[] args) throws Exception {
        RecordClient recordClient = new RecordClient();
        AuthenticityClient authenticityClient = new AuthenticityClient();
        KeyClient keyClient = new KeyClient();

        LocalKey localKey = keyClient.newLocalKey(KeyType.EcP256k);

        Record signedRecord = recordClient
                .fromString("Hello world")
                .withSigner(new EcdsaSigner(new SignerArgs(localKey, "some name")))
                .build();

        boolean valid = authenticityClient.verify(signedRecord);
        if (valid == true) {
                System.out.println("Signature was verified successfully");
        }
    }
}
