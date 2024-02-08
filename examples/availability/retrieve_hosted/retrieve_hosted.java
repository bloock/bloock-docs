import com.bloock.sdk.Bloock;
import com.bloock.sdk.client.AvailabilityClient;
import com.bloock.sdk.client.RecordClient;
import com.bloock.sdk.entity.HostedLoader;
import com.bloock.sdk.entity.Record;

class Test {
  public static void main(String[] args) throws Exception {
    RecordClient recordClient = new RecordClient();
    AvailabilityClient availabilityClient = new AvailabilityClient();

    String hash = "publish uuid result";
    Record record = recordClient.fromLoader(new HostedLoader(id)).build();
  }
}
