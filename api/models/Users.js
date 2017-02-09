const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
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
  created_at: Date,
  updated_at: Date
});

// Create a model using schema.
const User = mongoose.model('User', userSchema);

// Make this available to our Node applications.
module.exports = User;