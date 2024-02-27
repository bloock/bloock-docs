import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalDateTime;

import com.bloock.sdk.Bloock;
import com.bloock.sdk.client.IdentityClient;
import com.bloock.sdk.client.KeyClient;
import com.bloock.sdk.entity.identity.CredentialReceipt;
import com.bloock.sdk.entity.identity.DidMethod;
import com.bloock.sdk.entity.identity.Issuer;
import com.bloock.sdk.entity.identity.PublishIntervalParams;
import com.bloock.sdk.entity.identity.Schema;
import com.bloock.sdk.entity.key.Key;
import com.bloock.sdk.entity.key.KeyProtectionLevel;
import com.bloock.sdk.entity.key.KeyType;
import com.bloock.sdk.entity.key.ManagedKey;
import com.bloock.sdk.entity.key.ManagedKeyParams;
import java.util.*;

public class E2EManagedKey {
        public static void main(String[] args) throws IOException {
                try {
                        Bloock.apiKey = System.getenv("API_KEY");
                        Bloock.identityApiHost = System.getenv("IDENTITY_API_MANAGED_HOST");

                        KeyClient keyClient = new KeyClient();
                        IdentityClient identityClient = new IdentityClient();

                        KeyProtectionLevel keyProtectionLevel = KeyProtectionLevel.SOFTWARE;
                        KeyType keyType = KeyType.Bjj;
                        ManagedKey managedKey = keyClient
                                        .newManagedKey(new ManagedKeyParams(keyProtectionLevel, keyType));

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
                        // Issuer desccription. OPTIONAL.
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

                        // name Schema. REQUIRED.
                        String schemaName = "Bloock Employee";
                        // we defined the Schema type, basically you could use the name but in
                        // CamelCase. REQUIRED.
                        String schemaType = "BloockEmployee";
                        // Schema version. REQUIRED. By default you can set "1.0".
                        String schemaVersion = "1.0";
                        // Schema description. REQUIRED.
                        String schemaDescription = "BLOOCK Employee would be the new credential for BLOOCK employees";

                        List<String> stringList = new ArrayList<>();
                        stringList.add("spain");
                        stringList.add("portugal");
                        stringList.add("france");
                        List<Long> integerList = new ArrayList<>();
                        integerList.add(1L);
                        integerList.add(2L);
                        integerList.add(30L);
                        List<Double> doubleList = new ArrayList<>();
                        doubleList.add(1.50);
                        doubleList.add(1.70);
                        doubleList.add(1.90);

                        Schema schema = identityClient
                                        .buildSchema(
                                                        schemaName, schemaType, schemaVersion, schemaDescription)
                                        .addIntegerAttribute("Number", "number",
                                                        "indicates the employee number associated", true)
                                        .addDecimalAttribute("Salary", "salary", "indicates the employee salary", true)
                                        .addStringAttribute("NIF", "nif", "indicates the employee nif", true)
                                        .addBooleanAttribute("Previous Formation", "previous_formation",
                                                        "indicates if the employee has or not previous formation", true)
                                        .addDateAttribute("Birth Date", "birth_date", "the employee birth date", true)
                                        .addDatetimeAttribute("Time Registered", "time_registered",
                                                        "indicates the date and time the employee was registered", true)
                                        .addStringEnumAttribute("Country", "country",
                                                        "to know if the employee is from one of the following", true,
                                                        stringList)
                                        .addIntegerEnumAttribute("Brother", "brother",
                                                        "the employee number of brothers", true, integerList)
                                        .addDecimalEnumAttribute("Heigt", "height", "the employee aprox height", true,
                                                        doubleList)
                                        .build();

                        // the DID of the Holder to whom the credential will be associated. REQUIRED.
                        String holderDID = "did:polygonid:polygon:main:2q544HUegzeRpwr3V2qu9eMwgrAmF5x4E1NCPzbQc";
                        // unix timestamp when the credential will expire. REQUIRED.
                        Long expiration = 4089852142L;
                        // credential version. By default it's set to 0. REQUIRED.
                        int credentialVersion = 0;

                        CredentialReceipt receipt = identityClient
                                        .buildCredential(issuer, schema.getCid(), holderDID, expiration,
                                                        credentialVersion)
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

                        String jsonOffer = identityClient.getCredentialOffer(issuer, receipt.getCredentialId());

                        System.out.println(jsonOffer); // it's the json result that we would convert to a QR code

                        boolean ok = identityClient.revokeCredential(receipt.getCredential(), issuer);
                        if (!ok) {
                                throw new Exception("Unexpected result");
                        }
              } catch (Exception e) {
                  System.out.println(e);
              }
      }
}