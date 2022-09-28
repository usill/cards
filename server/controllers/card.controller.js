const Card = require("../models/card.model");

create = (req, res) => {
  const card = new Card({
    word: req.body.word,
    translete: req.body.translete,
    image: req.body.image,
    context: req.body.context,
  });

  card
    .save(card)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

getAll = (req, res) => {
  Card.find().then((data) => {
    const page = req.query.page;
    const limit = req.query.limit;

    const endValue = limit * page;
    const startValue = 1 + endValue - endValue / page;

    const cards = [];

    for (i = startValue - 1; i <= endValue - 1; i++) {
      cards.push(data[i]);
    }

    res.send(cards.filter((item) => item !== undefined));
  });
};

getLegth = (req, res) => {
  Card.find().then((data) => {
    res.send(JSON.stringify(data.length));
  });
};

module.exports = { create, getAll, getLegth };
