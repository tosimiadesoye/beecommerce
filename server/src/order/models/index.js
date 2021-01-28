const mongoose = require('mongoose');
mongoose.set('debug', true)
const Schema = mongoose.Schema

const OrderSchema = new Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Makeups'
    },
    quantity: Number,
    subtotal: Number
})

const Total = new Schema({
    item:[OrderSchema],
    total:Number,
    shipping: Number,

},{timestamps: true, collection:'order'})
const order = mongoose.model("Order", Total);
module.exports = order