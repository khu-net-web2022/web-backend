const mongoose = require("mongoose");

const counterSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
  },
  seq: {
    type: Number,
    default: 1,
  },
});

const counterModel = mongoose.model("counter", counterSchema);

async function getNextIncrement(name) {
  const nxt = await counterModel.findOneAndUpdate(
    {
      id: name,
    },
    {
      $inc: { seq: 1 },
    },
    { returnOriginal: false }
  );
  return nxt.seq;
}

module.exports = { counterModel, getNextIncrement };
