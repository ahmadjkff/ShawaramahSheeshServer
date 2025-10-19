const mongoose = require("mongoose");

const additionsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
});
const additions = mongoose.model("additions", additionsSchema);
module.exports = additions;
