const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))


mongoose.connect('mongodb://localhost/ecommerce')
mongoose.connection.on('connected', function() {
  console.log('Mongodb is running!');
})

app.listen(3000, function() {
  console.log("Server Jalan di port 3000");
})
