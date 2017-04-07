var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var CartSchema = new Schema ({
  "facebookid": {type: String, ref: 'Customer'},
  "date": Date,
  "item_list":[{ type: Schema.Types.ObjectId, ref: 'Item'}]
});

var Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;
