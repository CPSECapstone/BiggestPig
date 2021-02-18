import javax.json.Json;
import javax.json.JsonObject;
import java.util.Date;
import java.text.SimpleDateFormat;
import java.util.UUID;

public class Profile extends GeneratedPage implements JsonData {
  private final String fName;
  private final String lName;
  private final Date birthday;
  private final String cell;
  private final String address;
  private final String city;
  private final String state;
  private final String zip;
  private final String email;
  private final UUID identifier;
  private final UUID ssnToken;
  private final SimpleDateFormat formatter = new SimpleDateFormat("MM/dd/yyyy");

  public Profile(String token) {
    super(token);
    this.fName = faker.name().firstName();
    this.lName = faker.name().lastName();
    this.birthday = faker.date().birthday();
    this.cell = faker.phoneNumber().cellPhone();
    this.address = faker.address().streetAddress(faker.bool().bool());
    this.city = faker.address().city();
    this.state = faker.address().state();
    this.zip = faker.address().zipCode();
    this.email = faker.internet().emailAddress();
    this.identifier = getUUIDFromFaker();
    this.ssnToken = getUUIDFromFaker();
  }

  public JsonObject toSendableJson() {
    return Json.createObjectBuilder()
      .add("components", Json.createArrayBuilder()
        .add(TextComponent.generateText("Profile Page"))
        .add(TextComponent.generateText("first-name", fName))
        .add(TextComponent.generateText("last-name", lName))
        .add(TextComponent.generateText("birthday", formatter.format(birthday)))
        .add(TextComponent.generateText("phone-number", cell))
        .add(TextComponent.generateText("street-address", address))
        .add(TextComponent.generateText("city", city))
        .add(TextComponent.generateText("state", state))
        .add(TextComponent.generateText("zipcode", zip))
        .add(TextComponent.generateText("email", email))
        .add(TextComponent.generateText("identifier", identifier))
        .add(TextComponent.generateText("ssn", ssnToken)))
      .build();
  }
}
