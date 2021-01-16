import React, { useEffect, useState } from "react";
import { ProductCard } from "..";
const SimilarProducts = (props) => {
  const { similarProduct, similarItem, item } = props;

  useEffect(() => {
    similarProduct();
  }, []);

  return (
    <div>
      {similarItem && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-3">
          {similarItem.map((type) => {
            return (
              <div key={type._id + type.id}>
                <ProductCard info={type} />
              </div>
            );
            //   }
          })}{" "}
        </div>
      )}
    </div>
  );
};

export default SimilarProducts;
