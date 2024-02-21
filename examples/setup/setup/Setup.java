import com.bloock.sdk.Bloock;

public class Setup {
    public static void main(String[] args) throws Exception {
        Bloock.apiKey = System.getenv("API_KEY");
    }
}