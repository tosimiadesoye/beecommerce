import React, { useEffect } from "react";
import { ProductCard } from "..";
const SimilarProducts = (props) => {
  const { similarProduct, similarProductItem, item } = props;
 
  useEffect(() => {
    similarProduct(item.category);
  }, []);


  return (
    <div className="item">
      {similarProductItem && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-3">
          {similarProductItem.map((type) => {
            return (
              <div key={type._id + type.id}>
                <ProductCard info={type} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SimilarProducts;
