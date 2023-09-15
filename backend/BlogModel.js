const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blog = new Schema(
  {
    title: { type: String },
    imgUrl: { type: String },
    body: { type: String },
    author: { type: String, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Blog', blog);
