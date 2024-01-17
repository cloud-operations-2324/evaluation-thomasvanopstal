"use strict";

module.exports = async (event, context) => {
  if (event.method == "POST" && event.body.number) {
    let number = event.body.number;

    const result = {
      body: JSON.stringify({ number: number + 1 }),
      "content-type": event.headers["content-type"],
      "Access-Control-Allow-Origin": "http://localhost:3000", // Replace with your allowed origin
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    };
    return context.status(200).succeed(result);
  } else {
    return context.status(400).fail("You have to pass in a number");
  }
};
