import com.bloock.sdk.Bloock;
import com.bloock.sdk.client.IntegrityClient;
import com.bloock.sdk.client.RecordClient;
import com.bloock.sdk.entity.integrity.RecordReceipt;
import com.bloock.sdk.entity.record.Record;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Send {
  public static void main(String[] args) throws Exception {
    try {
      // we set the API key and create a client
      Bloock.apiKey = System.getenv("API_KEY");
      RecordClient recordClient = new RecordClient();
      IntegrityClient integrityClient = new IntegrityClient();

      // we create an ArrayList of strings which will contain
      // the hashes of the records we want to send
      Record record = recordClient.fromString("Hello world").build();
      ArrayList<Record> records = new ArrayList<>(Collections.singletonList(record));

      // finally we can send the records
      List<RecordReceipt> receipts = integrityClient.sendRecords(records);

      // we get a receipt with informationa about the transaction
      System.out.println(receipts);
    } catch (Exception e) {
      System.out.println(e);
    }
  }
}