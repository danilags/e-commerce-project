const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

var dbconfing = {
  dev:'mongodb://localhost/ecommerce',
  test:'mongodb://localhost/ecommerce-test'
}

mongoose.connect(dbconfing[app.settings.env],
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

app.listen(3000, function() {
  console.log("Server Jalan di port 3000");
})
