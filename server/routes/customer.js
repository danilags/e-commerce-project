var express = require('express')
var router = express.Router()
const Customer = require('../controller/customer')

/* GET users listing. */
router.get('/cust', Customer.listCustomer)

/* POST user login */
router.post('/cust',  Customer.signIn)

module.exports = router
