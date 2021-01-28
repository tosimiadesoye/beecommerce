const Order = require("../models");
const productRepo = require("../../app/repository/app.js");
const httpResponse = require("../../utils");
exports.createOrderedItem = async (req, res) => {
  try {
    const payLoad = {
      productId: req.body.productId,
      quantity: req.body.quantity,
      subtotal: req.body.subtotal,
    };
    //    select:'name price total'
    let cart = await Order.find({}).populate({
      path: "item.productId",
    });
    const productDetails = await productRepo.findProductById(
      payLoad.productId._id
    );

    if (productDetails) {
      const orderData = {
        order: [payload],
        total: req.body.total,
        shipping: req.body.shipping,
      };
      const itemOrdered = await Order.create({ orderData });
      res.status(201).json({
        status: true,
        product: itemOrdered,
        response: "order created",
      });
      // return httpResponse.send(itemsOrdered, 201, 'order created')
    }
  } catch (error) {
    res.status(400).json({
      status: false,
      error: error,
    });
  }
};

exports.getOrder = async (req, res) => {
  try {
    let order = await Order.find().populate({
      path: "item.productId",
    });
    httpResponse.send(order, 200, "order sent");
  } catch (error) {
    httpResponse.send(error, 400, "bad request");
  }
};
