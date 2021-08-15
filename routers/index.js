const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Main Request /");
});

module.exports = router;
