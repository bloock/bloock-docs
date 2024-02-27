import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;

import com.bloock.sdk.Bloock;
import com.bloock.sdk.client.IdentityClient;
import com.bloock.sdk.entity.identity.Credential;

public class CredentialJson {
  public static void main(String[] args) throws Exception {
    try {
      // we set the API key and create a client
      Bloock.apiKey = System.getenv("API_KEY");
      // we set de identity managed API host you have deployed
      Bloock.identityApiHost = System.getenv("IDENTITY_MANAGED_API_HOST");

      // initialize the IdentityClient
      IdentityClient identityClient = new IdentityClient();

      // we need the credential id, we must have been saved when we created
      String savedCredentialID = "fdd4bf52-bac7-4f41-a743-5b0580168eb3";

      // we can call the get credential function, and will retrieve the Credential entity
      Credential credentialEntity = identityClient.getCredential(savedCredentialID);

      // now we can convert the Credential entity to an string JSON
      String credentialRawJson = credentialEntity.toJson();
      
      // and we can do the opposite step, convert a JSON credential into a Credential entity
      Credential credEntity = Credential.fromJson(credentialRawJson);

      System.out.println(credEntity);

    } catch (Exception e) {
      System.out.println(e);
    }
  }
}

