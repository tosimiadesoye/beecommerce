import { useEffect } from "react";
import PropTypes from "prop-types";
import ProductCard from "./ProductCard";

const ShopCardContainer = (props) => {
  const{ product, makeupProduct, addToCart } = props

  useEffect(() => {
    makeupProduct();
  }, []);

  return (
    <>
      {product && (
        <div  className="grid grid-cols-1 md:grid-cols-3 space-x-3" >
          {product.map((data) => (
            <div key={data.id}>
              <ProductCard info={data} addToCart={addToCart} />
            </div>
          ))}
        </div>
      )}
     
     
    </>
  );
};


 ShopCardContainer.propTypes = {
   product: PropTypes.array,
   makeupProduct: PropTypes.func,
   addToCart: PropTypes.func
 };

export default ShopCardContainer;
