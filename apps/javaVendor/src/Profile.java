import com.github.javafaker.Faker;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

public class Profile {
  private final Faker faker;
  private final String fName;
  private final String lName;
  private final Date birthday;
  private final String cell;
  private final String address;
  private final String city;
  private final String state;
  private final String zip;
  private final String email;
  private final String identifier;
  private final SimpleDateFormat formatter = new SimpleDateFormat("MM/dd/yyyy");

  public Profile(String token) {
    long seedStarter = token.hashCode();
    Random seed = new Random(seedStarter);
    this.faker = new Faker(seed);
    this.fName = faker.name().firstName();
    this.lName = faker.name().lastName();
    this.birthday = faker.date().birthday();
    this.cell = faker.phoneNumber().cellPhone();
    this.address = faker.address().streetAddress(faker.bool().bool());
    this.city = faker.address().city();
    this.state = faker.address().state();
    this.zip = faker.address().zipCode();
    this.email = faker.internet().emailAddress();
    this.identifier = faker.internet().uuid();
  }

  @Override
  public String toString() {
    return "{" +
      "\"First-Name\": \"" + fName + "\"" +
      ", \"Last-Name\": \"" + lName + "\"" +
      ", \"Birthday\": \"" + formatter.format(birthday) + "\"" +
      ", \"Phone-Number\": \"" + cell + "\"" +
      ", \"Street-Address\": \"" + address + "\"" +
      ", \"City\": \"" + city + "\"" +
      ", \"State\": \"" + state + "\"" +
      ", \"ZipCode\": \"" + zip + "\"" +
      ", \"Email\": \"" + email + "\"" +
      ", \"Identifier\": \"" + identifier + "\"" +
      "}";
  }
}
