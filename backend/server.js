require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productModel')

const PORT = process.env.PORT || 3000
const MONGO_URL = process.env.MONGO_URL

const app = express();

app.use(express.json())

app.get('/products', async (req, res) =>{
    try{
        const products = await Product.find({})
        res.status(200).json(products)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

app.post('/product' , async (req, res) =>{
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})

mongoose.
connect(MONGO_URL)
.then(() =>{
    app.listen(PORT, () =>{
        console.log('backend is running on port 3000');
    })
}).catch((error) =>{
    console.log(error);
})