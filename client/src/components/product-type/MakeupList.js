import React, { useState, useEffect } from "react";
import IndividualItem from "./IndividualItem";
import { BrowserRouter, Route, Switch, useRouteMatch } from "react-router-dom";

import MakeupCard from "./MakeupList";
const MakeupList = (props) => {
  const { type, params, addToCart, makeup_type, productType } = props;
  let { url } = useRouteMatch();
console.log(props)
  useEffect(() => {
    productType();
  }, []);

  return (
    <BrowserRouter>
      {makeup_type && (
        <div className="grid grid-cols-3 gap-4" >
          {makeup_type.map((type) => {
            if (params.slug === type.product_type) {
              return <MakeupCard info={type} key={type._id}/>;
            }
          })}
        </div>
      )}

      <Switch>
        <Route
          exact
          path={`${url}/:_id`}
          render={({ match }) => (
            <IndividualItem {...match} type={type} addToCart={addToCart} />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default MakeupList;
