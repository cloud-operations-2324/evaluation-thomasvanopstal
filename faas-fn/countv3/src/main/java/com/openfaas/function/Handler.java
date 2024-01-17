package com.openfaas.function;
import io.vertx.ext.web.RoutingContext;
import io.vertx.core.json.JsonObject;

public class Handler implements io.vertx.core.Handler<RoutingContext> {

  public void handle(RoutingContext routingContext) {
     // Use bodyHandler to handle the request body
        routingContext.request().bodyHandler(buffer -> {
            try {
                // Convert the buffer to a String
                // String requestBody = buffer.toString();

                // // Log the received JSON
                // System.out.println("Received JSON: " + requestBody);

                // // Create a JsonObject from the request body
                // JsonObject jsonResponse = new JsonObject(requestBody);
                // if (jsonResponse.containsKey("number")) {
                //     // Extract the "number" field from the JSON payload
                //     int inputNumber = jsonResponse.getInteger("number");

                //     // Increment the number by 1
                //     int result = inputNumber + 1;

                //     // Prepare the response JSON
                //     jsonResponse = new JsonObject()
                //             .put("status", "ok")
                //             .put("result", result);
                JsonObject jsonResponse = new JsonObject().put("status", "ok").put("result", "How you doing ? ");
                
                // Set the response content type and send the response
                routingContext.response()
                        .putHeader("content-type", "application/json")
                        .putHeader("Access-Control-Allow-Origin", "*")
                        .putHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
                        .putHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")
                        .end(jsonResponse.encodePrettily());
            } catch (Exception e) {
                // Handle any exceptions
                System.err.println("Error processing request: " + e.getMessage());
                routingContext.response()
                        .setStatusCode(500) // Internal Server Error
                        .putHeader("content-type", "application/json;charset=UTF-8")
                        .end(new JsonObject().put("error", "it gets in the function but then fails").encodePrettily());
            }
        });
    }
}

