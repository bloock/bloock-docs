import com.bloock.sdk.client.RecordClient;
import com.bloock.sdk.entity.availability.IpfsLoader;
import com.bloock.sdk.entity.record.Record;

public class RetrieveIpfs {
  public static void main(String[] args) throws Exception {
    RecordClient recordClient = new RecordClient();

    String id = "publish uuid result";
    Record record = recordClient.fromLoader(new IpfsLoader(id)).build();
  }
}