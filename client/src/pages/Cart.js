import { useState, useEffect } from "react";
import RenderCart from "./RenderCart";

const Cart = () => {
  const [cart, setCart] = useState([]);
 const [total, setTotal] = useState(0)

  const incrementQuantity = (id) => {
    const product = JSON.parse(localStorage.getItem("products"));
    for (let i = product.length - 1; i >= 0; i--) {
      if (product[i].productId._id === id) {
        console.log(product[i])
        product[i].quantity = product[i].quantity + 1;
        product[i].subTotal = product[i].subTotal * product[i].quantity;
        break;
      }
    }
    localStorage.setItem('products', JSON.stringify(product))
  };
  const decrementQuantity = (id) => {
    const product = JSON.parse(localStorage.getItem("products"));
    for (let i = product.length - 1; i >= 0; i--) {
      if (product[i].productId._id === id) {
        console.log(product[i])
        product[i].quantity = product[i].quantity - 1;
        product[i].subTotal = product[i].subTotal * product[i].quantity;
        break;
      }
    }
   localStorage.setItem('products', JSON.stringify(product))
    
  };

  const calTotal = () => {
    const product = JSON.parse(localStorage.getItem("products"));
    if (product !== null) {
      let addSubtotal = product.map(item => item.subTotal).reduce((accumulator, nextValue) => accumulator + nextValue)
      setTotal(addSubtotal)
    }
  };
  
  const showProduct = () => {
    const product = localStorage.getItem("products");
    if (product !== null) {
      setCart(JSON.parse(product));
    }
  };
console.log(total)
  useEffect(() => {
    showProduct();
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
          {cart.map((item, id) => {
            return (
              <div key={id} className="flex flex-row gap-4 space-x-4 ">
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
      <h3>{!total? "": total}</h3>  
    </div>
  );
};

export default Cart;


