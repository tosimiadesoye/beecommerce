const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//for holding the instance of a product
let CartItemSchema = new Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Makeup"
    },
    Quantity: Number,
    price: Number,
    total: Number
}, { timestamps: true });

//this would hold the items in our cart
const CartSchema = new Schema({
    items: [CartItemSchema],
    subTotal: {
        default: 0,
        type: Number
    }
}, { timestamps: true });

const cart = mongoose.model('Cart', CartSchema);
module.exports = cart;