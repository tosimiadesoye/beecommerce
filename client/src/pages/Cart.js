import { useState, useEffect } from "react";
 import CartService from "../services/product";

const Cart = () => {
  const [cart, setCart] = useState("");
  const [count, setCount] = useState(1);

   const cartItems = async () => {
     await CartService.getCart()
       .then((res) => {
         console.log(res);
         setCart(res);
       })
       .catch((error) => console.log(error));
   };
   console.log(cart);
   useEffect(() => {
     cartItems();
   },[]);

    return (
        <h1>hi</h1>
    );
};

export default Cart;
