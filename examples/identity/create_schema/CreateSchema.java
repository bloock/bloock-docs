import java.io.IOException;

import com.bloock.sdk.Bloock;
import com.bloock.sdk.client.IdentityClient;
import com.bloock.sdk.entity.identity.Schema;
import java.util.*;

public class CreateSchema {
  public static void main(String[] args) throws Exception {
    try {
      // we set the API key and create a client
      Bloock.apiKey = System.getenv("API_KEY");
      // we set de identity managed API host you have deployed
      Bloock.identityApiHost = System.getenv("IDENTITY_MANAGED_API_HOST");

      // initialize the IdentityClient
      IdentityClient identityClient = new IdentityClient();

      // we create the Schema, passing Schema information

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
              .addIntegerAttribute("Number", "number", "indicates the employee number associated", true)
              .addDecimalAttribute("Salary", "salary", "indicates the employee salary", true)
              .addStringAttribute("NIF", "nif", "indicates the employee nif", true)
              .addBooleanAttribute("Previous Formation", "previous_formation",
                      "indicates if the employee has or not previous formation", true)
              .addDateAttribute("Birth Date", "birth_date", "the employee birth date", true)
              .addDatetimeAttribute("Time Registered", "time_registered",
                      "indicates the date and time the employee was registered", true)
              .addStringEnumAttribute("Country", "country",
                      "to know if the employee is from one of the following", true, stringList)
              .addIntegerEnumAttribute("Brother", "brother", "the employee number of brothers", true, integerList)
              .addDecimalEnumAttribute("Heigt", "height", "the employee aprox height", true, doubleList)
              .build();

      // returns a Schema entity

      // Schema identifier generated from IPFS. Ex:
      // QmadTvnNKvj2fBDgen35uAp1TfP9pSPVCNeDWw4fitqqne.
      System.out.println(schema.getCid());
      // Schema in JSON-LD representation. Gives you extra information about the
      // context.
      System.out.println(schema.getCidJsonLD());
      // represents the Schema JSON.
      System.out.println(schema.getJson());
      // the Schema type defined above.
      System.out.println(schema.getSchemaType());

    } catch (Exception e) {
      System.out.println(e);
    }
  }
}