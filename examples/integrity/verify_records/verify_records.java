import com.bloock.sdk.Bloock;
import com.bloock.sdk.client.IntegrityClient;
import com.bloock.sdk.client.RecordClient;
import com.bloock.sdk.entity.Record;
import com.bloock.sdk.entity.RecordReceipt;
import com.bloock.sdk.entity.Network;

class Test {
  public static void main(String[] args) throws Exception {
    try {
      // we set the API key and create a client
      Bloock.apiKey = System.getenv("API_KEY");
      RecordClient recordClient = new RecordClient();
      IntegrityClient integrityClient = new IntegrityClient();

      ArrayList<Record> records = new ArrayList<>();
      Record record = recordClient.fromString("Hello world").build();
      records.add(record);
      List<RecordReceipt> receipts = integrityClient.sendRecords(records);
      Anchor anchor = integrityClient.waitAnchor(receipts.get(0).getAnchor(), 120000);

      // we can optionally specify a network (if not set, default is Ethereum Mainnet)
      long timestamp = integrityClient.verifyRecords(records, Network.ETHEREUM_MAINNET);
      System.out.println(timestamp);
    } catch (Exception e) {
      System.out.println(e);
    }
  }
}
