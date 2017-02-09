const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  user: {
    userName: {
      type: String,
      required: true,
      unique: false
    },
    id: {
      type: String,
      required: false,
      unique: false
    }
  },
  background: Number,
  sceneIndex: Number,
  coins: Number,
  complete: Number,
  scene: {
      name: String,
      icon: String,
      isUnlocked: Boolean,
      checkmarks: {
          complete: Number,
          checkmarks: Array
      },
      colors: Array
  },
  scenes: Array,
  colors: [
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
  slider: Array,
  created_at: Date,
  updated_at: Date
});

// Create a model using schema.
const User = mongoose.model('User', userSchema);

// Make this available to our Node applications.
module.exports = User;