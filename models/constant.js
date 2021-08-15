const mongoose = require("mongoose");
const ConstantChild = require("./constantChild.js").schema;

const ConstantSchema = new mongoose.Schema({
  name: String,
  childs: {
    type: [ConstantChild],
    default: [],
  },
});

module.exports = mongoose.model("Constant", ConstantSchema);
