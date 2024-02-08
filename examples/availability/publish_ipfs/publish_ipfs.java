import com.bloock.sdk.Bloock;
import com.bloock.sdk.client.AvailabilityClient;
import com.bloock.sdk.client.RecordClient;
import com.bloock.sdk.entity.IpfsPublisher;
import com.bloock.sdk.entity.Record;

public class App {
  public static void main(String[] args) throws Exception {
    Bloock.apiKey = System.getenv("API_KEY");

    RecordClient recordClient = new RecordClient();
    AvailabilityClient availabilityClient = new AvailabilityClient();

    Record record = recordClient
        .fromString("Hello world")
        .build();

    String id = availabilityClient.publish(record, new IpfsPublisher());

    System.out.println("Record was published successfully");
  }
}