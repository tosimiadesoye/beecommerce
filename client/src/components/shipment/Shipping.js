import { useState } from "react";
import { shippingPrices } from "../../models/productArrays";

const Shipping = ({ total }) => {
  const [totalPlusShipping, setTotalPlusShipping] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const AddTotalPlusShipping = (id) => {
    return shippingPrices.filter((item) => {
      if (item.id == id) {
        setTotalPlusShipping(item.price + parseFloat(total.addSubtotal));
      }
    });
  };
console.log(totalPlusShipping)
  return (
    <div className="flex flex-row">
      <form
        className="container border border-box box-2 "
        onSubmit={handleSubmit}
      >
        <h4>Shipping method</h4>
        <p>Select the one you want</p>
        <div>
          {shippingPrices &&
            shippingPrices.map((item) => (
              <div key={item.price}>
                <h2>{item.method}</h2>
                <input
                  type="checkbox"
                   className="form-checkbox"
                  onClick={() => AddTotalPlusShipping(item.id)}
                />
                <p>{item.price}</p>
              </div>
            ))}
        </div>

        <h2>Coupon code</h2>
        <p>Enter your coupon code</p>
        <input
          className="form-input mt-1 block w-full item-center"
          type="text"
        />
        <button>apply</button>
        <h2>
          total + shipping
          {totalPlusShipping}
        </h2>
      </form>
    </div>
  );
};
export default Shipping;
