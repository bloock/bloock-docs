import com.bloock.sdk.client.AvailabilityClient;
import com.bloock.sdk.client.RecordClient;
import com.bloock.sdk.entity.availability.HostedLoader;
import com.bloock.sdk.entity.record.Record;

public class RetrieveHosted {
  public static void main(String[] args) throws Exception {
    RecordClient recordClient = new RecordClient();
    AvailabilityClient availabilityClient = new AvailabilityClient();

    String id = "publish uuid result";
    Record record = recordClient.fromLoader(new HostedLoader(id)).build();
  }
}