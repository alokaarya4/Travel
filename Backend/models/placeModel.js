const { model, Schema } = require("../connection");

const myschema = new Schema({
  name: String,
  location: String,
  image: String,
  description: String
});

module.exports = model('place', myschema);