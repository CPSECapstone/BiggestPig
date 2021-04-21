public class ComponentFactory {

  public enum Type {
    TEXT, TEXT_INPUT_FIELD
  }

  public static Component makeComponent(Type type) throws UnsupportedType {
    switch (type) {
      case TEXT:  return new TextComponent();
      case TEXT_INPUT_FIELD: return new TextInputComponent();
    }
    throw new UnsupportedType("Not a supported type");
  }

  static class UnsupportedType extends Exception {
    UnsupportedType(String s) {
      super(s);
    }
  }
}
