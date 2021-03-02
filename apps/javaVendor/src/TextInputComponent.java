import javax.json.Json;
import javax.json.JsonObjectBuilder;

public class TextInputComponent {
  public static JsonObjectBuilder generateTextInput(String label) {
    return Json.createObjectBuilder()
      .add("component", "textInputField")
      .add("label", label);
  }

  public static JsonObjectBuilder generateTextInput(String label, boolean sensitive, boolean required) {
    return Json.createObjectBuilder()
      .add("component", "textInputField")
      .add("label", label)
      .add("sensitive", sensitive)
      .add("required", required);
  }

  public static JsonObjectBuilder generateTextInput(String label, boolean sensitive, boolean required, String regex) {
    return Json.createObjectBuilder()
      .add("component", "textInputField")
      .add("label", label)
      .add("sensitive", sensitive)
      .add("required", required)
      .add("match", regex);
  }

  public static JsonObjectBuilder generateTextInput(String label, String regex) {
    return Json.createObjectBuilder()
      .add("component", "textInputField")
      .add("label", label)
      .add("match", regex);
  }
}
