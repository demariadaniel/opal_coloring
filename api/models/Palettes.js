const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paletteSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  palette: { 
    type: Array, 
    required: true, 
    unique: true 
  },
  user_id: String,
  created_at: Date,
  updated_at: Date
});

// Create a model using schema.
const Palette = mongoose.model('Palette', paletteSchema);

// Make this available to our Node applications.
module.exports = Palette;