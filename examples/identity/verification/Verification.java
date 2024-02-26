import java.io.IOException;

import com.bloock.sdk.Bloock;
import com.bloock.sdk.client.IdentityClient;
import com.bloock.sdk.entity.identity.VerificationReceipt;

public class Verification {
  public static void main(String[] args) throws Exception {
    try {
      // we set the API key and create a client
      Bloock.apiKey = System.getenv("API_KEY");
      // we set de identity managed API host you have deployed
      Bloock.identityApiHost = System.getenv("IDENTITY_MANAGED_API_HOST");

      // initialize the IdentityClient
      IdentityClient identityClient = new IdentityClient();

      // first you will need to get the proof request, it's basically a json string, you can generate this using our Dashboard Validation Queries.
      String proofRequest = "{\"id\":1708674709,\"query\":{\"type\":\"BloockEmployee\",\"context\":\"https://api.bloock.com/hosting/v1/ipfs/QmadTvnNKvj2fBDgen35uAp1TfP9pSPVCNeDWw4fitqqne\",\"allowedIssuers\":[\"*\"],\"credentialSubject\":{\"number\":{\"$lt\":5}},\"skipClaimRevocationCheck\":false},\"circuitId\":\"credentialAtomicQuerySigV2\"}";

      // we call the create verification function, using our proof request. This would create a verification process (by default with an expiration of 60min)
      VerificationReceipt verification = identityClient.createVerification(proofRequest);

      // the session id it's the integer identifier for you verification process, you
      // will need to save it, to then check the status
      System.out.println(verification.getSessionID());
      // the json that you need to convert to QR code, so you user could scan and be
      // verified
      System.out.println(verification.getVerificationRequest());

      // we can call the wait verification function in order to paused until the verification is made (use this function to have a synchronous process)

      // By default 120000 seconds, you can customize
      boolean verOK = identityClient.waitVerification(verification.getSessionID(), 120000);
      if (!verOK) {
              throw new Exception("Error waiting for the verification");
      }

      // finally to check the verification status and to know if the verification was success, you can call this function
      boolean verified = identityClient.getVerificationStatus(verification.getSessionID());
      if (!verified) {
              throw new Exception("Verification failed");
      }

      System.out.println("Successfully verified");

    } catch (Exception e) {
      System.out.println(e);
    }
  }
}