import java.nio.file.Files;
import java.nio.file.Paths;

import com.bloock.sdk.Bloock;
import com.bloock.sdk.client.RecordClient;
import com.bloock.sdk.entity.Record;

class Test {
  public static void main(String[] args) {
    try {
      RecordClient recordClient = new RecordClient();

      Record record = recordClient.fromString("Hello world").build();

      // we can get the hash of the record
      String hash = record.getHash();
      System.out.println(hash);

      // build a record from an existing record
      Record record2 = recordClient.fromRecord(record).build();

      // we can read a file as an array of bytes
      byte[] file = Files.readAllBytes(Paths.get("sample.pdf"));
      Record record3 = recordClient.fromFile(file).build();

    } catch (Exception e) {
      System.out.println(e);
    }
  }
}
