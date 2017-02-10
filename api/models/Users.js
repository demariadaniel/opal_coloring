const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
      type: String,
      required: true,
      unique: true
    },
    password: {
        type: String,
        required: true,
        unique: false
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
        colors: Array,
        index: Number,
    },
    scenes: Array,
    colors: Array,
    slider: Array,
    created_at: Date,
    updated_at: Date
    });

// Create a model using schema.
const User = mongoose.model('User', userSchema);

// Make this available to our Node applications.
module.exports = User;