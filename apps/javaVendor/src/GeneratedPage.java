import com.github.javafaker.Faker;

import java.util.Random;
import java.util.UUID;

public abstract class GeneratedPage {
  // Sometimes we really do want random data
  protected final Faker faker;
  // This data provider gives us 
  protected DataProvider provider;

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
}
