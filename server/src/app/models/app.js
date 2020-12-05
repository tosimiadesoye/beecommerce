const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    id: Number,
}, { timestamps: true });
// Cloths
const product = mongoose.model("Makeup", ProductSchema)
module.exports = product;