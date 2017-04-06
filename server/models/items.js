var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var itemSchema = new Schema ({
  "picture_url":String,
  "name":String,
  "desc": String,
  "stock":Number,
  "price":String,
});

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;
