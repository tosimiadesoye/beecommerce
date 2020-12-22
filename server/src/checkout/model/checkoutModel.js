const mongoose = require('mongoose');
mongoose.set('debug', true)
const Schema = mongoose.Schema;

const Checkout = new Schema({
    cartProducts: {
        type: mongoose.Schema.Types.Object,
        ref: "cart"
    },
    card: Number,
    date: Number,
    cvs: Number
})

const checkout = mongoose.model("checkout", Checkout, "checkout");
module.exports = checkout 
