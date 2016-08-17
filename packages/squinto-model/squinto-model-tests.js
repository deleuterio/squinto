// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by squinto-model.js.
import { name as packageName } from "meteor/squinto-model";

// Write your tests here!
// Here is an example.
Tinytest.add('squinto-model - example', function (test) {
  test.equal(packageName, "squinto-model");
});
