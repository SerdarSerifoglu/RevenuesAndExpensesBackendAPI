const BaseService = require("./baseService.js");
const Constant = require("../models/constant.js");

class ConstantService extends BaseService {}

module.exports = new ConstantService(Constant);
