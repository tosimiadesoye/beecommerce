import { useEffect } from "react";
import ProductCard from '../../pages/shop/ProductCard'
const MakeupList = (props) => {
  const { type, params, makeup_type, productType } = props;

  useEffect(() => {
    productType(type);
  }, [type]);
  return (
    <>
      {makeup_type && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-3">
          {makeup_type.map((type) => {
            if (params.slug === type.product_type) {
              return (
                <div key={type.id}>
                <ProductCard info={type} />
              </div>
              );
            }
          })}
        </div>
      )}
      
    </>
  );
};
export default MakeupList;
