var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var itemSchema = new Schema ({
  "name":{type: String, required: true},
  "desc": {type: String, required: true},
  "picture_url":{type: String, required: true},
  "stock":{type: Number, required: true},
  "price":{type: String, required: true}
});

var Item = mongoose.model('Item', itemSchema);

module.exports = Item;
