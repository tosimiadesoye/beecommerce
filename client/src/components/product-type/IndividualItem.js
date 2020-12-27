import React from "react";
import { useLocation } from "react-router-dom";

const IndividualItem = () => {
  let location = useLocation();
  let id = location.state.itemData;

  return (
    <div key={location.key}>
      <p>{id.brand}</p>
    </div>
  );
};

export default IndividualItem;
