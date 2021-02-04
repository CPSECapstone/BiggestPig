import javax.json.Json;
import javax.json.JsonObject;
import javax.json.JsonObjectBuilder;

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
}
