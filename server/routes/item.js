const express = require('express')
const router = express.Router()
const Item = require('../controller/item')

/* GET ITEMS */
router.get('/', Item.readItems)

/* POST ADD NEW ITEMS*/
router.post('/', Item.addItem)

/* PUT UPDATE ITEM */
router.put('/:id', Item.updateItem)

/* DELETE ITEM */
router.delete('/:id', Item.deleteItem)

module.exports = router