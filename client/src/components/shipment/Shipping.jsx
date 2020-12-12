import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Col } from "react-bootstrap";

const Shipping = () => {
  return (
    <form>
      <h1>Shipping method</h1>
      <p>Select the one you want</p>
      <input type="checkbox" />
      <p>Next day delivery</p>
      <p>£5.99</p>
      <input type="checkbox" />
      <p>Standard delivery</p>
      <p>£2.99</p>
      <input type="checkbox" />
      <p>Personal Pickup</p>
      <p>Free</p>
      <h1>Coupon code</h1>
      <p>Enter your cupon code</p>
      <input type="text" />
      <button>apply</button>
    </form>
  );
};
export default Shipping;
