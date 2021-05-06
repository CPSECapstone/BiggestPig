import javax.json.*;
import java.util.Objects;

public class Table extends GeneratedPage implements JsonData {

  private final int display;
  private final JsonArrayBuilder rows;

  public Table(String token, Boolean random) {
    super(token, random);
    this.display = faker.number().numberBetween(3, 10);
    this.rows = Json.createArrayBuilder();
    int numRows = faker.number().numberBetween(5, 15);
    for (int i = 0; i < numRows; i++) {
      rows.add(Json.createArrayBuilder()
        .add(TextComponent.getComponent().addContent(provider.getUUID()).create())
        .add(TextComponent.getComponent().addContent(provider.getMedicalSymptoms()).create())
        .add(TextComponent.getComponent().addContent(provider.getMedicineName()).create())
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

  @Override
  public boolean equals(Object o) { //only compares the size of the rows, the better comparison is the result of toSendableJson
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    Table table = (Table) o;
    return display == table.display;
  }
}
