import React from "react";

const Checkout = () => {
  if (localStorage.getItem("user") === null) {
    window.location.replace("/login");
  } else {
    return (
      <div className="text-center">
        <h1>Thank you for shopping with us!! your order is on it's way.</h1>
      </div>
    );
  }
};

export default Checkout;
