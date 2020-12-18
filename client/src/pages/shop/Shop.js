import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActions";

import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import useStyles from "./style";
// import './shop.css'

const Shop = ({ product, makeupProduct, addToCart }) => {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
              <Grid container item sm={4} xs={2} >
                <div  >
                  <Card key={data._id}
                    className={classes.container}
                    // className={classes.width}
                    elevation={3}>
                <img
               className={classes.media}
               src={data.api_featured_image}
               
               alt={data.name}
             />
                   
                   <CardContent className={classes.width}>
                    <div>
                      <h6>{data.name}</h6>

                      <h4> {`£ ${data.price}`}</h4>
                    </div>
                    <Button>View item</Button>
                  </CardContent>
                  </Card>
                  </div>
              </Grid>
            );
          })
        )}
      </>
    );
  };
  return (
    <div>
      <Box m="70px" style={{ border: "3px solid black" }}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <FormRow />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Shop;
