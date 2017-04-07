const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 3000 || process.env.PORT
const app = express()

/* APP CONFIG */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

var dbconfig = {
  development:'mongodb://localhost/ecommerce',
  test:'mongodb://localhost/ecommerce-test'
}
mongoose.Promise = global.Promise
mongoose.connect(dbconfig[app.settings.env],
  function(err,succ){
    if (err) {
      console.log(err);
    } else {
      console.log('connected to ' +app.settings.env);
    }
  })
mongoose.connection.on('connected', function() {
  console.log('Mongodb is running!');
})

/* ROUTES */
const item = require('./routes/item')
const customer = require('./routes/customer')
const mail = require('./routes/mail')

app.use('/api', item)
app.use('/api', customer)
app.use('/api', mail)

/* APP LISTEN */
const server = app.listen(port, function() {
  console.log("Server Jalan di port 3000");
})

module.exports = server
