import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;
import java.util.UUID;

public class TextComponent {
  public static JsonObjectBuilder generateText(String content) {
    return Json.createObjectBuilder()
      .add("component", "text")
      .add("content", content);
  }

  public static JsonObjectBuilder generateText(String label, String content) {
    return Json.createObjectBuilder()
      .add("component", "text")
      .add("content", content)
      .add("label", label);
  }

  public static JsonObjectBuilder generateText(UUID token) {
    return Json.createObjectBuilder()
      .add("component", "text")
      .add("token", token.toString());
  }

  public static JsonObjectBuilder generateText(String label, UUID token) {
    return Json.createObjectBuilder()
      .add("component", "text")
      .add("token", token.toString())
      .add("label", label);
  }
}
