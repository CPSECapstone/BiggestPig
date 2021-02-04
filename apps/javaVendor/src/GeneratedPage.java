import com.github.javafaker.Faker;

import java.util.Random;

public abstract class GeneratedPage {
  protected final Faker faker;

  public GeneratedPage(String token) {
    long seedStarter = token.hashCode();
    Random seed = new Random(seedStarter);
    this.faker = new Faker(seed);
  }
}
