var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var costumersSchema = new Schema ({
  "name":String,
  "facebookid":String,
  "email": String,
});

var Costumer = mongoose.model('Costumer', costumersSchema);

module.exports = Costumer;
