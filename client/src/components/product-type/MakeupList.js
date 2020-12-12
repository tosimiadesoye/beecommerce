import { useState, useEffect } from "react";
import MakeupService from "../../services/product";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import {
  Link,
  useRouteMatch,
  Switch,
  Route,
  useParams,
} from "react-router-dom";

const MakeupList = ({ productType, product_type, setProduct_type }) => {
  // { productType, product_type, setProduct_type }
  useEffect(() => {
    productType();
    // return () => {
    //   setProduct_type(product_type)
    // }
  }, []);
  let { id } = useParams();
  // return PEEPS.find(p => p.id === id);

  console.log(id);
  return (
    <>
      {!product_type ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
          product_type.find((item) => {
            if (item.product_type === item) {
              console.log(item)
              return item.map(type => {
                console.log(type)
                return (
                  <>
                  hi
                  </>
                )
              })
            }
          })
      )}
    </>
  );
};

export default MakeupList;
{
  /* {!product_type
        ?  <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner> 
        : product_type.map((items) => {
            return (
              <div>
                <CardColumns key={items._id}>
                  <Card>
                    <Card.Img
                      src={items.api_featured_image}
                      style={{ width: "10rem" }}
                      alt="api featured image"
                    />
                    <Card.Body>
                      <Card.Title>{items.product_type}</Card.Title>
                      <Card.Text>{items.description}</Card.Text>{" "}
                      <p>{items.category}</p>
                      <h6>{items.name}</h6>
                      <p>{items.rating}</p>
                      <h4> {`£ ${items.price}`}</h4>
                    </Card.Body>
                    <div>
                      {items.product_colors.map((colors) => {
                        console.log(colors);
                        return (
                          <p style={{ color: colors.hex_value }}>
                            {colors.hex_value}
                          </p>
                        );
                      })}
                    </div>
                  </Card>
                </CardColumns>
              </div>
            );
          })}  */
}
