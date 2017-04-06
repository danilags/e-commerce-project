const express = require('express')
const router = express.Router()
const Item = require('../controller/item')

/* GET ITEMS */
router.get('/item', Item.readItems)

/* POST ADD NEW ITEMS*/
router.post('/item', Item.addItem)

/* PUT UPDATE ITEM */
router.put('/item/:id', Item.updateItem)

/* DELETE ITEM */
router.delete('/item/:id', Item.deleteItem)

module.exports = router