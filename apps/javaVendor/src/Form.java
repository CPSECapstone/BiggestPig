import javax.json.Json;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObjectBuilder;

public class Form extends GeneratedPage implements JsonData  {
  private final JsonArrayBuilder fields;
  private final String title;

  public Form (String token) {
    super(token);
    int numFields = faker.number().numberBetween(4, 9);
    title = faker.medical().hospitalName();
    this.fields = Json.createArrayBuilder();
    for (int i = 0; i < numFields; i++) {
      if (faker.bool().bool()) {
        fields.add(Json.createArrayBuilder()
          .add(TextInputComponent.generateTextInput(
            faker.internet().slug(),
            faker.bool().bool(),
            faker.bool().bool()
          ))
        );
      } else {
        fields.add(Json.createArrayBuilder()
          .add(TextInputComponent.generateTextInput(
            faker.internet().slug(),
            faker.bool().bool(),
            faker.bool().bool(),
            "[^@ \\t\\r\\n]+@[^@ \\t\\r\\n]+\\.[^@ \\t\\r\\n]+"
          ))
        );
      }
    }
  }

  @Override
  public JsonObjectBuilder toSendableJson() {
    return Json.createObjectBuilder()
      .add("component", "form")
      .add("title", title)
      .add("fields", fields);
  }
}
