import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RenderCart from "./RenderCart";
import Shipping from "../../components/shipment/Shipping";
const Cart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const editQuantity = (id, checkBoolean) => {
    const cartItem = JSON.parse(localStorage.getItem("cart"));

    let index = cartItem.findIndex((item) => item.productId._id === id);
    for (let i = cartItem.length - 1; i >= 0; i--) {
      if (cartItem[i].productId._id === id) {
        let price = parseFloat(cartItem[i].productId.price).toFixed();
        //increment when it true and decrement when false
        cartItem[i].quantity = checkBoolean
          ? cartItem[i].quantity + 1
          : cartItem[i].quantity - 1;
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
    calTotalAndItemCount(cartItem);
  };

  const calTotalAndItemCount = (cartItem) => {
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

  const removeOneItemFromCart = (id) => {
    const cartItem = JSON.parse(localStorage.getItem("cart"));
    const remove = cartItem.filter((item) => {
      return item.productId._id !== id;
    });
    localStorage.setItem("cart", JSON.stringify(remove));
    setCart(remove);
  };

  const removeAllProductsInStorage = () => {
    const remove = localStorage.removeItem("cart");
    setCart(remove);
  };

  const redirectToShopAll = () => {
    window.location.replace("/shop");
  };

  useEffect(() => {
    const getProductFromStorage = () => {
      const storage = JSON.parse(localStorage.getItem("cart"));
      calTotalAndItemCount(storage);
      setCart(storage);
    };
    getProductFromStorage();
  }, []);

  if (cart === null)
    return (
      <div className="flex flex-col items-center my-20">
        <h1 className="text-center text-purple-500"> Your Cart is empty</h1>
        <Link
          to="/shop"
          className="text-white shadow  bg-black shadow border border-solid border-white 
              hover:bg-pink hover:text-black active:bg-white-600 font-bold uppercase
               text-sm px-6  py-3 rounded outline-none focus:outline-none mr-1 "
          type="button"
          style={{ transition: "all .15s ease" }}
        >
          Go to shopping
        </Link>
      </div>
    );

  return (
    <div className="container">
      <div className="flex flex-col lg:flex-row ">
        {cart && (
          <div className="bg-gray-300 ">
            {cart.map((item) => {
              return (
                <div key={item.productId.name} className="border-b-2">
                  <RenderCart
                    info={item}
                    editQuantity={editQuantity}
                    removeOneItemFromCart={removeOneItemFromCart}
                  />
                </div>
              );
            })}
          </div>
        )}
        <div className="shadow  rounded ">
          <div className="m-5 ">
            <div className=" flex flex-col gap-5 text-center text-purple-500">
              <div>
                <h3>Total Items</h3>
                <h4>{total.itemCount} </h4>
              </div>
              <div>
                <h4>SubTotal price</h4>
                <h4>{`£${total.addSubtotal}`} </h4>
              </div>
            </div>
          </div>
         
           <Shipping
            cart={cart}
            total={total}
            removeAllProductsInStorage={removeAllProductsInStorage}
            redirectToShopAll={redirectToShopAll}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
