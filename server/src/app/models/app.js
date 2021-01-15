const mongoose = require('mongoose');
 mongoose.set('debug', true)
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
    brand: String,
    name: String,
    price: String, 
    image_link: String,
    product_link: String,
    website_link: String,
    description: String,
    rating: Number,
    category: String,
    product_type: String,
    tag_list: Array,
    product_api_url:String,
    api_featured_image: String,
    product_colors: Array,
    item_available:Number,
}, { timestamps: true });

const product = mongoose.model("Makeups", ProductSchema)
module.exports = product;