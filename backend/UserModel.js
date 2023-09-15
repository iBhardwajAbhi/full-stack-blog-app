const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const user = new Schema({
  username: { type: String, required: true, minLength: 4, unique: true },
  password: { type: String, required: true, minLength: 4 },
});

module.exports = mongoose.model('User', user);
