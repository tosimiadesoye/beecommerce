import React, { useEffect, useState } from "react";
import { ProductCard } from "../../components";
const SimilarProducts = (props) => {
  const { similarProduct, similarItem, item, makeupType } = props;

  useEffect(() => {
    similarProduct();
  }, []);
  console.log(similarItem);

  return (
    <div>
      {similarItem &&
        similarItem.map((type) => {
          console.log(type);
          return (
            <div>
              <ProductCard info={type} />
            </div>
          );
        })}
    </div>
  );
};

export default SimilarProducts;
