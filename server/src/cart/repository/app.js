const Cart = require("../models/models");

//creating two methods that will get all cart items in our database and add an item to the cart model
exports.cart = async () => {
    const carts = await Cart.find().populate({// Population is the process of automatically replacing 
        //the specified paths in the document with document(s) from other collection(s).
        path: "items.productId",
        select: 'name price total'
    })
    console.log(carts)
    return carts[0];
}

exports.addItem = async payLoad => {
    const newItem = await Cart.create(payLoad);
    return newItem
}