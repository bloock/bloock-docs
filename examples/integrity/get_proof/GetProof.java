import com.bloock.sdk.client.IntegrityClient;
import com.bloock.sdk.entity.integrity.Proof;
import com.bloock.sdk.entity.record.Record;
import java.util.List;

public class GetProof {
    public static void main(String[] args) throws Exception {
        List<Record> records = List.of(/* records */);
        IntegrityClient integrityClient = new IntegrityClient();
        Proof proof = integrityClient.getProof(records);
    }
}