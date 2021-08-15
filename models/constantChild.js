const mongoose = require("mongoose");

const ConstantChildSchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model("ConstantChild", ConstantChildSchema);
