const mongoose = require("mongoose");
mongoose.set("debug", true);
const Schema = mongoose.Schema;
//for holding the instance of a product
let CartItemSchema = new Schema(
  {
    productId: {
      type: mongoose.Schema.Types.Object,
      ref: "Makeups", //The model that populate() should use if populating this path.
        },
        quantity: {
            default: 1,
            type: Number
      }
  },
  { timestamps: true }
);

//this would hold the items in our cart
const CartSchema = new Schema(
  {
        items: [CartItemSchema],
        
  },
  { timestamps: true }
);

const cart = mongoose.model("Cart", CartSchema, "cart");
module.exports = cart;
