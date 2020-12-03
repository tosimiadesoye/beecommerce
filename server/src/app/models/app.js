const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    type: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    // items: [{ name: String },{price: Number} ]
    items: [{
        image: {
            type: String,
           required:true
       },
       name: {
           type: String,
           required: true,
           unique: true
       },
       price: {
           type: Number,
           required: true,
           unique: false
       }
   }]
   
}, { timestamps: true });
// Cloths
const product = mongoose.model("Product", ProductSchema)
module.exports = product;