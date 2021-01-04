import { set } from "mongoose";
import { useState, useEffect } from "react";
import RenderCart from "./RenderCart";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const incrementQuantity = (id) => {
    const cartItem = JSON.parse(localStorage.getItem("cart"));
    for (let i = cartItem.length - 1; i >= 0; i--) {
      if (cartItem[i].productId._id === id) {
        let price = parseFloat(cartItem[i].productId.price);
        cartItem[i].quantity = cartItem[i].quantity + 1;
        cartItem[i].subTotal = price * cartItem[i].quantity;
        break;
      }
    }
    localStorage.setItem("cart", JSON.stringify(cartItem));
    setCart(cartItem);
  };
  const decrementQuantity = (id) => {
    const cartItem = JSON.parse(localStorage.getItem("cart"));

    let index = cartItem.findIndex((item) => item.productId._id === id);
    for (let i = cartItem.length - 1; i >= 0; i--) {
      if (cartItem[i].productId._id === id) {
        let price = parseFloat(cartItem[i].productId.price);
        cartItem[i].quantity = cartItem[i].quantity - 1;
        cartItem[i].subTotal = price * cartItem[i].quantity;
        //delete a cartItem from local storage if the quantity is zero
        if (index !== -1 && cartItem[i].quantity <= 0) {
          cartItem.splice(index, 1);
        }
        break;
      }
    }
    localStorage.setItem("cart", JSON.stringify(cartItem));
    setCart(cartItem);
  };

  const calTotal = () => {
    const cartItem = JSON.parse(localStorage.getItem("cart"));
    console.log(cart)
    if (cartItem !== null) {
      let addSubtotal = cartItem
        .map((item) => item.subTotal)
        .reduce((accumulator, nextValue) => accumulator + nextValue);
      setTotal(addSubtotal);
  
    }
  };

  const getProductFromStorage = () => {
    return setCart(JSON.parse(localStorage.getItem("cart")));
  };

  const removeProductFromStorage = () => {
    const remove = localStorage.removeItem("cart");
    setCart(remove)
    window.location.replace('/')
  };

  useEffect(() => {
    getProductFromStorage();
    calTotal();
  }, []);

  return (
    <div className="container h-50 w-100 mt-10 shadow-lg bg-red-300">
      <div className="flex flex-row space-x-4 gap-4 p-9  ">
        <h4 className="">Product</h4>
        <h4 className="">Price</h4>
        <h4 className="">Qty</h4>
        <h4
        // className=" sm:overflow-clip overflow-hidden"
        >
          subTotal
        </h4>
      </div>

      {cart && (
        <div>
          {cart.map((item) => {
            return (
              <div
                key={item.productId.name}
                className="flex flex-row gap-4 space-x-4 "
              >
                <RenderCart
                  info={item}
                  incrementQuantity={incrementQuantity}
                  decrementQuantity={decrementQuantity}
                />
              </div>
            );
          })}
        </div>
      )}
      <h2>Total</h2>
      <h3>{`£${total && total}`}</h3>
      <button onClick={() => removeProductFromStorage()}>Empty cart</button>
      <button>
                Check out
              </button>
    </div>
  );
};

export default Cart;
