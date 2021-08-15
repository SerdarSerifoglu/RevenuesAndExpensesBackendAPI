const mongoose = require("mongoose");
const ConstantChild = require("./constantChild.js");

const ConstantSchema = new mongoose.Schema({
  name: String,
  childs: [ConstantChild],
});

module.exports = mongoose.model("Constant", ConstantSchema);
