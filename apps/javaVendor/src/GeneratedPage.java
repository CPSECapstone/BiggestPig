import com.github.javafaker.Faker;

import java.util.Random;
import java.util.UUID;

public abstract class GeneratedPage {
  protected final Faker faker;

  public GeneratedPage(String token) {
    long seedStarter = token.hashCode();
    Random seed = new Random(seedStarter);
    this.faker = new Faker(seed);
  }

  UUID getUUIDFromFaker() {
    return UUID.fromString(faker.internet().uuid());
  }
}
