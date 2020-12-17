import { useState, useEffect } from "react";
import CartService from "../services/product";
import Spinner from "react-bootstrap/Spinner";
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1)
    },
  },
}))

const Cart = (props) => {
  const [cart, setCart] = useState([]);
  const classes = useStyles();
  
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
  const incrementQuantity = async (id) => {
    try {
      const response = await CartService.postCart(id, 1);
      console.log(response);
      cartItems();
    } catch (err) {
      console.log(err);
    }
  };
  //doesn't decrement the item and instead removes the whole item
  
  const decrementQuantity = async (id) => {
    try {
      const response = await CartService.postCart(id, -1);
      console.log(response);
      cartItems();
    } catch (err) {
      console.log(err);
    }
  };

  const emptyCartItem = async () => {
    try {
      const response = CartService.emptyCart();
       await response;
      cartItems();
      props.history.push("/");
    } catch (err) {
      console.log(err);
    }
  };
  console.log(cart);
  return (
    <div className={classes.root}>
      {!cart.items ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        cart.items.map((item) => {
          return (
            <>
              <div key={item._id} >
                <h4>{item.productId.name}</h4>
                <img
                  src={item.productId.api_featured_image}
                  style={{ width: "10rem" }}
                  alt="api featured image"
                />
                <h6>{item.productId.name}</h6>
                <p>{item.productId.category}</p>
                <p>{item.productId.rating}</p>
                <h4> {`£ ${item.price}`}</h4>
                <button onClick={() => incrementQuantity(item.productId._id)}>
                  +
                </button>
                {`you have ${item.quantity} ${item.productId.name} in total`}
                <button onClick={() => decrementQuantity(item.productId._id)}>
                  -
                </button>
                <h5>{`total price ${item.total}`}</h5>

                <div>
                  {/* {item.productId.product_colors.map((colors) => {
                      return (
                        <p style={{ color: colors.hex_value }}>
                          {colors.hex_value}
                        </p>
                      );
                    })} */}
                </div>
              </div>
            </>
          );
        })
      )}
      <div>
        {/* key={!product?"":product._id} */}
        <h6>subTotal{cart.subTotal}</h6>
        <button onClick={() => emptyCartItem()}>Empty cart</button>
      </div>
    </div>
  );
};

export default Cart;
