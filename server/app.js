const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express()
const api = require('./routes/api');
const cors =require('cors');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

var dbconfing = {
  dev:'mongodb://localhost/ecommerce-project',
  test:'mongodb://localhost/ecommerce-test'
}
console.log(dbconfing[process.env.NODE_ENV || "dev"]);
mongoose.connect(dbconfing[process.env.NODE_ENV || "dev"],
  function(err,succ){
    if (err) {
      console.log(err);
    } else {
      console.log('conected to ' +app.settings.env);
    }
  })

mongoose.connection.on('connected', function() {
  console.log('Mongodb is running!');
})

app.use('/api',api);
app.use(cors());
app.listen(3000, function() {
  console.log("Server Jalan di port 3000");
})
