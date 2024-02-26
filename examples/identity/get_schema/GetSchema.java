import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;

import com.bloock.sdk.Bloock;
import com.bloock.sdk.client.IdentityClient;
import com.bloock.sdk.entity.identity.Credential;
import com.bloock.sdk.entity.identity.Schema;

public class GetSchema {
  public static void main(String[] args) throws Exception {
    try {
      // we set the API key and create a client
      Bloock.apiKey = System.getenv("API_KEY");
      // we set de identity managed API host you have deployed
      Bloock.identityApiHost = System.getenv("IDENTITY_MANAGED_API_HOST");

      // initialize the IdentityClient
      IdentityClient identityClient = new IdentityClient();

      // we need the schema id, we must have been saved when we created
      String savedSchemaID = "QmadTvnNKvj2fBDgen35uAp1TfP9pSPVCNeDWw4fitqqne";

      // we can call the get schema function, and will retrieve the Schema entity
      Schema schemaEntity = identityClient.getSchema(savedSchemaID);

      // Schema identifier generated from IPFS. Ex:
      // QmadTvnNKvj2fBDgen35uAp1TfP9pSPVCNeDWw4fitqqne.
      System.out.println(schemaEntity.getCid());
      // Schema in JSON-LD representation. Gives you extra information about the
      // context.
      System.out.println(schemaEntity.getCidJsonLD());
      // represents the Schema JSON.
      System.out.println(schemaEntity.getJson());
      // the Schema type defined above.
      System.out.println(schemaEntity.getSchemaType());

    } catch (Exception e) {
      System.out.println(e);
    }
  }
}

