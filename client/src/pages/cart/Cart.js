import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
        //delete a product from local storage if the quantity is zero
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
      let itemCount = cartItem
        .map((item) => item.quantity)
        .reduce((accumulator, nextValue) => accumulator + nextValue, 0);
      let addSubtotal = cartItem
        .map((item) => item.subTotal)
        .reduce((accumulator, nextValue) => accumulator + nextValue, 0)
        .toFixed(2);

      setTotal({ itemCount, addSubtotal });
    }
  };
  const getProductFromStorage = () => {
    return setCart(JSON.parse(localStorage.getItem("cart")));
  };

  const removeOneItemFromCart = (id) => {
    const cartItem = JSON.parse(localStorage.getItem("cart"));
    const remove = cartItem.filter((item) => {
      return item.productId._id !== id;
    });
    localStorage.setItem("cart", JSON.stringify(remove));
    setCart(remove);
  };

  const removeAllProductsFromStorage = () => {
    const remove = localStorage.removeItem("cart");
    setCart(remove);
    window.location.replace("/shop");
  };

  useEffect(() => {
    getProductFromStorage();
    calTotal();
  }, []);
  console.log(total);
  return (
    <div className="container bg-gray-300">
      <div className="flex flex-row gap-8 md:gap-48 p-9 mx-4">
        <h4>Product</h4>
        <h4>Price</h4>
        <h4>Qty</h4>
        <h4>subTotal</h4>
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
                  removeOneItemFromCart={removeOneItemFromCart}
                />
              </div>
            );
          })}
        </div>
      )}
      <div className="float-right flex flex-col gap-5">
        <div className='flex flex-row gap-4'>
        <div>
          <h2>Total Items</h2>
          <h3>{total && total.itemCount} </h3>
        </div>
        <div>
          <h2>Total price</h2>
          <h3>{`£${total && total.addSubtotal}`} </h3>
        </div>

        </div>
        
        <div>
          <button
            className="text-white shadow  bg-black shadow border border-solid
               border-white hover:bg-pink hover:text-black
                active:bg-white-600 font-bold uppercase text-sm px-6 py-3
                 rounded outline-none focus:outline-none mr-1 mb-1"
            type="button"
            style={{ transition: "all .15s ease" }}
            onClick={() => removeAllProductsFromStorage()}
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
            <Link className="text-white" to="/checkout">
              Check out
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
