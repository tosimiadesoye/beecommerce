import { useEffect } from "react";
import Spinner from 'react-bootstrap/Spinner';

const Shop = ({ product, makeupProduct }) => {
  useEffect(() => {
    makeupProduct();
  }, []);

  return (
    <div>
      {!product
        ? <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner> 
        : product.map((data) => {
          
            return (
              <div key={data._id} className="parent">
                 <div
                  className="child"
                >
                <img
                  src={data.api_featured_image}
                  style={{ width: "10rem" }}
                  alt="api featured image"
                />
               
                  <h6>{data.name}</h6>
                 
                   <p>{data.description >= 10 ? "" : data.description}</p>
                  <p>{data.category}</p>

                  <p>{data.rating}</p>
                  <h4> {`£ ${data.price}`}</h4>
                </div>
                <div>
                  {/* {data.product_colors.map((colors) => {
                      return (
                        <p style={{ color: colors.hex_value }}>
                          {colors.hex_value}
                        </p>
                      );
                    })} */}
                </div>
              </div>
            );
          })}
    </div>
  );
};

export default Shop;
