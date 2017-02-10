const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paletteSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  palette: [
    {unique: false,
      color: String,
      name: String,
      change: Boolean},
    {unique: false,
      color: String,
      name: String,
      change: Boolean},
    {unique: false,
      color: String,
      name: String,
      change: Boolean},
    {unique: false,
      color: String,
      name: String,
      change: Boolean},
    {unique: false,
      color: String,
      name: String,
      change: Boolean},
    {unique: false,
      color: String,
      name: String,
      change: Boolean},
    {unique: false,
      color: String,
      name: String,
      change: Boolean},
    {unique: false,
      color: String,
      name: String,
      change: Boolean},
    {unique: false,
      color: String,
      name: String,
      change: Boolean},
    {unique: false,
      color: String,
      name: String,
      change: Boolean}
  ],
  userName: {
      type: String,
      required: true,
      unique: false
  },
  created_at: Date,
  updated_at: Date
});

// Create a model using schema.
const Palette = mongoose.model('Palette', paletteSchema);

// Make this available to our Node applications.
module.exports = Palette;