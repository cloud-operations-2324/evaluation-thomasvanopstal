"use strict";

module.exports = async (context, callback) => {
  // Parse the request body
  callback(undefined, context.body);
};
