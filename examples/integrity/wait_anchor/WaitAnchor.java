import com.bloock.sdk.Bloock;
import com.bloock.sdk.client.IntegrityClient;
import com.bloock.sdk.client.RecordClient;
import com.bloock.sdk.entity.integrity.Anchor;
import com.bloock.sdk.entity.integrity.RecordReceipt;
import com.bloock.sdk.entity.record.Record;
import java.util.List;

public class WaitAnchor {
  public static void main(String[] args) throws Exception {
    try {
      // we set the API key and create a client
      Bloock.apiKey = System.getenv("API_KEY");
      RecordClient recordClient = new RecordClient();
      IntegrityClient integrityClient = new IntegrityClient();

      Record record = recordClient.fromString("Hello world").build();
      List<Record> records = List.of(record);
      List<RecordReceipt> receipts = integrityClient.sendRecords(records);

      // Once we sent a record, we can wait for it's anochor
      System.out.println("Waiting for anchor...");
      // we can optionally specify a timeout (if not set, default is 120000)
      Anchor anchor = integrityClient.waitAnchor(receipts.get(0).getAnchor(), 120000);
      System.out.println("Done!");
    } catch (Exception e) {
      System.out.println(e);
    }
  }
}