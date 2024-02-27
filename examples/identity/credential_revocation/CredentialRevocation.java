import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;

import com.bloock.sdk.Bloock;
import com.bloock.sdk.client.IdentityClient;
import com.bloock.sdk.client.KeyClient;
import com.bloock.sdk.entity.identity.CredentialReceipt;
import com.bloock.sdk.entity.identity.DidMethod;
import com.bloock.sdk.entity.identity.Issuer;
import com.bloock.sdk.entity.key.Key;
import com.bloock.sdk.entity.key.ManagedKey;
import com.bloock.sdk.entity.identity.Credential;


public class CredentialRevocation {
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

      // we create the credential, passing credential information

      // schema identifier created before. Ex:
      // QmadTvnNKvj2fBDgen35uAp1TfP9pSPVCNeDWw4fitqqne. REQUIRED.
      String schemaCID = "QmadTvnNKvj2fBDgen35uAp1TfP9pSPVCNeDWw4fitqqne";
      // the DID of the Holder to whom the credential will be associated. REQUIRED.
      String holderDID = "did:polygonid:polygon:main:2q544HUegzeRpwr3V2qu9eMwgrAmF5x4E1NCPzbQc";
      // unix timestamp when the credential will expire. REQUIRED.
      Long expiration = 4089852142L;
      // credential version. By default it's set to 0. REQUIRED.
      int credentialVersion = 0;

      CredentialReceipt receipt = identityClient
                      .buildCredential(importedIssuer, schemaCID, holderDID, expiration, credentialVersion)
                      .withIntegerAttribute("number", 1L)
                      .withDecimalAttribute("salary", 3000.70)
                      .withStringAttribute("nif", "54688188M")
                      .withBooleanAttribute("previous_formation", true)
                      .withDateAttribute("birth_date", LocalDate.of(1999, 3, 20))
                      .withDatetimeAttribute("time_registered", LocalDateTime.now())
                      .withStringAttribute("country", "spain")
                      .withIntegerAttribute("brother", 1L)
                      .withDecimalAttribute("height", 1.70)
                      .build();

      // once the credential created, we need to get the credential itself
      Credential credential = receipt.getCredential();

      // with the issuer and the credential we then could call the revocation function
      boolean ok = identityClient.revokeCredential(credential, importedIssuer);
      if (!ok) {
              throw new Exception("Unexpected result");
      }

      // right now the credential it's revoked, but we need to wait our interval issuer state transition to be executed
    } catch (Exception e) {
      System.out.println(e);
    }
  }
}
