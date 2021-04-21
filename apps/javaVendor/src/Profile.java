import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;
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
  private final String identifier;
  private final String ssnToken;
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
    this.identifier = faker.internet().uuid();
    this.ssnToken = faker.internet().uuid();
  }

  public JsonObjectBuilder toSendableJson() {
    return Json.createObjectBuilder()
      .add("components", Json.createArrayBuilder()
        .add(TextComponent.getComponent().addContent("Profile Page").build())
        .add(TextComponent.getComponent().addLabel("first-name").addContent(fName).build())
        .add(TextComponent.getComponent().addLabel("last-name").addContent(lName).build())
        .add(TextComponent.getComponent().addLabel("birthday").addContent(formatter.format(birthday)).build())
        .add(TextComponent.getComponent().addLabel("phone-number").addContent(cell).build())
        .add(TextComponent.getComponent().addLabel("street-address").addContent(address).build())
        .add(TextComponent.getComponent().addLabel("city").addContent(city).build())
        .add(TextComponent.getComponent().addLabel("state").addContent(state).build())
        .add(TextComponent.getComponent().addLabel("zipcode").addContent(zip).build())
        .add(TextComponent.getComponent().addLabel("email").addContent(email).build())
        .add(TextComponent.getComponent().addLabel("identifier").addContent(identifier).build())
        .add(TextComponent.getComponent().addLabel("ssn").addContent(ssnToken).build())
      );
  }
}
