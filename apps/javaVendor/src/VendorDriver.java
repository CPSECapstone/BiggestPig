import com.sun.net.httpserver.Headers;
import com.sun.net.httpserver.HttpContext;
import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpServer;

import javax.json.JsonObject;
import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;

public class VendorDriver {

  public static void main(String[] args) throws IOException {
    HttpServer server = HttpServer.create(new InetSocketAddress(4040), 0);
    HttpContext context = server.createContext("/");
    context.setHandler(VendorDriver::handleRequest);
    server.start();
  }

  private static void handleRequest(HttpExchange exchange) throws IOException {
    String[] pathComponents = exchange.getRequestURI().getPath().split("/");
    if (pathComponents.length == 2 && pathComponents[1].equals("profile")) {
      String response = "Please specify a user. \nYou may specify a user by appending the token to the request URI: /profile/<user>";
      exchange.sendResponseHeaders(200, response.getBytes().length); //response code and length
      OutputStream os = exchange.getResponseBody();
      os.write(response.getBytes());
      os.close();
    } else if (pathComponents.length > 2 && pathComponents[1].equals("profile")) {
      handleProfileRequest(exchange, pathComponents[2]);
    } else {
      String response = "Welcome to the default Java Vendor Application!!!";
      exchange.sendResponseHeaders(200, response.getBytes().length); //response code and length
      OutputStream os = exchange.getResponseBody();
      os.write(response.getBytes());
      os.close();
    }


  }

  private static void handleProfileRequest(HttpExchange exchange, String token) throws IOException {
    Headers headers = exchange.getResponseHeaders();
    headers.add("content-type", "application/json");
    Profile profile = new Profile(token);
    String response = profile.toSendableJson().toString();
    exchange.sendResponseHeaders(200, response.getBytes().length); //response code and length
    OutputStream os = exchange.getResponseBody();
    os.write(response.getBytes());
    os.close();
  }

}