/* jshint esversion: 6 */

const mongoose = require("mongoose");

const { Schema } = mongoose;

const reviewSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  dealership: {
    type: Number,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  purchase: {
    type: Boolean,
    required: true,
  },
  purchase_date: {
    type: String,
    required: true,
  },
  car_make: {
    type: String,
    required: true,
  },
  car_model: {
    type: String,
    required: true,
  },
  car_year: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Review", reviewSchema);
