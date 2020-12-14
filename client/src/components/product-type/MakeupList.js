import { useState, useEffect } from "react";
import MakeupService from "../../services/product";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

const MakeupList = (props) => {

  const {
    type,
    makeupType,
    params,
    path,
    makeup_type,
    productType,
    setMakeup_type,
    url,
  } = props;
 
 
  useEffect(() => {
    productType(type);
    
  },[type]);

 

  return (
    <>

{!makeup_type
        ? <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
        : makeup_type.map((type) => {
           if (params.slug === type.product_type) {
             console.log(type)
             return (
              <div key={type._id} className="parent">
                 <div
                  className="child"
                >
                <img
                  src={type.api_featured_image}
                  style={{ width: "10rem" }}
                  alt="api featured image"
                />
               
                  <h6>{type.name}</h6>
                 
                   <p>{type.description >= 10 ? "" : type.description}</p>
                  <p>{type.category}</p>

                  <p>{type.rating}</p>
                  <h4> {`£ ${type.price}`}</h4>
                </div>
                <div>
                  {/* {type.product_colors.map((colors) => {
                      return (
                        <p style={{ color: colors.hex_value }}>
                          {colors.hex_value}
                        </p>
                      );
                    })} */}
                </div>

              </div>
            );
           }
        })}
    </>
  );
};

export default MakeupList;

