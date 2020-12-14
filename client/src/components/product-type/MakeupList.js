import { useState, useEffect } from "react";
import MakeupService from "../../services/product";
import CardColumns from "react-bootstrap/CardColumns";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";

const MakeupList = (props) => {
   console.log(props)
  const {
    makeupType,
    params,
    path,
    makeup_type,
    productType,
    setMakeup_type,
    url,
  } = props;
 
 
  useEffect(() => {
    productType();
    
  },[]);


  return (
    <>
        {!makeup_type
        ? <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
        : makeup_type.map((type) => {
          // if (params.slug === type.product_type) {
          //   console.log(type.product_type)
          // }
        })}   
    </>
  );
};

export default MakeupList;

