import java.io.IOException;

import com.bloock.sdk.Bloock;
import com.bloock.sdk.client.IdentityClient;
import com.bloock.sdk.client.KeyClient;
import com.bloock.sdk.entity.identity.CredentialReceipt;
import com.bloock.sdk.entity.identity.DidMethod;
import com.bloock.sdk.entity.identity.Issuer;
import com.bloock.sdk.entity.key.Key;
import com.bloock.sdk.entity.key.ManagedKey;

public class CredentialOffering {
  public static void main(String[] args) throws Exception {
    try {
      // we set the API key and create a client
      Bloock.apiKey = System.getenv("API_KEY");
      // we set de identity managed API host you have deployed
      Bloock.identityApiHost = System.getenv("IDENTITY_MANAGED_API_HOST");

      // initialize the Key Client
      KeyClient keyClient = new KeyClient();
      // initialize the IdentityClient
      IdentityClient identityClient = new IdentityClient();

      // we must have our Issuer Baby JubJub key identifier. Ex: 6f36448d-49f3-4b0e-aa72-6e55863302e8
      String savedIssuerKey = "6f36448d-49f3-4b0e-aa72-6e55863302e8";
      ManagedKey loadedManagedKey = keyClient.loadManagedKey(savedIssuerKey);

      // if we don't have our Issuer entity, here you can import you Issuer from the key
      Key importedIssuerKey = new Key(loadedManagedKey);
      DidMethod issuerMethodDID = DidMethod.PolygonID;

      Issuer importedIssuer = identityClient.importIssuer(importedIssuerKey, issuerMethodDID);

      // we need to get the credential id, we want to make the offering
      String credentialID = "fdd4bf52-bac7-4f41-a743-5b0580168eb3";

      // once we have the issuer and the credential id, we can called the offering function
      String jsonOffer = identityClient.getCredentialOffer(importedIssuer, credentialID);

      System.out.println(jsonOffer); // it's the json result that we would convert to a QR code

    } catch (Exception e) {
      System.out.println(e);
    }
  }
}
