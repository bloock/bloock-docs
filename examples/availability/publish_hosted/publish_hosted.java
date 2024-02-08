import com.bloock.sdk.Bloock;
import com.bloock.sdk.client.AvailabilityClient;
import com.bloock.sdk.client.RecordClient;
import com.bloock.sdk.entity.HostedPublisher;
import com.bloock.sdk.entity.Record;

class Test {
  public static void main(String[] args) {
    try {
      Bloock.apiKey = System.getenv("API_KEY");

      RecordClient recordClient = new RecordClient();
      AvailabilityClient availabilityClient = new AvailabilityClient();

      Record record = recordClient.fromString("Hello world").build();

      String id = availabilityClient.publish(record, new HostedPublisher()); // it returns the hash
    } catch (Exception e) {
      System.out.println(e);
    }
  }
}
