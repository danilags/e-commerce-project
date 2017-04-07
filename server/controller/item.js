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
        res.send(err)
      } else {
        res.send(items)
      }
    })
  },
  updateItem : (req, res)=> {
    Item.findById(req.params.id, (err,item)=> {
      if(err) res.send(err)
      item.name = req.body.name ? req.body.name : item.name
      item.desc = req.body.desc ? req.body.desc : item.desc
      item.picture_url = req.body.picture_url ? req.body.picture_url : item.picture_url
      item.stock = req.body.stock ? req.body.stock : item.stock
      item.price = req.body.price ? req.body.price : item.price
      item.save((err,updatedItem)=> {
        if(err){
          res.send(err)
        } else {
          res.send(updatedItem)
        }
      })
    })
  },
  deleteItem : (req, res)=> {
    Item.findByIdAndRemove(req.params.id, (err,item)=> {
      if(err){
        res.send(err)
      } else {
        res.send(item)
      }
    })
  }
}