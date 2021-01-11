import { useState } from "react";
import { shippingPrices } from "../../models/productArrays";

const Shipping = ({ total, cart }) => {
  const [totalPlusShipping, setTotalPlusShipping] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const AddTotalPlusShipping = (id) => {
    return shippingPrices.filter((item) => {
      if (item.id === id) {
        setTotalPlusShipping(item.price + parseFloat(total.addSubtotal));
      }
    });
  };
  console.log(cart);
  if (cart === null) return "";

  return (
    <div className="flex flex-row text-center">
      <form
        className="  container border border-box box-2 "
        onSubmit={handleSubmit}
      >
        <h1>Shipping method</h1>
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
                <p>{`£${item.price > 0 ? item.price : "0.00"}`}</p>
              </div>
            ))}
        </div>

        <h2>Coupon code</h2>

        <input
          placeholder="Enter your coupon code…"
          className="bg-gray-700 form-input p-3 mt-1 block w-full item-center"
          type="text"
        />
        <button className="bg-gray-300 rounded h-10 m-5 w-20 hover:opacity-70">apply</button>
        <div>
          <h2>Total</h2>
          <h2>{`£${totalPlusShipping}`}</h2>
        </div>
      </form>
    </div>
  );
};
export default Shipping;
