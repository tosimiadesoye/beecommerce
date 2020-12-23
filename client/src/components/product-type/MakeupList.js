import React, { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActionArea from "@material-ui/core/CardActions";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import IndividualItem from "./IndividualItem";
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  useRouteMatch,
  matchPath,
} from "react-router-dom";
import clsx from "clsx";
import useStyles from "../../pages/shop/style";
import CardActions from "@material-ui/core/CardActions";
import ating from "@material-ui/lab/Rating";

const MakeupList = (props) => {
  const classes = useStyles();
  const { type, params, addToCart, makeup_type, productType } = props;
  let { path, url } = useRouteMatch();

  console.log(path);
  console.log(url);
  useEffect(() => {
    productType(type);
  }, [type]);

  return (
    <BrowserRouter>
      <Box m="70px">
        <Grid container>
          <Grid container>
            {!makeup_type ? (
              <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
              </Spinner>
            ) : (
              makeup_type.map((type) => {
                if (params.slug === type.product_type) {
                  return (
                    <Grid container className={classes.sizes}>
                      <div>
                        <Card
                          key={type._id}
                          className={classes.container}
                          square
                        >
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              alt={type.name}
                              style={{ width: "5rem" }}
                              image={type.api_featured_image}
                              title={type.name}
                            />
                            <CardContent>
                              <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                              >
                                {type.name}
                              </Typography>
                              <Typography
                                gutterBottom
                                variant="hp"
                                component="h5"
                              >
                                {`£ ${type.price}`}
                              </Typography>

                              <Box
                                component="fieldset"
                                mb={3}
                                borderColor="transparent"
                              >
                                <Rating
                                  name="customized-empty"
                                  defaultValue={type.rating}
                                  precision={0.5}
                                  emptyIcon={
                                    <StarBorderIcon fontSize="inherit" />
                                  }
                                  readOnly
                                />
                              </Box>
                            </CardContent>
                          </CardActionArea>
                          <Link
                            to={{
                              pathname: `${url}/${type._id}`,
                              state: { itemData: type },
                            }}
                          >
                            <CardActions>
                              <Button
                                variant="contained"
                                size="small"
                                color="black"
                              >
                                View item
                              </Button>
                            </CardActions>
                          </Link>
                        </Card>
                      </div>
                    </Grid>
                  );
                }
              })
            )}
          </Grid>
        </Grid>
      </Box>

      <Switch>
        <Route
           exact
          path={`${url}/:_id`}
          render={({ match }) => (
            <IndividualItem
              {...match}
              type={type}
              addToCart={addToCart} />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default MakeupList;
