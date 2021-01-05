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
    
    if (cartItem !== null) {
      let addSubtotal = cartItem
        .map((item) => item.subTotal)
        .reduce((accumulator, nextValue) => accumulator + nextValue, 0);
     
      setTotal(addSubtotal);
    }
  };
  const getProductFromStorage = () => {
    return setCart(JSON.parse(localStorage.getItem("cart")));
  };

  const removeProductFromStorage = () => {
    const remove = localStorage.removeItem("cart");
    setCart(remove);
    window.location.replace("/shop");
  };

  useEffect(() => {
    getProductFromStorage();
    calTotal();
  }, []);

  return (
    <div className="container  shadow-lg bg-red-300">
      <div className="flex flex-row gap-8 md:gap-48 p-9 mx-4">
        <h4>Product</h4>
        <h4>Price</h4>
        <h4>Qty</h4>
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
                //
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
      <div className="float-right flex flex-col gap-5">
        <div>
          <h2>Total</h2>
       
          <h3>{`£${total && total}`} </h3>
        </div>
        <div>
          <button
            className="text-white shadow  bg-black shadow border border-solid
               border-white hover:bg-pink hover:text-black
                active:bg-white-600 font-bold uppercase text-sm px-6 py-3
                 rounded outline-none focus:outline-none mr-1 mb-1"
            type="button"
            style={{ transition: "all .15s ease" }}
            onClick={() => removeProductFromStorage()}
          >
            Empty cart
          </button>{" "}
          <button
            className="text-white shadow  bg-black shadow border border-solid border-white 
              hover:bg-pink hover:text-black active:bg-white-600 font-bold uppercase
               text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1"
            type="button"
            style={{ transition: "all .15s ease" }}
          >
            Check out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
