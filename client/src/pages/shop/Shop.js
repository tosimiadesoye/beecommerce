import { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import CardActionArea from "@material-ui/core/CardActions";
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import useStyles from "./style";
import IndividualItem from './IndividualItem'
// import './shop.css'

const ShopAll = ({ product, makeupProduct, addToCart }) => {
  const classes = useStyles();
  let { path, url } = useRouteMatch()
 
  useEffect(() => {
    makeupProduct();
  }, []);

  return (
    <>
      <Box m="70px">
        <Grid container>
          <Grid container>
            {!product ? (
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            ) : (
              product.map((data, index) => {
                console.log(data)
                return (
                  <Grid container className={classes.sizes}>
                    <div>
                      <Card key={data._id} className={classes.container} square>
                        <CardActionArea>
                          <CardMedia
                            component="img"
                            alt={data.name}
                            style={{ width: "5rem" }}
                            image={data.api_featured_image}
                            title={data.name}
                          />
                          <CardContent>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              component="p"
                            >
                              {data.name}
                            </Typography>
                            <Typography
                              gutterBottom
                              variant="hp"
                              component="h2"
                            >
                              {`£ ${data.price}`}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        
                        <Link 
                           to={{
                            pathname: `${url}/${index}`,
                            state:{itemData:data}
                          }}
                        > 
                        <CardActions>
                          <Button
                            variant="contained"
                            size="small"
                            color="black"
                            // component={Link}
                           
                          >
                            View item
                          </Button>
                        </CardActions>
                         </Link> 
                      </Card>
                    </div>
                  </Grid>
                );
              })
            )}
          </Grid>
        </Grid>
      </Box>
   
     <Switch>
        <Route exact path={ `${path}/:id`}
        >  
         <IndividualItem  addToCart={ addToCart}/>
        </Route>
        </Switch>
    </>
  );
};

export default ShopAll;
