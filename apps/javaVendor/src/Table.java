import javax.json.Json;
import javax.json.JsonArrayBuilder;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;

public class Table extends GeneratedPage implements JsonData{

  private final int display;
  private final JsonArrayBuilder rows;

  public Table(String token) {
    super(token);
    this.display = faker.number().numberBetween(3, 10);
    this.rows = Json.createArrayBuilder();
    int numRows = faker.number().numberBetween(5, 15);
    for (int i = 0; i < numRows; i++) {
      rows.add(Json.createArrayBuilder()
        .add(TextComponent.generateText(getUUIDFromFaker()))
        .add(TextComponent.generateText(faker.medical().symptoms()))
        .add(TextComponent.generateText(faker.medical().medicineName()))
      );
    }
  }

  @Override
  public JsonObjectBuilder toSendableJson() {
    return Json.createObjectBuilder()
      .add("display", display)
      .add("headers", Json.createArrayBuilder()
        .add("Patient")
        .add("Symptoms")
        .add("Medicine Perscribed"))
      .add("rows", rows);
  }
}
