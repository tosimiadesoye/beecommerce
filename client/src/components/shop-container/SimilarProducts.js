import React, { useEffect } from "react";
import { ProductCard } from "..";
const SimilarProducts = (props) => {
  const { similarProduct, similarProductItem, item,query } = props;
 
  useEffect(() => {
    similarProduct(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div className="item">
      {similarProductItem && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-3">
          {similarProductItem.map((type) => {
            if (type._id !== item._id) {
              return (
                <div key={type._id + type.id}>
                  <ProductCard info={type} />
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
};

export default SimilarProducts;
