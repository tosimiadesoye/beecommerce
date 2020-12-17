import { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(10),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(5.5),
    backgroundColor: '#f3e5f5',

  },
  text: {
    boxShadow: '0 0 10px 0',
    borderRadius:'1px',
  }
}));

const Shop = ({ product, makeupProduct, addToCart }) => {
  
  const classes = useStyles();

  useEffect(() => {
    makeupProduct();
  }, []);

  const FormRow = () => {
    return (
      <>
        {!product ? (
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
          product.map((data) => {
            return (
              <Grid container item xs={4}>
                <Paper key={data._id}
                  className={classes.paper}
                  elevation={3}
                  // variant="outlined" square
                >
                  <div className="child">
                    <img
                      //  className={classes.image}
                      src={data.api_featured_image}
                       style={{ width: "10rem" }}
                      alt="api featured image"
                    />
                    {/* <p>{ data.description}</p> */}
                   
                    <h5 style={{marginTop: '40px'}}>{data.name}</h5>
                    <p>{data.category}</p>
                    <p>{data.rating}</p>
                    <h4> {`£ ${data.price}`}</h4>
                  </div>
                  <div>
                   {data.product_colors.map((colors) => {
                      return (
                        <p style={{ color: colors.hex_value }}>
                          {/* {colors.hex_value} */}
                        </p>
                      );
                    })} 
                </div>
                  <Button
                    size="large"
                    variant="contained"
                    aria-label="add to shopping cart"
                    onClick={() => addToCart(data._id, 1)}
                  >
                    Add to bag
                    <AddShoppingCartIcon />
                  </Button>
                </Paper>
              </Grid>
            );
          })
        )}
      </>
    );
  }
  return (
    <Container lassName={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Shop;
