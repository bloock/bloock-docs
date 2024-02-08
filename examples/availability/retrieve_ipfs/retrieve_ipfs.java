import com.bloock.sdk.Bloock;
import com.bloock.sdk.client.AvailabilityClient;
import com.bloock.sdk.client.RecordClient;
import com.bloock.sdk.entity.IpfsLoader;
import com.bloock.sdk.entity.Record;

class Test {
  public static void main(String[] args) throws Exception {
    RecordClient recordClient = new RecordClient();
    AvailabilityClient availabilityClient = new AvailabilityClient();

    String id = "publish uuid result";
    Record record = recordClient.fromLoader(new IpfsLoader(id)).build();
  }
}