import { useEffect } from "react";
import PropTypes from "prop-types";
import { ProductCard } from "../../components";

const ShopAllCardContainer = (props) => {
  const { product, makeupProduct } = props;

  useEffect(() => {
    makeupProduct();
  }, []); // eslint-disable-next-line react-hooks/exhaustive-deps

  return (
    <>
      {product && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-3">
          {product.map((data) => (
            <div key={data.id}>
              <ProductCard info={data} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

ShopAllCardContainer.propTypes = {
  product: PropTypes.array,
  makeupProduct: PropTypes.func,
};

export default ShopAllCardContainer;
