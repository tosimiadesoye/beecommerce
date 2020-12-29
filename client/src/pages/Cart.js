import { useState, useEffect } from "react";
import CartService from "../services/product";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const showProduct = () => {
    const product = localStorage.getItem("cart");

    if (product !== null) {
      setCart(JSON.parse(product));
    }
  };

  console.log(cart);
  useEffect(() => {
    showProduct();
  }, []);
  return (
    <div className='container h-50 w-50 mt-10 shadow-lg bg-red-300'>
      <div className="flex flex-row space-x-4 gap-4 p-9  ">
        <h4 className="">Product</h4>
        <h4 className="">Price</h4>
        <h4 className="">Qty</h4>
        <h4 className=" sm:overflow-clip overflow-hidden ">Total</h4>
      </div>

      {cart && (
        <div>
          {cart.map((item) => {
            console.log(item);
            return (
              <div  className="flex flex-row gap-4 space-x-4 ">
                <div>
                  <img
                    src={item.api_featured_image}
                    className='w-40'
                    alt={item.name}
                  />
                  <p style={{ wordWrap: "break-word" }}>{item.name}</p>
                </div>
                <div>
                  {" "}
                  <h5> {`£ ${item.price}`}</h5>
                </div>

                <div>
                  <button>-</button>
                  <button>1</button>
                  <button>+</button>
                </div>
<div><button>£20</button></div>
                
              </div>
            );
          })}
        </div>
      )}
      <div></div>
    </div>
  );
};

export default Cart;

{
  /* <button onClick={() => decrementQuantity(item.productId._id)}>
x

</button> */
}
{
  /* */
}
