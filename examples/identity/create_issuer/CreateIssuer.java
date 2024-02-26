import java.io.IOException;

import com.bloock.sdk.Bloock;
import com.bloock.sdk.client.IdentityClient;
import com.bloock.sdk.client.KeyClient;
import com.bloock.sdk.entity.identity.DidMethod;
import com.bloock.sdk.entity.identity.Issuer;
import com.bloock.sdk.entity.identity.PublishIntervalParams;
import com.bloock.sdk.entity.key.Key;
import com.bloock.sdk.entity.key.KeyProtectionLevel;
import com.bloock.sdk.entity.key.KeyType;
import com.bloock.sdk.entity.key.ManagedKey;
import com.bloock.sdk.entity.key.ManagedKeyParams;

public class CreateIssuer {
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

      // create the Baby JubJub managed key using the BLOOCK Keys product
      KeyProtectionLevel keyProtectionLevel = KeyProtectionLevel.SOFTWARE;
      KeyType keyType = KeyType.Bjj;
      ManagedKey managedKey = keyClient.newManagedKey(new ManagedKeyParams(keyProtectionLevel, keyType)); 

      // we create the issuer, passing the Baby JubJub key and issuer information

      // we just passed the Baby JubJub key created before. REQUIRED.
      Key issuerKey = new Key(managedKey);
      // check Issuer intervals documentation to define the best for you model.
      // REQUIRED.
      PublishIntervalParams issuerInterval = PublishIntervalParams.Interval60;
      // check DID methods documentation. By default we recommend the PolygonID.
      // REQUIRED.
      DidMethod methodDID = DidMethod.PolygonID;
      // Issuer name. OPTIONAL.
      String name = "BLOOCK Issuer";
      // Issuer description. OPTIONAL.
      String description = "this is the BLOOCK Issuer";
      // here you can pass an encoded base 64 url image string. OPTIONAL.
      String encodedBase64UrlImage = "";

      Issuer issuer = identityClient.createIssuer(
              issuerKey,
              issuerInterval,
              methodDID,
              name,
              description,
              encodedBase64UrlImage);

      // returns an Issuer entity
      
      // will print the Issuer DID public identifier. Ex:
      // did:polygonid:polygon:main:2qCU58EJgrELSJT6EzT27Rw9DhvwamAdbMLpePztYq
      System.out.println(issuer.getDid().getDid());
      // will return the DID method we chosed. Ex: identity.PolygonID
      System.out.println(issuer.getDid().getDidMethod());
      // will return the Key BJJ object associated to the Issuer.
      System.out.println(issuer.getKey());

    } catch (Exception e) {
      System.out.println(e);
    }
  }
}