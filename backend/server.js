require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/productModel')
const cors = require('cors')


const PORT = process.env.PORT || 10000
const MONGO_URL = process.env.MONGO_URL
const URL = process.env.URL

const app = express();

app.use(express.json())

app.use(
    cors({
        origin: "*"
    })
)

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


app.delete('/product/:id' , async (req, res) =>{
    try{
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id)
        if(!product){
            return res.status(404).json({message: `cannot fint any product with ID ${id}`})
        }
        res.status(200).json(product)
    }catch(error){
        res.status(500).json({message: error.message})
    }
})


   



    mongoose.
connect(MONGO_URL)
.then(() =>{
    app.listen(PORT, () =>{
        console.log(`backend is running on port ${PORT}`);
    })
}).catch((error) =>{
    console.log(error);
})