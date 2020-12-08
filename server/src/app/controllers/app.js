const productRepo = require('../repository/app');
const Product = require('../models/app');
console.log(Product)
exports.createNewProduct = async (req, res) => {
    
    try {
        const payLoad = {
        id: req.body.id,
        brand: req.body.brand,
        name: req.body.name,
        price: req.body.price,
        price_sign: req.body.price_sign,
        currency: req.body.currency,
        image_link: req.body.image_link,
        product_link: req.body.product_link,
        website_link: req.body.website_link,
        description: req.body.description,
        rating: req.body.rating,
        category: req.body.category,
        product_type: req.body.product_type,
        tag_list: req.body.tag_list,
        product_api_url:req.body,
        api_featured_image: req.body,
        product_colors: req.body.product_colors
        }
        
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
        res.status(400).json({
            error: err,
            status: false,
        })
    }
}
 exports.getProduct = async (req, res) => {
     try {
         let product = await Product.find({})
         console.log(product)
         res.status(200).json({
             status: true,
             data: product
         })
     } catch (err) {
         //bad request
         res.status(400).json({
             error: err.message,
             status: false
         })
     }
 }
/*exports.getProduct = (req, res) => {
    Product.find({}, (err, data) => {
        if (err) {
            console.error(err);
            res.status(400).json({
                status: false,
                error: err.message
            })
        }
        console.log(data);
        res.status(200).json({
            status: true,
            data: data
        })
    });
}

*/




// exports.getProduct = async (req, res) => {
//     // const {page = req.body.PId, limit = 10} = parseInt(req.body)
//     try {
//         // let product = await productRepo.findAllProducts({})
//         let product = await Product.find({}, (err, data) => {
//             if (err) console.error("error: " + err)
//             console.log('data: ', data)
//          })
//         //                 .sort({ brand: 'asc' })
//         //                 .limit(limit)
//         //                 .skip(page * limit)
//         //                 .exec();
                
//         console.log(product)
//         res.status(200).json({
//             status: true,
//             data: product
//         })
//     } catch (err) {
//         //bad request
//         res.status(400).json({
//             error: err.message,
//             status: false
//         })
//     }
// }

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
        let _id = req.params._id
       
        
        let productDetails = await productRepo.updateProductById(
            _id,
            req.body,
            {
                new: true
            }
        )
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
        const query = {doc: req.body.doc}
        let product = await productRepo.updateALotOfProducts(
            {
                "created": false
            },
            {
                "$set":
                    { "created": true }
            }, { "multi": true })
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