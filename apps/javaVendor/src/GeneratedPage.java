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

  protected String randomUUID() {
    long a = faker.number().numberBetween(0, Long.parseLong("4294967296"));
    long b = faker.number().numberBetween(0, 65536);
    long c = faker.number().numberBetween(0, 65536);
    long d = faker.number().numberBetween(0, 65536);
    long e = faker.number().numberBetween(0, Long.parseLong("281474976710656"));
    return String.format("%s-%s-%s-%s-%s", Long.toHexString(a), Long.toHexString(b), Long.toHexString(c), Long.toHexString(d), Long.toHexString(e));
  }
}
