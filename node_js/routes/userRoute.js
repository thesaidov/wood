const express = require('express')
const {getItems, getItem, postItem, deleteItem, putItem} = require('../controllers/UserController.js')

const router = express()

//  Get all products
router.get('/user', getItems)

//   Get one product by ID
router.get('/user/:id', getItem)

//   Post product
router.post('/user/register', postItem)

// Update Product
router.put('/user/:id', putItem)

// Delete Product
router.delete('/user/:id', deleteItem)

module.exports = router