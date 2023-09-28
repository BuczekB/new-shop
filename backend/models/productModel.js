const mongoose = require('mongoose')


const productSchema = mongoose.Schema(
    {
        name:{
            type: String,
            required: [true]
        },
        quantity:{
            type: Number,
            required: true,
            default: 0
        },
        price:{
            type:Number,
            required: true
        },
        image:{
            type: String,
            required: false,
            default: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b3JhbmdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
        }
    },
    {
        timeStamps: false
    }
)


const Product = mongoose.model('Product', productSchema)


module.exports = Product