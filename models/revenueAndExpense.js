const mongoose = require("mongoose");

const RevenueAndExpenseSchema = new mongoose.Schema({
  type: String,
  amount: Number,
});

RevenueAndExpenseSchema.methods.testMethod = async function (paramTest1, paramTest2) {
  console.log(`Test Method Run, paramTest1: ${paramTest1} - paramTest2: ${paramTest2}`);
};

module.exports = mongoose.model("RevenueAndExpense", RevenueAndExpenseSchema);
