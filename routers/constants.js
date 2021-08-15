const { constantService } = require("../services/constantService.js");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const constants = await constantService.load();

  res.status(200).json({
    data: constants,
  });
});

router.post("/", async (req, res, next) => {
  try {
    const constant = await constantService.insert(req.body);
    res.send(constant);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
