import com.github.javafaker.Faker;

import javax.json.JsonObjectBuilder;
import javax.json.JsonPatchBuilder;
import java.util.Random;
import java.util.UUID;

public abstract class GeneratedPage {
  // Sometimes we really do want random data
  protected final Faker faker;
  // This data provider gives us 
  protected DataProvider provider;

  public GeneratedPage() {
    Random seed = new Random(0);
    this.faker = new Faker(seed);
  }

  // If we want random data the token will be hashed
  // If we want real data the token will be used as an id to retrieve valid data
  public GeneratedPage(String token, Boolean random) {
    long seedStarter = token.hashCode();
    Random seed = new Random(seedStarter);
    this.faker = new Faker(seed);

    if (random) {
      this.provider = new FakeDataProvider(seed);
    } else {
      this.provider = new RealDataProvider(token);
    }
  }

  protected abstract JsonObjectBuilder seed(String token);

  public static <T extends GeneratedPage> JsonObjectBuilder generate(String token, Class<T> page) {
    try {
      return page.newInstance().seed(token);
    } catch (InstantiationException e) {
      e.printStackTrace();
    } catch (IllegalAccessException e) {
      e.printStackTrace();
    }
    return null;
  }
}
