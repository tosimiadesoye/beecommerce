import { useState, useEffect } from "react";
import CartService from "../services/product";

const Cart = (props) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    cartItems();
  }, []);

  const cartItems = async () => {
    await CartService.getCart()
      .then((res) => {
        setCart(res.data.product);
      })
      .catch((error) => console.log(error));
  };
  const incrementQuantity = async (id, quantity) => {
     
} 
console.log(cart)
  return (
    <div> 
      <div>
        <h4>Product</h4>
        <h4>Price</h4>
        <h4>Qty</h4>
        <h4>Total</h4>
      </div>

      {cart && (
        <div>
          {cart.map((cartItem) => cartItem.items.map((item) => {
            console.log(item)
              return (
                <>
                  <img
                    src={item.productId.api_featured_image}
                    style={{ width: "10rem" }}
                    alt={item.productId.name}
                  />
  
                  <p style={{ wordWrap: "break-word" }}>{item.productId.name}</p>
  
                  <h5> {`£ ${item.productId.price}`}</h5>
                  <button onClick={()=>incrementQuantity(item.productId._id)}>+</button>
                </>
              );
          }
            
            
          ))}
        </div>
      )}
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
