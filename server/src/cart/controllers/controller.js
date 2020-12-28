const cartRepository = require("../repository/app");
const productRepository = require("../../app/repository/app");

exports.addToCart = async (req, res) => {
  let { productId } = req.body;

  let quantity = req.body.quantity

  try {
    let cart = await cartRepository.cart(); //find cart
    let productDetails = await productRepository.findProductById(productId);
   
    if (productDetails) {
      const cartData = {
        items: [
          {
            productId: productId,
            quantity: quantity,
          },
        ]
      };
      cart = await cartRepository.addItem(cartData); //create this item
      // let data = await cart.save();
      res.json(cart);
    }

    if (cart) {
      const index = cart.items.findIndex(item => item.productId._id == productId);
      if (index !== -1) {
        cart.items[index].quantity = cart.items[index].quantity + quantity;
        
      } else {
        return res.status(400).json({
          type: "Invalid",
          msg: "Invalid request",
        });
      }
      let data = await cart.save();
      res.status(200).json({
        type: "success",
        mgs: "Process Successful",
        product: data,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({
      type: "Invalid",
      msg: "Something Went Wrong",
      error: error,
    });
  }
};

exports.getCart = async (req, res) => {
  try {
    let cart = await cartRepository.cart();

    if (!cart) {
      return res.status(400).json({
        type: "Invalid",
        msg: "Cart not found",
      });
    }
    res.status(200).json({
      status: true,
      product: cart,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      type: "Invalid",
      msg: "Something went wrong",
      err: err,
    });
  }
};
exports.emptyCart = async (req, res) => {
  try {
    let cart = await cartRepository.cart();
    cart.items = [];
    cart.subTotal = 0;
    let data = await cart.save();
    res.status(200).json({
      type: "Success",
      mgs: "Cart has been emptied",
      product: data,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      type: "Invalid",
      msg: "Something went wrong",
      err: err,
    });
  }
};
