const cards = require("../controllers/card.controller");
const router = require("express").Router();

router.post("/", cards.create);
router.get("/", cards.getAll);
router.get("/pagesCount", cards.getLegth);

module.exports = router;
