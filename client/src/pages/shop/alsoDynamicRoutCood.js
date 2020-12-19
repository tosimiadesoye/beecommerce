import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActions'


import Typography from '@material-ui/core/Typography'
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
              <Grid container item sm={4} xs={2}>
              <Paper key={data._id}
           className={classes.paper}
           elevation={3}
              >
                <Card className={classes.width}>
             <CardMedia
               className={classes.media}
               image={data.api_featured_image}
               
               title={data.name}
             />
            <CardContent>
               <h6>{data.name}</h6>
              
               
               <p>{data.category}</p>

               <p>{data.rating}</p>
               <h4> {`£ ${data.price}`}</h4>
             
             <div>
                {data.product_colors.map((colors) => {
                   return (
                     <p style={{ color: colors.hex_value }}>
                      
                     </p>
                   );
                 })} 
                    </div>
                    </CardContent>
              <Button
                   size="large"
                   variant="contained"
                   aria-label="add to shopping cart"
                   onClick={()=>addToCart(data._id, 1)} 
                 >
                   Add to bag
                   <AddShoppingCartIcon />
                  </Button>
                  </Card>
            </Paper>
             </Grid>
            );
          })
        )}
      </>
    );
  };
  return (
    <Grid container spacing={1}>
      <Grid container item xs={12} spacing={3}>
        <FormRow />
      </Grid>
    </Grid>
  );
};

export default Shop;
