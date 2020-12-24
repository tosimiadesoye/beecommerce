import { useState, useEffect } from "react";

import { BrowserRouter, Route, useRouteMatch, Switch } from "react-router-dom";

import IndividualItem from "./IndividualItem";
import MakeupCard from "./ProductCard";

const ShopCardContainer = ({ product, makeupProduct, addToCart }) => {
  let { path, url } = useRouteMatch();

  useEffect(() => {
    makeupProduct();
  }, []);

  return (
    <BrowserRouter>
      {product && (
        <div  className="grid grid-cols-3 gap-4" >
          {product.map((data) => (
            <div key={data._id}>
              <MakeupCard info={data} />
            </div>
          ))}
        </div>
      )}
      <Switch>
        <Route exact path={`${path}/:id`}>
          <IndividualItem addToCart={addToCart} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default ShopCardContainer;
