var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var customerSchema = new Schema ({
  "name":String,
  "facebookid":String,
  "email": String,
});

var Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
