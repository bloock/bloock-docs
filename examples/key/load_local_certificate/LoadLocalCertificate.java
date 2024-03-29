import com.bloock.sdk.client.KeyClient;
import com.bloock.sdk.entity.key.LocalCertificate;
import java.io.File;
import java.io.FileInputStream;

public class LoadLocalCertificate {
    public static void main(String[] args) throws Exception {
        KeyClient keyClient = new KeyClient();

        // Retrieve P12 certificate from filesystem
        File file = new File("./certificate.p12");
        int fileSize = (int) file.length();
        byte[] bytes = new byte[fileSize];

        try (FileInputStream inputStream = new FileInputStream(file)) {
            inputStream.read(bytes);
        }

        // Load a local certificate
        LocalCertificate key = keyClient.loadLocalCertificate(bytes, "p12 password");
    }
}