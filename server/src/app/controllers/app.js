const productRepo = require('../repository/app');

exports.createNewProduct = async (req, res) => {
    
    try {
        const payLoad = {
            type: req.body.type,
            //  image: req.file.path,
            image: req.body.image,
            items: req.body.items
        }
        console.log(payLoad)
        let product = await productRepo.createProduct({
            ...payLoad
        })
        console.log(product)
        res.status(201).json({
            status: true,
            data: product
        })
    } catch(err){
        console.log(err)
        //internal server error
        res.status(500).json({
            error: err,
            status: false,
        })
    }
}

exports.getProduct = async (req, res) => {
    
    try {
        let product = await productRepo.findAllProducts()
        console.log(product)
        res.status(200).json({
            status: true,
            data: product
        })
    } catch (err) {
        //bad request
        res.status(400).json({
            error: err,
            status: false
        })
    }
}

exports.productById = async (req, res) => {
    
    try {
        let _id = req.params.id
        let productDetails = await productRepo.findProductById(_id);
        console.log(productDetails)
        res.status(200).json({
            status: true,
            data: productDetails
        })
    } catch (err){
        res.status(400).json({
            status: false,
            error: err
        })
    }
} 

exports.getProductByIdAndDelete = async (req, res) => {
    try {
        let _id = req.params.id
        let productDetails = await productRepo.deleteProductById(_id)
        console.log(productDetails)
        res.status(200).json({
            status: true,
            data: productDetails
        })
    } catch (err){
        res.status(400).json({
            status: false,
            error: err
        })
    }
}

exports.getProductByIdAndUpdate = async (req, res) => {
    try {
        let _id = req.params.id
       
        
        let productDetails = await productRepo.updateProductById(_id,{}, {$set: {}}, {upsert: true})
        console.log(productDetails)
        res.status(200).json({
            status: true,
            data: productDetails
        })
    } catch (err){
        res.status(500).json({
            status: false,
            error: err
        })
    }
}

//not working
exports.updateManyProducts = async (req,res) => {
    try {
        
        let product = await productRepo.updateALotOfProducts({}, { $set: {}}, { upsert: true })
        console.log(product)
        res.status(200).json({
            status: true,
            data: product
        })
    } catch (err){
        res.status(500).json({
            status: false,
            error: err
        })
}
}

exports.deleteManyProducts = async (req, res) => {
    try {
        let product = await productRepo.deleteALotOfProducts()
            console.log(product)
            res.status(200).json({
                status: true,
                data: product
            })
        } catch (err){
            res.status(500).json({
                status: false,
                error: err
            })
    }
}