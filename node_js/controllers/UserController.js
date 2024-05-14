const User = require('../models/usermoduls')
const asyncHandler = require('express-async-handler')

const getItems = asyncHandler(async(req, res)=>{
    try {
        const products = await User.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

const getItem = asyncHandler(async(req, res)=>{
    try {
        const {id} = req.params;
        const product = await User.find({"_id":id}) 
        res.status(200).json(product)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
})

const postItem = async (req, res)=>{
    try {
        const product = await User.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
}

const putItem = async(req, res)=>{
    try {
        const {id} = req.params;
        const product = await User.findByIdAndUpdate(id, "_id")
        if (!product) {
            // throw new Error(`Cannot find user ID ${id}`)
            return res.status(404).json({message: `Cannot find user ID ${id}`})
        } 
        const updatedProduct = await User.findById(id)
        return res.status(200).json(updatedProduct);
        // return res.json(product)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

const deleteItem = async(req, res)=>{
    try {
        const {id} = req.params;
        const product = await User.findByIdAndDelete(id)
        if (!product) {
            // return res.status(404).json({message: `cannot find product ID ${id}`})
            throw new Error(`Cannot find user ID ${id}`)
        } else {
            res.setHeader("Content-Type","text/html")
            res.status(200).json({"DeletedUser":product});
            res.end()
        } 
        res.status(200).json(product)
    } catch (error) {
        res.status(500)
        throw new Error(error.message)
    }
}
module.exports = {getItems, getItem, postItem, deleteItem, putItem}