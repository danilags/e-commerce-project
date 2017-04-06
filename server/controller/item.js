const Item = require('../models/item')

module.exports = {

  addItem : (req,res)=> {
    let newItem = new Item({
      name: req.body.name,
      desc: req.body.desc,
      picture_url: req.body.picture_url,
      stock: req.body.stock,
      price: req.body.price
    })
    newItem.save((err, item)=> {
      if(err){
        res.send(err)
      } else {
        res.send(item)
      }
    })
  },
  readItems : (req, res)=> {
    Item.find({}, (err, items)=> {
      if(err) {
        res.send()
      }
    })
  }
}