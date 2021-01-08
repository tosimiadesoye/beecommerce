const Order = require("../models");
const productRepo = require('../../app/repository/app.js')
const httpResponse = require('../../utils')
exports.postOrder = async () => {
   const{productId}= req.body
    try {
        const payLoad = {
           productId: productId,
            quantity: req.body.quantity,
            total: req.body.total,
       } 
         const itemsOrdered = await Order.create(payLoad)
        const productDetails = await productRepo.findProductById(productId._id)

        if (productDetails) {
            return httpResponse.send(itemsOrdered, 201, 'order created')
        }
  } catch (error){
 httpResponse.send(error, 400, 'bad request')
  }
};

exports.getOrder = async () => {
    try {
        let order = await Order.find()
        httpResponse.send(order, 200, 'order sent')
    } catch (error){
        httpResponse.send(error, 400, 'bad request')
    }
}