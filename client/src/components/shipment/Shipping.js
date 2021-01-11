import { useState } from "react";
import { shippingPrices } from "../../models/productArrays";
import { Link } from "react-router-dom";

const Shipping = ({ total, cart, removeAllProductsInStorage, redirect }) => {
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
  
  if (cart === null) return "";

  
  return (
    <>
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
                    required
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
          <button className="bg-gray-300 rounded h-10 m-5 w-20 hover:opacity-70">
            apply
          </button>
          <div>
            <h2>Total</h2>
            <h2>{`£${totalPlusShipping}`}</h2>
          </div>

          <div>
            <button
              className="text-white shadow  bg-black shadow border border-solid
               border-white hover:bg-pink hover:text-black
                active:bg-white-600 font-bold uppercase text-sm px-6 py-3
                 rounded outline-none focus:outline-none mr-1 mb-1"
              type="button"
              style={{ transition: "all .15s ease" }}
              onClick={() => {
                removeAllProductsInStorage();
                redirect();
              }}
            >
              Empty cart
            </button>{" "}
            <button
              className="text-white shadow  bg-black shadow border border-solid border-white 
              hover:bg-pink hover:text-black active:bg-white-600 font-bold uppercase
               text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1"
              type="button"
              style={{ transition: "all .15s ease" }}
              onClick={() => removeAllProductsInStorage()}
            >
              <Link className="text-white" to="/checkout">
                Check out
              </Link>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Shipping;
