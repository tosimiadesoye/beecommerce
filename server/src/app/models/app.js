const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    id: Number,
    brand: String,
    price: String,
    price_sign: String,
    currency: String,
    image_link: String,
    product_link: String,
    website_link: String,
    description: String,
    rating: Object,
    category: String,
    product_type: String,
    tag_list: Array,
    product_api_url:String,
    api_featured_image: String,
    product_colors: Array
}, { timestamps: true });

const product = mongoose.model("Makeup", ProductSchema)
module.exports = product;