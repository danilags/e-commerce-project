var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var itemSchema = new Schema ({
  "name":String,
  "desc": String,
  "picture_url":String,
  "stock":Number,
  "price":String,
});

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;
