import com.sun.net.httpserver.Headers;
import com.sun.net.httpserver.HttpContext;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpServer;

import javax.json.*;
import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.util.UUID;

public class VendorDriver {

  private static UUID vendorId = UUID.randomUUID();
  private static UUID vendorAuth = UUID.randomUUID();

  public static void main(String[] args) throws IOException {
    HttpServer server = HttpServer.create(new InetSocketAddress(4040), 0);
    HttpContext context = server.createContext("/");
    context.setHandler(VendorDriver::handleRequest);
    server.start();
  }

  private static void handleRequest(HttpExchange exchange) throws IOException {
    exchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
    String[] pathComponents = exchange.getRequestURI().getPath().split("/");
    if (pathComponents.length > 2 && pathComponents[1].equals("profile")) {
      handleProfileRequest(exchange, pathComponents[2]);
    } else if (pathComponents.length > 2 && pathComponents[1].equals("form")) {
      handleFormRequest(exchange, pathComponents[2]);
    } else if (pathComponents.length > 2 && pathComponents[1].equals("table")) {
      handleTableRequest(exchange, pathComponents[2]);
    } else {
      String response = "Welcome to the default Java Vendor Application!!!\nThe supported requests are: \"/profile/<user>\", \"/table/<identifier>\", \"/form/<identifier>\"";
      exchange.sendResponseHeaders(404, response.getBytes().length); //response code and length
      OutputStream os = exchange.getResponseBody();
      os.write(response.getBytes());
      os.close();
    }


  }

  private static void handleProfileRequest(HttpExchange exchange, String token) throws IOException {
    Headers headers = exchange.getResponseHeaders();
    headers.add("content-type", "application/json");
    Profile profile = new Profile(token);
    String response = attachVendorAuth(profile.toSendableJson()).toString();
    exchange.sendResponseHeaders(200, response.getBytes().length); //response code and length
    OutputStream os = exchange.getResponseBody();
    os.write(response.getBytes());
    os.close();
  }

  private static void handleTableRequest(HttpExchange exchange, String token) throws IOException {
    Headers headers = exchange.getResponseHeaders();
    headers.add("content-type", "application/json");
    Table table = new Table(token);
    String response = attachVendorAuth(table.toSendableJson()).toString();
    exchange.sendResponseHeaders(200, response.getBytes().length); //response code and length
    OutputStream os = exchange.getResponseBody();
    os.write(response.getBytes());
    os.close();
  }

  private static void handleFormRequest(HttpExchange exchange, String token) throws IOException {
    Headers headers = exchange.getResponseHeaders();
    headers.add("content-type", "application/json");
    Form form = new Form(token);
    String response = attachVendorAuth(form.toSendableJson()).toString();
    exchange.sendResponseHeaders(200, response.getBytes().length); //response code and length
    OutputStream os = exchange.getResponseBody();
    os.write(response.getBytes());
    os.close();
  }

  private static JsonObject attachVendorAuth(JsonObjectBuilder... components) {
    JsonObjectBuilder response = Json.createObjectBuilder()
      .add("vendorAuth", vendorAuth.toString())
      .add("vendorId", vendorId.toString());

    JsonArrayBuilder comps = Json.createArrayBuilder();
    for (JsonObjectBuilder component: components) {
      comps.add(component);
    }
    return response.add("components", comps).build();
  }
}