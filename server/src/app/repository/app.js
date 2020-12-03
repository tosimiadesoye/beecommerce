const Product = require('../models/app');

exports.createProduct = async payLoad => { 
    const product = await Product.insertMany(payLoad);
    return product
}

exports.findAllProducts = async () => {
    const product = await Product.find();
    return product
} 
    
exports.findProductById = async id => {
    const product = await Product.findById(id);
    return product
} 

exports.deleteProductById = async id => {
    const product = await Product.findByIdAndDelete(id);
    return product

} 
exports.updateProductById = async id => { 
    const product = await Product.findByIdAndUpdate(id);
    return product
}

exports.updateALotOfProducts = async () => {
    const product = await Product.updateMany();
    return product
}  

exports.deleteALotOfProducts = async () => await Product.deleteMany()

