import java.io.IOException;

import com.bloock.sdk.Bloock;
import com.bloock.sdk.client.IdentityClient;
import com.bloock.sdk.client.KeyClient;
import com.bloock.sdk.entity.identity.DidMethod;
import com.bloock.sdk.entity.key.Key;
import com.bloock.sdk.entity.identity.Holder;
import com.bloock.sdk.entity.key.KeyType;
import com.bloock.sdk.entity.key.LocalKey;

public class CreateHolder {
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

      // create the Baby JubJub local key
      LocalKey localKey = keyClient.newLocalKey(KeyType.Bjj);

      // we create the holder, passing the Baby JubJub key and holder did method
      Key holderKey = new Key(localKey);
      DidMethod holderDidMethod = DidMethod.PolygonID;

      Holder holder = identityClient.createHolder(holderKey, holderDidMethod);
      
      // will print the Holder DID public identifier. Ex:
      // did:polygonid:polygon:main:2qCU58EJgrELSJT6EzT27Rw9DhvwamAdbMLpePztYq
      System.out.println(holder.getDid().getDid());
      // will return the DID method we chosed. Ex: identity.PolygonID
      System.out.println(holder.getDid().getDidMethod());
      // will return the Key BJJ object associated to the Holder.
      System.out.println(holder.getKey());

    } catch (Exception e) {
      System.out.println(e);
    }
  }
}