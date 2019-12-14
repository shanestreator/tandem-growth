const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const DataSchema = new Schema({
  plantId: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  days_water_after: {
    type: Number,
    required: true
  }
});

module.exports = User = mongoose.model("data", DataSchema);
