import { useState, useEffect } from "react";
import CartService from "../services/product";
import Spinner from "react-bootstrap/Spinner";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Paper } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    border: "1px solid black",
    marginTop: theme.spacing(7),
  },
  marg: {
    marginTop: theme.spacing(7),
    marginLeft: theme.spacing(0),
  },
  itemDisplay: {
     marginTop: theme.spacing(7),
    // marginLeft: theme.spacing(25),
  },
  color: {
    borderRadius: "30%",
    width: "20px",
    height: "20px",
    display: "block",

    "&:hover": {
      backgroundColor: "yellow",
    },
  },
}));

const Cart = (props) => {
  const [cart, setCart] = useState([]);
  const [hover, setHover] = useState(false);
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
    <Box p="50px">
      <Grid className={classes.root}>
        <Box p="50px">
          <Grid justify="space-between" container spacing={24}>
            <h4>Product</h4>
            <h4>Price</h4>
            <h4>Qty</h4>
            <h4>Total</h4>
          </Grid>

          <div>
            {!cart.items ? (
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            ) : (
              cart.items.map((item) => {
                return (
                  <>
                    <Grid
                      justify="space-between"
                      container
                      spacing={1}
                      className={classes.marg}
                      // sm={4} xs={4}
                    >
                      <Grid item>
                        <img
                          src={item.productId.api_featured_image}
                          style={{ width: "10rem" }}
                          alt={item.productId.name}
                        />

                        <p style={{ wordWrap: "break-word" }}>
                          {item.productId.name}
                        </p>

                        {item.productId.product_colors.map((colors) => {
                          return (
                            <p
                              style={{
                                backgroundColor: colors.hex_value,
                                display: "inline-block",
                                wordWrap: "break-word",
                              }}
                              className={classes.color}
                            ></p>
                          );
                        })} 
                      </Grid>

                      <Grid item className={classes.itemDisplay}>
                        <h5> {`£ ${item.price}`}</h5>
                      </Grid>
                      <Grid className={classes.itemDisplay} item>
                        <Grid justify="space-between" container spacing={1}>
                          <button
                            onClick={() =>
                              incrementQuantity(item.productId._id)
                            }
                          >
                            +
                          </button>
                          <h5>{item.quantity}</h5>

                          <div>
                            <button
                              onClick={() =>
                                decrementQuantity(item.productId._id)
                              }
                            >
                              -
                            </button>
                          </div>
                        </Grid>
                      </Grid>

                      <Grid item className={classes.itemDisplay}>
                        <h5>{`£${item.total}`}</h5>
                      </Grid>
                    </Grid>
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
        </Box>
      </Grid>
    </Box>
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
