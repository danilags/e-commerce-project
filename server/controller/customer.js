const Customer = require('../models/customer')

module.exports = {

  signIn : (req, res)=> {
    console.log(req.body)
    Customer.findOne({facebookid : req.body.facebookid}, (err, cust)=> {
      if(err) {
        res.send('Error finding data')
      } else if(cust){
        res.send(cust)
      } else {
        let newCust = new Customer({
          name : req.body.name,
          facebookid : req.body.facebookid,
          email : req.body.email
        })
        newCust.save(function(err, customer) {
          if(err) {
            res.send('Failed to add data')
          } else {
            res.send(customer)
          }
        })
      }
    })
  },
  listCustomer : (req, res)=> {
    Customer.find({}, (err, customers)=> {
      if(err) {
        res.send('Request Data to server failed')
      } else {
        res.send(customers)
      }
    })
  },

  deleteCustomer : (req, res) => {
    Customer.findByIdAndRemove(req.params.id,
      function(err, data) {
        if (err) {
          res.send(err)
        } else {
          res.send("Customer Successful Deleted !")
        }
      })
  }
}
