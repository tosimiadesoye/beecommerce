const cartRepository = require('../repository/app');
const productRepository = require('../../app/repository/app')

exports.addToCart = async (req, res) => {
    let { productId } = req.body;
    console.log(productId)
    let quantity = Number.parseInt(req.body.quantity)
    console.log(quantity)
    try {
        let cart = await cartRepository.cart(); //find cart
        let productDetails = await productRepository.findProductById(productId)
        //if the product doesn't exist
        if (!productDetails) {
            return res.status(400).send({
                type: "Product not found",
                msg: "invalid request"
            })
        }
      
        if (cart) {
            //check if index exists
            console.log(cart)
            const index = cart.items.findIndex(item => item.productId._id == productId);
            console.log(index)
            //------This removes an item from the the cart if the quantity is 
            //set to zero, We can use this method to remove an item from the list------- 
            if (index !== -1 && quantity <= 0) {
                cart.items.splice(index, 1); //replace one element at index
                if (cart.items.length === 0) {
                    cart.subTotal = 0;
                } else {
                    cart.subTotal = cart.items.map(item => item.total).reduce((accumulator, next) => {
                        return accumulator + next
                    });
                }
            }
            else if (index !== -1) { //----------Check if product exist, just add the 
                //previous quantity with the new quantity and update the total price------- 
                cart.items[index].quantity = cart.items[index].quantity + quantity;
                cart.items[index].total = cart.items[index].quantity * productDetails.price;
                cart.items[index].price = productDetails.price
                console.log(cart.items[index].quantity)
                console.log(cart.items[index].total)
                console.log(cart.items[index].price)
                cart.subTotal = cart.items.map(item => item.total).reduce((accumulator, next) => {
                    return accumulator + next
                });
            }
            //----Check if quantity is greater than 0 then add item to items array ---- 
            else if (quantity > 0) {
                cart.items.push({
                    productId: productId,
                    quantity: quantity,
                    price: productDetails.price,
                    total: parseInt(productDetails.price * quantity)
                })
                cart.subTotal = cart.items.map(item => item.total).reduce((acc, next) => acc + next);
            } //----If quantity of price is 0 throw the error ------- 
            else {
                return res.status(400).json({
                    type: "Invalid",
                    msg: "Invalid request"
                })
            }
            let data = await cart.save();
            res.status(200).json({
                type: "success",
                mgs: "Process Successful",
                data: data
            })
        }
        //------------ This creates a new cart and then adds the item to the cart that has been created------------ 
        else {
            const cartData = {
                items: [{
                    productId: productId,
                    quantity: quantity,
                    total: parseInt(productDetails.price * quantity),
                    price: productDetails.price
                }],
                subTotal: parseInt(productDetails.price * quantity)
            }
            cart = await cartRepository.addItem(cartData) //create this item 
            // let data = await cart.save(); 
            res.json(cart);
        }
    } catch (error) {
        console.log(error) 
            res.status(400).json({ 
                type: "Invalid", 
                msg: "Something Went Wrong", 
                error: error 
            }) 
    }
}

exports.getCart = async (req, res) => { 
    try { 
        let cart = await cartRepository.cart() 
        if (!cart) { 
            return res.status(400).json({ 
                type: "Invalid", 
                msg: "Cart not found", 
            }) 
        } 
        res.status(200).json({ 
            status: true, 
            data: cart 
        }) 
    } catch (err) { 
        console.log(err) 
        res.status(400).json({ 
            type: "Invalid", 
            msg: "Something went wrong", 
            err: err 
        }) 
    } 
}
exports.emptyCart = async (req, res) => { 
    try { 
        let cart = await cartRepository.cart(); 
        cart.items = []; 
        cart.subTotal = 0 
        let data = await cart.save(); 
        res.status(200).json({ 
            type: "Success", 
            mgs: "Cart has been emptied", 
            data: data 
        }) 
    } catch (err) { 
        console.log(err) 
        res.status(400).json({ 
            type: "Invalid", 
            msg: "Something went wrong", 
            err: err 
        }) 
    } 
}