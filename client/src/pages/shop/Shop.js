import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";

const Shop = ({ product, makeupProduct }) => {
  useEffect(() => {
    makeupProduct();
  }, []);

  return (
    <div>
      {!product
        ? ""
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
                  <p>{data.product_type}</p>
                  {/* <Card.Text>{data.description}</Card.Text>{" "} */}
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
