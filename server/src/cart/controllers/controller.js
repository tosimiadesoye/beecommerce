const cartRepository = require("../repository/app");
const productRepository = require("../../app/repository/app");

exports.addToCart = async (req, res) => {
  
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
