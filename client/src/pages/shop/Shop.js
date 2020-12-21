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

import Typography from "@material-ui/core/Typography";
import clsx from "clsx";
import useStyles from "./style";
// import './shop.css'

const Cards = ({ product, makeupProduct }) => {

  const classes = useStyles();

  useEffect(() => {
    makeupProduct();
  }, []);

  return (
    <>
      <Box
        m="70px"
        // style={{
        //   justifyContent: "center",
        //   alignContent: "center",
        //   textAlign: "center",
        // }}
      >
        <Grid container>
          <Grid container>
            {!product ? (
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            ) : (
              product.map((data) => {
                return (
                  <Grid
                    container
                    className={classes.sizes}
                  >
                    <div>
                      <Card key={data._id}
                        className={classes.container}
                        square
                      >
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
                        <CardActions>
                          <Button
                            variant="contained"
                            size="small"
                            color="black"
                          >
                            View item
                          </Button>
                        </CardActions>
                       
                      </Card>
                    </div>
                  </Grid>
                );
              })
            )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Cards;
