const { Schema, model, Types } = require("mongoose");

const Card = new Schema(
  {
    word: {
      type: String,
      require: true,
    },
    translete: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: false,
    },
    context: {
      type: String,
      require: false,
    },
  },
  { timestamps: true }
);

module.exports = model("card", Card);
